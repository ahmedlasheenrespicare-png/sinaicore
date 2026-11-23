/**
 * SinaiCore — the 50 kg export sack, rebuilt from the product photograph.
 *
 * The bag in `public/img/ref/bag50.jpg` is a flat-faced PP sack: a wide body,
 * slightly wider at the gusseted foot, a soft shoulder, and the mouth folded
 * flat and heat-sealed across the top with a visible pleated band.
 *
 * This script generates that shape (and its 25 kg sibling) as a GLB with
 * Draco compression, and renders the print map that wraps around the face —
 * the blue SinaiCore lockup, the mountain/crystal emblem, the four round
 * assurance badges and the "50 kg / PRODUCT OF EGYPT" block, in the same
 * order and the same blue (#1c3f7a → #2b6cb0) as the photograph.
 *
 *   node scripts/build-sack.mjs            # writes public/models/*.glb + .preview
 *   node scripts/build-sack.mjs --print    # also writes public/tex/sack-50kg.png
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
const OUT_MODELS = path.join(ROOT, 'public', 'models')
const OUT_PREVIEW = path.join(ROOT, '.preview')
fs.mkdirSync(OUT_MODELS, { recursive: true })
fs.mkdirSync(OUT_PREVIEW, { recursive: true })

/* ------------------------------------------------------------------ *
 * geometry helpers
 * ------------------------------------------------------------------ */
const G = () => ({ positions: [], normals: [], uvs: [], indices: [] })

