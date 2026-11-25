/**
 * Authors the two hero meshes of the story as Draco-compressed GLB files:
 *
 *   1. salt-crystal.glb — a halite crystal with the natural "hopper" habit:
 *      stepped faces, chamfered edges, sized to the 1×1×1 unit the scene scales.
 *   2. container.glb    — a weathered 20 ft steel box with real trapezoid
 *      corrugation, cast corner fittings, locking bars and two door leaves
 *      exported as named nodes so the scroll animation can swing them open.
 *
 * Both are generated procedurally instead of being downloaded, so the repo
 * carries no third-party licence, but the numbers below are deliberately
 * faithful to the real thing (container: 6.06 × 2.44 × 2.59 m at 1:1.26).
 * Run with `npm run models`.
 */
import { mkdir, copyFile, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import * as THREE from 'three'
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js'
import { Document, NodeIO } from '@gltf-transform/core'
import { KHRDracoMeshCompression } from '@gltf-transform/extensions'
import draco3d from 'draco3dgltf'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'public', 'models')
const dracoDir = path.join(root, 'public', 'draco')
const dracoSource = path.join(root, 'node_modules', 'three', 'examples', 'jsm', 'libs', 'draco')

await mkdir(outDir, { recursive: true })
await mkdir(dracoDir, { recursive: true })

for (const file of ['draco_decoder.js', 'draco_decoder.wasm', 'draco_wasm_wrapper.js']) {
  await copyFile(path.join(dracoSource, file), path.join(dracoDir, file))
}

/* -------------------------------------------------------------------------- */
/*  A tiny triangle soup builder — everything below feeds into one of these    */
/* -------------------------------------------------------------------------- */
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z)

class Soup {
  constructor() {
    this.points = []
    this.uvs = []
  }

  /** Counter-clockwise winding = the face looks at you. */
  tri(a, b, c, ua = [0, 0], ub = [0, 0], uc = [0, 0]) {
    this.points.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z)
    this.uvs.push(ua[0], ua[1], ub[0], ub[1], uc[0], uc[1])
  }

  quad(a, b, c, d, flip = false, uv = [[0, 0], [1, 0], [1, 1], [0, 1]]) {
    if (flip) {
      this.tri(a, d, c, uv[0], uv[3], uv[2])
      this.tri(a, c, b, uv[0], uv[2], uv[1])
    } else {
      this.tri(a, b, c, uv[0], uv[1], uv[2])
      this.tri(a, c, d, uv[0], uv[2], uv[3])
    }
  }

  /** `smooth` welds the surface first so normals are averaged across faces —
   *  what fabric needs. Steel and halite stay flat shaded. */
  geometry(smooth = false) {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.points, 3))
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(this.uvs, 2))
    if (smooth) {
      const welded = mergeVertices(geometry, 1e-5)
      welded.computeVertexNormals()
      return welded
    }
    // Flat shading: every triangle keeps its own normal, which is exactly what
    // corrugated steel and faceted halite want.
    geometry.computeVertexNormals()
    // Draco only touches indexed meshes; welding identical position/normal/uv
    // triples keeps the flat shading intact and shrinks the payload tenfold.
    return mergeVertices(geometry, 1e-5)
  }
}

function appendGeometry(soup, geometry) {
  const nonIndexed = geometry.index ? geometry.toNonIndexed() : geometry
  const position = nonIndexed.attributes.position
  const uv = nonIndexed.attributes.uv
  for (let i = 0; i < position.count; i += 3) {
    const p = [0, 1, 2].map((k) => {
      const index = i + k
      return V(position.getX(index), position.getY(index), position.getZ(index))
    })
    const t = [0, 1, 2].map((k) => {
      const index = i + k
      return uv ? [uv.getX(index), uv.getY(index)] : [0, 0]
    })
    soup.tri(p[0], p[1], p[2], t[0], t[1], t[2])
  }
}

function addBox(soup, size, center, rot = V()) {
  const geometry = new THREE.BoxGeometry(size[0], size[1], size[2])
  geometry.rotateX(rot.x)
  geometry.rotateY(rot.y)
  geometry.rotateZ(rot.z)
  geometry.translate(center[0], center[1], center[2])
  appendGeometry(soup, geometry)
}

function addCylinder(soup, radius, height, center, axis = 'y') {
  const geometry = new THREE.CylinderGeometry(radius, radius, height, 12, 1)
  if (axis === 'z') geometry.rotateX(Math.PI / 2)
  if (axis === 'x') geometry.rotateZ(Math.PI / 2)
  geometry.translate(center[0], center[1], center[2])
  appendGeometry(soup, geometry)
}

