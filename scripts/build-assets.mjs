/**
 * SinaiCore — parametric 3D asset authoring.
 *
 * Builds the four chapter models as geometry buffers, renders offline PNG
 * previews with a tiny software rasterizer (for art direction without a
 * browser), then writes Draco-compressed GLB files to public/models/.
 *
 *   node scripts/build-assets.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'
import * as THREE from 'three'
import { Document, NodeIO } from '@gltf-transform/core'
import { KHRDracoMeshCompression } from '@gltf-transform/extensions'
import draco3d from 'draco3d'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUT_MODELS = path.join(ROOT, 'public', 'models')
const OUT_PREVIEW = path.join(ROOT, '.preview')
fs.mkdirSync(OUT_MODELS, { recursive: true })
fs.mkdirSync(OUT_PREVIEW, { recursive: true })
fs.mkdirSync(path.join(ROOT, 'public', 'media'), { recursive: true })

/* ------------------------------------------------------------------ *
 * PNG writer
 * ------------------------------------------------------------------ */
const CRC_TABLE = (() => {
  const t = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[n] = c >>> 0
  }
  return t
})()

function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([len, body, crc])
}

function writePNG(file, w, h, rgb, colorType = 2) {
  const channels = colorType === 2 ? 3 : 4
  const stride = w * channels
  const raw = Buffer.alloc((stride + 1) * h)
  for (let y = 0; y < h; y++) {
    raw[y * (stride + 1)] = 0
    Buffer.from(rgb.buffer, rgb.byteOffset + y * stride, stride).copy(raw, y * (stride + 1) + 1)
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(w, 0)
  ihdr.writeUInt32BE(h, 4)
  ihdr[8] = 8
  ihdr[9] = colorType
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
  fs.writeFileSync(file, png)
  return png
}

/* ------------------------------------------------------------------ *
 * Geometry container: {positions, normals, uvs, indices}
 * ------------------------------------------------------------------ */
const G = () => ({ positions: [], normals: [], uvs: [], indices: [] })

function finalize(g) {
  return {
    positions: new Float32Array(g.positions),
    normals: new Float32Array(g.normals),
    uvs: new Float32Array(g.uvs.length ? g.uvs : new Array((g.positions.length / 3) * 2).fill(0)),
    indices: new Uint32Array(g.indices),
  }
}

function merge(target, src, matrix = null) {
  const base = target.positions.length / 3
  const v = new THREE.Vector3()
  const n = new THREE.Vector3()
  const nm = matrix ? new THREE.Matrix3().getNormalMatrix(matrix) : null
  for (let i = 0; i < src.positions.length; i += 3) {
    v.set(src.positions[i], src.positions[i + 1], src.positions[i + 2])
    n.set(src.normals[i], src.normals[i + 1], src.normals[i + 2])
    if (matrix) {
      v.applyMatrix4(matrix)
      n.applyMatrix3(nm).normalize()
    }
    target.positions.push(v.x, v.y, v.z)
    target.normals.push(n.x, n.y, n.z)
  }
  for (let i = 0; i < src.uvs.length; i++) target.uvs.push(src.uvs[i])
  for (let i = 0; i < src.indices.length; i++) target.indices.push(src.indices[i] + base)
  return target
}

/* flat-shade a triangle soup: recompute per-face normals */
function flatNormals(tris) {
  const g = G()
  for (let i = 0; i < tris.length; i += 3) {
    const a = tris[i], b = tris[i + 1], c = tris[i + 2]
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2]
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2]
    let nx = uy * vz - uz * vy
    let ny = uz * vx - ux * vz
    let nz = ux * vy - uy * vx
    const l = Math.hypot(nx, ny, nz) || 1
    nx /= l; ny /= l; nz /= l
    for (const p of [a, b, c]) {
      g.positions.push(p[0], p[1], p[2])
      g.normals.push(nx, ny, nz)
      g.uvs.push(0, 0)
    }
  }
  for (let i = 0; i < g.positions.length / 3; i++) g.indices.push(i)
  return g
}

/* deterministic value noise */
function hash3(x, y, z) {
  let h = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453123
  return h - Math.floor(h)
}
function vnoise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z)
  const xf = x - xi, yf = y - yi, zf = z - zi
  const s = (t) => t * t * (3 - 2 * t)
  const u = s(xf), v = s(yf), w = s(zf)
  const c = (i, j, k) => hash3(xi + i, yi + j, zi + k)
  const lerp = (a, b, t) => a + (b - a) * t
  return lerp(
    lerp(lerp(c(0, 0, 0), c(1, 0, 0), u), lerp(c(0, 1, 0), c(1, 1, 0), u), v),
    lerp(lerp(c(0, 0, 1), c(1, 0, 1), u), lerp(c(0, 1, 1), c(1, 1, 1), u), v),
    w,
  )
}

/* ------------------------------------------------------------------ *
 * 01 — Halite crystal (faceted, slightly irregular cube)
 * ------------------------------------------------------------------ */
function haliteCrystal({ sx = 1, sy = 1, sz = 1, sub = 2, chamfer = 0.12, rough = 0.018, seed = 3 } = {}) {
  const tris = []
  const faces = [
    { axis: 0, sign: 1 }, { axis: 0, sign: -1 },
    { axis: 1, sign: 1 }, { axis: 1, sign: -1 },
    { axis: 2, sign: 1 }, { axis: 2, sign: -1 },
  ]
  const shape = (p) => {
    // chamfer: pull toward the unit sphere so edges become narrow bevels
    const len = Math.hypot(p[0], p[1], p[2]) || 1
    const r = [p[0] / len, p[1] / len, p[2] / len]
    let q = [
      p[0] * (1 - chamfer) + r[0] * chamfer,
      p[1] * (1 - chamfer) + r[1] * chamfer,
      p[2] * (1 - chamfer) + r[2] * chamfer,
    ]
    // break perfection — position-driven so shared edges stay welded
    const nn = (vnoise(p[0] * 2.1 + seed * 7, p[1] * 2.1, p[2] * 2.1 - seed) - 0.5) * rough
    q = [q[0] + nn * q[0], q[1] + nn * q[1], q[2] + nn * q[2]]
    return [q[0] * sx, q[1] * sy, q[2] * sz]
  }
  for (const f of faces) {
    const [u, v] = f.axis === 0 ? [1, 2] : f.axis === 1 ? [0, 2] : [0, 1]
    const grid = []
    for (let i = 0; i <= sub; i++) {
      const row = []
      for (let j = 0; j <= sub; j++) {
        const p = [0, 0, 0]
        p[f.axis] = f.sign
        p[u] = (i / sub) * 2 - 1
        p[v] = (j / sub) * 2 - 1
        row.push(shape(p))
      }
      grid.push(row)
    }
    for (let i = 0; i < sub; i++) {
      for (let j = 0; j < sub; j++) {
        const a = grid[i][j], b = grid[i + 1][j], c = grid[i + 1][j + 1], d = grid[i][j + 1]
        const flip = f.sign < 0
        if (flip) tris.push(a, c, b, a, d, c)
        else tris.push(a, b, c, a, c, d)
      }
    }
  }
  return flatNormals(tris)
}

function crystalCluster() {
  /* A real halite specimen is a cluster of hopper-faced cubes, not spikes:
     cubes grow faster at the edges than in the middle, so each face sinks
     into a shallow stepped funnel. Build the cluster out of cubes of
     different sizes, sunk into a rough rock base, and give each cube that
     hopper relief — that is what catches the light and reads as salt. */
  const specs = [
    { s: [0.26, 0.30, 0.25], pos: [-0.03, 0.20, 0.02], rot: [0.05, 0.30, 0.03], seed: 3, hop: 0.115 },
    { s: [0.19, 0.23, 0.18], pos: [0.27, -0.02, 0.06], rot: [0.13, 0.92, 0.22], seed: 11, hop: 0.115 },
    { s: [0.21, 0.18, 0.19], pos: [-0.26, -0.05, 0.16], rot: [-0.08, 0.46, -0.18], seed: 23, hop: 0.115 },
    { s: [0.15, 0.19, 0.15], pos: [0.04, 0.02, -0.24], rot: [0.26, 0.16, 0.07], seed: 41, hop: 0.115 },
    { s: [0.12, 0.12, 0.13], pos: [-0.14, 0.30, -0.14], rot: [0.20, 0.62, 0.26], seed: 57, hop: 0.115 },
    { s: [0.10, 0.15, 0.10], pos: [0.24, 0.26, -0.10], rot: [-0.14, 1.22, 0.08], seed: 71, hop: 0.115 },
    { s: [0.09, 0.09, 0.10], pos: [-0.30, 0.20, -0.06], rot: [0.10, 0.80, -0.30], seed: 83, hop: 0.1 },
  ]
  const geo = G()
  for (const s of specs) {
    const cube = hopperCube({
      sx: s.s[0], sy: s.s[1], sz: s.s[2],
      seed: s.seed, hop: s.hop, round: 0.02, sub: 10,
    })
    const m = new THREE.Matrix4()
      .makeRotationFromEuler(new THREE.Euler(s.rot[0], s.rot[1], s.rot[2]))
      .setPosition(s.pos[0], s.pos[1], s.pos[2])
    merge(geo, cube, m)
  }
  // dark shale the crystals grew out of — a low, broken slab, not a bowl
  const rock = haliteCrystal({ sx: 0.52, sy: 0.10, sz: 0.46, sub: 7, chamfer: 0.36, rough: 0.30, seed: 91 })
  const rockGeo = G()
  merge(rockGeo, rock, new THREE.Matrix4().makeTranslation(0, -0.30, 0))
  return { crystal: finalize(geo), rock: finalize(rockGeo) }
}

