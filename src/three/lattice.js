/* the halite lattice — 76 Draco nodes, disassembled by the scroll score */

import * as THREE from 'three'
import { clamp, easeInOut, seeded, reducedMotion } from '../core/utils.js'

const Y_AXIS = new THREE.Vector3(0, 1, 0)
const CENTER = new THREE.Vector3(0, 0.25, 0)

export async function loadLattice(loader, baseUrl = '') {
  const gltf = await loader.loadAsync(`${baseUrl}/models/halite-lattice.glb`)
  const group = gltf.scene
  group.name = 'halite-lattice'
  group.scale.setScalar(1.12)

  const rand = seeded(19)
  const parts = []
  const haliteMeshes = []
  let rockMeshes = []

  group.traverse((obj) => {
    if (!obj.isMesh) return
    obj.frustumCulled = false
    const name = obj.name || ''
    if (!/^(cell|seed|fragment)_/.test(name)) {
      if (name.startsWith('host_rock')) rockMeshes.push(obj)
      return
    }

    const restPos = obj.position.clone()
    const restQuat = obj.quaternion.clone()
    const restScale = obj.scale.clone()

    const dir = restPos.clone().sub(CENTER)
    if (dir.lengthSq() < 1e-4) dir.set(rand() - 0.5, rand() - 0.5, rand() - 0.5)
    dir.normalize()
    dir.y += 0.16
    dir.normalize()

    const m = name.match(/^cell_(\d)(\d)(\d)$/)
    const aligned = m
      ? new THREE.Vector3(
          (Number(m[1]) - 1.5) * 0.52,
          (Number(m[2]) - 1.5) * 0.52 + CENTER.y,
          (Number(m[3]) - 1.5) * 0.52,
        )
      : restPos.clone().addScaledVector(dir, 0.9)

    const idx = parts.length
    const slab = idx % 3
    const angle = idx * 2.399963229728653
    const radius = 0.52 + (idx % 7) * 0.085
    const sorted = new THREE.Vector3(
      Math.cos(angle) * radius,
      -0.55 + slab * 0.92,
      Math.sin(angle) * radius,
    )

    parts.push({
      mesh: obj,
      restPos,
      restQuat,
      restScale,
      dir,
      aligned,
      sorted,
      spinAxis: new THREE.Vector3(rand() * 2 - 1, rand() * 2 - 1, rand() * 2 - 1).normalize(),
      spin: 0.5 + rand() * 1.3,
      delay: Math.min(1.1, restPos.distanceTo(CENTER) / 1.15),
      phase: rand() * Math.PI * 2,
    })
    haliteMeshes.push(obj)
  })

  /* one physical material for every crystal — glass-clear halite with a
     copper core light behind it */
  const halite = new THREE.MeshPhysicalMaterial({
    color: 0xe6f1ec,
    metalness: 0,
    roughness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.045,
    ior: 1.48,
    envMapIntensity: 0.85,
    specularIntensity: 1,
    sheen: 0.2,
    sheenColor: new THREE.Color(0xcfe9f5),
    sheenRoughness: 0.45,
    transparent: false,
    opacity: 1,
    depthWrite: true,
  })

  const rock = new THREE.MeshStandardMaterial({
    color: 0x8d7c64,
    roughness: 0.94,
    metalness: 0.02,
    envMapIntensity: 0.5,
  })

  for (const mesh of haliteMeshes) mesh.material = halite
  for (const mesh of rockMeshes) mesh.material = rock

  /* a glowing seed at the centre of the lattice */
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.085, 1),
    new THREE.MeshBasicMaterial({ color: 0xe8b07a, transparent: true, opacity: 0.9 }),
  )
  core.position.copy(CENTER)
  group.add(core)

  const coreLight = new THREE.PointLight(0xc2712f, 5.5, 3.2, 2)
  coreLight.position.copy(CENTER)
  group.add(coreLight)

  const tmp = new THREE.Vector3()
  const q = new THREE.Quaternion()
  const qSpin = new THREE.Quaternion()

  let lastOpacity = -1
  const reduce = reducedMotion()

  function update(state, time) {
    group.rotation.y = state.rotate + (reduce ? 0 : time * 0.000035)
    group.rotation.z = reduce ? 0 : Math.sin(time * 0.00012) * 0.015

    for (const p of parts) {
      const e = easeInOut(clamp((state.explode - p.delay * 0.35) / 0.65))
      const a = state.align
      const s = state.sort
      const w = state.wash

      tmp.copy(p.restPos).addScaledVector(p.dir, e * 1.0)
      if (a > 0) tmp.lerp(p.aligned, a * (1 - s))
      if (s > 0) tmp.lerp(p.sorted, s)
      if (w > 0) {
        tmp.x += Math.sin(time * 0.0011 + p.phase) * 0.075 * w
        tmp.y += Math.cos(time * 0.0014 + p.phase) * 0.065 * w
        tmp.z += Math.sin(time * 0.0009 + p.phase * 1.7) * 0.05 * w
      }
      p.mesh.position.copy(tmp)

      q.copy(p.restQuat)
      if (e > 0.0001) {
        qSpin.setFromAxisAngle(p.spinAxis, p.spin * e)
        q.multiply(qSpin)
      }
      if (w > 0.0001) {
        qSpin.setFromAxisAngle(Y_AXIS, Math.sin(time * 0.001 + p.phase) * 0.3 * w)
        q.multiply(qSpin)
      }
      p.mesh.quaternion.copy(q)
    }

    const op = clamp(state.lattice)
    if (Math.abs(op - lastOpacity) > 0.002) {
      lastOpacity = op
      halite.opacity = op
      halite.transparent = op < 0.995
      halite.depthWrite = op > 0.55
      rock.opacity = (0.1 + op * 0.34) * (1 - clamp(state.explode) * 0.75)
      rock.transparent = rock.opacity < 0.995
      core.material.opacity = op * 0.9
      coreLight.intensity = 5.5 * op
    }
  }

  function dispose() {
    group.traverse((obj) => {
      if (obj.isMesh) {
        obj.geometry?.dispose()
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose())
        else obj.material?.dispose()
      }
    })
  }

  return { group, update, dispose, parts }
}
