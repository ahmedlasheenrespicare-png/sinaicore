/**
 * SinaiCore — KTX2 texture authoring.
 *
 * Generates the detail maps the 3D scenes need most — woven PP fabric
 * (albedo + normal) and a cracked salt-crust relief normal — and compresses
 * them with Basis Universal into `.ktx2` files, so they arrive on the GPU
 * already compressed (ETC1S / UASTC) instead of as decoded PNGs.
 *
 * Everything is procedural: the source pixels are built here in JS, handed to
 * the encoder as raw RGBA, and never shipped as an intermediate image.
 *
 *   node scripts/build-textures.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { encodeToKTX2 } from 'ktx2-encoder'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUT = path.join(ROOT, 'public', 'tex')
fs.mkdirSync(OUT, { recursive: true })

/* ------------------------------------------------------------------ *
 * Small deterministic noise
 * ------------------------------------------------------------------ */
const hash = (x, y, s = 0) => {
  const v = Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453
  return v - Math.floor(v)
}
const smooth = (t) => t * t * (3 - 2 * t)
function valueNoise(x, y, s = 0) {
  const xi = Math.floor(x)
  const yi = Math.floor(y)
  const xf = smooth(x - xi)
  const yf = smooth(y - yi)
  const a = hash(xi, yi, s)
  const b = hash(xi + 1, yi, s)
  const c = hash(xi, yi + 1, s)
  const d = hash(xi + 1, yi + 1, s)
  return (a + (b - a) * xf) * (1 - yf) + (c + (d - c) * xf) * yf
}
function fbm(x, y, oct = 4, s = 0) {
  let v = 0
  let amp = 0.5
  let f = 1
  for (let i = 0; i < oct; i++) {
    v += valueNoise(x * f, y * f, s + i * 13) * amp
    f *= 2.03
    amp *= 0.5
  }
  return v
}

/* height field → tangent-space normal map bytes (periodic, so it tiles) */
function normalFromHeight(h, N, strength = 2.2) {
  const out = new Uint8ClampedArray(N * N * 4)
  const at = (x, y) => h[((y + N) % N) * N + ((x + N) % N)]
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength
      // three.js wants +Y up in tangent space: the image's y axis runs down
      const nx = -dx
      const ny = dy
      const nz = 1
      const len = Math.hypot(nx, ny, nz)
      const i = (y * N + x) * 4
      out[i] = ((nx / len) * 0.5 + 0.5) * 255
      out[i + 1] = ((ny / len) * 0.5 + 0.5) * 255
      out[i + 2] = ((nz / len) * 0.5 + 0.5) * 255
      out[i + 3] = 255
    }
  }
  return out
}

/* ------------------------------------------------------------------ *
 * Woven PP fabric — a plain weave of flat tapes, 8 px repeat
 * ------------------------------------------------------------------ */
function wovenAlbedo(N = 512) {
  const out = new Uint8ClampedArray(N * N * 4)
  const period = 16
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const u = (x % period) / period
      const v = (y % period) / period
      const warp = Math.floor(x / period) % 2 === 0
      // tape body with a rounded profile, then the over/under weave
      const across = warp ? Math.sin(v * Math.PI) : Math.sin(u * Math.PI)
      const along = warp ? Math.sin(u * Math.PI) : Math.sin(v * Math.PI)
      const over = warp ? u > 0.5 : u < 0.5
      let base = 0.955 + across * 0.03 + along * 0.012
      base -= over ? 0.0 : 0.035
      // fibre slubs running along the tape
      base += (hash(x, Math.floor(y / 3), 3) - 0.5) * 0.02
      base += (fbm(x / 90, y / 90, 3, 7) - 0.5) * 0.03
      const i = (y * N + x) * 4
      out[i] = base * 255
      out[i + 1] = base * 255
      out[i + 2] = (base - 0.006) * 252
      out[i + 3] = 255
    }
  }
  return out
}