/* A hopper-faced halite cube.
 *
 * Watertight by construction: every face is generated through the same
 * cube→sphere mapping (Marc Reynolds' watertight variant), then blended back
 * toward the cube by `round`, so neighbouring faces meet exactly on the
 * shared edge — no cracks, no spikes.
 *
 * On top of that, each face sinks into a shallow funnel toward its centre
 * (`hop`), zero at the rim and maximum in the middle. That is the stepped
 * "hopper" growth real halite shows when it crystallises from brine, and it
 * is what gives the surface something for the light to break across.
 */
function hopperCube({ sx = 1, sy = 1, sz = 1, seed = 1, hop = 0.1, round = 0.14, sub = 6 } = {}) {
  const faces = [
    { axis: 0, sign: 1 }, { axis: 0, sign: -1 },
    { axis: 1, sign: 1 }, { axis: 1, sign: -1 },
    { axis: 2, sign: 1 }, { axis: 2, sign: -1 },
  ]
  // watertight cube->sphere: no cracks along the shared edges
  const toSphere = (x, y, z) => {
    const x2 = x * x, y2 = y * y, z2 = z * z
    return [
      x * Math.sqrt(Math.max(0, 1 - y2 / 2 - z2 / 2 + (y2 * z2) / 3)),
      y * Math.sqrt(Math.max(0, 1 - z2 / 2 - x2 / 2 + (z2 * x2) / 3)),
      z * Math.sqrt(Math.max(0, 1 - x2 / 2 - y2 / 2 + (x2 * y2) / 3)),
    ]
  }
  const tris = []
  for (const f of faces) {
    const [u, v] = f.axis === 0 ? [1, 2] : f.axis === 1 ? [0, 2] : [0, 1]
    const grid = []
    for (let i = 0; i <= sub; i++) {
      const row = []
      for (let j = 0; j <= sub; j++) {
        const a = (i / sub) * 2 - 1
        const b = (j / sub) * 2 - 1
        // unit cube point on this face
        const c = [0, 0, 0]
        c[f.axis] = f.sign
        c[u] = a
        c[v] = b
        // round the silhouette: lerp cube → sphere, keeping the face flat
        const sp = toSphere(c[0], c[1], c[2])
        let p = [
          c[0] * (1 - round) + sp[0] * round,
          c[1] * (1 - round) + sp[1] * round,
          c[2] * (1 - round) + sp[2] * round,
        ]
        // hopper: sink toward the face centre, zero on the rim so the shared
        // edges stay welded
        const d = Math.max(Math.abs(a), Math.abs(b))
        /* Hopper relief: real halite from brine grows as a staircase —
           concentric terraces stepping down toward the face centre, with the
           outer rim standing proudest. Modelled as a stair of 4 steps inside
           the frame (d < EDGE) and a wide bevelled rim outside it, so the
           face is never a blank plane. */
        const EDGE = 0.72
        const inner = Math.min(1, d / EDGE)
        const steps = 3
        const t = 1 - inner
        const stair = (Math.floor(t * steps) + 0.5) / steps
        const rimF = Math.max(0, (d - EDGE) / (1 - EDGE))
        const n = vnoise(a * 3.4 + seed * 5.3, b * 3.4 - seed, f.axis * 3.1 + seed) - 0.5
        // depth: terraces down inside, then a hard chamfer up to the cube edge
        /* the terrace risers are what catch the key and draw the staircase;
           they need real depth or they vanish once flat-shaded */
        const sink = hop * (stair * 1.0 + rimF * 2.0) + n * 0.018
        p = [
          p[0] - sp[0] * sink,
          p[1] - sp[1] * sink,
          p[2] - sp[2] * sink,
        ]
        row.push([p[0] * sx, p[1] * sy, p[2] * sz])
      }
      grid.push(row)
    }
    for (let i = 0; i < sub; i++) {
      for (let j = 0; j < sub; j++) {
        const a = grid[i][j], b = grid[i + 1][j], c = grid[i + 1][j + 1], d = grid[i][j + 1]
        const flip = f.sign < 0
        if (flip) tris.push(a, c, b, a, d, c)
        else tris.push(a, b, c, a, c, d)
      }
    }
  }
  return flatNormals(tris)
}

/* ------------------------------------------------------------------ *
 * 02 — Water softening tablets (bevelled disc, grooved face)
 * ------------------------------------------------------------------ */
function revolved(profile, segments = 96) {
  // Indexed lathe: shared ring vertices -> smooth, machined-looking shading.
  const rings = []
  const uv = []
  for (const [r, y] of profile) {
    const ring = []
    for (let s = 0; s < segments; s++) {
      const a = (s / segments) * Math.PI * 2
      ring.push([Math.cos(a) * r, y, Math.sin(a) * r])
    }
    rings.push(ring)
    const row = []
    for (let s = 0; s < segments; s++) row.push([s / segments, y])
    uv.push(row)
  }
  const g = G()
  for (let i = 0; i < rings.length; i++) {
    for (let s = 0; s < segments; s++) {
      g.positions.push(...rings[i][s])
      g.uvs.push(...uv[i][s])
    }
  }
  const at = (i, s) => i * segments + (s % segments)
  for (let i = 0; i < rings.length - 1; i++) {
    for (let s = 0; s < segments; s++) {
      const a = at(i, s), b = at(i, s + 1), c = at(i + 1, s + 1), d = at(i + 1, s)
      g.indices.push(a, c, b, a, d, c)
    }
  }
  // weld the two axis vertices (r ~ 0) so caps shade cleanly
  const geom = new THREE.BufferGeometry()
  geom.setAttribute('position', new THREE.Float32BufferAttribute(g.positions, 3))
  geom.setIndex(g.indices)
  geom.computeVertexNormals()
  g.normals = Array.from(geom.getAttribute('normal').array)
  return finalize(g)
}

function tablet({ r = 0.5, h = 0.26, groove = true } = {}) {
  const bevel = h * 0.16
  const prof = [
    [0, -h / 2],
    [r * 0.72, -h / 2],
    [r * 0.93, -h / 2 + bevel * 0.45],
    [r, -h / 2 + bevel * 1.4],
    [r, h / 2 - bevel * 1.4],
    [r * 0.93, h / 2 - bevel * 0.45],
    [r * 0.74, h / 2],
    groove ? [r * 0.7, h / 2] : [0, h / 2],
    groove ? [r * 0.7, h / 2 - h * 0.06] : [0, h / 2],
    groove ? [r * 0.46, h / 2 - h * 0.06] : [0, h / 2],
    groove ? [r * 0.43, h / 2 - h * 0.02] : [0, h / 2],
    [0, h / 2 - h * 0.02],
  ]
  return revolved(prof, 72)
}

/* ------------------------------------------------------------------ *
 * 03 — FIBC jumbo bag, 1 MT
 * ------------------------------------------------------------------ */
let BAG = { a: 0.66, b: 0.66, h: 1.62, exp: 5 }
/* current profile mode, shared by the body and the label projection */
let CUR_STRAIGHT = false
let CUR_PILLOW = false
const BAG_JUMBO = { a: 0.66, b: 0.66, h: 1.62, exp: 5 }
/* 50 kg export sack: narrower, taller aspect, same superellipse family */
const BAG_50KG = { a: 0.315, b: 0.195, h: 0.96, exp: 4.4 }

function superellipse(t, a, b, n) {
  const c = Math.cos(t), s = Math.sin(t)
  const p = 2 / n
  return [a * Math.sign(c) * Math.abs(c) ** p, b * Math.sign(s) * Math.abs(s) ** p]
}

function bagBody(opts = {}) {
  const { capTop = false, straight = false, pillow = false } = opts
  CUR_STRAIGHT = straight
  CUR_PILLOW = pillow
  const RINGS = 34
  const SEG = 96
  const tris = []
  const uvRows = []
  const rows = []
  const uvCoords = []
  for (let i = 0; i <= RINGS; i++) {
    const v = i / RINGS
    const y = -BAG.h / 2 + v * BAG.h
    // bulge + pleats, and gather towards the top spout
    // a filled 50 kg sack pillows out and rounds over just under the seam
    const gather = CUR_STRAIGHT ? 1 : v > 0.86 ? 1 - ((v - 0.86) / 0.14) ** 1.6 * 0.72 : 1
    const pillow = CUR_PILLOW ? 1 + 0.06 * Math.sin(Math.PI * Math.min(1, v * 1.02)) - 0.06 * Math.max(0, v - 0.84) ** 1.25 : 1
    const bulge = CUR_STRAIGHT ? pillow : (1 + 0.055 * Math.sin(Math.PI * Math.min(1, v * 1.06)) - 0.03 * Math.max(0, v - 0.8)) * pillow
    const pleat = CUR_STRAIGHT ? 0 : 0.012 * Math.sin(v * Math.PI * 5.5)
    const row = []
    const uvRow = []
    for (let s = 0; s <= SEG; s++) {
      const t = (s / SEG) * Math.PI * 2
      const [x, z] = superellipse(t, BAG.a, BAG.b, BAG.exp)
      const k = (bulge + pleat) * gather
      // soft vertical creasing near the four corners
      const crease = 1 - 0.02 * Math.cos(t * 4) ** 2
      row.push([x * k * crease, y, z * k * crease])
      uvRow.push([(s / SEG) * 6, v * 7])
    }
    rows.push(row)
    uvRows.push(uvRow)
  }
  for (let i = 0; i < RINGS; i++) {
    for (let s = 0; s < SEG; s++) {
      const a = rows[i][s], b = rows[i][s + 1], c = rows[i + 1][s + 1], d = rows[i + 1][s]
      tris.push(a, b, c, a, c, d)
      uvCoords.push(uvRows[i][s], uvRows[i][s + 1], uvRows[i + 1][s + 1], uvRows[i][s], uvRows[i + 1][s + 1], uvRows[i + 1][s])
    }
  }
  /* caps: fans built from the actual rim rings so the skin and the lid
     always share their boundary (no gap, no floating ring).
     Both windings are emitted with flat per-face normals, so the lid reads
     solid from outside and inside alike. */
  const capTris = []
  const capNorm = []
  const capFan = (ring, y, ny) => {
    let cx = 0, cz = 0
    for (const p of ring) { cx += p[0]; cz += p[2] }
    cx /= ring.length; cz /= ring.length
    for (let s = 0; s < ring.length - 1; s++) {
      const p0 = ring[s], p1 = ring[s + 1]
      const e = y + ny * 0.0004
      capTris.push(
        [cx, e, cz], [p1[0], e, p1[2]], [p0[0], e, p0[2]],
        [cx, e, cz], [p0[0], e, p0[2]], [p1[0], e, p1[2]],
      )
      for (let k = 0; k < 6; k++) capNorm.push(0, ny, 0)
    }
  }
  capFan(rows[0], -BAG.h / 2, -1)
  if (capTop) capFan(rows[RINGS], BAG.h / 2, 1)

  const g = G()
  for (let i = 0; i < tris.length; i++) {
    const p = tris[i]
    g.positions.push(p[0], p[1], p[2])
    const uv = uvCoords[i] || [0, 0]
    g.uvs.push(uv[0], uv[1])
  }
  // smooth normals for the fabric
  const count = g.positions.length / 3
  const idx = Array.from({ length: count }, (_, i) => i)
  const geom = new THREE.BufferGeometry()
  geom.setAttribute('position', new THREE.Float32BufferAttribute(g.positions, 3))
  geom.setIndex(idx)
  geom.computeVertexNormals()
  g.normals = Array.from(geom.getAttribute('normal').array)
  g.indices = idx
  const caps = G()
  for (const t of capTris) caps.positions.push(...t)
  caps.uvs = new Array((caps.positions.length / 3) * 2).fill(0)
  caps.normals = capNorm
  caps.indices = Array.from({ length: caps.positions.length / 3 }, (_, i) => i)
  return { ...finalize(g), caps: finalize(caps) }
}

