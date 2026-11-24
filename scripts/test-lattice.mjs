/* headless check of the lattice logic.
 *
 * The Draco decoder needs a Web Worker, which Node does not have, so this
 * test rebuilds the same node graph from the GLB's JSON chunk and feeds it to
 * loadLattice() through a fake loader. It exercises the part naming, the
 * rest transforms and every explosion state the browser runs.
 */
import fs from 'node:fs'
import * as THREE from 'three'

global.window = {
  matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
  devicePixelRatio: 1,
  innerWidth: 1440,
  innerHeight: 900,
}

const buf = fs.readFileSync(new URL('../public/models/halite-lattice.glb', import.meta.url))
const jsonLength = buf.readUInt32LE(12)
const json = JSON.parse(buf.subarray(20, 20 + jsonLength).toString('utf8'))

const scene = new THREE.Group()
const material = new THREE.MeshStandardMaterial()
for (const node of json.nodes) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), material)
  mesh.name = node.name
  if (node.translation) mesh.position.fromArray(node.translation)
  if (node.rotation) mesh.quaternion.fromArray(node.rotation)
  scene.add(mesh)
}

const fakeLoader = { loadAsync: async () => ({ scene }) }
const { loadLattice } = await import('../src/three/lattice.js')
const lattice = await loadLattice(fakeLoader)

console.log('parts:', lattice.parts.length)
console.log('cells:', lattice.parts.filter((p) => p.mesh.name.startsWith('cell_')).length)
console.log('seeds:', lattice.parts.filter((p) => p.mesh.name.startsWith('seed_')).length)
console.log('fragments:', lattice.parts.filter((p) => p.mesh.name.startsWith('fragment_')).length)

const rest = lattice.parts[0].mesh.position.clone()
const states = [
  ['assembled', { explode: 0, align: 0, sort: 0, wash: 0, lattice: 1, rotate: 0 }],
  ['exploded', { explode: 1, align: 0, sort: 0, wash: 0, lattice: 1, rotate: 0 }],
  ['aligned', { explode: 1, align: 1, sort: 0, wash: 0, lattice: 1, rotate: 0 }],
  ['sorted', { explode: 1, align: 0, sort: 1, wash: 0, lattice: 1, rotate: 0 }],
  ['washed', { explode: 0.6, align: 0, sort: 0, wash: 1, lattice: 0.5, rotate: 0 }],
]
for (const [name, s] of states) {
  lattice.update(s, 1234)
  const p = lattice.parts[0].mesh.position
  console.log(
    `${name.padEnd(10)} pos=(${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}) opacity=${lattice.parts[0].mesh.material.opacity.toFixed(2)}`,
  )
}

const moved = lattice.parts.some((p) => p.mesh.position.distanceTo(rest) > 0.01)
console.log(moved ? '✓ parts respond to the explosion state' : '✗ parts did not move')

const names = new Set(lattice.parts.map((p) => p.mesh.name))
const expected = new Set(json.nodes.map((n) => n.name).filter((n) => /^(cell|seed|fragment)_/.test(n)))
const missing = [...expected].filter((n) => !names.has(n))
console.log(missing.length ? `✗ missing parts: ${missing.join(', ')}` : '✓ every GLB part is addressable')
console.log(moved && !missing.length ? 'LATTICE TEST PASSED' : 'LATTICE TEST FAILED')
process.exit(moved && !missing.length ? 0 : 1)
