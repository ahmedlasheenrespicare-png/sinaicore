/**
 * Builds the two surface maps used by the scene and compresses them to KTX2.
 *
 * Everything is generated from scratch (no external images), so the repository
 * stays tiny: a 512² salt-grain roughness map and a 512² woven-PP weave map.
 * Both are encoded with the Basis/UASTC encoder through ktx2-encoder, and the
 * uncompressed PNG twins are written for browsers without KTX2 support.
 *
 * The Basis transcoder is copied from three.js into public/basis so the
 * runtime never reaches a CDN and the same path works in dev and in prod.
 */
import { mkdir, copyFile, writeFile, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import zlib from 'node:zlib'
import { encodeToKTX2 } from 'ktx2-encoder'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'public', 'textures')
const basisDir = path.join(root, 'public', 'basis')
const basisSource = path.join(root, 'node_modules', 'three', 'examples', 'jsm', 'libs', 'basis')

await mkdir(outDir, { recursive: true })
await mkdir(basisDir, { recursive: true })
for (const file of ['basis_transcoder.js', 'basis_transcoder.wasm']) {
  await copyFile(path.join(basisSource, file), path.join(basisDir, file))
}

/* ------------------------------ tiny PNG writer --------------------------- */

const crcTable = (() => {
  const table = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[n] = c >>> 0
  }
  return table
})()

const crc32 = (buffer) => {
  let crc = 0xffffffff
  for (let i = 0; i < buffer.length; i++) crc = crcTable[(crc ^ buffer[i]) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

const chunk = (type, data) => {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length, 0)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body), 0)
  return Buffer.concat([length, body, crc])
}

/** RGB PNG from a raw RGBA buffer. */
function encodePng(data, width, height) {
  const raw = Buffer.alloc((width * 3 + 1) * height)
  let offset = 0
  for (let y = 0; y < height; y++) {
    raw[offset++] = 0
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4
      raw[offset++] = data[i]
      raw[offset++] = data[i + 1]
      raw[offset++] = data[i + 2]
    }
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8
  ihdr[9] = 2 // truecolour
  ihdr[10] = 0
  ihdr[11] = 0
  ihdr[12] = 0
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

/* ------------------------------ procedural noise -------------------------- */

const SIZE = 512

const hash = (x, y) => {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123
  return n - Math.floor(n)
}

/** Tileable value noise: lattice wraps at `period`. */
const valueNoise = (x, y, period) => {
  const xi = Math.floor(x)
  const yi = Math.floor(y)
  const xf = x - xi
  const yf = y - yi
  const u = xf * xf * (3 - 2 * xf)
  const v = yf * yf * (3 - 2 * yf)
  const wrap = (a) => ((a % period) + period) % period
  const a = hash(wrap(xi), wrap(yi))
  const b = hash(wrap(xi + 1), wrap(yi))
  const c = hash(wrap(xi), wrap(yi + 1))
  const d = hash(wrap(xi + 1), wrap(yi + 1))
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v
}

const fbm = (x, y, octaves, period) => {
  let value = 0
  let amplitude = 0.5
  let frequency = 1
  for (let i = 0; i < octaves; i++) {
    value += valueNoise(x * frequency, y * frequency, period * frequency) * amplitude
    amplitude *= 0.5
    frequency *= 2
  }
  return value
}

/** Halite: blocky micro-facets with a fine grain on top of them. */
function saltGrain() {
  const data = new Uint8Array(SIZE * SIZE * 4)
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const u = (x / SIZE) * 8
      const v = (y / SIZE) * 8
      const facets = Math.abs(fbm(u, v, 3, 8) - 0.5) * 2
      const grain = valueNoise((x / SIZE) * 220, (y / SIZE) * 220, 220)
      let value = 0.62 + facets * 0.26 + (grain - 0.5) * 0.22
      // a few pits so the roughness map is not perfectly uniform
      const pit = Math.sin(u * 17.3) * Math.cos(v * 13.7)
      if (pit > 0.93) value -= 0.18
      value = Math.min(1, Math.max(0, value))
      const byte = Math.round(value * 255)
      const i = (y * SIZE + x) * 4
      data[i] = byte
      data[i + 1] = byte
      data[i + 2] = byte
      data[i + 3] = 255
    }
  }
  return data
}

