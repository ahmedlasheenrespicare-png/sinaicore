/**
 * SinaiCore — build the halite lattice hero.
 *
 * A 4 × 4 × 4 crystal lattice of hopper-faced halite cubes, plus a few seed
 * crystals and loose fragments, seated on a broken shard of Sinai rock.
 * Every cell is its own glTF node, so the page can disassemble the specimen
 * cube by cube as the reader scrolls.
 *
 * The file is written with KHR_draco_mesh_compression, exactly like the rest
 * of the SinaiCore model set.
 *
 *   node scripts/build-lattice.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import * as THREE from 'three'
import { Document, NodeIO } from '@gltf-transform/core'
import { KHRDracoMeshCompression } from '@gltf-transform/extensions'
import draco3d from 'draco3d'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUT = path.join(ROOT, 'public', 'models', 'halite-lattice.glb')

/* ------------------------------------------------------------------ *
 * geometry helpers
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

function hash3(x, y, z) {
  const h = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453123
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

/* A hopper-faced halite cube: a watertight cube→sphere blend whose faces sink
 * into a stepped funnel, which is how salt actually crystallises from brine. */
function hopperCube({ sx = 1, sy = 1, sz = 1, seed = 1, hop = 0.06, round = 0.07, sub = 5 } = {}) {
  const faces = [
    { axis: 0, sign: 1 }, { axis: 0, sign: -1 },
    { axis: 1, sign: 1 }, { axis: 1, sign: -1 },
    { axis: 2, sign: 1 }, { axis: 2, sign: -1 },
  ]
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
        const c = [0, 0, 0]
        c[f.axis] = f.sign
        c[u] = a
        c[v] = b
        const sp = toSphere(c[0], c[1], c[2])
        let p = [
          c[0] * (1 - round) + sp[0] * round,
          c[1] * (1 - round) + sp[1] * round,
          c[2] * (1 - round) + sp[2] * round,
        ]
        const d = Math.max(Math.abs(a), Math.abs(b))
        const EDGE = 0.72
        const inner = Math.min(1, d / EDGE)
        const steps = 3
        const t = 1 - inner
        const stair = (Math.floor(t * steps) + 0.5) / steps
        const rimF = Math.max(0, (d - EDGE) / (1 - EDGE))
        const n = vnoise(a * 3.4 + seed * 5.3, b * 3.4 - seed, f.axis * 3.1 + seed) - 0.5
        const sink = hop * (stair * 1.0 + rimF * 2.0) + n * 0.016
        p = [p[0] - sp[0] * sink, p[1] - sp[1] * sink, p[2] - sp[2] * sink]
        row.push([p[0] * sx, p[1] * sy, p[2] * sz])
      }
      grid.push(row)
    }
    for (let i = 0; i < sub; i++) {
      for (let j = 0; j < sub; j++) {
        const a = grid[i][j], b = grid[i + 1][j], c = grid[i + 1][j + 1], d = grid[i][j + 1]
        if (f.sign < 0) tris.push(a, c, b, a, d, c)
        else tris.push(a, b, c, a, c, d)
      }
    }
  }
  return flatNormals(tris)
}

/* A rough, chamfered slab of dark shale for the cluster to grow out of. */
function rockSlab({ sx = 1, sy = 1, sz = 1, sub = 9, chamfer = 0.4, rough = 0.3, seed = 91 } = {}) {
  const tris = []
  const faces = [
    { axis: 0, sign: 1 }, { axis: 0, sign: -1 },
    { axis: 1, sign: 1 }, { axis: 1, sign: -1 },
    { axis: 2, sign: 1 }, { axis: 2, sign: -1 },
  ]
  const shape = (p) => {
    const len = Math.hypot(p[0], p[1], p[2]) || 1
    const r = [p[0] / len, p[1] / len, p[2] / len]
    let q = [
      p[0] * (1 - chamfer) + r[0] * chamfer,
      p[1] * (1 - chamfer) + r[1] * chamfer,
      p[2] * (1 - chamfer) + r[2] * chamfer,
    ]
    const nn = (vnoise(p[0] * 2.4 + seed * 7, p[1] * 2.4, p[2] * 2.4 - seed) - 0.5) * rough
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
        if (f.sign < 0) tris.push(a, c, b, a, d, c)
        else tris.push(a, b, c, a, c, d)
      }
    }
  }
  return flatNormals(tris)
}

