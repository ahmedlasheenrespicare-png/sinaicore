/* brine dust: an InstancedMesh of real salt grains, plus the two
   measurement rings that frame the specimen.
 *
   One draw call for every grain — a Points cloud was cheaper still, but
   cubic grains read as salt and round sprites do not. */

import * as THREE from 'three'
import { isMobile, seeded } from '../core/utils.js'

export function createParticles() {
  const group = new THREE.Group()
  group.name = 'atmosphere'

  const count = isMobile() ? 220 : 900
  const rand = seeded(31)

  const geo = new THREE.OctahedronGeometry(1, 0)
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.42,
    metalness: 0.04,
    envMapIntensity: 1.1,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  })

  const grains = new THREE.InstancedMesh(geo, mat, count)
  grains.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
  grains.frustumCulled = false
  group.add(grains)

  const copper = new THREE.Color(0xc2712f)
  const blue = new THREE.Color(0x1a6b9c)
  const pale = new THREE.Color(0xf2fbf8)

  const base = new Float32Array(count * 3)
  const phase = new Float32Array(count)
  const speed = new Float32Array(count)
  const size = new Float32Array(count)
  const spin = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    const r = 0.95 + rand() * 1.85
    const theta = rand() * Math.PI * 2
    const phi = Math.acos(2 * rand() - 1)
    base[i * 3] = Math.sin(phi) * Math.cos(theta) * r
    base[i * 3 + 1] = Math.cos(phi) * r * 0.72 + 0.25
    base[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r

    phase[i] = rand() * Math.PI * 2
    speed[i] = 0.35 + rand() * 0.9
    size[i] = 0.005 + rand() * 0.013
    spin[i] = (rand() - 0.5) * 1.4

    const c = rand() < 0.5 ? pale : rand() < 0.55 ? copper : blue
    grains.setColorAt(i, c)
  }
  if (grains.instanceColor) grains.instanceColor.needsUpdate = true

  /* two hairline measurement rings */
  const ringMatA = new THREE.MeshBasicMaterial({
    color: 0xc2712f,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
  })
  const ringA = new THREE.Mesh(new THREE.TorusGeometry(1.62, 0.0035, 6, 180), ringMatA)
  ringA.rotation.x = Math.PI / 2.15
  ringA.rotation.z = 0.15
  group.add(ringA)

  const ringMatB = new THREE.MeshBasicMaterial({
    color: 0x1a6b9c,
    transparent: true,
    opacity: 0.22,
    depthWrite: false,
  })
  const ringB = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.0025, 6, 180), ringMatB)
  ringB.rotation.x = Math.PI / 1.75
  ringB.rotation.y = 0.45
  group.add(ringB)

  /* a thin vertical datum line */
  const axisGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -1.15, 0),
    new THREE.Vector3(0, 1.55, 0),
  ])
  const axisMat = new THREE.LineBasicMaterial({
    color: 0xc2712f,
    transparent: true,
    opacity: 0.12,
    depthWrite: false,
  })
  const axis = new THREE.Line(axisGeo, axisMat)
  group.add(axis)

  const dummy = new THREE.Object3D()
  let dirty = true

  function update(state, time) {
    const t = time * 0.001
    const density = state.particles
    grains.visible = density > 0.01
    if (grains.visible) {
      mat.opacity = 0.12 + density * 0.3
      for (let i = 0; i < count; i++) {
        const p = phase[i]
        const s = speed[i]
        dummy.position.set(
          base[i * 3] + Math.sin(t * s + p) * 0.16,
          base[i * 3 + 1] + Math.cos(t * s * 0.8 + p * 1.3) * 0.13,
          base[i * 3 + 2] + Math.sin(t * s * 0.6 + p * 1.7) * 0.16,
        )
        dummy.rotation.set(t * spin[i] + p, t * spin[i] * 0.7, p)
        const sc = size[i] * (0.75 + density * 0.5)
        dummy.scale.setScalar(sc)
        dummy.updateMatrix()
        grains.setMatrixAt(i, dummy.matrix)
      }
      grains.instanceMatrix.needsUpdate = true
    }

    grains.rotation.y = t * 0.02
    ringA.rotation.z = 0.15 + t * 0.05
    ringB.rotation.z = -0.2 - t * 0.04
    ringA.material.opacity = state.ring * 0.34
    ringB.material.opacity = state.ring * 0.24
    axisMat.opacity = state.ring * 0.14
  }

  function dispose() {
    geo.dispose()
    mat.dispose()
    ringA.geometry.dispose()
    ringA.material.dispose()
    ringB.geometry.dispose()
    ringB.material.dispose()
    axisGeo.dispose()
    axisMat.dispose()
  }

  return { group, update, dispose, count }
}