function wovenHeight(N = 512) {
  const h = new Float32Array(N * N)
  const period = 16
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const u = (x % period) / period
      const v = (y % period) / period
      const warp = Math.floor(x / period) % 2 === 0
      const over = warp ? u > 0.5 : u < 0.5
      const profile = warp ? Math.sin(v * Math.PI) : Math.sin(u * Math.PI)
      h[y * N + x] = (over ? 0.7 : 0.35) + profile * 0.3 + (hash(x, y, 11) - 0.5) * 0.02
    }
  }
  return h
}

/* ------------------------------------------------------------------ *
 * Salt crust — cracked plates with rime ridges; tiles at 512
 * ------------------------------------------------------------------ */
function crustHeight(N = 512) {
  const h = new Float32Array(N * N)
  const S = 4 // crack cells across the tile
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const u = (x / N) * S
      const v = (y / N) * S
      // cell borders warp, so the cracks are not a grid
      const wu = u + (fbm(u * 1.7, v * 1.7, 3, 2) - 0.5) * 0.55
      const wv = v + (fbm(u * 1.7 + 9, v * 1.7 + 9, 3, 5) - 0.5) * 0.55
      const du = Math.abs(wu - Math.round(wu))
      const dv = Math.abs(wv - Math.round(wv))
      const edge = Math.min(du, dv)
      // ridge along the crack, raised plates in between
      const ridge = Math.exp(-Math.pow(edge / 0.055, 2)) * 0.55
      const plate = 0.45 + (0.5 - edge) * 0.28
      const grain = fbm(u * 26, v * 26, 3, 8) * 0.22
      h[y * N + x] = plate + ridge + grain
    }
  }
  return h
}

/* ------------------------------------------------------------------ *
 * Encode
 * ------------------------------------------------------------------ */
async function encode(name, data, N, opts = {}) {
  const bytes = await encodeToKTX2(new Uint8Array(N * N * 4), {
    imageDecoder: async () => ({ width: N, height: N, data: new Uint8ClampedArray(data) }),
    isUASTC: opts.encode?.isUASTC ?? true,
    isKTX2File: true,
    generateMipmap: true,
    needSupercompression: true,
    isYFlip: false,
    isNormalMap: !!opts.normal,
    isSetKTX2SRGBTransferFunc: !opts.normal,
    uastcLDRQualityLevel: opts.normal ? 3 : 2,
    ...opts.encode,
  })
  const file = path.join(OUT, `${name}.ktx2`)
  fs.writeFileSync(file, bytes)
  console.log(`  ${name}.ktx2  ${(bytes.byteLength / 1024).toFixed(1)} KB`)
}

console.log('SinaiCore — building KTX2 detail textures')
const NW = 512
await encode('woven', wovenAlbedo(NW), NW, { encode: { isUASTC: false, qualityLevel: 220 } })
await encode('woven_n', normalFromHeight(wovenHeight(NW), NW, 2.6), NW, { normal: true })
const NC = 512
await encode('crust_n', normalFromHeight(crustHeight(NC), NC, 3.2), NC, { normal: true })

// the transcoder is served locally too — no CDN at runtime
const basisSrc = path.join(ROOT, 'node_modules', 'three', 'examples', 'jsm', 'libs', 'basis')
const basisDst = path.join(ROOT, 'public', 'basis')
fs.mkdirSync(basisDst, { recursive: true })
for (const f of ['basis_transcoder.js', 'basis_transcoder.wasm']) {
  fs.copyFileSync(path.join(basisSrc, f), path.join(basisDst, f))
}
console.log('  public/basis/  transcoder copied')

/* ------------------------------------------------------------------ *
 * HDRI — a tiny equirect Radiance (RGBE) sky: sun, haze, brine floor.
 * Scene lighting comes from this, so reflections are physical.
 * ------------------------------------------------------------------ */