/* ------------------------------------------------------------------ *
 * the specimen
 * ------------------------------------------------------------------ */
const parts = []
const N = 4
const CELL = 0.34
const GAP = 0.356
const HALF = ((N - 1) * GAP) / 2
const CENTER_Y = 0.25

let seed = 1
for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    for (let z = 0; z < N; z++) {
      const px = x * GAP - HALF
      const py = y * GAP - HALF + CENTER_Y
      const pz = z * GAP - HALF
      const s = 0.985 + hash3(x + 3, y + 7, z + 11) * 0.03
      const geo = finalize(hopperCube({
        sx: CELL * 0.5 * s,
        sy: CELL * 0.5 * s,
        sz: CELL * 0.5 * s,
        seed,
        hop: 0.055,
        round: 0.075,
        sub: 5,
      }))
      const rot = new THREE.Euler(
        (hash3(x, y + 2, z) - 0.5) * 0.05,
        (hash3(x + 5, y, z) - 0.5) * 0.06,
        (hash3(x, y, z + 9) - 0.5) * 0.05,
      )
      const q = new THREE.Quaternion().setFromEuler(rot)
      parts.push({
        name: `cell_${String(x).padStart(2, '0')}${String(y).padStart(2, '0')}${String(z).padStart(2, '0')}`,
        geo,
        material: 'halite',
        position: [px, py, pz],
        rotation: [q.x, q.y, q.z, q.w],
      })
      seed++
    }
  }
}

/* four larger seed crystals at the base, the way a real cluster nucleates */
const seeds = [
  { p: [-0.52, -0.30, 0.10], s: 0.25, r: [0.12, 0.4, 0.08], seed: 201 },
  { p: [0.46, -0.32, -0.18], s: 0.22, r: [-0.08, 1.1, 0.14], seed: 202 },
  { p: [0.04, -0.34, 0.50], s: 0.20, r: [0.18, 0.7, -0.1], seed: 203 },
  { p: [-0.18, -0.30, -0.48], s: 0.18, r: [0.05, 1.6, 0.2], seed: 204 },
]
seeds.forEach((s, i) => {
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(...s.r))
  parts.push({
    name: `seed_${String(i).padStart(2, '0')}`,
    geo: finalize(hopperCube({ sx: s.s, sy: s.s * 0.92, sz: s.s, seed: s.seed, hop: 0.075, round: 0.08, sub: 6 })),
    material: 'halite',
    position: s.p,
    rotation: [q.x, q.y, q.z, q.w],
  })
})

/* loose fragments — small satellites that drift out first on the explosion */
const frags = [
  { p: [-0.86, 0.55, 0.28], s: 0.075, r: [0.3, 0.2, 0.1], seed: 301 },
  { p: [0.82, 0.18, -0.36], s: 0.062, r: [0.1, 0.8, 0.2], seed: 302 },
  { p: [0.20, 0.92, 0.46], s: 0.055, r: [0.5, 0.1, 0.3], seed: 303 },
  { p: [-0.42, 0.78, -0.62], s: 0.068, r: [0.2, 0.4, 0.6], seed: 304 },
  { p: [0.66, 0.72, 0.58], s: 0.05, r: [0.1, 0.2, 0.1], seed: 305 },
  { p: [-0.74, 0.02, 0.66], s: 0.045, r: [0.4, 0.6, 0.2], seed: 306 },
]
frags.forEach((s, i) => {
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(...s.r))
  parts.push({
    name: `fragment_${String(i).padStart(2, '0')}`,
    geo: finalize(hopperCube({ sx: s.s, sy: s.s, sz: s.s, seed: s.seed, hop: 0.09, round: 0.1, sub: 5 })),
    material: 'halite',
    position: s.p,
    rotation: [q.x, q.y, q.z, q.w],
  })
})

