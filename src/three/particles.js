/* brine dust and the measurement rings around the specimen */

import * as THREE from 'three'
import { isMobile, seeded } from '../core/utils.js'

export function createParticles() {
  const group = new THREE.Group()
  group.name = 'atmosphere'

  const count = isMobile() ? 420 : 1500
  const rand = seeded(31)
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const seeds = new Float32Array(count)

  const copper = new THREE.Color(0xc2712f)
  const blue = new THREE.Color(0x1a6b9c)
  const pale = new THREE.Color(0xe9f4f8)

  for (let i = 0; i < count; i++) {
    const r = 1.4 + rand() * 3.2
    const theta = rand() * Math.PI * 2
    const phi = Math.acos(2 * rand() - 1)
    positions[i * 3] = Math.sin(phi) * Math.cos(theta) * r
    positions[i * 3 + 1] = Math.cos(phi) * r * 0.75 + 0.2
    positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r
    seeds[i] = rand() * Math.PI * 2

    const c = rand() < 0.55 ? copper : rand() < 0.7 ? blue : pale
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const mat = new THREE.PointsMaterial({
    size: 0.014,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })

  const points = new THREE.Points(geo, mat)
  points.frustumCulled = false
  group.add(points)

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

  function update(state, time) {
    points.rotation.y = time * 0.000025
    points.position.y = Math.sin(time * 0.00022) * 0.04
    mat.opacity = state.particles * 0.5
    ringA.rotation.z = 0.15 + time * 0.00006
    ringB.rotation.z = -0.2 - time * 0.00004
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

  return { group, update, dispose }
}