function writeRadiance(file, w, h, rgb) {
  const header = Buffer.from(
    `#?RADIANCE\nFORMAT=32-bit_rle_rgbe\n\n-Y ${h} +X ${w}\n`,
    'ascii',
  )
  const data = Buffer.alloc(w * h * 4)
  for (let i = 0; i < w * h; i++) {
    const r = rgb[i * 3]
    const g = rgb[i * 3 + 1]
    const b = rgb[i * 3 + 2]
    const m = Math.max(r, g, b)
    if (m < 1e-6) {
      data[i * 4] = data[i * 4 + 1] = data[i * 4 + 2] = data[i * 4 + 3] = 0
      continue
    }
    const e = Math.ceil(Math.log2(m))
    const s = Math.pow(2, -e) * 256
    data[i * 4] = Math.min(255, Math.floor(r * s))
    data[i * 4 + 1] = Math.min(255, Math.floor(g * s))
    data[i * 4 + 2] = Math.min(255, Math.floor(b * s))
    data[i * 4 + 3] = e + 128
  }
  fs.writeFileSync(file, Buffer.concat([header, data]))
}

function pansHDR(w = 640, h = 320) {
  const rgb = new Float32Array(w * h * 3)
  // sun placement, matching the scene's key light direction
  const sunDir = { x: -0.42, y: 0.30, z: -0.86 }
  const sl = Math.hypot(sunDir.x, sunDir.y, sunDir.z)
  const sun = { x: sunDir.x / sl, y: sunDir.y / sl, z: sunDir.z / sl }
  for (let y = 0; y < h; y++) {
    const theta = (y / (h - 1)) * Math.PI // 0 = zenith, PI = nadir
    const up = Math.cos(theta)
    for (let x = 0; x < w; x++) {
      const phi = (x / w) * Math.PI * 2
      const dx = Math.sin(theta) * Math.cos(phi)
      const dy = up
      const dz = Math.sin(theta) * Math.sin(phi)
      const i = (y * w + x) * 3
      let r
      let g
      let b
      if (dy >= 0) {
        // sky: deep blue up top → pale haze at the horizon
        const t = Math.pow(1 - dy, 3.2)
        r = 0.16 + 1.05 * t
        g = 0.38 + 0.92 * t
        b = 0.72 + 0.55 * t
      } else {
        // brine floor + salt crust: bright, slightly cool, warmer in the sun path
        const t = Math.pow(-dy, 0.6)
        r = 1.02 - t * 0.34
        g = 1.06 - t * 0.3
        b = 1.0 - t * 0.26
        // scattered light from the crust
        r += 0.30
        g += 0.34
        b += 0.36
      }
      // sun: tight disk + broad bloom
      const c = dx * sun.x + dy * sun.y + dz * sun.z
      const disk = Math.pow(Math.max(0, c), 900) * 260
      const bloom = Math.pow(Math.max(0, c), 12) * 2.4
      const haze = Math.pow(Math.max(0, c), 3) * 0.55
      r += disk * 1.0 + bloom * 0.95 + haze * 1.0
      g += disk * 0.94 + bloom * 0.86 + haze * 0.9
      b += disk * 0.80 + bloom * 0.66 + haze * 0.72
      // thin cloud bands, so reflections are not a flat gradient
      const cloud = fbm(dx * 3.4 + 4, dz * 3.4, 4, 21) * Math.max(0, dy) * 0.55
      r += cloud * 0.5
      g += cloud * 0.52
      b += cloud * 0.54
      rgb[i] = r
      rgb[i + 1] = g
      rgb[i + 2] = b
    }
  }
  return { w, h, rgb }
}

/* ------------------------------------------------------------------ *
 * Studio HDRI — the rack the product plates are lit with.
 *
 * A real product shoot is: a big soft key overhead-left, a close white
 * reflector filling the shadow side, a narrow strip light behind for the
 * edge, and a dark floor. Encoded as an equirect here so PMREM can
 * prefilter it — every plate then gets physical reflections, a clean
 * gradient in glossy surfaces and a believable shadow side, instead of
 * the flat canvas gradient it used before.
 * ------------------------------------------------------------------ */