function tube(points, radius, segments = 8, closed = false) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)), closed)
  const geo = new THREE.TubeGeometry(curve, Math.max(24, points.length * 10), radius, segments, closed)
  const pos = geo.getAttribute('position').array
  const idx = geo.getIndex().array
  const g = G()
  g.positions = Array.from(pos)
  const geom = new THREE.BufferGeometry()
  geom.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  geom.setIndex(Array.from(idx))
  geom.computeVertexNormals()
  g.normals = Array.from(geom.getAttribute('normal').array)
  g.uvs = new Array((pos.length / 3) * 2).fill(0)
  g.indices = Array.from(idx)
  return g
}

/* polar point on the bag skin at angle a (rad), slightly outside the fabric */
function skinPoint(a, y, k = 1.0) {
  const [x, z] = superellipse(a, BAG.a, BAG.b, BAG.exp)
  return [x * k, y, z * k]
}

function sphereTris(center, r, seg = 12, rings = 8) {
  const tris = []
  const pt = (i, j) => {
    const phi = (j / rings) * Math.PI
    const theta = (i / seg) * Math.PI * 2
    return [
      center[0] + r * Math.sin(phi) * Math.cos(theta),
      center[1] + r * Math.cos(phi),
      center[2] + r * Math.sin(phi) * Math.sin(theta),
    ]
  }
  for (let j = 0; j < rings; j++) {
    for (let i = 0; i < seg; i++) {
      const a = pt(i, j), b = pt(i + 1, j), c = pt(i + 1, j + 1), d = pt(i, j + 1)
      tris.push(a, b, c, a, c, d)
    }
  }
  return tris
}

function bag(CFG = BAG_JUMBO, opts = {}) {
  const { withLoops = true, withSpouts = true } = opts
  BAG = CFG
  const body = bagBody(opts)
  const top = BAG.h / 2
  const bottom = -BAG.h / 2

  /* four corner lift loops — U straps standing on the top edge */
  const loops = G()
  if (withLoops) for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4
    const spread = CFG.a > 0.5 ? 0.2 : 0.16
    const pts = [
      skinPoint(a - spread, top - CFG.h * 0.3, 1.012),
      skinPoint(a - spread, top - 0.06, 1.02),
      skinPoint(a - spread * 0.72, top + CFG.h * 0.1, 1.03),
      skinPoint(a, top + CFG.h * 0.19, 0.99),
      skinPoint(a + spread * 0.72, top + CFG.h * 0.1, 1.03),
      skinPoint(a + spread, top - 0.06, 1.02),
      skinPoint(a + spread, top - CFG.h * 0.3, 1.012),
    ]
    merge(loops, tube(pts, CFG.a * 0.05, 7))
    for (const end of [pts[0], pts[pts.length - 1]]) {
      const cap = finalize(flatNormals(sphereTris(end, CFG.a * 0.05)))
      merge(loops, cap)
    }
  }

  /* top fill spout: collar + short neck */
  const sr = CFG.a / 0.66
  const spout = revolved([
    [0, top + 0.01 * sr], [0.15 * sr, top + 0.06 * sr], [0.145 * sr, top + 0.2 * sr], [0.16 * sr, top + 0.245 * sr],
    [0.158 * sr, top + 0.29 * sr], [0.135 * sr, top + 0.29 * sr], [0.132 * sr, top + 0.24 * sr], [0.115 * sr, top + 0.2 * sr],
    [0.11 * sr, top + 0.08 * sr], [0, top + 0.075 * sr],
  ], 48)

  /* bottom discharge spout */
  const discharge = revolved([
    [0, bottom - 0.01 * sr], [0.13 * sr, bottom - 0.06 * sr], [0.125 * sr, bottom - 0.16 * sr], [0.14 * sr, bottom - 0.2 * sr],
    [0.138 * sr, bottom - 0.24 * sr], [0.115 * sr, bottom - 0.24 * sr], [0.112 * sr, bottom - 0.2 * sr], [0.098 * sr, bottom - 0.16 * sr],
    [0.095 * sr, bottom - 0.07 * sr], [0, bottom - 0.065 * sr],
  ], 48)
  if (withSpouts) {
    merge(loops, spout)
    merge(loops, discharge)
  }

  /* sewn webbing: top and bottom hems plus four vertical corner straps */
  const seams = G()
  for (const y of withLoops ? [top - CFG.h * 0.046, bottom + CFG.h * 0.046] : []) {
    const ring = []
    for (let s = 0; s <= 64; s++) {
      const a = (s / 64) * Math.PI * 2
      ring.push(skinPoint(a, y, 1.006))
    }
    merge(seams, tube(ring, CFG.a * 0.025, 5))
  }
  if (withLoops) for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4
    const col = []
    for (let s = 0; s <= 10; s++) {
      const v = s / 10
      col.push(skinPoint(a, bottom + CFG.h * 0.06 + v * (CFG.h * 0.88), 1.006))
    }
    merge(seams, tube(col, CFG.a * 0.03, 6))
  }

  /* printed brand panel, raycast onto the fabric so it hugs the bulge */
  const panel = G()
  const py = 0.02, ph = CFG.h * 0.185, pw = CFG.a * 0.5, NU = 16, NV = 14
  const ray = new THREE.Raycaster()
  const surfZ = (x, y) => {
    const v = (y + BAG.h / 2) / BAG.h
    // a filled 50 kg sack pillows out and rounds over just under the seam
    const gather = CUR_STRAIGHT ? 1 : v > 0.86 ? 1 - ((v - 0.86) / 0.14) ** 1.6 * 0.72 : 1
    const pillow = CUR_PILLOW ? 1 + 0.06 * Math.sin(Math.PI * Math.min(1, v * 1.02)) - 0.06 * Math.max(0, v - 0.84) ** 1.25 : 1
    const bulge = CUR_STRAIGHT ? pillow : (1 + 0.055 * Math.sin(Math.PI * Math.min(1, v * 1.06)) - 0.03 * Math.max(0, v - 0.8)) * pillow
    const pleat = CUR_STRAIGHT ? 0 : 0.012 * Math.sin(v * Math.PI * 5.5)
    const k = (bulge + pleat) * gather
    // solve superellipse for z given x
    const n = BAG.exp, p = 2 / n
    const ax = Math.abs(x / (BAG.a * k))
    if (ax >= 1) return 0
    return BAG.b * k * Math.pow(1 - Math.pow(ax, n), p)
  }
  const grid = []
  for (let i = 0; i <= NU; i++) {
    const row = []
    for (let j = 0; j <= NV; j++) {
      const u = i / NU, v = j / NV
      const x = -pw + u * pw * 2
      const y = py - ph + v * ph * 2
      row.push([x, y, surfZ(x, y) + 0.004])
    }
    grid.push(row)
  }
  for (let i = 0; i < NU; i++) {
    for (let j = 0; j < NV; j++) {
      const a = grid[i][j], b = grid[i + 1][j], c = grid[i + 1][j + 1], d = grid[i][j + 1]
      panel.positions.push(...a, ...b, ...c, ...a, ...c, ...d)
      const uvA = [i / NU, j / NV], uvB = [(i + 1) / NU, j / NV]
      const uvC = [(i + 1) / NU, (j + 1) / NV], uvD = [i / NU, (j + 1) / NV]
      panel.uvs.push(...uvA, ...uvB, ...uvC, ...uvA, ...uvC, ...uvD)
    }
  }
  panel.indices = Array.from({ length: panel.positions.length / 3 }, (_, i) => i)
  panel.normals = []
  for (let i = 0; i < panel.positions.length; i += 9) {
    const p0 = new THREE.Vector3(panel.positions[i], panel.positions[i + 1], panel.positions[i + 2])
    const p1 = new THREE.Vector3(panel.positions[i + 3], panel.positions[i + 4], panel.positions[i + 5])
    const p2 = new THREE.Vector3(panel.positions[i + 6], panel.positions[i + 7], panel.positions[i + 8])
    const n = new THREE.Vector3().subVectors(p1, p0).cross(new THREE.Vector3().subVectors(p2, p0)).normalize()
    for (let k = 0; k < 3; k++) panel.normals.push(n.x, n.y, n.z)
  }

  return { body, caps: body.caps, hardware: finalize(loops), seams: finalize(seams), panel: finalize(panel) }
}