/**
 * One trapezoid-corrugated sheet, closed into a shell of `thickness` so it reads
 * correctly from both sides — you can see the inside of this container.
 * `u`/`v` are the in-plane axes, the sheet bulges along u × v (or the opposite
 * when `flip` is set).
 */
function corrugatedSheet(
  soup,
  { length, height, origin, u, v, pitch = 0.16, depth = 0.045, thickness = 0.014, flip = false, ribRatio = 0.22 },
) {
  const n = new THREE.Vector3().crossVectors(u, v).normalize()
  const point = (t, z, w) =>
    new THREE.Vector3().copy(origin).addScaledVector(u, t).addScaledVector(v, w).addScaledVector(n, z)

  const segments = Math.max(1, Math.round(length / pitch))
  const step = length / segments
  const profile = []
  for (let i = 0; i < segments; i++) {
    const t = -length / 2 + i * step
    profile.push(
      [t, 0],
      [t + step * ribRatio, depth],
      [t + step * (1 - ribRatio), depth],
      [t + step, 0],
    )
  }

  const half = height / 2
  const outer = profile.map(([t, z]) => [point(t, z, -half), point(t, z, half)])
  const inner = profile.map(([t, z]) => [point(t, z - thickness, -half), point(t, z - thickness, half)])

  for (let i = 0; i < profile.length - 1; i++) {
    // outer skin
    soup.quad(outer[i][0], outer[i + 1][0], outer[i + 1][1], outer[i][1], flip)
    // inner skin, wound the other way
    soup.quad(inner[i][0], inner[i + 1][0], inner[i + 1][1], inner[i][1], !flip)
    // bottom and top fold between the skins
    soup.quad(outer[i][0], inner[i][0], inner[i + 1][0], outer[i + 1][0], !flip)
    soup.quad(outer[i][1], inner[i][1], inner[i + 1][1], outer[i + 1][1], flip)
  }
  // the two open ends of the profile
  soup.quad(outer[0][0], outer[0][1], inner[0][1], inner[0][0], flip)
  soup.quad(
    outer[outer.length - 1][0],
    outer[outer.length - 1][1],
    inner[inner.length - 1][1],
    inner[inner.length - 1][0],
    !flip,
  )
}

/* -------------------------------------------------------------------------- */
/*  1 — Halite: a cube whose faces sink into stepped "hopper" terraces         */
/* -------------------------------------------------------------------------- */
function buildCrystal() {
  const geometry = new THREE.BoxGeometry(1, 1, 1, 9, 9, 9).toNonIndexed()
  const position = geometry.attributes.position
  const vertex = V()
  const CHAMFER = 0.086
  const EDGE = 0.5 - CHAMFER
  const STEPS = 3
  const RECESS = 0.095

  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i)

    // Hopper growth: the middle of every face is a shallower shelf, so the
    // surface steps inwards in quantised terraces from rim to centre.
    const axis = Math.abs(vertex.x) > Math.abs(vertex.y)
      ? (Math.abs(vertex.x) > Math.abs(vertex.z) ? 'x' : 'z')
      : (Math.abs(vertex.y) > Math.abs(vertex.z) ? 'y' : 'z')
    const others = ['x', 'y', 'z'].filter((key) => key !== axis)
    const edge = Math.max(Math.abs(vertex[others[0]]), Math.abs(vertex[others[1]])) / 0.5
    const level = Math.min(1, Math.round((1 - THREE.MathUtils.clamp(edge, 0, 1)) * STEPS) / STEPS)
    vertex[axis] -= Math.sign(vertex[axis]) * level * RECESS

    // Chamfered edges and corners — halite cleaves but it never has a knife edge.
    vertex.x = THREE.MathUtils.clamp(vertex.x, -EDGE, EDGE)
    vertex.y = THREE.MathUtils.clamp(vertex.y, -EDGE, EDGE)
    vertex.z = THREE.MathUtils.clamp(vertex.z, -EDGE, EDGE)

    position.setXYZ(i, vertex.x, vertex.y, vertex.z)
  }

  geometry.deleteAttribute('uv')
  geometry.computeVertexNormals()

  // A few tiny satellite crystals so the single grain still reads as a crystal
  // that grew, not one that was milled.
  const soup = new Soup()
  appendGeometry(soup, geometry)
  const satellites = [
    { size: 0.19, at: [0.42, -0.3, 0.26], turn: 0.6 },
    { size: 0.13, at: [-0.36, 0.34, 0.3], turn: -0.35 },
  ]
  for (const satellite of satellites) {
    const small = new THREE.BoxGeometry(satellite.size, satellite.size, satellite.size, 3, 3, 3).toNonIndexed()
    const smallPosition = small.attributes.position
    const v = V()
    for (let i = 0; i < smallPosition.count; i++) {
      v.fromBufferAttribute(smallPosition, i)
      const limit = satellite.size * 0.42
      v.x = THREE.MathUtils.clamp(v.x, -limit, limit)
      v.y = THREE.MathUtils.clamp(v.y, -limit, limit)
      v.z = THREE.MathUtils.clamp(v.z, -limit, limit)
      smallPosition.setXYZ(i, v.x, v.y, v.z)
    }
    small.deleteAttribute('uv')
    small.rotateY(satellite.turn)
    small.rotateZ(satellite.turn * 0.4)
    small.translate(...satellite.at)
    small.computeVertexNormals()
    appendGeometry(soup, small)
  }

  return [
    { name: 'SaltCrystal', geometry: soup.geometry(), material: 'Crystal' },
  ]
}

