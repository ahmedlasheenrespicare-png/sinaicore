/**
 * Generates the single 3D asset used by the story: a faceted halite crystal
 * exported as GLB with KHR_draco_mesh_compression. Run with `npm run models`.
 *
 * Everything else in the scene is procedural geometry, so there is no other
 * mesh payload to download. The decoder is copied from three.js into
 * public/draco so no external CDN is required at runtime.
 */
import { mkdir, copyFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import * as THREE from 'three'
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

// A slightly chamfered cubic crystal — the natural habit of halite.
const geometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5)
const position = geometry.attributes.position
const v = new THREE.Vector3()
for (let i = 0; i < position.count; i++) {
  v.fromBufferAttribute(position, i)
  const clamped = v.clone()
  clamped.x = THREE.MathUtils.clamp(clamped.x, -0.41, 0.41)
  clamped.y = THREE.MathUtils.clamp(clamped.y, -0.41, 0.41)
  clamped.z = THREE.MathUtils.clamp(clamped.z, -0.41, 0.41)
  v.lerp(clamped, 0.3)
  v.multiplyScalar(1.06)
  position.setXYZ(i, v.x, v.y, v.z)
}
geometry.computeVertexNormals()

const document = new Document()
const buffer = document.createBuffer()
const positions = document
  .createAccessor('POSITION')
  .setType('VEC3')
  .setArray(new Float32Array(geometry.attributes.position.array))
  .setBuffer(buffer)
const normals = document
  .createAccessor('NORMAL')
  .setType('VEC3')
  .setArray(new Float32Array(geometry.attributes.normal.array))
  .setBuffer(buffer)
const indices = document
  .createAccessor('INDICES')
  .setType('SCALAR')
  .setArray(new Uint16Array(geometry.index.array))
  .setBuffer(buffer)

const material = document
  .createMaterial('Crystal')
  .setBaseColorFactor([0.96, 1, 0.99, 1])
  .setMetallicFactor(0)
  .setRoughnessFactor(0.06)

const primitive = document
  .createPrimitive()
  .setAttribute('POSITION', positions)
  .setAttribute('NORMAL', normals)
  .setIndices(indices)
  .setMaterial(material)

const mesh = document.createMesh('SaltCrystal').addPrimitive(primitive)
const node = document.createNode('SaltCrystal').setMesh(mesh)
document.createScene('Scene').addChild(node)

document
  .createExtension(KHRDracoMeshCompression)
  .setRequired(true)
  .setEncoderOptions({
    method: 'edgebreaker',
    encodeSpeed: 5,
    decodeSpeed: 5,
    quantizationBits: 14,
  })

const io = new NodeIO()
  .registerExtensions([KHRDracoMeshCompression])
  .registerDependencies({
    'draco3d.encoder': await draco3d.createEncoderModule(),
    'draco3d.decoder': await draco3d.createDecoderModule(),
  })

const target = path.join(outDir, 'salt-crystal.glb')
await io.write(target, document)
console.log(`Wrote ${path.relative(root, target)} (Draco-compressed GLB)`)