/* ------------------------------------------------------------------ *
 * 03b — 25/50 kg tablets sack: the pillow-shaped white PP bag from the
 *       product photography (soft rounds, crimped flute seal at the mouth)
 * ------------------------------------------------------------------ */
/* A filled 50 kg PP sack is much boxier than a cushion: soft shoulders, a
   broad flat base it actually stands on, nearly parallel sides, and a flat
   front panel where the print goes. `exp` drives how square the section is —
   the reference photo's bag is a rounded rectangle, not an ellipse. */
const PILLOW = { a: 0.40, b: 0.15, h: 0.92, exp: 6.0 }

/* lateral scale at height fraction v (0 = base, 1 = mouth).
   Broad base, straight flanks, then a shoulder under the crimped mouth. */
const pillowK = (v) => {
  // the base: a filled bag spreads and settles, so the widest point is low
  /* the settled foot: a soft outward roll over the bottom ~15%, not a flare */
  const base = 0.94 + 0.1 * Math.pow(Math.min(1, Math.max(0, (0.16 - v) / 0.16)), 1.6)
  // the shoulder: fabric gathers into the mouth over the top fifth
  const shoulder = v > 0.78 ? 1 - Math.pow((v - 0.78) / 0.22, 1.9) * 0.62 : 1
  // a gentle waist where the fill settles mid-bag, so the silhouette breathes
  const waist = 1 - 0.035 * Math.exp(-Math.pow((v - 0.55) / 0.18, 2))
  return Math.max(0.2, base * shoulder * waist)
}

function pillowSack() {
  const { a, b, h, exp } = PILLOW
  const RINGS = 40
  const SEG = 96
  const V0 = 0.028
  const V1 = 0.985
  const rows = []
  for (let i = 0; i <= RINGS; i++) {
    const t = i / RINGS
    const v = V0 + (V1 - V0) * t
    const k = pillowK(v)
    const y = -h / 2 + v * h
    const row = []
    for (let s = 0; s <= SEG; s++) {
      const th = (s / SEG) * Math.PI * 2
      const [x, z] = superellipse(th, a * k, b * k, exp)
      // faint vertical seam channels, like the stitched side seams in the photo
      const seam = 1 - 0.03 * Math.max(0, Math.cos(th * 2)) ** 8
      row.push([x * seam, y, z * seam])
    }
    rows.push(row)
  }
  const tris = []
  for (let i = 0; i < RINGS; i++) {
    for (let s = 0; s < SEG; s++) {
      const p = rows[i][s], q = rows[i][s + 1], r = rows[i + 1][s + 1], u = rows[i + 1][s]
      // outward winding: down the ring, then up the next one
      tris.push(p, r, q, p, u, r)
    }
  }
  // lids: fans over the first and last ring, wound both ways
  const capTris = []
  const capNorm = []
  const capFan = (ring, ny) => {
    let cx = 0, cz = 0, cy = 0
    for (const p of ring) { cx += p[0]; cy += p[1]; cz += p[2] }
    cx /= ring.length; cy /= ring.length; cz /= ring.length
    for (let s = 0; s < ring.length - 1; s++) {
      const p0 = ring[s], p1 = ring[s + 1]
      capTris.push([cx, cy, cz], [p1[0], p1[1], p1[2]], [p0[0], p0[1], p0[2]])
      capTris.push([cx, cy, cz], [p0[0], p0[1], p0[2]], [p1[0], p1[1], p1[2]])
      for (let k = 0; k < 6; k++) capNorm.push(0, ny, 0)
    }
  }
  capFan(rows[0], -1)
  capFan(rows[RINGS], 1)

  const body = (() => {
    const g = G()
    for (const t of tris) {
      g.positions.push(...t)
      g.uvs.push(t[0] * 1.4, t[1] * 1.4)
    }
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.Float32BufferAttribute(g.positions, 3))
    geom.setIndex(Array.from({ length: g.positions.length / 3 }, (_, i) => i))
    geom.computeVertexNormals()
    g.normals = Array.from(geom.getAttribute('normal').array)
    g.indices = Array.from({ length: g.positions.length / 3 }, (_, i) => i)
    return { ...finalize(g), caps: finalize((() => {
      const cp = G()
      for (const t of capTris) cp.positions.push(...t)
      cp.uvs = new Array((cp.positions.length / 3) * 2).fill(0)
      cp.normals = capNorm
      cp.indices = Array.from({ length: cp.positions.length / 3 }, (_, i) => i)
      return cp
    })()) }
  })()

  /* crimped head seal: an accordion of pleats across the mouth, plus the
     heat-sealed lip that holds them, exactly as on the shipped bag */
  const crimp = G()
  const topY = -h / 2 + V1 * h
  const kTop = pillowK(V1)
  const zf = b * kTop * 0.62
  const H = 0.062          // pleat height
  const N = 26             // pleat count
  const x0 = -a * kTop * 0.96
  const span = a * kTop * 1.92
  const zAt = (i) => (i % 2 === 0 ? zf : zf * 0.55)
  for (const face of [1, -1]) {
    for (let i = 0; i < N; i++) {
      const xa = x0 + (i / N) * span
      const xb = x0 + ((i + 1) / N) * span
      const za = zAt(i) * face
      const zb = zAt(i + 1) * face
      // the pleat wall, leaning back as it rises
      merge(crimp, flatNormals(
        face > 0
          ? [
              [xa, topY, za], [xb, topY, zb], [xb, topY + H, zb * 0.62],
              [xa, topY, za], [xb, topY + H, zb * 0.62], [xa, topY + H, za * 0.62],
            ]
          : [
              [xa, topY, za], [xb, topY + H, zb * 0.62], [xb, topY, zb],
              [xa, topY, za], [xa, topY + H, za * 0.62], [xb, topY + H, zb * 0.62],
            ],
      ))
    }
  }
  // close both ends of the crimp so it reads as a sealed band, not a fin
  for (const face of [1, -1]) {
    const xe = face * a * kTop * 0.96
    merge(crimp, flatNormals(
      face > 0
        ? [
            [xe, topY, zf], [xe, topY, zf * 0.55], [xe, topY + H, zf * 0.62],
            [xe, topY, zf], [xe, topY + H, zf * 0.62], [xe, topY + H, zf * 0.34],
          ]
        : [
            [xe, topY, zf], [xe, topY + H, zf * 0.62], [xe, topY, zf * 0.55],
            [xe, topY, zf], [xe, topY + H, zf * 0.34], [xe, topY + H, zf * 0.62],
          ],
    ))
  }

  // the sealed lip: a band a little outside the mouth, front and back
  for (const face of [1, -1]) {
    merge(crimp, flatNormals(
      face > 0
        ? [
            [-a * kTop * 0.99, topY - 0.016, zf * 1.05], [a * kTop * 0.99, topY - 0.016, zf * 1.05], [a * kTop * 0.99, topY + 0.008, zf * 1.02],
            [-a * kTop * 0.99, topY - 0.016, zf * 1.05], [a * kTop * 0.99, topY + 0.008, zf * 1.02], [-a * kTop * 0.99, topY + 0.008, zf * 1.02],
          ]
        : [
            [-a * kTop * 0.99, topY - 0.016, zf * 1.05], [a * kTop * 0.99, topY + 0.008, zf * 1.02], [a * kTop * 0.99, topY - 0.016, zf * 1.05],
            [-a * kTop * 0.99, topY - 0.016, zf * 1.05], [-a * kTop * 0.99, topY + 0.008, zf * 1.02], [a * kTop * 0.99, topY + 0.008, zf * 1.02],
          ],
    ))
  }
  // the roll that sits under the crimp, like the bag's stitched collar
  const collar = []
  for (let s2 = 0; s2 <= 72; s2++) {
    const th = (s2 / 72) * Math.PI * 2
    const [cx, cz] = superellipse(th, a * kTop * 0.985, b * kTop * 0.985, exp)
    collar.push([cx, topY - 0.012, cz])
  }
  merge(crimp, tube(collar, 0.008, 6))

  /* print panel projected onto the pillow face */
  const surfZ = (x, y) => {
    const v = (y + h / 2) / h
    const k = pillowK(Math.min(0.999, Math.max(0.001, v)))
    const ax = Math.abs(x / (a * k))
    if (ax >= 1) return 0
    return b * k * Math.pow(1 - Math.pow(ax, exp), 2 / exp)
  }
  const panel = G()
  /* The reference print covers the whole front panel — mountain-and-crystal
     mark, wordmark, descriptor, four assurance badges, then the weight. A
     small stamp in the middle of a big white bag is the giveaway that this is
     a model, so the panel runs nearly edge to edge. */
  const py = 0.0, ph = 0.325, pw = a * 0.82, NU = 22, NV = 26
  const grid = []
  for (let i = 0; i <= NU; i++) {
    const row = []
    for (let j = 0; j <= NV; j++) {
      const x = -pw + (i / NU) * pw * 2
      const y = py - ph + (j / NV) * ph * 2
      row.push([x, y, surfZ(x, y) + 0.003])
    }
    grid.push(row)
  }
  for (let i = 0; i < NU; i++) {
    for (let j = 0; j < NV; j++) {
      const p0 = grid[i][j], p1 = grid[i + 1][j], p2 = grid[i + 1][j + 1], p3 = grid[i][j + 1]
      panel.positions.push(...p0, ...p1, ...p2, ...p0, ...p2, ...p3)
      const u0 = i / NU
      const u1 = (i + 1) / NU
      const v0 = j / NV
      const v1 = (j + 1) / NV
      panel.uvs.push(u0, v0, u1, v0, u1, v1, u0, v0, u1, v1, u0, v1)
    }
  }
  panel.indices = Array.from({ length: panel.positions.length / 3 }, (_, i) => i)
  panel.normals = []
  for (let i = 0; i < panel.positions.length; i += 9) {
    const p0 = new THREE.Vector3(panel.positions[i], panel.positions[i + 1], panel.positions[i + 2])
    const p1 = new THREE.Vector3(panel.positions[i + 3], panel.positions[i + 4], panel.positions[i + 5])
    const p2 = new THREE.Vector3(panel.positions[i + 6], panel.positions[i + 7], panel.positions[i + 8])
    const n = new THREE.Vector3().subVectors(p1, p0).cross(new THREE.Vector3().subVectors(p2, p0)).normalize()
    for (let k2 = 0; k2 < 3; k2++) panel.normals.push(n.x, n.y, n.z)
  }

  return {
    body,
    caps: body.caps,
    crimp: finalize(crimp),
    panel: finalize(panel),
  }
}