function studioHDR(w = 512, h = 256) {
  const rgb = new Float32Array(w * h * 3)
  /* A product rig is not an even grey room. Clear and glossy subjects read
     only when the environment has contrast: big bright sources standing in
     a comparatively dark surround, the way photographers hang black flags
     around glass. So: soft boxes at 6–30, everything else between 0.03 and
     0.35, and a dark floor with a soft bounce. */
  const keys = [
    { az: -40, el: 56, r: 0.46, i: 34, tint: [1, 0.99, 0.97] }, // big key, high left
    { az: -40, el: 56, r: 1.25, i: 3.0, tint: [1, 0.99, 0.97] }, // its falloff
    { az: 78, el: 26, r: 0.55, i: 16, tint: [0.95, 0.98, 1] }, // white fill strip, right
    { az: 170, el: 40, r: 0.34, i: 22, tint: [1, 0.98, 0.94] }, // narrow rim behind
    { az: -128, el: 18, r: 0.5, i: 7, tint: [0.94, 0.97, 1] }, // kicker, back left
    { az: 8, el: 78, r: 0.5, i: 6, tint: [1, 1, 1] }, // toplight
  ]
  const rad = (d) => (d * Math.PI) / 180
  for (let y = 0; y < h; y++) {
    const theta = (y / (h - 1)) * Math.PI // 0 = up
    const dy = Math.cos(theta)
    for (let x = 0; x < w; x++) {
      const phi = (x / w) * Math.PI * 2
      const dx = Math.sin(theta) * Math.cos(phi)
      const dz = Math.sin(theta) * Math.sin(phi)
      const i = (y * w + x) * 3
      let r, g, b
      if (dy >= 0) {
        // the room's walls: dark, with a gentle gradient so reflections are
        // not a flat black
        const t = Math.pow(dy, 0.8)
        r = 0.10 + 0.16 * t
        g = 0.11 + 0.17 * t
        b = 0.13 + 0.19 * t
      } else {
        // floor: dark seamless sweep with a soft bounce near the horizon
        const t = Math.pow(-dy, 0.55)
        r = 0.26 - 0.21 * t
        g = 0.26 - 0.21 * t
        b = 0.27 - 0.215 * t
      }
      for (const k of keys) {
        const ka = rad(k.az)
        const ke = rad(k.el)
        const kx = Math.cos(ke) * Math.cos(ka)
        const ky = Math.sin(ke)
        const kz = Math.cos(ke) * Math.sin(ka)
        const c = Math.max(0, dx * kx + dy * ky + dz * kz)
        const spot = Math.pow(c, 2 / (k.r * k.r)) * k.i
        r += spot * k.tint[0]
        g += spot * k.tint[1]
        b += spot * k.tint[2]
      }
      // a warm floor bounce, so the shadow side keeps a gradient
      const bounce = Math.max(0, -dy) * 0.16
      rgb[i] = r + bounce
      rgb[i + 1] = g + bounce * 0.97
      rgb[i + 2] = b + bounce * 0.9
    }
  }
  return { w, h, rgb }
}

fs.mkdirSync(path.join(ROOT, 'public', 'hdr'), { recursive: true })
const sh = studioHDR()
writeRadiance(path.join(ROOT, 'public', 'hdr', 'studio.hdr'), sh.w, sh.h, sh.rgb)
console.log(`  studio.hdr  ${(fs.statSync(path.join(ROOT, 'public', 'hdr', 'studio.hdr')).size / 1024).toFixed(1)} KB`)

const hd = pansHDR()
writeRadiance(path.join(ROOT, 'public', 'hdr', 'pans.hdr'), hd.w, hd.h, hd.rgb)
console.log(`  pans.hdr  ${(fs.statSync(path.join(ROOT, 'public', 'hdr', 'pans.hdr')).size / 1024).toFixed(1)} KB`)