/** Woven polypropylene: crosshatch warp/weft with soft shadow in the gaps. */
function wovenWeave() {
  const data = new Uint8Array(SIZE * SIZE * 4)
  const threads = 46
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const u = (x / SIZE) * threads
      const v = (y / SIZE) * threads
      const warp = Math.abs(Math.sin(Math.PI * u))
      const weft = Math.abs(Math.sin(Math.PI * v))
      const over = Math.sin(Math.PI * (u + v)) > 0
      const thread = over ? Math.pow(warp, 0.6) : Math.pow(weft, 0.6)
      const fibre = valueNoise((x / SIZE) * 300, (y / SIZE) * 12, 300)
      let value = 0.55 + thread * 0.42 + (fibre - 0.5) * 0.16
      value = Math.min(1, Math.max(0, value))
      const byte = Math.round(value * 255)
      const i = (y * SIZE + x) * 4
      data[i] = byte
      data[i + 1] = byte
      data[i + 2] = byte
      data[i + 3] = 255
    }
  }
  return data
}


/** Woven-PP crumple: soft ridges and long folds encoded as a tangent-space
 *  normal map, so the sack's surface keeps its cloth relief under any light
 *  without paying for a denser mesh. Tiles seamlessly. */
function sackCrumple() {
  const height = new Float32Array(SIZE * SIZE)
  const tau = Math.PI * 2
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const u = x / SIZE
      const v = y / SIZE
      // long horizontal folds, gently waved so they never look ruled
      const fold = Math.sin(tau * (v * 3) + 0.9 * Math.sin(tau * u * 2)) * 0.5
      const fold2 = Math.sin(tau * (v * 7 + u * 1) + 1.7) * 0.18
      // soft vertical creases where the fabric was folded flat
      const crease = Math.pow(Math.abs(Math.sin(tau * u * 4 + 0.5 * Math.sin(tau * v * 3))), 0.7)
      // crumple detail
      const ridge = 1 - Math.abs(fbm(u * 6, v * 6, 4, 6) * 2 - 1)
      height[y * SIZE + x] = fold + fold2 + (0.55 - crease * 0.35) + ridge * 0.5
    }
  }
  const data = new Uint8Array(SIZE * SIZE * 4)
  const strength = 2.6
  const at = (x, y) => height[(((y % SIZE) + SIZE) % SIZE) * SIZE + (((x % SIZE) + SIZE) % SIZE)]
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength
      const len = Math.hypot(dx, dy, 1)
      const i = (y * SIZE + x) * 4
      data[i] = Math.round(((-dx / len) * 0.5 + 0.5) * 255)
      data[i + 1] = Math.round(((-dy / len) * 0.5 + 0.5) * 255)
      data[i + 2] = Math.round(((1 / len) * 0.5 + 0.5) * 255)
      data[i + 3] = 255
    }
  }
  return data
}

/* --------------------------------- encode --------------------------------- */

const targets = [
  { name: 'salt-detail', data: saltGrain(), isUASTC: false, mipmaps: true },
  { name: 'sack-weave', data: wovenWeave(), isUASTC: false, mipmaps: true },
  { name: 'sack-crumple', data: sackCrumple(), isUASTC: false, mipmaps: true, normal: true },
]

const report = []

for (const target of targets) {
  const png = encodePng(target.data, SIZE, SIZE)
  const pngPath = path.join(outDir, `${target.name}.png`)
  await writeFile(pngPath, png)

  const ktx2 = await encodeToKTX2(new Uint8Array([0]), {
    isKTX2File: true,
    isUASTC: target.isUASTC,
    generateMipmap: target.mipmaps,
    isPerceptual: false,
    isNormalMap: Boolean(target.normal),
    qualityLevel: 190,
    compressionLevel: 3,
    uastcLDRQualityLevel: 2,
    enableDebug: false,
    // In Node.js the source must be decoded for the encoder; we already hold
    // the pixels, so the decoder simply hands them back.
    imageDecoder: async () => ({
      width: SIZE,
      height: SIZE,
      data: target.data,
    }),
  })

  const ktx2Path = path.join(outDir, `${target.name}.ktx2`)
  await writeFile(ktx2Path, ktx2)
  const [pngInfo, ktx2Info] = await Promise.all([stat(pngPath), stat(ktx2Path)])
  report.push({ name: target.name, png: pngInfo.size, ktx2: ktx2Info.size })
}

for (const row of report) {
  console.log(
    `textures/${row.name}  png ${(row.png / 1024).toFixed(1)} kB  →  ktx2 ${(row.ktx2 / 1024).toFixed(1)} kB`,
  )
}
console.log('surface maps ready in public/textures/ (Basis transcoder in public/basis/)')