/* the host rock: a broken slab plus a smaller shard behind it */
parts.push({
  name: 'host_rock',
  geo: finalize(rockSlab({ sx: 0.78, sy: 0.13, sz: 0.66, sub: 11, chamfer: 0.42, rough: 0.32, seed: 91 })),
  material: 'sinai_rock',
  position: [0, -0.46, 0],
})
parts.push({
  name: 'host_rock_back',
  geo: finalize(rockSlab({ sx: 0.42, sy: 0.10, sz: 0.34, sub: 9, chamfer: 0.45, rough: 0.38, seed: 137 })),
  material: 'sinai_rock',
  position: [-0.38, -0.40, -0.42],
  rotation: (() => {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.06, 0.5, -0.08))
    return [q.x, q.y, q.z, q.w]
  })(),
})

/* ------------------------------------------------------------------ *
 * write the Draco GLB
 * ------------------------------------------------------------------ */
const MATERIALS = {
  halite: {
    name: 'halite',
    baseColorFactor: [0.94, 0.985, 0.975, 1],
    roughnessFactor: 0.055,
    metallicFactor: 0,
    clearcoatFactor: 1,
    clearcoatRoughnessFactor: 0.06,
    ior: 1.5,
    specularFactor: 1,
  },
  sinai_rock: {
    name: 'sinai_rock',
    baseColorFactor: [0.17, 0.135, 0.105, 1],
    roughnessFactor: 0.94,
    metallicFactor: 0,
  },
}

const doc = new Document()
const buffer = doc.createBuffer()
const scene = doc.createScene('Scene')
doc.getRoot().setDefaultScene(scene)

const matCache = new Map()
function material(name) {
  if (matCache.has(name)) return matCache.get(name)
  const m = MATERIALS[name]
  const mat = doc.createMaterial(name)
    .setBaseColorFactor(m.baseColorFactor)
    .setRoughnessFactor(m.roughnessFactor)
    .setMetallicFactor(m.metallicFactor)
  matCache.set(name, mat)
  return mat
}

for (const part of parts) {
  const geo = part.geo
  const prim = doc.createPrimitive()
  prim.setAttribute('POSITION', doc.createAccessor(`${part.name}_POSITION`).setType('VEC3').setArray(geo.positions).setBuffer(buffer))
  prim.setAttribute('NORMAL', doc.createAccessor(`${part.name}_NORMAL`).setType('VEC3').setArray(geo.normals).setBuffer(buffer))
  prim.setAttribute('TEXCOORD_0', doc.createAccessor(`${part.name}_UV`).setType('VEC2').setArray(geo.uvs).setBuffer(buffer))
  prim.setIndices(doc.createAccessor(`${part.name}_INDEX`).setType('SCALAR').setArray(geo.indices).setBuffer(buffer))
  prim.setMaterial(material(part.material))
  const mesh = doc.createMesh(part.name).addPrimitive(prim)
  const node = doc.createNode(part.name).setMesh(mesh)
  if (part.position) node.setTranslation(part.position)
  if (part.rotation) node.setRotation(part.rotation)
  scene.addChild(node)
}

doc.createExtension(KHRDracoMeshCompression).setRequired(true)
const io = new NodeIO().registerExtensions([KHRDracoMeshCompression]).registerDependencies({
  'draco3d.encoder': await draco3d.createEncoderModule(),
})

fs.mkdirSync(path.dirname(OUT), { recursive: true })
await io.write(OUT, doc)

const size = fs.statSync(OUT).size
const cells = parts.filter((p) => p.name.startsWith('cell_')).length
console.log(`halite-lattice.glb  ${(size / 1024).toFixed(1)} KB  ·  ${parts.length} nodes  ·  ${cells} lattice cells  ·  Draco`)