/* -------------------------------------------------------------------------- */
/*  2 — 20 ft box: corrugated shell, cast fittings, doors on named nodes       */
/* -------------------------------------------------------------------------- */
const BOX = { length: 4.8, height: 3.1, depth: 2.7 }
const HALF_L = BOX.length / 2
const HALF_H = BOX.height / 2
const HALF_D = BOX.depth / 2

function buildContainer() {
  const shell = new Soup()
  const frame = new Soup()
  const floor = new Soup()
  const castings = new Soup()

  // Back wall (z = -depth) and both ends (x = ±length).
  corrugatedSheet(shell, {
    length: BOX.length - 0.16,
    height: BOX.height - 0.1,
    origin: V(0, 0, -HALF_D + 0.02),
    u: V(-1, 0, 0),
    v: V(0, 1, 0),
    depth: 0.05,
    pitch: 0.17,
  })
  for (const side of [-1, 1]) {
    corrugatedSheet(shell, {
      length: BOX.depth - 0.16,
      height: BOX.height - 0.1,
      origin: V(side * (HALF_L - 0.02), 0, 0),
      u: V(0, 0, side),
      v: V(0, 1, 0),
      depth: 0.05,
      pitch: 0.15,
      flip: side > 0,
    })
  }
  // Roof: shallow ribs running across the width.
  corrugatedSheet(shell, {
    length: BOX.length - 0.16,
    height: BOX.depth - 0.16,
    origin: V(0, HALF_H - 0.02, 0),
    u: V(1, 0, 0),
    v: V(0, 0, -1),
    depth: 0.022,
    pitch: 0.52,
    ribRatio: 0.34,
  })

  // Floor plate and the forklift rails under it.
  addBox(floor, [BOX.length - 0.24, 0.045, BOX.depth - 0.24], [0, -HALF_H + 0.08, 0])

  // Perimeter frame: corner posts, top and bottom rails.
  for (const x of [-1, 1]) {
    for (const z of [-1, 1]) {
      addBox(frame, [0.15, BOX.height, 0.15], [x * (HALF_L - 0.05), 0, z * (HALF_D - 0.05)])
      for (const y of [-1, 1]) {
        addBox(castings, [0.24, 0.22, 0.26], [x * (HALF_L - 0.02), y * (HALF_H - 0.11), z * (HALF_D - 0.02)])
      }
    }
  }
  for (const y of [-1, 1]) {
    for (const z of [-1, 1]) {
      // Deeper than the corrugation so the sheet's cut edge never shows as a
      // sawtooth along the top and bottom of the box.
      addBox(frame, [BOX.length - 0.1, 0.16, 0.22], [0, y * (HALF_H - 0.08), z * (HALF_D - 0.11)])
    }
    for (const x of [-1, 1]) {
      addBox(frame, [0.12, 0.14, BOX.depth - 0.1], [x * (HALF_L - 0.06), y * (HALF_H - 0.07), 0])
    }
  }

  // Each leaf is authored around its own hinge, which sits at the node origin:
  // the left leaf grows along +x, the right leaf along -x, so a single
  // rotation.y on the node swings them open like real double doors.
  const doors = [-1, 1].map((side) => {
    const door = new Soup()
    const width = HALF_L - 0.1
    corrugatedSheet(door, {
      length: width,
      height: BOX.height - 0.24,
      origin: V((-side * width) / 2, 0, 0),
      u: V(-side, 0, 0),
      v: V(0, 1, 0),
      depth: 0.042,
      pitch: 0.19,
      flip: side > 0,
    })
    // Two locking bars per leaf, with a cam at the sill and a handle at eye level.
    for (const fraction of [0.28, 0.74]) {
      const x = -side * width * fraction
      addCylinder(door, 0.021, BOX.height - 0.44, [x, 0, 0.075])
      addBox(door, [0.1, 0.06, 0.05], [x, -HALF_H + 0.42, 0.1])
      addBox(door, [0.06, 0.05, 0.11], [x, 0.34, 0.13])
    }
    // Hinges on the pivot edge.
    for (const y of [-0.9, 0, 0.9]) {
      addBox(door, [0.06, 0.14, 0.12], [-side * 0.04, y, 0.02])
    }
    return { side, soup: door }
  })

  return [
    { name: 'container-shell', geometry: shell.geometry(), material: 'ContainerPaint' },
    { name: 'container-frame', geometry: frame.geometry(), material: 'ContainerFrame' },
    { name: 'container-floor', geometry: floor.geometry(), material: 'ContainerFloor' },
    { name: 'container-castings', geometry: castings.geometry(), material: 'ContainerCastings' },
    ...doors.map(({ side, soup }) => ({
      name: side < 0 ? 'door-left' : 'door-right',
      geometry: soup.geometry(),
      material: 'ContainerDoor',
      translation: [side * (HALF_L - 0.02), 0, HALF_D + 0.06],
    })),
  ]
}