/* ------------------------------------------------------------------ *
 * 05 — Laboratory sample jar with a quality seal
 * ------------------------------------------------------------------ */
function sampleJar({ r = 0.3, h = 0.62 } = {}) {
  /* glass body: straight cylinder with a rounded shoulder (lathe) */
  const glass = revolved([
    [0, -h / 2],
    [r * 0.92, -h / 2],
    [r, -h / 2 + 0.03],
    [r, h / 2 - 0.13],
    [r * 0.97, h / 2 - 0.07],
    [r * 0.88, h / 2 - 0.035],
    [r * 0.72, h / 2 - 0.02],
    [r * 0.7, h / 2],
    [0, h / 2],
  ], 72)

  /* salt fill: a slightly smaller cylinder of granules */
  const fill = revolved([
    [0, -h / 2 + 0.012],
    [r * 0.9, -h / 2 + 0.012],
    [r * 0.9, h * 0.16],
    [r * 0.86, h * 0.21],
    [0, h * 0.24],
  ], 64)

  /* screw cap with ribs */
  const cap = revolved([
    [0, h / 2 - 0.005],
    [r * 0.74, h / 2],
    [r * 0.76, h / 2 + 0.06],
    [r * 0.7, h / 2 + 0.1],
    [r * 0.5, h / 2 + 0.108],
    [0, h / 2 + 0.11],
  ], 64)

  const ribs = G()
  const RIB = 24
  for (let i = 0; i < RIB; i++) {
    const a = (i / RIB) * Math.PI * 2
    const x0 = Math.cos(a) * r * 0.75
    const z0 = Math.sin(a) * r * 0.75
    const x1 = Math.cos(a) * r * 0.785
    const z1 = Math.sin(a) * r * 0.785
    merge(ribs, flatNormals([
      [x0, h / 2 + 0.008, z0], [x1, h / 2 + 0.008, z1], [x1, h / 2 + 0.06, z1],
      [x0, h / 2 + 0.008, z0], [x1, h / 2 + 0.06, z1], [x0, h / 2 + 0.06, z0],
    ]))
  }

  /* the tamper seal band around the neck */
  const seal = revolved([
    [r * 0.73, h / 2 + 0.002],
    [r * 0.8, h / 2 + 0.01],
    [r * 0.8, h / 2 + 0.05],
    [r * 0.73, h / 2 + 0.058],
  ], 64)

  /* label band on the jar */
  /* label wrap: 0..1 around the jar so the printed artwork maps 1:1 */
  const label = revolved([
    [r * 1.004, -h * 0.3],
    [r * 1.004, h * 0.1],
  ], 72)
  const y0 = -h * 0.3
  const y1 = h * 0.1
  for (let i = 0; i < label.uvs.length; i += 2) {
    label.uvs[i + 1] = 1 - (label.uvs[i + 1] - y0) / (y1 - y0)
  }

  return { glass: finalize(glass), fill: finalize(fill), cap: finalize(cap), ribs: finalize(ribs), seal: finalize(seal), label: finalize(label) }
}

/* ------------------------------------------------------------------ *
 * Alt cut — 20ft shipping container (doors hinged on separate nodes)
 * ------------------------------------------------------------------ */
/* mirror a finalized part across x, fixing winding and normals */
function mirrorX(geo) {
  const positions = new Float32Array(geo.positions)
  const normals = new Float32Array(geo.normals)
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = -positions[i]
    normals[i] = -normals[i]
  }
  const indices = new Uint32Array(geo.indices.length)
  for (let i = 0; i < geo.indices.length; i += 3) {
    indices[i] = geo.indices[i]
    indices[i + 1] = geo.indices[i + 2]
    indices[i + 2] = geo.indices[i + 1]
  }
  return { positions, normals, uvs: new Float32Array(geo.uvs), indices }
}

/* flatNormals takes one flat sequence of points: these helpers collect
   triangles as [p,p,p] then flatten once. */
function flatTris(tris) {
  const out = []
  for (const t of tris) out.push(t[0], t[1], t[2])
  return flatNormals(out)
}

function slab(tris, pts, n) {
  // quad -> two triangles, normal given, so the box reads as machined steel
  const [a, b, c, d] = pts
  tris.push([a, b, c], [a, c, d])
  void n
}

function boxSolid(box, { skip = [] } = {}) {
  const { x0, x1, y0, y1, z0, z1 } = box
  const tris = []
  if (!skip.includes('front')) slab(tris, [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]])
  if (!skip.includes('back')) slab(tris, [[x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0]])
  if (!skip.includes('left')) slab(tris, [[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]])
  if (!skip.includes('right')) slab(tris, [[x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1]])
  if (!skip.includes('bottom')) slab(tris, [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]])
  if (!skip.includes('top')) slab(tris, [[x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0]])
  return flatTris(tris)
}

/* corrugated side sheet: a proper trapezoidal rib profile, like real container
   sheet steel — flat land, sloped shoulder, flat rib crown */
function corrugated({ x0, x1, y0, y1, z, ribs = 9, depth = 0.02, outward = 1 }) {
  const tris = []
  const span = x1 - x0
  const pitch = span / ribs
  const prof = (t) => {
    // t in 0..1 across one pitch: 0..0.22 land, .22..0.38 rise, .38..0.62 crown, .62..0.78 fall
    if (t < 0.22) return 0
    if (t < 0.38) return (t - 0.22) / 0.16
    if (t < 0.62) return 1
    if (t < 0.78) return 1 - (t - 0.62) / 0.16
    return 0
  }
  const steps = 16
  const zz = (d) => z + outward * d * depth
  for (let i = 0; i < ribs; i++) {
    for (let k = 0; k < steps; k++) {
      const ta = k / steps
      const tb = (k + 1) / steps
      const xa = x0 + i * pitch + ta * pitch
      const xb = x0 + i * pitch + tb * pitch
      const da = prof(ta)
      const db = prof(tb)
      if (Math.abs(xb - xa) < 1e-6) continue
      tris.push([
        [xa, y0, zz(da)], [xb, y0, zz(db)], [xb, y1, zz(db)],
      ], [
        [xa, y0, zz(da)], [xb, y1, zz(db)], [xa, y1, zz(da)],
      ])
    }
  }
  return flatTris(tris)
}

