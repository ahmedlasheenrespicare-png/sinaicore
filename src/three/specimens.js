/* the side specimens — tablets, the printed sack + FIBC, the globe + sample jar */

import * as THREE from 'three'

const SPECIMEN_FILES = {
  tablets: 'tablets.glb',
  sack: 'sack-50kg.glb',
  bag: 'jumbo-bag.glb',
  globe: 'globe.glb',
  jar: 'sample-jar.glb',
  container: 'container.glb',
}

function normalise(object, targetHeight) {
  const box = new THREE.Box3().setFromObject(object)
  const size = box.getSize(new THREE.Vector3())
  const scale = targetHeight / (size.y || 1)
  object.scale.multiplyScalar(scale)

  const box2 = new THREE.Box3().setFromObject(object)
  const center = box2.getCenter(new THREE.Vector3())
  object.position.sub(center)
  return object
}

/* the exported globe is a grey study model — recolour it into the
   notebook palette so it belongs on the paper */
function tintGlobe(root) {
  root.traverse((obj) => {
    if (!obj.isMesh) return
    const apply = (m) => {
      const ocean = /ocean/i.test(obj.name)
      m.color = new THREE.Color(ocean ? 0xb9d3e0 : 0x2c3d4d)
      m.roughness = ocean ? 0.45 : 0.75
      m.metalness = 0
      m.envMapIntensity = 0.9
      return m
    }
    obj.material = Array.isArray(obj.material) ? obj.material.map(apply) : apply(obj.material)
  })
}

function cloneMaterials(root) {
  const mats = new Set()
  root.traverse((obj) => {
    if (!obj.isMesh) return
    const clone = (m) => {
      const c = m.clone()
      c.transparent = true
      c.opacity = 0
      c.envMapIntensity = 1.15
      mats.add(c)
      return c
    }
    obj.material = Array.isArray(obj.material) ? obj.material.map(clone) : clone(obj.material)
    obj.frustumCulled = false
  })
  return [...mats]
}

export async function loadSpecimens(loader, baseUrl = '') {
  const entries = await Promise.all(
    Object.entries(SPECIMEN_FILES).map(async ([key, file]) => {
      try {
        const gltf = await loader.loadAsync(`${baseUrl}/models/${file}`)
        return [key, gltf.scene]
      } catch (err) {
        console.warn('[SinaiCore] specimen failed:', file, err)
        return [key, null]
      }
    }),
  )
  const models = Object.fromEntries(entries)

  const groups = {}

  /* 06 — the softening tablets, a small heap at the side */
  if (models.tablets) {
    const g = new THREE.Group()
    normalise(models.tablets, 0.9)
    models.tablets.position.add(new THREE.Vector3(-0.95, 0.2, 0.25))
    models.tablets.rotation.y = 0.5
    g.add(models.tablets)
    g.userData = { baseY: 0.2, rot: 0.5, phase: 0.4 }
    groups.tablets = { group: g, mats: cloneMaterials(g), opacity: 0 }
  }

  /* 07 — the printed 50 kg sack and the FIBC beside it */
  if (models.sack && models.bag) {
    const g = new THREE.Group()
    normalise(models.sack, 1.45)
    models.sack.position.add(new THREE.Vector3(-1.0, -0.25, 0.35))
    models.sack.rotation.y = 0.35
    g.add(models.sack)

    normalise(models.bag, 1.25)
    models.bag.position.add(new THREE.Vector3(0.05, -0.35, -0.55))
    models.bag.rotation.y = -0.35
    g.add(models.bag)
    g.userData = { baseY: 0, rot: 0, phase: 2.1 }
    groups.pack = { group: g, mats: cloneMaterials(g), opacity: 0 }
  }

  /* 08 — the export globe behind, the lab jar in front */
  if (models.globe && models.jar) {
    const g = new THREE.Group()
    normalise(models.globe, 1.75)
    models.globe.position.add(new THREE.Vector3(-0.85, 0.3, -1.1))
    tintGlobe(models.globe)
    g.add(models.globe)

    normalise(models.jar, 0.8)
    models.jar.position.add(new THREE.Vector3(0.15, -0.3, 0.75))
    models.jar.rotation.y = -0.4
    g.add(models.jar)
    g.userData = { baseY: 0, rot: 0, phase: 4.2 }
    groups.lab = { group: g, mats: cloneMaterials(g), opacity: 0 }
  }

  /* the container is kept for the export chapter's background, if wanted */
  if (models.container) {
    const g = new THREE.Group()
    normalise(models.container, 1.6)
    models.container.position.add(new THREE.Vector3(-1.2, 0, -1.6))
    models.container.rotation.y = 0.3
    g.add(models.container)
    g.userData = { baseY: 0, rot: 0.3, phase: 1.2 }
    groups.container = { group: g, mats: cloneMaterials(g), opacity: 0 }
  }

  let targetName = 'none'

  function show(name) {
    targetName = name
  }

  function update(state, time) {
    const global = state.specimenOpacity
    for (const [name, spec] of Object.entries(groups)) {
      const target = (name === targetName ? 1 : 0) * global
      spec.opacity += (target - spec.opacity) * 0.075
      if (spec.opacity < 0.004 && target === 0) {
        spec.opacity = 0
        spec.group.visible = false
        continue
      }
      spec.group.visible = true
      const { baseY, rot, phase } = spec.group.userData
      spec.group.rotation.y = rot + Math.sin(time * 0.00025 + phase) * 0.08
      spec.group.position.y = baseY + Math.sin(time * 0.0006 + phase) * 0.025
      for (const m of spec.mats) {
        m.opacity = spec.opacity
        m.depthWrite = spec.opacity > 0.6
      }
    }
  }

  function dispose() {
    for (const spec of Object.values(groups)) {
      spec.group.traverse((obj) => {
        if (obj.isMesh) obj.geometry?.dispose()
      })
      spec.mats.forEach((m) => m.dispose())
    }
  }

  return { groups, show, update, dispose }
}
