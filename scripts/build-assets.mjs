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
  const specs = [
    { s: [0.46, 1.0, 0.42], pos: [0, 0.24, 0], rot: [0.02, 0.34, 0.02], seed: 3 },
    { s: [0.3, 0.62, 0.3], pos: [0.44, -0.22, 0.1], rot: [0.16, 0.85, 0.28], seed: 11 },
    { s: [0.34, 0.5, 0.26], pos: [-0.4, -0.3, 0.2], rot: [-0.12, 0.4, -0.26], seed: 23 },
    { s: [0.2, 0.34, 0.2], pos: [0.16, -0.44, -0.3], rot: [0.34, 0.2, 0.08], seed: 41 },
  ]
  const geo = G()
  for (const s of specs) {
    const crystal = haliteCrystal({ sx: s.s[0], sy: s.s[1], sz: s.s[2], seed: s.seed })
    const m = new THREE.Matrix4()
      .makeRotationFromEuler(new THREE.Euler(s.rot[0], s.rot[1], s.rot[2]))
      .setPosition(s.pos[0], s.pos[1], s.pos[2])
    merge(geo, crystal, m)
  }
  // dark host rock the crystals grew out of
  const rockMat = new THREE.Matrix4().makeTranslation(0, -0.62, 0)
  const rock = haliteCrystal({ sx: 0.9, sy: 0.16, sz: 0.8, sub: 4, chamfer: 0.44, rough: 0.26, seed: 91 })
  const rockGeo = G()
  merge(rockGeo, rock, rockMat)
  return { crystal: finalize(geo), rock: finalize(rockGeo) }
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
const BAG = { a: 0.66, b: 0.66, h: 1.62, exp: 5 }

function superellipse(t, a, b, n) {
  const c = Math.cos(t), s = Math.sin(t)
  const p = 2 / n
  return [a * Math.sign(c) * Math.abs(c) ** p, b * Math.sign(s) * Math.abs(s) ** p]
}

function bagBody() {
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
    const gather = v > 0.86 ? 1 - ((v - 0.86) / 0.14) ** 1.6 * 0.72 : 1
    const bulge = 1 + 0.055 * Math.sin(Math.PI * Math.min(1, v * 1.06)) - 0.03 * Math.max(0, v - 0.8)
    const pleat = 0.012 * Math.sin(v * Math.PI * 5.5)
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
  // bottom cap
  const by = -BAG.h / 2
  for (let s = 0; s < SEG; s++) {
    const t0 = (s / SEG) * Math.PI * 2
    const t1 = ((s + 1) / SEG) * Math.PI * 2
    const p0 = superellipse(t0, BAG.a * 0.96, BAG.b * 0.96, BAG.exp)
    const p1 = superellipse(t1, BAG.a * 0.96, BAG.b * 0.96, BAG.exp)
    tris.push([0, by, 0], [p1[0], by, p1[1]], [p0[0], by, p0[1]])
    uvCoords.push([0, 0], [0, 0], [0, 0])
  }
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
  return finalize(g)
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

function bag() {
  const body = bagBody()
  const top = BAG.h / 2
  const bottom = -BAG.h / 2

  /* four corner lift loops — U straps standing on the top edge */
  const loops = G()
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4
    const spread = 0.2
    const pts = [
      skinPoint(a - spread, top - 0.5, 1.012),
      skinPoint(a - spread, top - 0.06, 1.02),
      skinPoint(a - spread * 0.72, top + 0.16, 1.03),
      skinPoint(a, top + 0.3, 0.99),
      skinPoint(a + spread * 0.72, top + 0.16, 1.03),
      skinPoint(a + spread, top - 0.06, 1.02),
      skinPoint(a + spread, top - 0.5, 1.012),
    ]
    merge(loops, tube(pts, 0.032, 7))
    for (const end of [pts[0], pts[pts.length - 1]]) {
      const cap = finalize(flatNormals(new THREE.SphereGeometry(0.032, 12, 8).toNonIndexed().getAttribute('position').array
        ? sphereTris(end, 0.032) : []))
      merge(loops, cap)
    }
  }

  /* top fill spout: collar + short neck */
  const spout = revolved([
    [0, top + 0.01], [0.15, top + 0.06], [0.145, top + 0.2], [0.16, top + 0.245],
    [0.158, top + 0.29], [0.135, top + 0.29], [0.132, top + 0.24], [0.115, top + 0.2],
    [0.11, top + 0.08], [0, top + 0.075],
  ], 48)

  /* bottom discharge spout */
  const discharge = revolved([
    [0, bottom - 0.01], [0.13, bottom - 0.06], [0.125, bottom - 0.16], [0.14, bottom - 0.2],
    [0.138, bottom - 0.24], [0.115, bottom - 0.24], [0.112, bottom - 0.2], [0.098, bottom - 0.16],
    [0.095, bottom - 0.07], [0, bottom - 0.065],
  ], 48)
  merge(loops, spout)
  merge(loops, discharge)

  /* sewn webbing: top and bottom hems plus four vertical corner straps */
  const seams = G()
  for (const y of [top - 0.075, bottom + 0.075]) {
    const ring = []
    for (let s = 0; s <= 64; s++) {
      const a = (s / 64) * Math.PI * 2
      ring.push(skinPoint(a, y, 1.006))
    }
    merge(seams, tube(ring, 0.016, 5))
  }
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4
    const col = []
    for (let s = 0; s <= 10; s++) {
      const v = s / 10
      col.push(skinPoint(a, bottom + 0.1 + v * (BAG.h - 0.2), 1.006))
    }
    merge(seams, tube(col, 0.02, 6))
  }

  /* printed brand panel, raycast onto the fabric so it hugs the bulge */
  const panel = G()
  const py = 0.02, ph = 0.3, pw = 0.33, NU = 16, NV = 14
  const ray = new THREE.Raycaster()
  const surfZ = (x, y) => {
    const v = (y + BAG.h / 2) / BAG.h
    const gather = v > 0.86 ? 1 - ((v - 0.86) / 0.14) ** 1.6 * 0.72 : 1
    const bulge = 1 + 0.055 * Math.sin(Math.PI * Math.min(1, v * 1.06)) - 0.03 * Math.max(0, v - 0.8)
    const pleat = 0.012 * Math.sin(v * Math.PI * 5.5)
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

  return { body, hardware: finalize(loops), seams: finalize(seams), panel: finalize(panel) }
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