function shippingContainer({ L = 6.06, W = 2.44, H = 2.59 } = {}) {
  const hx = L / 2, hz = W / 2
  const t = 0.055 // sheet thickness

  /* frame: corner posts + rails + top/bottom side rails, the dark steel */
  const frame = G()
  const post = 0.16
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    merge(frame, boxSolid({ x0: sx * hx - post / 2, x1: sx * hx + post / 2, y0: 0, y1: H, z0: sz * hz - post / 2, z1: sz * hz + post / 2 }))
  }
  for (const sy of [0.08, H - 0.14]) {
    for (const sz of [-1, 1]) {
      merge(frame, boxSolid({ x0: -hx, x1: hx, y0: sy, y1: sy + 0.14, z0: sz * hz - 0.05, z1: sz * hz + 0.05 }))
    }
  }
  for (const sx of [-1, 1]) {
    merge(frame, boxSolid({ x0: sx * hx - 0.05, x1: sx * hx + 0.05, y0: H - 0.14, z1: hz, z0: -hz, y1: H }))
  }

  /* corrugated sides and roof */
  const sides = G()
  merge(sides, corrugated({ x0: -hx + post, x1: hx - post, y0: 0.2, y1: H - 0.16, z: hz - t / 2, ribs: 11, depth: 0.022, outward: 1 }))
  merge(sides, corrugated({ x0: -hx + post, x1: hx - post, y0: 0.2, y1: H - 0.16, z: -hz + t / 2, ribs: 11, depth: 0.022, outward: -1 }))
  // roof: a sheet with shallow ribs across it
  merge(sides, boxSolid({ x0: -hx + post, x1: hx - post, y0: H - t, y1: H, z0: -hz + post, z1: hz - post }))
  for (let i = 0; i < 9; i++) {
    const xa = -hx + post + (i + 0.5) * ((2 * hx - 2 * post) / 9)
    merge(sides, boxSolid({ x0: xa - 0.035, x1: xa + 0.035, y0: H, y1: H + 0.02, z0: -hz + post, z1: hz - post }))
  }
  // the far door end stays closed: a flat steel wall
  merge(sides, boxSolid({ x0: -hx + 0.03, x1: -hx + 0.07, y0: 0.18, y1: H - 0.14, z0: -hz + post, z1: hz - post }))

  /* floor: dark planking */
  const floor = G()
  merge(floor, boxSolid({ x0: -hx + 0.04, x1: hx - 0.04, y0: 0.1, y1: 0.19, z0: -hz + 0.05, z1: hz - 0.05 }))

  /* door leaves, hinged at the two outer edges of the opening */
  /* door leaves live in hinge-local space: hinge at the origin, leaf along +z,
     so the app can swing them open/closed at runtime */
  /* one leaf shape: hinge at the origin (z=0), panel along +z */
  const doorLeaf = () => {
    const g = G()
    const z0 = 0.02
    const z1 = W / 2 - 0.04
    merge(g, boxSolid({ x0: -0.04, x1: 0.03, y0: 0.16, y1: H - 0.14, z0, z1 }))
    // corrugation ridges on the door face
    for (let i = 0; i < 5; i++) {
      const zz = z0 + (i + 0.5) * ((z1 - z0) / 5)
      merge(g, boxSolid({ x0: 0.03, x1: 0.05, y0: 0.14, y1: H - 0.28, z0: zz - 0.02, z1: zz + 0.02 }))
    }
    // locking bars with their shoes
    for (const f of [0.26, 0.72]) {
      const zz = z0 + f * (z1 - z0)
      merge(g, boxSolid({ x0: 0.05, x1: 0.08, y0: 0.06, y1: H - 0.2, z0: zz - 0.022, z1: zz + 0.022 }))
      for (const yy of [0.2, H - 0.34]) {
        merge(g, boxSolid({ x0: 0.08, x1: 0.105, y0: yy, y1: yy + 0.09, z0: zz - 0.055, z1: zz + 0.055 }))
      }
    }
    return g
  }

  /* exterior brand print, one flat panel per side */
  const plates = G()
  const ph = H * 0.34
  const py = 0.34
  for (const sz of [-1, 1]) {
    const z = sz * (hz + 0.001)
    const w = L * 0.34
    plates.positions.push(-w, py, z, w, py, z, w, py + ph, z, -w, py, z, w, py + ph, z, -w, py + ph, z)
    for (let i = 0; i < 6; i++) plates.normals.push(0, 0, sz)
    plates.uvs.push(0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1)
  }
  plates.indices = Array.from({ length: plates.positions.length / 3 }, (_, i) => i)

  return {
    frame: finalize(frame),
    sides: finalize(sides),
    floor: finalize(floor),
    doorA: finalize(doorLeaf()),
    doorB: finalize(doorLeaf()),
    plate: finalize(plates),
    dims: { L, W, H },
  }
}

/* ------------------------------------------------------------------ *
 * Alt cut — small container ship for the loading shot
 * ------------------------------------------------------------------ */
function cargoShip({ L = 26, W = 5.2, D = 2.7 } = {}) {
  /* lofted hull: rectangular-ish sections that taper to the bow and rise at
     the stern, capped at both ends so it reads solid from any angle */
  const N = 14 // stations along the length
  const M = 12 // points per section ring
  const station = (i) => {
    const t = i / N // 0 = stern, 1 = bow
    const x = -L / 2 + t * L
    // width: full through the body, tapering over the fore quarter
    const taper = t < 0.78 ? 1 : Math.cos(((t - 0.78) / 0.22) * (Math.PI / 2)) ** 0.7
    const hw = (W / 2) * taper
    // sheer: the deck rises slightly at both ends
    const lift = 0.22 * Math.max(0, t - 0.82) / 0.18 + 0.16 * Math.max(0, 0.1 - t) / 0.1
    const depth = D * (t > 0.9 ? 0.55 + 0.45 * taper : 1)
    return { x, hw, depth, lift }
  }
  const ring = (st) => {
    const { x, hw, depth, lift } = st
    const pts = []
    // half-ring from the keel up the side to the deck edge and back over
    const prof = [
      [-hw * 0.62, depth * 0.06],
      [-hw * 0.94, depth * 0.3],
      [-hw, depth * 0.62],
      [-hw * 0.985, depth * 0.95],
      [-hw * 0.9, depth + lift],
      [0, depth + lift + 0.05],
      [hw * 0.9, depth + lift],
      [hw * 0.985, depth * 0.95],
      [hw, depth * 0.62],
      [hw * 0.94, depth * 0.3],
      [hw * 0.62, depth * 0.06],
      [0, 0],
    ]
    // keel below the waterline, deck above it: origin sits at the waterline
    const yShift = depth * 0.38
    for (let k = 0; k < M; k++) {
      const [z, y] = prof[k]
      pts.push([x, y - yShift, z])
    }
    return pts
  }

  const tris = []
  const rings = []
  for (let i = 0; i <= N; i++) rings.push(ring(station(i)))
  for (let i = 0; i < N; i++) {
    const A = rings[i]
    const B = rings[i + 1]
    for (let k = 0; k < M; k++) {
      const k2 = (k + 1) % M
      tris.push([A[k], B[k2], B[k]], [A[k], A[k2], B[k2]])
    }
  }
  // caps
  for (let k = 0; k < M; k++) {
    const k2 = (k + 1) % M
    tris.push([rings[0][k], [rings[0][0][0], 0, 0], rings[0][k2]])
    const b = rings[N]
    tris.push([b[k2], [b[0][0], 0, 0], b[k]])
  }
  const hull = flatTris(tris)

  /* deck plating, bridge block, funnel, and three bays of boxes */
  const st = station(Math.round(N * 0.5))
  const deckY = st.depth + st.lift - st.depth * 0.38
  const white = G()
  merge(white, boxSolid({ x0: -L * 0.44, x1: -L * 0.3, y0: deckY, y1: deckY + 1.5, z0: -W * 0.3, z1: W * 0.3 }))
  merge(white, boxSolid({ x0: -L * 0.42, x1: -L * 0.32, y0: deckY + 1.5, y1: deckY + 2.3, z0: -W * 0.24, z1: W * 0.24 }))
  merge(white, boxSolid({ x0: -L * 0.38, x1: -L * 0.34, y0: deckY + 2.3, y1: deckY + 3.1, z0: -W * 0.09, z1: W * 0.09 }))

  const stacks = G()
  const cw = 2.0, cl = 4.2, ch = 1.5
  let bay = 0
  for (let x = -L * 0.14; x < L * 0.46; x += cl + 0.3) {
    bay++
    const cols = bay > 5 ? 2 : 3
    for (let r = 0; r < cols; r++) {
      const cz = (r - (cols - 1) / 2) * cw * 1.08
      const levels = r === 1 ? 2 : 1
      for (let l = 0; l < levels; l++) {
        merge(stacks, boxSolid({
          x0: x - cl / 2, x1: x + cl / 2 - 0.1,
          y0: deckY + l * ch, y1: deckY + (l + 1) * ch - 0.08,
          z0: cz - cw / 2, z1: cz + cw / 2,
        }))
      }
    }
  }

  return { hull: finalize(hull), white: finalize(white), stacks: finalize(stacks), deckY }
}

/* ------------------------------------------------------------------ *
 * 04 — Globe with land ribbons
 * ------------------------------------------------------------------ */
const worldRings = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'data', 'worldOutline.json'), 'utf8')).landRings

function latLonToVec(lon, lat, r = 1) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return [-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta)]
}

function globe({ radius = 1, width = 0.0075 } = {}) {
  const bodyGeo = new THREE.SphereGeometry(radius, 96, 64)
  const g = G()
  g.positions = Array.from(bodyGeo.getAttribute('position').array)
  g.normals = Array.from(bodyGeo.getAttribute('normal').array)
  g.uvs = Array.from(bodyGeo.getAttribute('uv').array)
  g.indices = Array.from(bodyGeo.getIndex().array)
  const body = finalize(g)

  const tris = []
  const R = radius * 1.0015
  for (const ring of worldRings) {
    const pts = []
    for (let i = 0; i < ring.length; i += 2) pts.push([ring[i], ring[i + 1]])
    if (pts.length < 3) continue
    for (let i = 0; i < pts.length - 1; i++) {
      const [lon0, lat0] = pts[i]
      const [lon1, lat1] = pts[i + 1]
      if (Math.abs(lon1 - lon0) > 90) continue // antimeridian seam
      const p0 = new THREE.Vector3(...latLonToVec(lon0, lat0, R))
      const p1 = new THREE.Vector3(...latLonToVec(lon1, lat1, R))
      const t = new THREE.Vector3().subVectors(p1, p0).normalize()
      const offs = []
      for (const p of [p0, p1]) {
        const bin = new THREE.Vector3().crossVectors(p, t).normalize().multiplyScalar(width)
        offs.push([p.clone().add(bin), p.clone().sub(bin)])
      }
      const [a1, a2] = offs[0]
      const [b1, b2] = offs[1]
      const proj = (v) => v.clone().setLength(R + 0.0008)
      const quad = [proj(a1), proj(b1), proj(b2), proj(a2)]
      const mid = p0.clone().add(p1).normalize()
      // consistent, non-degenerate order: outward-facing for the whole ribbon
      const t1 = quad[0], t2 = quad[1], t3 = quad[2], t4 = quad[3]
      const nrm = new THREE.Vector3()
        .subVectors(t2, t1)
        .cross(new THREE.Vector3().subVectors(t3, t1))
      if (nrm.dot(mid) >= 0) {
        tris.push(t1.toArray(), t2.toArray(), t3.toArray())
        tris.push(t1.toArray(), t3.toArray(), t4.toArray())
      } else {
        tris.push(t1.toArray(), t3.toArray(), t2.toArray())
        tris.push(t1.toArray(), t4.toArray(), t3.toArray())
      }
    }
  }
  return { body, land: finalize(flatNormals(tris)) }
}

/* ------------------------------------------------------------------ *
 * Software rasterizer (preview only)
 * ------------------------------------------------------------------ */