/* -------------------------------------------------------------------------- */
/*  3 — The 50 kg sack: a filled, stitched PP bag, not a box                   */
/* -------------------------------------------------------------------------- */
/* A real 50 kg PP sack is roughly 55 × 95 cm standing, about 25 cm thick — a
   flattened pillow, not a cube. The print panel is 55 × 90, so the mesh keeps
   that 0.61 aspect and the artwork never looks stretched. */
/* Filled proportions, not the flat panel: 55 × 95 cm of fabric holds 50 kg of
   salt and swells to about 61 × 86 cm standing — the silhouette in the photo. */
const SACK = { width: 1.44, height: 2.06, depth: 0.64, rings: 40, segments: 72 }
const SACK_PROFILE = [
  [0, 0.802, 0.404],
  [0.1, 0.812, 0.436],
  [0.3, 0.82, 0.442],
  [0.52, 0.815, 0.43],
  [0.7, 0.806, 0.4],
  [0.86, 0.793, 0.328],
  [0.96, 0.784, 0.19],
  [1, 0.776, 0.072],
]

const smooth = (a) => a * a * (3 - 2 * a)

function sackProfile(t) {
  const clamped = THREE.MathUtils.clamp(t, 0, 1)
  for (let i = 0; i < SACK_PROFILE.length - 1; i++) {
    const [t0, w0, d0] = SACK_PROFILE[i]
    const [t1, w1, d1] = SACK_PROFILE[i + 1]
    if (clamped <= t1 || i === SACK_PROFILE.length - 2) {
      const k = smooth((clamped - t0) / (t1 - t0))
      return {
        w: THREE.MathUtils.lerp(w0, w1, k) * 0.885,
        d: THREE.MathUtils.lerp(d0, d1, k) * 0.735,
      }
    }
  }
  return { w: 0.78, d: 0.4 }
}

/** How close a point is to one of the four gusset folds that separate the flat
 *  front/back panels from the two side panels. 1 on the fold, 0 in the panel. */
function creaseAt(theta) {
  const quarter = Math.PI / 2
  const local = ((theta % quarter) + quarter) % quarter
  const distance = Math.abs(local - quarter / 2) / (quarter / 2)
  return Math.exp(-Math.pow(distance / 0.24, 2))
}