function finalize(g) {
  return {
    positions: new Float32Array(g.positions),
    normals: new Float32Array(g.normals.length ? g.normals : new Array(g.positions.length).fill(0)),
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

/* smooth normals from triangles, so the faces catch the light like fabric */
function smoothNormals(g) {
  const pos = g.positions
  const nrm = new Array(pos.length).fill(0)
  for (let i = 0; i < pos.length; i += 9) {
    const ax = pos[i], ay = pos[i + 1], az = pos[i + 2]
    const bx = pos[i + 3], by = pos[i + 4], bz = pos[i + 5]
    const cx = pos[i + 6], cy = pos[i + 7], cz = pos[i + 8]
    const ux = bx - ax, uy = by - ay, uz = bz - az
    const vx = cx - ax, vy = cy - ay, vz = cz - az
    const nx = uy * vz - uz * vy
    const ny = uz * vx - ux * vz
    const nz = ux * vy - uy * vx
    for (let k = 0; k < 9; k += 3) {
      nrm[i + k] += nx
      nrm[i + k + 1] += ny
      nrm[i + k + 2] += nz
    }
  }
  for (let i = 0; i < nrm.length; i += 3) {
    const l = Math.hypot(nrm[i], nrm[i + 1], nrm[i + 2]) || 1
    nrm[i] /= l
    nrm[i + 1] /= l
    nrm[i + 2] /= l
  }
  g.normals = nrm
}

const flat = (tris) => {
  const g = G()
  for (const t of tris) {
    const [a, b, c] = t
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
  g.indices = Array.from({ length: g.positions.length / 3 }, (_, i) => i)
  return finalize(g)
}

/* ------------------------------------------------------------------ *
 * The sack body, profile taken off the photograph
 *
 *   y = 0 is the base, y = h the shoulder. `widthAt(v)` and `depthAt(v)`
 *   describe the front/side silhouette: the foot is a touch wider than the
 *   belly (the bag slumps), the body is nearly a flat slab, then the
 *   shoulder rounds off into the sealed mouth.
 * ------------------------------------------------------------------ */
const SACK = {
  w: 0.72,        // width across the face
  d: 0.42,        // depth front to back
  h: 1.18,        // base to shoulder
  foot: 1.04,     // foot flare
  crown: 0.965,   // how much of the width survives at the shoulder
  square: 5.2,    // superellipse exponent: higher = flatter faces
}

/* vertical profile: (scale, squash) at height fraction v */
function profile(v) {
  // the filled bag swells just above the base and settles under the mouth
  const swell = Math.sin(Math.min(1, v / 0.34) * Math.PI * 0.5)
  const foot = 1 + (SACK.foot - 1) * Math.pow(1 - v, 3.4)
  // shoulder: the last 16 % tucks in hard toward the crimp
  const shoulder = v > 0.8 ? 1 - Math.pow((v - 0.8) / 0.2, 1.6) * (1 - SACK.crown) : 1
  const k = (0.9 + 0.1 * swell) * foot * shoulder
  // depth squashes faster than width at the shoulder, giving a wedge
  const kz = k * (v > 0.8 ? 1 - Math.pow((v - 0.8) / 0.2, 2) * 0.34 : 1)
  return [k, kz]
}

function superellipse(t, a, b, n) {
  const c = Math.cos(t)
  const s = Math.sin(t)
  const p = 2 / n
  return [a * Math.sign(c) * Math.abs(c) ** p, b * Math.sign(s) * Math.abs(s) ** p]
}

function sackBody({ w = SACK.w, d = SACK.d, h = SACK.h } = {}) {
  const RINGS = 72
  const SEG = 160
  const body = G()
  // one shared vertex grid, so normals average across the whole surface
  const grid = []
  for (let i = 0; i <= RINGS; i++) {
    const v = i / RINGS
    const y = v * h
    const [kx, kz] = profile(v)
    const row = []
    for (let s = 0; s <= SEG; s++) {
      const th = (s / SEG) * Math.PI * 2
      const [x, z] = superellipse(th, (w / 2) * kx, (d / 2) * kz, SACK.square)
      row.push([x, y, z])
    }
    grid.push(row)
  }
  // vertices + UVs (unwrapped around the body for the weave map)
  for (let i = 0; i <= RINGS; i++) {
    const v = i / RINGS
    for (let s = 0; s <= SEG; s++) {
      const [x, y, z] = grid[i][s]
      body.positions.push(x, y, z)
      body.uvs.push((s / SEG) * 2, v * 2.2)
    }
  }
  const idx = (i, s) => i * (SEG + 1) + s
  for (let i = 0; i < RINGS; i++) {
    for (let s = 0; s < SEG; s++) {
      // outward winding
      body.indices.push(idx(i, s), idx(i + 1, s), idx(i, s + 1))
      body.indices.push(idx(i, s + 1), idx(i + 1, s), idx(i + 1, s + 1))
    }
  }
  // area-weighted vertex normals from the shared triangles
  const nrm = new Float32Array(body.positions.length)
  const ax = new THREE.Vector3(), bx = new THREE.Vector3(), cx = new THREE.Vector3()
  const ab = new THREE.Vector3(), ac = new THREE.Vector3(), n = new THREE.Vector3()
  for (let t = 0; t < body.indices.length; t += 3) {
    const [i0, i1, i2] = [body.indices[t], body.indices[t + 1], body.indices[t + 2]]
    ax.fromArray(body.positions, i0 * 3)
    bx.fromArray(body.positions, i1 * 3)
    cx.fromArray(body.positions, i2 * 3)
    ab.subVectors(bx, ax)
    ac.subVectors(cx, ax)
    n.crossVectors(ab, ac)
    for (const i of [i0, i1, i2]) {
      nrm[i * 3] += n.x
      nrm[i * 3 + 1] += n.y
      nrm[i * 3 + 2] += n.z
    }
  }
  for (let i = 0; i < nrm.length; i += 3) {
    const l = Math.hypot(nrm[i], nrm[i + 1], nrm[i + 2]) || 1
    nrm[i] /= l
    nrm[i + 1] /= l
    nrm[i + 2] /= l
  }
  body.normals = Array.from(nrm)

  /* the base: a slightly domed underside so the bag rests on its belly */
  const base = G()
  for (let s = 0; s < SEG; s++) {
    const a = grid[0][s % SEG]
    const b = grid[0][(s + 1) % SEG]
    base.positions.push(0, 0.012, 0, a[0], a[1], a[2], b[0], b[1], b[2])
    base.uvs.push(0.5, 0, 0.5, 0, 0.5, 0)
  }
  base.indices = Array.from({ length: base.positions.length / 3 }, (_, i) => i)
  smoothNormals(base)

  /* the mouth: flat closed face under the seal */
  const top = G()
  const outer = grid[RINGS]
  let cx2 = 0, cy2 = 0, cz2 = 0
  for (let s = 0; s < SEG; s++) {
    cx2 += outer[s][0]; cy2 += outer[s][1]; cz2 += outer[s][2]
  }
  cx2 /= SEG; cy2 /= SEG; cz2 /= SEG
  for (let s = 0; s < SEG; s++) {
    const a = outer[s % SEG]
    const b = outer[(s + 1) % SEG]
    top.positions.push(cx2, cy2, cz2, b[0], b[1], b[2], a[0], a[1], a[2])
    top.uvs.push(0.5, 1, 0.5, 1, 0.5, 1)
  }
  top.indices = Array.from({ length: top.positions.length / 3 }, (_, i) => i)
  smoothNormals(top)

  return { body: finalize(body), base: finalize(base), mouth: finalize(top), rows: grid }
}

/* ------------------------------------------------------------------ *
 * The printed face: a fine grid laid on the front of the bag, with its own
 * 0..1 UVs, so the print map sits on the fabric instead of wrapping round
 * the whole body. Aspect matches the 1024 × 1680 map.
 * ------------------------------------------------------------------ */
function sackPanel({ w = SACK.w, d = SACK.d, h = SACK.h } = {}, side = 1) {
  const NU = 24
  const NV = 32
  const u0 = 0.03, u1 = 0.90     // the print fills the face, like the photograph
  const half = 0.78              // half width, as a fraction of the face
  const frontZ = (x, y) => {
    const v = Math.min(0.999, Math.max(0.001, y / h))
    const [kx, kz] = profile(v)
    const ax = Math.abs(x / ((w / 2) * kx))
    if (ax >= 1) return 0
    return side * (d / 2) * kz * Math.pow(1 - Math.pow(ax, SACK.square), 1 / SACK.square)
  }
  const g = G()
  const px = (w / 2) * half
  const grid = []
  for (let i = 0; i <= NU; i++) {
    const row = []
    const x = -px + (i / NU) * px * 2
    for (let j = 0; j <= NV; j++) {
      const y = (u0 + (u1 - u0) * (j / NV)) * h
      row.push([x, y, frontZ(x, y) + 0.0035])
    }
    grid.push(row)
  }
  for (let i = 0; i < NU; i++) {
    for (let j = 0; j < NV; j++) {
      const a = grid[i][j], b = grid[i + 1][j], c = grid[i + 1][j + 1], d2 = grid[i][j + 1]
      for (const [tri, uvs] of [
        [[a, b, c], [[i / NU, j / NV], [(i + 1) / NU, j / NV], [(i + 1) / NU, (j + 1) / NV]]],
        [[a, c, d2], [[i / NU, j / NV], [(i + 1) / NU, (j + 1) / NV], [i / NU, (j + 1) / NV]]],
      ]) {
        for (let k = 0; k < 3; k++) {
          g.positions.push(...tri[k])
          // seen from the back the map must be mirrored, or the type runs backwards
          g.uvs.push(side > 0 ? uvs[k][0] : 1 - uvs[k][0], uvs[k][1])
        }
      }
    }
  }
  g.indices = Array.from({ length: g.positions.length / 3 }, (_, i) => i)
  // normals face away from the bag
  for (let i = 0; i < g.positions.length / 3; i++) g.normals.push(0, 0, side)
  return finalize(g)
}

/* ------------------------------------------------------------------ *
 * The head seal: the bag's two faces are pressed flat and welded, with a
 * pleated band and a raised lip — exactly the closed look in the photo.
 * ------------------------------------------------------------------ */
function headSeal(rows, h) {
  const top = rows[rows.length - 1]
  const SEG = top.length - 1
  const g = G()
  // sample the ring into front half / back half
  let xMin = Infinity, xMax = -Infinity
  for (let s = 0; s < SEG; s++) {
    xMin = Math.min(xMin, top[s][0])
    xMax = Math.max(xMax, top[s][0])
  }
  const y0 = h - 0.004
  const band = 0.048      // pleated band height
  const lip = 0.014       // top lip thickness
  const N = 30
  const tris = []
  // front and back pleats: the panel is pinched to a thin sheet
  for (const side of [1, -1]) {
    const zf = 0.05 * side
    for (let i = 0; i < N; i++) {
      const xa = xMin + (i / N) * (xMax - xMin)
      const xb = xMin + ((i + 1) / N) * (xMax - xMin)
      // alternate pleats lean in and out
      const za = (i % 2 ? zf : zf * 1.9)
      const zb = (i % 2 ? zf * 1.9 : zf)
      tris.push(
        [[xa, y0, za * side], [xb, y0, zb * side], [xb, y0 + band, zb * 0.55 * side]],
        [[xa, y0, za * side], [xb, y0 + band, zb * 0.55 * side], [xa, y0 + band, za * 0.55 * side]],
      )
    }
  }
  merge(g, flat(tris))
  // the welded lip: a flat slab spanning the whole mouth
  const lipTris = []
  const w2 = (xMax - xMin) / 2
  const zl = 0.02
  for (const side of [1, -1]) {
    lipTris.push(
      [[-w2, y0 + band, zl * side], [w2, y0 + band, zl * side], [w2, y0 + band + lip, zl * 0.6 * side]],
      [[-w2, y0 + band, zl * side], [w2, y0 + band + lip, zl * 0.6 * side], [-w2, y0 + band + lip, zl * 0.6 * side]],
    )
  }
  // close the two ends of the lip
  for (const side of [-1, 1]) {
    const xe = side * w2
    lipTris.push(
      [[xe, y0 + band, zl], [xe, y0 + band, -zl], [xe, y0 + band + lip, -zl * 0.6]],
      [[xe, y0 + band, zl], [xe, y0 + band + lip, -zl * 0.6], [xe, y0 + band + lip, zl * 0.6]],
    )
  }
  merge(g, flat(lipTris))
  return finalize(g)
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
    const m = part.material
    const mat = doc.createMaterial(m.name)
      .setBaseColorFactor([...m.color, 1])
      .setRoughnessFactor(m.roughness ?? 0.5)
      .setMetallicFactor(m.metallic ?? 0)
      .setDoubleSided(!!m.doubleSided)
    if (m.unlit) mat.setEmissiveFactor([0, 0, 0])
    prim.setMaterial(mat)
    const mesh = doc.createMesh(part.name).addPrimitive(prim)
    const node = doc.createNode(part.name).setMesh(mesh)
    scene.addChild(node)
  }
  for (const a of anchors) {
    const node = doc.createNode(a.name)
    if (a.position) node.setTranslation(a.position)
    scene.addChild(node)
  }
  doc.createExtension(KHRDracoMeshCompression).setRequired(true)
  const io = new NodeIO().registerExtensions([KHRDracoMeshCompression]).registerDependencies({
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })
  await io.write(path.join(OUT_MODELS, file), doc)
  console.log(`  ${file}  ${(fs.statSync(path.join(OUT_MODELS, file)).size / 1024).toFixed(1)} KB`)
}

/* ------------------------------------------------------------------ *
 * Build
 * ------------------------------------------------------------------ */
console.log('SinaiCore — rebuilding the export sack')
{
  const { body, base, mouth, rows } = sackBody()
  const seal = headSeal(rows, SACK.h)
  const panel = sackPanel()
  const panelBack = sackPanel({}, -1)
  await writeGLB('sack-50kg.glb', [
    // the whole white bag: body + base + mouth lid, one material
    { name: 'sack_body', geo: body, material: { name: 'woven_sack', color: [0.985, 0.985, 0.975], roughness: 0.9, doubleSided: true } },
    { name: 'sack_caps', geo: base, material: { name: 'sack_cap', color: [0.985, 0.985, 0.975], roughness: 0.9, doubleSided: true } },
    { name: 'sack_mouth', geo: mouth, material: { name: 'sack_cap', color: [0.985, 0.985, 0.975], roughness: 0.9, doubleSided: true } },
    { name: 'sack_crimp', geo: seal, material: { name: 'sack_crimp', color: [0.97, 0.97, 0.96], roughness: 0.88, doubleSided: true } },
    { name: 'sack_panel', geo: panel, material: { name: 'sack_print', color: [1, 1, 1], roughness: 0.78 } },
    { name: 'sack_panel_back', geo: panelBack, material: { name: 'sack_print', color: [1, 1, 1], roughness: 0.78 } },
  ])
}
{
  // 25 kg sibling: same bag, shorter, which is what the panel shows
  const S = { ...SACK, h: 0.98 }
  const { body, base, mouth, rows } = sackBody(S)
  const seal = headSeal(rows, S.h)
  const panel = sackPanel(S)
  const panelBack = sackPanel(S, -1)
  await writeGLB('sack-25kg.glb', [
    { name: 'sack_body', geo: body, material: { name: 'woven_sack', color: [0.985, 0.985, 0.975], roughness: 0.9, doubleSided: true } },
    { name: 'sack_caps', geo: base, material: { name: 'sack_cap', color: [0.985, 0.985, 0.975], roughness: 0.9, doubleSided: true } },
    { name: 'sack_mouth', geo: mouth, material: { name: 'sack_cap', color: [0.985, 0.985, 0.975], roughness: 0.9, doubleSided: true } },
    { name: 'sack_crimp', geo: seal, material: { name: 'sack_crimp', color: [0.97, 0.97, 0.96], roughness: 0.88, doubleSided: true } },
    { name: 'sack_panel', geo: panel, material: { name: 'sack_print', color: [1, 1, 1], roughness: 0.78 } },
    { name: 'sack_panel_back', geo: panelBack, material: { name: 'sack_print', color: [1, 1, 1], roughness: 0.78 } },
  ])
}