function renderPreview(file, meshes, opts = {}) {
  const W = opts.w || 720, H = opts.h || 720
  const SS = 2 // supersample factor
  const SW = W * SS, SH = H * SS
  const eye = new THREE.Vector3(...(opts.eye || [2.5, 1.5, 2.9]))
  const target = new THREE.Vector3(...(opts.target || [0, 0, 0]))
  const fov = opts.fov || 34
  const bg = opts.bg || [7, 11, 13]
  const cam = new THREE.PerspectiveCamera(fov, W / H, 0.05, 100)
  cam.position.copy(eye)
  cam.lookAt(target)
  cam.updateMatrixWorld()
  const viewProj = new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse)
  const camPos = eye.clone()

  const rgb = new Float32Array(SW * SH * 3)
  const zbuf = new Float32Array(SW * SH).fill(Infinity)
  for (let y = 0; y < SH; y++) {
    for (let x = 0; x < SW; x++) {
      const o = (y * SW + x) * 3
      // soft vignette backdrop
      const dx = (x / SW - 0.5) * 2, dy = (y / SH - 0.5) * 2
      const vig = 1 - 0.55 * Math.min(1, Math.sqrt(dx * dx + dy * dy) * 0.9)
      rgb[o] = bg[0] * vig
      rgb[o + 1] = bg[1] * vig
      rgb[o + 2] = bg[2] * vig
    }
  }
  const L1 = new THREE.Vector3(-0.5, 0.78, 0.42).normalize()
  const L2 = new THREE.Vector3(0.75, 0.12, 0.55).normalize()
  const L3 = new THREE.Vector3(0.1, -0.6, -0.7).normalize()
  const v0 = new THREE.Vector3()

  for (const m of meshes) {
    const { geo, color, metal = 0, rough = 0.4, opacity = 1 } = m
    const pos = geo.positions, idx = geo.indices, nor = geo.normals
    const p = []
    const v4 = new THREE.Vector4()
    for (let i = 0; i < pos.length; i += 3) {
      v4.set(pos[i], pos[i + 1], pos[i + 2], 1).applyMatrix4(viewProj)
      const w = v4.w || 1e-6
      p.push([(v4.x / w * 0.5 + 0.5) * SW, (-v4.y / w * 0.5 + 0.5) * SH, v4.z / w, w])
    }
    for (let t = 0; t < idx.length; t += 3) {
      const ia = idx[t], ib = idx[t + 1], ic = idx[t + 2]
      const A = p[ia], B = p[ib], C = p[ic]
      const wA = A[3], wB = B[3], wC = C[3]
      if (wA <= 0.001 || wB <= 0.001 || wC <= 0.001) continue
      const area = (B[0] - A[0]) * (C[1] - A[1]) - (C[0] - A[0]) * (B[1] - A[1])
      if (area >= -1e-9) continue
      const n = new THREE.Vector3(nor[ia * 3], nor[ia * 3 + 1], nor[ia * 3 + 2]).normalize()
      const wn = new THREE.Vector3(pos[ia * 3], pos[ia * 3 + 1], pos[ia * 3 + 2])
      const vdir = camPos.clone().sub(wn).normalize()
      const diff = Math.max(0, n.dot(L1))
      const diff2 = Math.max(0, n.dot(L2))
      const diff3 = Math.max(0, n.dot(L3)) * 0.35
      const half = vdir.clone().add(L1).normalize()
      const spec = Math.pow(Math.max(0, n.dot(half)), 6 + 90 * (1 - rough)) * (1 - rough * 0.65)
      const fres = Math.pow(1 - Math.max(0, n.dot(vdir)), 3) * 0.55
      const amb = 0.2 + 0.16 * n.y
      const shade = amb + diff * 0.72 + diff2 * 0.2 + diff3
      const col = [
        Math.min(255, color[0] * (shade + metal * 0.4) + spec * 190 + fres * 120),
        Math.min(255, color[1] * (shade + metal * 0.4) + spec * 200 + fres * 120),
        Math.min(255, color[2] * (shade + metal * 0.4) + spec * 210 + fres * 120),
      ]
      const minX = Math.max(0, Math.floor(Math.min(A[0], B[0], C[0])))
      const maxX = Math.min(SW - 1, Math.ceil(Math.max(A[0], B[0], C[0])))
      const minY = Math.max(0, Math.floor(Math.min(A[1], B[1], C[1])))
      const maxY = Math.min(SH - 1, Math.ceil(Math.max(A[1], B[1], C[1])))
      const inv = 1 / area
      for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
          const px = x + 0.5, py = y + 0.5
          const w0 = ((B[0] - px) * (C[1] - py) - (C[0] - px) * (B[1] - py)) * inv
          const w1 = ((C[0] - px) * (A[1] - py) - (A[0] - px) * (C[1] - py)) * inv
          const w2 = 1 - w0 - w1
          if (w0 < 0 || w1 < 0 || w2 < 0) continue
          // perspective-correct view depth: interpolate 1/w
          const iw = w0 / wA + w1 / wB + w2 / wC
          const depth = 1 / iw
          const o = y * SW + x
          if (depth >= zbuf[o]) continue
          zbuf[o] = depth
          rgb[o * 3] = rgb[o * 3] * (1 - opacity) + col[0] * opacity
          rgb[o * 3 + 1] = rgb[o * 3 + 1] * (1 - opacity) + col[1] * opacity
          rgb[o * 3 + 2] = rgb[o * 3 + 2] * (1 - opacity) + col[2] * opacity
        }
      }
    }
  }
  // downscale (box filter) => antialiased
  const out = new Uint8Array(W * H * 3)
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let r = 0, g = 0, b = 0
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const o = ((y * SS + sy) * SW + (x * SS + sx)) * 3
          r += rgb[o]; g += rgb[o + 1]; b += rgb[o + 2]
        }
      }
      const n = SS * SS
      const o = (y * W + x) * 3
      out[o] = Math.min(255, r / n)
      out[o + 1] = Math.min(255, g / n)
      out[o + 2] = Math.min(255, b / n)
    }
  }
  writePNG(file, W, H, out, 2)
  console.log('  preview ->', path.relative(ROOT, file))
}

/* ------------------------------------------------------------------ *
 * Woven weave normal map for the FIBC fabric
 * ------------------------------------------------------------------ */
function weaveNormalMap(size = 256) {
  const rgb = new Uint8Array(size * size * 3)
  const k = 14
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = (x / size) * Math.PI * 2 * k
      const v = (y / size) * Math.PI * 2 * k
      const nx = Math.cos(u) * 0.34 * Math.cos(v) ** 2
      const ny = Math.cos(v) * 0.34 * Math.cos(u) ** 2
      const nz = Math.sqrt(Math.max(0.001, 1 - nx * nx - ny * ny))
      const o = (y * size + x) * 3
      rgb[o] = Math.round((nx * 0.5 + 0.5) * 255)
      rgb[o + 1] = Math.round((ny * 0.5 + 0.5) * 255)
      rgb[o + 2] = Math.round((nz * 0.5 + 0.5) * 255)
    }
  }
  return writePNG(path.join(OUT_PREVIEW, 'weave-normal.png'), size, size, rgb, 2)
}

/* ------------------------------------------------------------------ *
 * GLB writer
 * ------------------------------------------------------------------ */
async function writeGLB(file, parts, anchors = []) {
  const doc = new Document()
  const buffer = doc.createBuffer()
  const scene = doc.createScene('Scene')
  doc.getRoot().setDefaultScene(scene)

  for (const part of parts) {
    const geo = part.geo
    const prim = doc.createPrimitive()
    prim.setAttribute('POSITION', doc.createAccessor(`${part.name}_POSITION`).setType('VEC3').setArray(geo.positions).setBuffer(buffer))
    prim.setAttribute('NORMAL', doc.createAccessor(`${part.name}_NORMAL`).setType('VEC3').setArray(geo.normals).setBuffer(buffer))
    prim.setAttribute('TEXCOORD_0', doc.createAccessor(`${part.name}_UV`).setType('VEC2').setArray(geo.uvs).setBuffer(buffer))
    prim.setIndices(doc.createAccessor(`${part.name}_INDEX`).setType('SCALAR').setArray(geo.indices).setBuffer(buffer))
    const mat = doc.createMaterial(part.material.name)
      .setBaseColorFactor([...part.material.color, part.material.opacity ?? 1])
      .setRoughnessFactor(part.material.roughness ?? 0.5)
      .setMetallicFactor(part.material.metallic ?? 0)
      .setDoubleSided(!!part.material.doubleSided)
    if (part.material.opacity !== undefined && part.material.opacity < 1) {
      mat.setAlphaMode('BLEND')
    }
    if (part.material.normalTexture) {
      const tex = doc.createTexture(`${part.name}_NORMAL`)
        .setImage(part.material.normalTexture)
        .setMimeType('image/png')
      mat.setNormalTexture(tex)
      mat.setNormalScale(part.material.normalScale ?? 1)
    }
    prim.setMaterial(mat)
    const mesh = doc.createMesh(part.name).addPrimitive(prim)
    const node = doc.createNode(part.name).setMesh(mesh)
    if (part.position) node.setTranslation(part.position)
    scene.addChild(node)
  }

  for (const a of anchors) {
    const node = doc.createNode(a.name)
    if (a.position) node.setTranslation(a.position)
    if (a.rotation) node.setRotation(a.rotation)
    scene.addChild(node)
  }

  doc.createExtension(KHRDracoMeshCompression).setRequired(true)
  const io = new NodeIO().registerExtensions([KHRDracoMeshCompression]).registerDependencies({
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })
  await io.write(path.join(OUT_MODELS, file), doc)
  const size = fs.statSync(path.join(OUT_MODELS, file)).size
  console.log(`  ${file}  ${(size / 1024).toFixed(1)} KB`)
}

/* ------------------------------------------------------------------ *
 * Build
 * ------------------------------------------------------------------ */