/** Point on the bag's skin. `theta` runs around the bag, `t` bottom → top. */
function sackSurface(theta, t) {
  const base = sackProfile(t)
  // The shoulders gather in the last few centimetres, so the section relaxes
  // towards a circle only right under the welt.
  const n = 3.4 - 1.15 * smooth(THREE.MathUtils.clamp((t - 0.83) / 0.17, 0, 1))
  const cos = Math.cos(theta)
  const sin = Math.sin(theta)

  // The load settles: the base spreads and flattens a little.
  const settle = Math.exp(-Math.pow(t / 0.12, 2))
  // A soft horizontal fold where the shoulders take the weight.
  const shoulder = Math.exp(-Math.pow((t - 0.86) / 0.075, 2))
  const w = base.w * (1 + 0.055 * settle) * (1 - 0.012 * shoulder)
  const d = base.d * (1 + 0.03 * settle) * (1 - 0.03 * shoulder)

  // The fabric tucks under itself where the bag sits, so the base is rounder
  // than the widest cross-section.
  const toe = 0.975 + 0.025 * smooth(THREE.MathUtils.clamp(t / 0.12, 0, 1))
  // Gusset folds fade out at the base and under the shoulder, where the fabric
  // is gathered instead.
  const creaseWindow =
    THREE.MathUtils.smoothstep(t, 0.03, 0.14) * (1 - THREE.MathUtils.smoothstep(t, 0.86, 0.96))
  const fold = toe * (1 - 0.058 * creaseAt(theta) * (0.35 + 0.65 * creaseWindow))
  const x = w * Math.sign(cos) * Math.pow(Math.abs(cos), 2 / n) * fold
  const z = d * Math.sign(sin) * Math.pow(Math.abs(sin), 2 / n) * fold

  // Woven PP never hangs perfectly; two low-frequency ripples fake the folds
  // that a 50 kg load puts into the fabric.
  const wrinkle =
    1 + 0.03 * Math.sin(6 * theta + 9 * t) + 0.016 * Math.sin(11 * theta - 5.5 * t) +
    0.011 * Math.sin(19 * theta + 2 * t) + 0.0075 * Math.sin(27 * theta - 13 * t) +
    0.005 * Math.sin(41 * theta + 17 * t)
  // Under the folded top the fabric puckers into short horizontal creases; the
  // same happens where the load settles at the base.
  // Fine horizontal crinkle lines, the ones that catch the light across the face.
  const crinkleCurve = Math.sin(21 * t + 1.6 * Math.sin(5 * theta))
  const crinkle =
    0.008 *
    Math.sign(crinkleCurve) *
    Math.pow(Math.abs(crinkleCurve), 0.55) *
    (0.35 + 0.65 * Math.sin(Math.PI * t))
  const puckers =
    0.006 * Math.sin(34 * t + 2.4 * Math.sin(3 * theta)) * Math.exp(-Math.pow((t - 0.93) / 0.05, 2)) +
    0.005 * Math.sin(46 * t - 1.7 * Math.sin(4 * theta)) * Math.exp(-Math.pow((t - 0.1) / 0.06, 2))
  // One long soft fold runs down the printed face where the fabric was folded
  // flat before filling; it fades out towards the base.
  const frontFold =
    -0.014 *
    Math.exp(-Math.pow((theta - (Math.PI / 2 + 0.62)) / 0.085, 2)) *
    THREE.MathUtils.smoothstep(t, 0.18, 0.42)
  // Where the fabric is gathered into the welt it creases diagonally out of
  // each top corner — the marks that make the top of a filled sack read right.
  const shoulderCrease =
    -0.02 *
    Math.exp(-Math.pow((t - 0.885) / 0.05, 2)) *
    Math.exp(-Math.pow((Math.abs(Math.cos(theta)) - 0.66) / 0.22, 2))
  // The bottom hem is a folded welt too, so the fabric lifts just above the
  // floor before it tucks under the bag.
  const hemLip = 0.009 * Math.exp(-Math.pow((t - 0.035) / 0.022, 2))
  // The side gussets bulge in slow, uneven lobes; this is what makes the
  // silhouette of a filled sack wobble instead of running dead straight.
  const sideLobe =
    0.012 *
    Math.sin(4.4 * t * Math.PI + 0.6) *
    Math.exp(-Math.pow(Math.abs(Math.sin(theta)) / 0.5, 2)) *
    (1 - THREE.MathUtils.smoothstep(t, 0.9, 1))
  // A filled bag never stands plumb: the fabric leans off its base.
  const lean = 0.035 * Math.sin(t * Math.PI * 1.15) - 0.012
  // Two dents where the bottom corners take the brunt of the load.
  const dents =
    -0.012 * Math.exp(-Math.pow((t - 0.06) / 0.05, 2)) *
    Math.exp(-Math.pow(Math.abs(Math.sin(theta)) / 0.25, 2))
  return {
    x: (x + sideLobe + hemLip * Math.sign(x)) * wrinkle + lean + puckers + crinkle + frontFold + shoulderCrease,
    z:
      (z + dents + hemLip * Math.sign(z)) * wrinkle +
      puckers * 0.7 +
      crinkle * 0.8 +
      frontFold +
      shoulderCrease * 0.8,
    w,
    d,
    n,
  }
}

function sackNormal(theta, t) {
  const surface = sackSurface(theta, t)
  const { w, d, n } = surface
  const { x, z } = surface
  const gx = (Math.pow(Math.abs(x) / w, n - 1) * Math.sign(x)) / w
  const gz = (Math.pow(Math.abs(z) / d, n - 1) * Math.sign(z)) / d
  const length = Math.hypot(gx, gz) || 1
  return { x: gx / length, z: gz / length }
}

function buildSack() {
  const body = new Soup()
  const panel = new Soup()
  const { rings, segments, height } = SACK
  const bottom = -height / 2
  const pointAt = (j, i, offset = 0) => {
    const theta = (j / segments) * Math.PI * 2
    const t = i / (rings - 1)
    const surface = sackSurface(theta, t)
    const normal = sackNormal(theta, t)
    return V(
      surface.x + normal.x * offset,
      bottom + t * height,
      surface.z + normal.z * offset,
    )
  }

  for (let i = 0; i < rings - 1; i++) {
    for (let j = 0; j < segments; j++) {
      const uv = (jj, ii) => [(jj / segments) * 3, ii / (rings - 1)]
      body.quad(
        pointAt(j, i),
        pointAt(j, i + 1),
        pointAt(j + 1, i + 1),
        pointAt(j + 1, i),
        false,
        [uv(j, i), uv(j, i + 1), uv(j + 1, i + 1), uv(j + 1, i)],
      )
    }
  }

  // Bottom: a flat gusset with the fabric folded under.
  const centre = V(0, bottom - 0.012, 0)
  for (let j = 0; j < segments; j++) {
    body.tri(centre, pointAt(j, 0), pointAt(j + 1, 0))
  }

  // Sealed mouth: the bag is pinched flat and stitched, so the top two rings
  // collapse into a thin slab.
  // The reference sack is closed by folding the mouth over itself and stitching
  // it into a flat welt — a straight band that sits a little wider than the
  // shoulders, with the two top corners poking out as small ears.
  const leant = 0.035 * Math.sin(Math.PI * 1.15) - 0.012
  const shoulderW = SACK_PROFILE[SACK_PROFILE.length - 1][1] * 0.885
  const mouth = [
    [height / 2 + 0.002, shoulderW * 1.0, 0.060, 0, 2.15],
    [height / 2 + 0.02, shoulderW * 1.055, 0.058, 0.3, 3.2],
    [height / 2 + 0.044, shoulderW * 1.055, 0.052, 0.66, 4.2],
    [height / 2 + 0.056, shoulderW * 1.0, 0.046, 1, 4.6],
  ]
  const mouthPoint = (j, band, offset = 0) => {
    const theta = (j / segments) * Math.PI * 2
    const [, w, d, drift, n] = mouth[band]
    const cos = Math.cos(theta)
    const sin = Math.sin(theta)
    return V(
      w * Math.sign(cos) * Math.pow(Math.abs(cos), 2 / n) + offset * Math.sign(cos) + leant * drift,
      mouth[band][0],
      d * Math.sign(sin) * Math.pow(Math.abs(sin), 2 / n) + offset * Math.sign(sin) - 0.01 * drift,
    )
  }
  for (let band = 0; band < mouth.length - 1; band++) {
    for (let j = 0; j < segments; j++) {
      body.quad(mouthPoint(j, band), mouthPoint(j, band + 1), mouthPoint(j + 1, band + 1), mouthPoint(j + 1, band))
    }
  }
  // Cap the slab so the stitch line has a surface to sit on.
  const topRing = Array.from({ length: segments }, (_, j) => mouthPoint(j, mouth.length - 1))
  const topCentre = V(0, mouth[mouth.length - 1][0], 0)
  for (let j = 0; j < segments; j++) {
    body.tri(topCentre, topRing[(j + 1) % segments], topRing[j])
  }

  // Stitch dashes: two rows of short ribs along the sealed welt, one row on
  // each face, exactly where the real sack is sewn.
  for (const side of [-1, 1]) {
    for (let k = -7; k <= 7; k++) {
      addBox(body, [0.024, 0.004, 0.0035], [k * 0.064 + leant, height / 2 + 0.014, side * 0.0575])
      addBox(body, [0.024, 0.004, 0.0035], [k * 0.064 + leant, height / 2 + 0.042, side * 0.0495])
    }
  }

  // Printed face: its own shell floating 5 mm proud of the body, with upright
  // UVs so the artwork wraps the front panel without seaming the sides.
  const cols = 32
  const rows = 40
  // The print runs nearly the whole face: the sack's margins are its own,
  // baked into the artwork, so the panel hugs the fabric top and bottom.
  // Stops just short of the shoulders: past t ≈ 0.95 the body gathers into
  // the welt and the panel would dip under it and get clipped.
  const t0 = 0.03
  const t1 = 0.945
  const spread = 0.98
  const panelPoint = (c, r) => {
    const s = (c / cols) * 2 - 1
    const t = t0 + (r / rows) * (t1 - t0)
    const theta = Math.PI / 2 + s * spread
    const surface = sackSurface(theta, t)
    const normal = sackNormal(theta, t)
    // The panel is a chord between rows, so it has to stand further off the
    // body where the shoulder curves hard or the fabric pokes through it.
    const lift = 0.006 + 0.026 * THREE.MathUtils.smoothstep(t, 0.8, 0.94)
    return {
      point: V(surface.x + normal.x * lift, bottom + t * height, surface.z + normal.z * lift),
      // u runs against +x: the panel faces +z, so an upright viewer reads the
      // artwork left-to-right only if u is mirrored relative to the surface.
      uv: [1 - c / cols, r / rows],
    }
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const a = panelPoint(c, r)
      const b = panelPoint(c, r + 1)
      const d = panelPoint(c + 1, r + 1)
      const e = panelPoint(c + 1, r)
      panel.quad(a.point, b.point, d.point, e.point, false, [a.uv, b.uv, d.uv, e.uv])
    }
  }

  // Cheap baked occlusion: real sacks are dirty and shadowed in every fold, and
  // a vertex tint sells that far better than a uniform base colour.
  const bodyGeometry = body.geometry(true)
  const panelGeometry = panel.geometry(true)
  bakeOcclusion(bodyGeometry, bottom, height, 1)
  // The print panel barely shades: a real print is evenly inked, only the
  // very edges fall into the bag's own shadow.
  bakeOcclusion(panelGeometry, bottom, height, 0.8)

  return [
    { name: 'sack-body', geometry: bodyGeometry, material: 'SackBody' },
    { name: 'sack-panel', geometry: panelGeometry, material: 'SackPrint' },
  ]
}