console.log('SinaiCore — building 3D assets')

/* 01 crystal */
{
  const { crystal, rock } = crystalCluster()
  renderPreview(path.join(OUT_PREVIEW, '01-crystal.png'), [
    { geo: rock, color: [58, 48, 40] },
    { geo: crystal, color: [206, 236, 232], opacity: 0.86 },
  ], { eye: [2.5, 1.6, 2.9], target: [0, 0.05, 0], fov: 32 })
  await writeGLB('crystal.glb', [
    { name: 'halite_cluster', geo: crystal, material: { name: 'halite', color: [0.93, 0.98, 0.97], roughness: 0.06, metallic: 0 } },
    { name: 'host_rock', geo: rock, material: { name: 'sinai_rock', color: [0.2, 0.17, 0.14], roughness: 0.92 } },
  ])
}

/* 02 tablets */
{
  const t = tablet({ r: 0.5, h: 0.26 })
  const geo = G()
  const Y = 0.28
  merge(geo, t, new THREE.Matrix4().makeRotationY(0.2).multiply(new THREE.Matrix4().makeTranslation(0, -Y, 0)))
  merge(geo, t, new THREE.Matrix4().makeRotationY(1.1).setPosition(0, 0, 0))
  merge(geo, t, new THREE.Matrix4().makeRotationY(2.4).multiply(new THREE.Matrix4().makeTranslation(0.02, Y, 0.03)))
  const g = finalize(geo)
  renderPreview(path.join(OUT_PREVIEW, '02-tablets.png'), [{ geo: g, color: [236, 240, 238] }], { eye: [1.75, 1.25, 1.9], target: [0, -0.02, 0], fov: 30 })
  await writeGLB('tablets.glb', [
    { name: 'softening_tablets', geo: g, material: { name: 'tablet_compressed', color: [0.95, 0.96, 0.95], roughness: 0.72 } },
  ])
}

/* 03 jumbo bag */
{
  const weave = weaveNormalMap(256)
  const { body, hardware, seams, panel } = bag()
  renderPreview(path.join(OUT_PREVIEW, '03-bag.png'), [
    { geo: body, color: [226, 223, 212], rough: 0.85 },
    { geo: seams, color: [186, 182, 170] },
    { geo: hardware, color: [206, 184, 138], metal: 0.3, rough: 0.5 },
    { geo: panel, color: [24, 44, 44], opacity: 1 },
  ], { eye: [2.75, 1.35, 3.1], target: [0, 0.1, 0], fov: 30 })
  await writeGLB('jumbo-bag.glb', [
    {
      name: 'fibc_body', geo: body,
      material: { name: 'woven_pp', color: [0.93, 0.91, 0.86], roughness: 0.82, normalTexture: weave, normalScale: 0.9, doubleSided: true },
    },
    { name: 'fibc_seams', geo: seams, material: { name: 'webbing_stitch', color: [0.74, 0.72, 0.66], roughness: 0.9 } },
    { name: 'fibc_loops', geo: hardware, material: { name: 'webbing_strap', color: [0.88, 0.83, 0.7], roughness: 0.76 } },
    {
      name: 'brand_panel', geo: panel,
      material: { name: 'print_panel', color: [1, 1, 1], roughness: 0.8, opacity: 0.999 },
    },
  ], [
    { name: 'anchor_label_front', position: [0, 0.06, 0.71] },
    { name: 'anchor_label_back', position: [0, 0.06, -0.71], rotation: [0, 1, 0, 0] },
    { name: 'anchor_top_spout', position: [0, BAG.h / 2 + 0.2, 0] },
  ])
}

/* 03b tablets sack (25 / 50 kg) */
{
  const { body, caps, crimp, panel } = pillowSack()
  renderPreview(path.join(OUT_PREVIEW, '03b-sack50.png'), [
    { geo: body, color: [244, 244, 240], rough: 0.92 },
    { geo: body.caps ?? crimp, color: [240, 240, 235], rough: 0.92 },
    { geo: crimp, color: [236, 236, 231], rough: 0.9 },
    { geo: panel, color: [26, 107, 156] },
  ], { eye: [1.35, 0.55, 1.9], target: [0, 0.0, 0], fov: 32 })
  await writeGLB('sack-50kg.glb', [
    {
      name: 'sack_body', geo: body,
      material: { name: 'woven_sack', color: [0.97, 0.97, 0.95], roughness: 0.92, doubleSided: true },
    },
    { name: 'sack_caps', geo: caps, material: { name: 'sack_cap', color: [0.96, 0.96, 0.94], roughness: 0.92, doubleSided: true } },
    { name: 'sack_crimp', geo: crimp, material: { name: 'sack_crimp', color: [0.95, 0.95, 0.93], roughness: 0.9, doubleSided: true } },
    { name: 'sack_panel', geo: panel, material: { name: 'sack_print', color: [1, 1, 1], roughness: 0.86 } },
  ])
}

/* alt cut container + ship */
{
  const { frame, sides, floor, doorA, doorB, plate } = shippingContainer()
  renderPreview(path.join(OUT_PREVIEW, 'alt-01-container.png'), [
    { geo: frame, color: [70, 92, 110], metal: 0.35, rough: 0.5 },
    { geo: sides, color: [30, 92, 140], metal: 0.25, rough: 0.55 },
    { geo: floor, color: [46, 40, 34], rough: 0.9 },
    { geo: doorA, color: [34, 96, 146], metal: 0.25, rough: 0.55 },
    { geo: doorB, color: [34, 96, 146], metal: 0.25, rough: 0.55 },
  ], { eye: [7.6, 4.4, 8.2], target: [0, 1.2, 0], fov: 34 })
  renderPreview(path.join(OUT_PREVIEW, 'alt-01b-container-end.png'), [
    { geo: frame, color: [70, 92, 110] },
    { geo: sides, color: [30, 92, 140] },
    { geo: floor, color: [46, 40, 34] },
    { geo: doorA, color: [200, 120, 60] },
    { geo: doorB, color: [180, 100, 50] },
  ], { eye: [9.5, 3.0, 4.2], target: [1.5, 1.2, 0], fov: 34 })
  await writeGLB('container.glb', [
    { name: 'cont_frame', geo: frame, material: { name: 'cont_steel', color: [0.24, 0.32, 0.38], roughness: 0.42, metallic: 0.6 } },
    { name: 'cont_sides', geo: sides, material: { name: 'cont_sheet', color: [0.13, 0.40, 0.58], roughness: 0.5, metallic: 0.32, doubleSided: true } },
    { name: 'cont_floor', geo: floor, material: { name: 'cont_floor', color: [0.17, 0.14, 0.11], roughness: 0.86 } },
    {
      name: 'cont_door_left', geo: doorA,
      material: { name: 'cont_door', color: [0.14, 0.42, 0.60], roughness: 0.48, metallic: 0.32, doubleSided: true },
    },
    {
      name: 'cont_door_right', geo: doorB,
      material: { name: 'cont_door_r', color: [0.14, 0.42, 0.60], roughness: 0.48, metallic: 0.32, doubleSided: true },
    },
    { name: 'cont_plate', geo: plate, material: { name: 'cont_print', color: [1, 1, 1], roughness: 0.6, doubleSided: true } },
  ])

  const ship = cargoShip()

  renderPreview(path.join(OUT_PREVIEW, 'alt-02-ship.png'), [
    { geo: ship.hull, color: [34, 46, 58], metal: 0.2, rough: 0.6 },
    { geo: ship.white, color: [232, 236, 238], rough: 0.6 },
    { geo: ship.stacks, color: [40, 96, 140], metal: 0.1, rough: 0.7 },
  ], { eye: [30, 15, 33], target: [0, 2.2, 0], fov: 32 })
  await writeGLB('cargo-ship.glb', [
    { name: 'ship_hull', geo: ship.hull, material: { name: 'ship_hull', color: [0.06, 0.10, 0.14], roughness: 0.42, metallic: 0.4 } },
    { name: 'ship_bridge', geo: ship.white, material: { name: 'ship_bridge', color: [0.88, 0.90, 0.91], roughness: 0.62 } },
    { name: 'ship_stacks', geo: ship.stacks, material: { name: 'ship_boxes', color: [0.11, 0.35, 0.52], roughness: 0.66, metallic: 0.15 } },
  ])
}

/* 04 globe */
{
  const { body, land } = globe({ radius: 1, width: 0.0055 })
  renderPreview(path.join(OUT_PREVIEW, '04-globe.png'), [
    { geo: body, color: [22, 42, 46] },
    { geo: land, color: [150, 214, 200] },
  ], { eye: [1.9, 1.5, 2.9], fov: 34, target: [0, 0.02, 0] })
  await writeGLB('globe.glb', [
    { name: 'ocean_sphere', geo: body, material: { name: 'ocean', color: [0.035, 0.07, 0.075], roughness: 0.34, metallic: 0.15 } },
    { name: 'land_outlines', geo: land, material: { name: 'land', color: [0.52, 0.78, 0.72], roughness: 0.6 } },
  ])
}

/* mobile poster / social image: a brighter crystal still */
{
  const { crystal, rock } = crystalCluster()
  renderPreview(path.join(ROOT, 'public', 'media', 'halite-poster.png'), [
    { geo: rock, color: [30, 40, 38] },
    { geo: crystal, color: [188, 252, 240], opacity: 0.97 },
  ], { eye: [3.4, 1.9, 3.9], target: [0, 0.1, 0], fov: 30, bg: [2, 5, 6], w: 800, h: 800 })
}

/* summary */
console.log('\nassets:')
for (const f of fs.readdirSync(OUT_MODELS).sort()) {
  const s = fs.statSync(path.join(OUT_MODELS, f)).size
  console.log(`  public/models/${f}  ${(s / 1024).toFixed(1)} KB`)
}