function bakeOcclusion(geometry, bottom, height, strength) {
  const position = geometry.attributes.position
  const colors = []
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i)
    const y = position.getY(i)
    const z = position.getZ(i)
    const t = THREE.MathUtils.clamp((y - bottom) / height, 0, 1)
    const { w, d } = sackProfile(t)
    const crease = creaseAt(Math.atan2(z / d, x / w))

    let shade = 0
    shade += 0.22 * crease * (1 - Math.abs(t - 0.5) * 0.5)
    shade += 0.3 * Math.exp(-Math.pow(t / 0.07, 2))
    shade += 0.16 * Math.exp(-Math.pow((t - 0.9) / 0.06, 2))
    shade += 0.34 * THREE.MathUtils.clamp((t - 0.962) / 0.038, 0, 1)
    shade += 0.05 * (0.5 + 0.5 * Math.sin(9 * Math.atan2(z, x) + 11 * t))
    const ao = THREE.MathUtils.clamp(1 - shade * strength, 0.5, 1)
    colors.push(ao, ao, ao)
  }
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
}


/* -------------------------------------------------------------------------- */
/*  4 — A pressed water-softening salt tablet                                 */
/* -------------------------------------------------------------------------- */
/* A real tablet is pressed salt: a squat cylinder with a wide chamfer, a
   slightly dished face and an imperfect rim. Modelled as a lathe so the
   highlight rolls where the die pressed it. */
const TABLET_SEGMENTS = 44
const TABLET_PROFILE = [
  [0.0, 0.478],
  [0.3, 0.492],
  [0.62, 0.5],
  [0.8, 0.494],
  [0.9, 0.472],
  [0.965, 0.43],
  [0.995, 0.372],
  [1.0, 0.3],
  [1.0, -0.3],
  [0.995, -0.372],
  [0.965, -0.43],
  [0.9, -0.472],
  [0.8, -0.494],
  [0.62, -0.5],
  [0.3, -0.492],
  [0.0, -0.478],
]

function buildTablet() {
  const soup = new Soup()
  const ring = (band, j) => {
    const [radius, height] = TABLET_PROFILE[band]
    const theta = (j / TABLET_SEGMENTS) * Math.PI * 2
    // A pressed tablet is never perfectly round or flat.
    const wobble = 1 + 0.006 * Math.sin(3 * theta + 1.1) + 0.004 * Math.sin(7 * theta - 0.4)
    const r = radius * wobble
    const y =
      height +
      0.004 * Math.sin(4 * theta + band * 0.7) * (radius > 0.85 ? 1 : 0.35) +
      0.002 * Math.cos(2 * theta)
    const squash = 1 + 0.012 * Math.cos(2 * theta)
    return V(r * Math.cos(theta) * squash, y, r * Math.sin(theta))
  }

  for (let band = 0; band < TABLET_PROFILE.length - 1; band++) {
    for (let j = 0; j < TABLET_SEGMENTS; j++) {
      const jj = j + 1
      soup.quad(ring(band, j), ring(band, jj), ring(band + 1, jj), ring(band + 1, j), false, [
        [j / TABLET_SEGMENTS, band / TABLET_PROFILE.length],
        [jj / TABLET_SEGMENTS, band / TABLET_PROFILE.length],
        [jj / TABLET_SEGMENTS, (band + 1) / TABLET_PROFILE.length],
        [j / TABLET_SEGMENTS, (band + 1) / TABLET_PROFILE.length],
      ])
    }
  }

  // Flat-ish faces, fanned from the axis so the dish still shades.
  const top = V(0, TABLET_PROFILE[0][1], 0)
  const bottom = V(0, TABLET_PROFILE[TABLET_PROFILE.length - 1][1], 0)
  for (let j = 0; j < TABLET_SEGMENTS; j++) {
    const jj = j + 1
    soup.tri(top, ring(0, j), ring(0, jj))
    soup.tri(bottom, ring(TABLET_PROFILE.length - 1, jj), ring(TABLET_PROFILE.length - 1, j))
  }

  return [{ name: 'salt-tablet', geometry: soup.geometry(true), material: 'SaltTablet' }]
}

/* -------------------------------------------------------------------------- */
/*  Export                                                                    */
/* -------------------------------------------------------------------------- */
/* glTF baseColorFactor is linear, so every palette entry is converted from the
   sRGB hex the editorial art direction actually specifies. */
const linear = (color) => {
  const c = new THREE.Color(color)
  return [c.r, c.g, c.b, 1]
}

const MATERIALS = {
  Crystal: { color: linear('#f5fffd'), metallic: 0, roughness: 0.06 },
  ContainerPaint: { color: linear('#17484c'), metallic: 0.5, roughness: 0.58 },
  ContainerFrame: { color: linear('#28656a'), metallic: 0.62, roughness: 0.48 },
  ContainerDoor: { color: linear('#1b565b'), metallic: 0.58, roughness: 0.5 },
  ContainerFloor: { color: linear('#6b5a44'), metallic: 0.05, roughness: 0.94 },
  ContainerCastings: { color: linear('#3f4a4a'), metallic: 0.72, roughness: 0.52 },
  SackBody: { color: linear('#e0d9c6'), metallic: 0, roughness: 0.92 },
  SackPrint: { color: linear('#ffffff'), metallic: 0, roughness: 0.86 },
  SaltTablet: { color: linear('#fbfaf5'), metallic: 0, roughness: 0.62 },
}

async function writeGlb(nodes, file, label) {
  const document = new Document()
  const buffer = document.createBuffer()
  const scene = document.createScene('Scene')
  const materials = new Map()

  for (const node of nodes) {
    const geometry = node.geometry
    const material =
      materials.get(node.material) ??
      (() => {
        const spec = MATERIALS[node.material]
        const created = document
          .createMaterial(node.material)
          .setBaseColorFactor(spec.color)
          .setMetallicFactor(spec.metallic)
          .setRoughnessFactor(spec.roughness)
        materials.set(node.material, created)
        return created
      })()

    const position = document
      .createAccessor()
      .setType('VEC3')
      .setArray(new Float32Array(geometry.attributes.position.array))
      .setBuffer(buffer)
    const normal = document
      .createAccessor()
      .setType('VEC3')
      .setArray(new Float32Array(geometry.attributes.normal.array))
      .setBuffer(buffer)
    const uv = document
      .createAccessor()
      .setType('VEC2')
      .setArray(new Float32Array(geometry.attributes.uv.array))
      .setBuffer(buffer)
    const indices = document
      .createAccessor()
      .setType('SCALAR')
      .setArray(new Uint32Array(geometry.index.array))
      .setBuffer(buffer)
    const color = geometry.attributes.color
      ? document
          .createAccessor()
          .setType('VEC3')
          .setArray(new Float32Array(geometry.attributes.color.array))
          .setBuffer(buffer)
      : null

    const primitive = document
      .createPrimitive()
      .setAttribute('POSITION', position)
      .setAttribute('NORMAL', normal)
      .setAttribute('TEXCOORD_0', uv)
      .setIndices(indices)
      .setMaterial(material)
    if (color) primitive.setAttribute('COLOR_0', color)

    const mesh = document.createMesh(node.name).addPrimitive(primitive)
    const object = document.createNode(node.name).setMesh(mesh)
    if (node.translation) object.setTranslation(node.translation)
    scene.addChild(object)
  }

  document
    .createExtension(KHRDracoMeshCompression)
    .setRequired(true)
    .setEncoderOptions({ method: 'edgebreaker', encodeSpeed: 5, decodeSpeed: 5, quantizationBits: 14 })

  const io = new NodeIO()
    .registerExtensions([KHRDracoMeshCompression])
    .registerDependencies({
      'draco3d.encoder': await draco3d.createEncoderModule(),
      'draco3d.decoder': await draco3d.createDecoderModule(),
    })

  const target = path.join(outDir, file)
  await io.write(target, document)
  const { size } = await stat(target)
  console.log(`${label.padEnd(18)} ${(size / 1024).toFixed(1).padStart(6)} kB  →  ${path.relative(root, target)}`)
}

await writeGlb(buildCrystal(), 'salt-crystal.glb', 'salt-crystal')
await writeGlb(buildContainer(), 'container.glb', 'container')
await writeGlb(buildSack(), 'sack.glb', 'sack')
await writeGlb(buildTablet(), 'tablet.glb', 'salt-tablet')
console.log('Draco decoder copied to public/draco')
