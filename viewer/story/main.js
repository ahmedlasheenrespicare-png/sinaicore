import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/500.css'
import '@fontsource/ibm-plex-sans-arabic/400.css'
import '@fontsource/ibm-plex-sans-arabic/500.css'
import '@fontsource/dm-mono/400.css'

import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { CSS2DObject, CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stage = document.getElementById('stage')
const status = document.getElementById('status')
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* -------------------------------------------------------------------------- */
/*  Renderer, camera, light                                                   */
/* -------------------------------------------------------------------------- */
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(stage.clientWidth, stage.clientHeight)
renderer.toneMapping = THREE.NeutralToneMapping
renderer.toneMappingExposure = 0.82
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
stage.appendChild(renderer.domElement)

const labelRenderer = new CSS2DRenderer()
labelRenderer.setSize(stage.clientWidth, stage.clientHeight)
labelRenderer.domElement.className = 'labels'
stage.appendChild(labelRenderer.domElement)

const scene = new THREE.Scene()
scene.background = null

const camera = new THREE.PerspectiveCamera(30, stage.clientWidth / stage.clientHeight, 0.05, 100)
camera.position.set(0.9, 1.15, 6.7)

const pmrem = new THREE.PMREMGenerator(renderer)
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
scene.environmentIntensity = 0.34

const key = new THREE.DirectionalLight('#fff4e4', 2.5)
key.position.set(-3.4, 5.2, 3.4)
key.castShadow = true
key.shadow.mapSize.set(2048, 2048)
key.shadow.camera.near = 1
key.shadow.camera.far = 20
key.shadow.camera.left = -4
key.shadow.camera.right = 4
key.shadow.camera.top = 5
key.shadow.camera.bottom = -3
key.shadow.bias = -0.0006
key.shadow.radius = 3
scene.add(key)

const rim = new THREE.DirectionalLight('#cfe0e6', 0.85)
rim.position.set(-4.4, 2.4, -3.2)
scene.add(rim)

scene.add(new THREE.HemisphereLight('#fffaf0', '#b7ae99', 0.6))

const FLOOR = -1.075
const floor = new THREE.Mesh(
  new THREE.CircleGeometry(7, 64),
  new THREE.ShadowMaterial({ color: '#16302d', opacity: 0.22 }),
)
floor.rotation.x = -Math.PI / 2
floor.position.y = FLOOR
floor.receiveShadow = true
scene.add(floor)

/* The left column carries the copy, so the frustum slides right. */
const applyViewOffset = () => {
  const width = stage.clientWidth
  const height = stage.clientHeight
  if (width < 1080) camera.clearViewOffset()
  else camera.setViewOffset(width, height, -width * 0.15, 0, width, height)
}
applyViewOffset()

/* -------------------------------------------------------------------------- */
/*  Story state — every value below is written by the scroll timeline         */
/* -------------------------------------------------------------------------- */
const state = {
  bag: { spin: 0, open: 0, tilt: 0, side: 0 },
  pour: { u: 0 },
  cam: { k: 0 },
  annot: { v: 0 },
}

const CAMERA_KEYS = [
  { pos: new THREE.Vector3(0.9, 1.15, 6.7), target: new THREE.Vector3(0, -0.12, 0.25) },
  { pos: new THREE.Vector3(0.5, 1.26, 5.15), target: new THREE.Vector3(0, 0.1, 0.15) },
  { pos: new THREE.Vector3(1.95, 1.05, 7.2), target: new THREE.Vector3(0.15, -0.3, 0.8) },
  { pos: new THREE.Vector3(0.5, -0.18, 3.3), target: new THREE.Vector3(-0.12, -1.0, 1.62) },
  { pos: new THREE.Vector3(2.85, 1.35, 7.9), target: new THREE.Vector3(0.8, -0.58, 0.65) },
]
const camPath = new THREE.CatmullRomCurve3(CAMERA_KEYS.map((k) => k.pos), false, 'catmullrom', 0.4)
const targetPath = new THREE.CatmullRomCurve3(CAMERA_KEYS.map((k) => k.target), false, 'catmullrom', 0.4)

/* -------------------------------------------------------------------------- */
/*  Assets                                                                    */
/* -------------------------------------------------------------------------- */
const stamp = `v=${Date.now()}`
const draco = new DRACOLoader().setDecoderPath('/draco/')
const loader = new GLTFLoader().setDRACOLoader(draco)

const bagRoot = new THREE.Group()
bagRoot.position.set(0, FLOOR, 0)
scene.add(bagRoot)
const sack = new THREE.Group()
bagRoot.add(sack)
let bagHeight = 2.06

let model = null
let mouth = null
let mouthAnchor = null
let pourMesh = null
let pourCount = 0
let annotationRoot = null
let focusPoint = new THREE.Vector3(-0.12, FLOOR + 0.05, 1.62)

const tablets = []

loader
  .loadAsync(`/models/sack.glb?${stamp}`)
  .then(async (gltf) => {
    const texture = await new THREE.TextureLoader().loadAsync(`/artwork/sack-50kg-texture.png?${stamp}`)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())

    const weave = await new THREE.TextureLoader().loadAsync(`/textures/sack-weave.png?${stamp}`)
    weave.wrapS = weave.wrapT = THREE.RepeatWrapping
    weave.repeat.set(4, 9)
    weave.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())

    const crumple = await new THREE.TextureLoader().loadAsync(`/textures/sack-crumple.png?${stamp}`)
    crumple.wrapS = crumple.wrapT = THREE.RepeatWrapping
    crumple.repeat.set(2, 2)
    crumple.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())

    const printed = new THREE.MeshPhysicalMaterial({
      map: texture,
      color: '#ffffff',
      vertexColors: true,
      bumpMap: weave,
      bumpScale: 0.045,
      normalMap: crumple,
      normalScale: new THREE.Vector2(0.5, 0.5),
      roughnessMap: weave,
      roughness: 1,
      metalness: 0,
      sheen: 0.08,
      sheenRoughness: 0.95,
      sheenColor: new THREE.Color('#ffffff'),
      envMapIntensity: 0.12,
    })
    const fabric = new THREE.MeshPhysicalMaterial({
      color: '#ffffff',
      vertexColors: true,
      bumpMap: weave,
      bumpScale: 0.045,
      normalMap: crumple,
      normalScale: new THREE.Vector2(0.6, 0.6),
      roughnessMap: weave,
      roughness: 0.96,
      metalness: 0,
      sheen: 0.22,
      sheenRoughness: 0.9,
      sheenColor: new THREE.Color('#ffffff'),
      envMapIntensity: 0.26,
    })

    model = gltf.scene
    model.traverse((node) => {
      if (!node.isMesh) return
      node.material = node.name === 'sack-panel' ? printed : fabric
      node.castShadow = true
      node.receiveShadow = false
    })
    // Measure before parenting: the box must be in the bag's own space.
    const bounds = new THREE.Box3().setFromObject(model)
    sack.add(model)
    bagHeight = bounds.max.y - bounds.min.y
    // Stand the bag on the floor inside its pivot, so the tilt swings the top.
    sack.position.y = -bounds.min.y
    const topY = bounds.max.y
    const halfW = (bounds.max.x - bounds.min.x) / 2
    const halfD = (bounds.max.z - bounds.min.z) / 2
    mouth = buildMouth(topY, halfW, halfD, fabric)
    mouthAnchor = mouth.anchor
    sack.add(mouth.group)

    /* ---- the tablets that pour out of it -------------------------------- */
    const tabletGltf = await loader.loadAsync(`/models/tablet.glb?${stamp}`)
    const tabletSource = tabletGltf.scene.getObjectByProperty('isMesh', true)
    const grain = await new THREE.TextureLoader().loadAsync(`/textures/salt-detail.png?${stamp}`)
    grain.wrapS = grain.wrapT = THREE.RepeatWrapping
    grain.repeat.set(3, 3)

    const tabletMaterial = new THREE.MeshPhysicalMaterial({
      color: '#f7f5ee',
      roughness: 0.74,
      metalness: 0,
      bumpMap: grain,
      bumpScale: 0.03,
      sheen: 0.4,
      sheenRoughness: 0.62,
      sheenColor: new THREE.Color('#fffdf7'),
      envMapIntensity: 0.45,
    })

    buildPour(tabletSource, tabletMaterial)
    buildAnnotations(focusPoint)

    status.dataset.state = 'ready'
    buildStory()
  })
  .catch((error) => {
    console.error(error)
    status.dataset.state = 'error'
    status.textContent = 'Could not load public/models/sack.glb — run npm run models'
  })

/* -------------------------------------------------------------------------- */
/*  The opened top of the bag                                                 */
/* -------------------------------------------------------------------------- */
function buildMouth(topY, halfW, halfD, fabric) {
  const group = new THREE.Group()
  group.position.y = topY - 0.015
  group.visible = false

  const rx = Math.min(halfW * 0.78, 0.52)
  const rz = Math.min(halfD * 0.62, 0.19)

  const dark = new THREE.MeshBasicMaterial({ color: '#232a29', transparent: true, opacity: 0 })
  const hole = new THREE.Mesh(new THREE.CircleGeometry(1, 48), dark)
  hole.scale.set(rx, rz, 1)
  hole.rotation.x = -Math.PI / 2
  hole.position.y = -0.02
  group.add(hole)

  /* A short dark throat gives the hole depth when the camera looks into it. */
  const throatMaterial = new THREE.MeshStandardMaterial({
    color: '#2a3130',
    roughness: 1,
    metalness: 0,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0,
  })
  const throat = new THREE.Mesh(new THREE.CylinderGeometry(1, 0.9, 0.3, 40, 1, true), throatMaterial)
  throat.scale.set(rx * 0.97, 1, rz * 0.97)
  throat.position.y = -0.15
  group.add(throat)

  const rimMat = new THREE.MeshPhysicalMaterial({
    color: '#f2efe6',
    roughness: 0.92,
    metalness: 0,
    sheen: 0.3,
    sheenRoughness: 0.8,
    sheenColor: new THREE.Color('#ffffff'),
    envMapIntensity: 0.2,
  })
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.055, 8, 56), rimMat)
  ring.scale.set(rx, rz, 1)
  ring.rotation.x = Math.PI / 2
  group.add(ring)

  /* Two half-discs hinged on the seam: they open outwards like a cut top. */
  const lipMaterial = fabric.clone()
  lipMaterial.color = new THREE.Color('#f6f3ec')
  const lips = []
  for (const flip of [0, 1]) {
    const pivot = new THREE.Group()
    const lip = new THREE.Mesh(new THREE.CircleGeometry(1, 32, flip * Math.PI, Math.PI), lipMaterial)
    lip.scale.set(rx, rz, 1)
    lip.rotation.x = -Math.PI / 2
    lip.castShadow = true
    pivot.add(lip)
    pivot.userData.flip = flip
    group.add(pivot)
    lips.push(pivot)
  }

  const anchor = new THREE.Object3D()
  anchor.position.set(0, 0.02, 0)
  group.add(anchor)

  return { group, hole, dark, throat: throatMaterial, lips, anchor }
}

/* -------------------------------------------------------------------------- */
/*  The pour: one InstancedMesh, one bezier per tablet                        */
/* -------------------------------------------------------------------------- */
const COUNT = 64

function buildPour(source, material) {
  const geometry = source.geometry.clone()
  pourMesh = new THREE.InstancedMesh(geometry, material, COUNT)
  pourMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
  pourMesh.frustumCulled = false
  pourMesh.castShadow = true
  pourMesh.receiveShadow = true
  scene.add(pourMesh)
  pourCount = COUNT

  let seed = 20261126
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
  }

  for (let i = 0; i < COUNT; i++) {
    // The first tablet is the hero: it lands centre-stage for the callouts.
    const hero = i === 0
    let end = hero ? focusPoint.clone() : new THREE.Vector3()
    if (!hero) {
      let distance = 0.55 + rnd() * 1.15
      const angle = (rnd() * 2 - 1) * 1.15
      for (let tries = 0; tries < 8; tries++) {
        end.set(0.3 + Math.sin(angle) * distance * 1.1, FLOOR + 0.05, 0.5 + Math.cos(angle) * distance)
        // Keep a clean patch around the hero disc, or the callouts get buried.
        if (end.distanceTo(focusPoint) > 0.72) break
        distance += 0.45
      }
    }

    tablets.push({
      end,
      hero,
      lift: 0.18 + rnd() * 0.34,
      drift: 0.34 + rnd() * 0.5,
      delay: (i / COUNT) * 0.32 + rnd() * 0.05,
      duration: 0.42 + rnd() * 0.2,
      scale: 0.108 + rnd() * 0.016,
      restYaw: rnd() * Math.PI * 2,
      spinAxis: new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize(),
      spinAmount: 2.4 + rnd() * 4.4,
      jitter: new THREE.Vector3((rnd() - 0.5) * 0.26, -0.05 - rnd() * 0.1, (rnd() - 0.5) * 0.1),
    })
  }

  const matrix = new THREE.Matrix4()
  for (let i = 0; i < COUNT; i++) pourMesh.setMatrixAt(i, matrix.makeScale(0.0001, 0.0001, 0.0001))
  pourMesh.instanceMatrix.needsUpdate = true
}

const dummy = new THREE.Object3D()
const tmpA = new THREE.Vector3()
const tmpB = new THREE.Vector3()
const tmpC = new THREE.Vector3()
const tmpQuat = new THREE.Quaternion()
const restQuat = new THREE.Quaternion()

/* Gravity on a bezier: the path rises out of the mouth, then drops. */
function pourAt(tablet, u, index) {
  const t = THREE.MathUtils.clamp((u - tablet.delay) / tablet.duration, 0, 1)
  if (!mouthAnchor) return null

  mouthAnchor.getWorldPosition(tmpA)
  tmpA.add(tablet.jitter)

  // Control point above and in front of the mouth: the arc of the flow.
  tmpB.copy(tmpA)
  tmpB.y += tablet.lift
  tmpB.x += tablet.end.x * 0.18
  tmpB.z += tablet.drift + tablet.end.z * 0.12

  const eased = t
  const inv = 1 - eased
  tmpC.set(
    inv * inv * tmpA.x + 2 * inv * eased * tmpB.x + eased * eased * tablet.end.x,
    inv * inv * tmpA.y + 2 * inv * eased * tmpB.y + eased * eased * tablet.end.y,
    inv * inv * tmpA.z + 2 * inv * eased * tmpB.z + eased * eased * tablet.end.z,
  )

  // Tumble in flight, then settle flat as it lands.
  const settled = THREE.MathUtils.smoothstep(t, 0.72, 1)
  tmpQuat.setFromAxisAngle(tablet.spinAxis, eased * tablet.spinAmount)
  restQuat.setFromEuler(new THREE.Euler(0, tablet.restYaw, 0))
  tmpQuat.slerp(restQuat, settled)

  dummy.position.copy(tmpC)
  dummy.quaternion.copy(tmpQuat)
  const grow = Math.min(1, t * 6) * tablet.scale
  dummy.scale.set(grow, grow * 0.88, grow)
  dummy.updateMatrix()
  pourMesh.setMatrixAt(index, dummy.matrix)
  return t
}

/* -------------------------------------------------------------------------- */
/*  3D annotations — dimension lines and hotspots on the hero tablet          */
/* -------------------------------------------------------------------------- */
const INK = 0xc97942
const HOTSPOT_COPY = {
  dissolve: {
    kicker: 'Dissolution · brine tank',
    title: 'Slow Dissolving',
    short: 'Slow<br />Dissolving',
    body: 'Pressed at high density, the tablet offers a small surface to the brine, so it dissolves over weeks instead of hours. The brine stays at a steady saturation between refills.',
    arabic: 'كبس عالي يقلّل سطح التلامس، فيذوب القرص على مدى أسابيع لا ساعات.',
    rows: [
      ['Solubility', 'Slow dissolving'],
      ['Hardness', 'High (compression)'],
      ['Dosing', 'Uniform 25 mm'],
    ],
  },
  bridging: {
    kicker: 'Handling · salt bed',
    title: 'Prevents Salt Bridging',
    short: 'Prevents<br />Salt bridging',
    body: 'The tablet keeps its own shape instead of fusing into a crust, so no salt bridges form over the tank outlet and the brine keeps flowing without being broken up by hand.',
    arabic: 'القرص لا يلتحم في كتلة واحدة، فلا تتكوّن جسور ملح تسدّ مخرج الخزان.',
    rows: [
      ['Appearance', 'Compressed tablets'],
      ['Form', 'Self-supporting disc'],
      ['Result', 'No caking'],
    ],
  },
}

const hotspotButtons = new Map()
const labelElements = []

function textLabel(value, caption, modifier = '') {
  const el = document.createElement('div')
  el.className = `dim${modifier ? ` ${modifier}` : ''}`
  el.innerHTML = `<strong>${value}</strong><span>${caption}</span>`
  el.style.opacity = '0'
  labelElements.push(el)
  return el
}

function buildAnnotations(centre) {
  const root = new THREE.Group()
  root.position.copy(centre)
  scene.add(root)
  annotationRoot = root
  root.visible = false

  const radius = 0.115
  const half = 0.05

  const barMaterial = new THREE.MeshBasicMaterial({ color: INK, transparent: true, opacity: 0 })
  const leaderMaterial = new THREE.MeshBasicMaterial({ color: INK, transparent: true, opacity: 0 })
  root.userData.materials = [barMaterial, leaderMaterial]

  const up = new THREE.Vector3(0, 1, 0)
  const a = new THREE.Vector3()
  const b = new THREE.Vector3()
  const bar = (x1, y1, z1, x2, y2, z2, thickness = 0.0016, material = barMaterial) => {
    a.set(x1, y1, z1)
    b.set(x2, y2, z2)
    const length = a.distanceTo(b)
    if (!length) return
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(thickness, thickness, length, 6), material)
    mesh.position.copy(a).add(b).multiplyScalar(0.5)
    mesh.quaternion.setFromUnitVectors(up, b.clone().sub(a).normalize())
    root.add(mesh)
  }

  const gap = radius * 0.34
  const tick = radius * 0.1
  const dimY = half + gap * 0.8

  bar(-radius, dimY, 0, radius, dimY, 0)
  bar(-radius, half, 0, -radius, dimY + tick, 0, 0.0012)
  bar(radius, half, 0, radius, dimY + tick, 0, 0.0012)
  bar(-radius, dimY - tick, 0, -radius, dimY + tick, 0)
  bar(radius, dimY - tick, 0, radius, dimY + tick, 0)

  const thickX = radius + gap
  bar(thickX, -half, 0, thickX, half, 0)
  bar(radius, half, 0, thickX + tick, half, 0, 0.0012)
  bar(radius, -half, 0, thickX + tick, -half, 0, 0.0012)
  bar(thickX - tick, half, 0, thickX + tick, half, 0)
  bar(thickX - tick, -half, 0, thickX + tick, -half, 0)

  const attach = (el, x, y, z) => {
    const object = new CSS2DObject(el)
    object.position.set(x, y, z)
    root.add(object)
    return object
  }

  attach(textLabel('Ø 25 mm', 'DIAMETER'), 0, dimY + radius * 0.3, 0)
  attach(textLabel('11 mm', 'THICKNESS'), thickX + radius * 0.5, half * 0.55, 0)
  attach(textLabel('~15 g', 'NET MASS', 'dim--mass'), -radius * 1.5, half * 0.55, 0)
  bar(-radius * 1.42, half * 0.42, 0, -radius * 1.02, half * 0.1, 0, 0.0011, leaderMaterial)

  for (const [id, x] of [['dissolve', radius * 1.8], ['bridging', -radius * 1.8]]) {
    const copy = HOTSPOT_COPY[id]
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'hotspot'
    button.setAttribute('aria-expanded', 'false')
    button.setAttribute('aria-label', `${copy.title} — open the specification`)
    button.innerHTML = `<span class="dot" aria-hidden="true"></span><span>${copy.short}</span>`
    button.style.opacity = '0'
    button.style.pointerEvents = 'none'
    button.addEventListener('click', () => toggleHotspot(id))
    const object = new CSS2DObject(button)
    object.position.set(x, radius * 0.9, 0)
    root.add(object)
    hotspotButtons.set(id, button)
    bar(x * 0.42, radius * 0.3, 0, x, radius * 0.75, 0, 0.0011, leaderMaterial)
  }
}

const setAnnotationWeight = (v) => {
  if (!annotationRoot) return
  annotationRoot.visible = v > 0.005
  const [barMaterial, leaderMaterial] = annotationRoot.userData.materials ?? []
  if (barMaterial) barMaterial.opacity = 0.92 * THREE.MathUtils.clamp(v * 1.3)
  if (leaderMaterial) leaderMaterial.opacity = 0.5 * v
  for (const el of labelElements) el.style.opacity = String(Math.min(1, v * 1.4))
  for (const button of hotspotButtons.values()) {
    button.style.opacity = String(Math.min(1, v * 1.4))
    button.style.pointerEvents = v > 0.4 ? 'auto' : 'none'
  }
}

/* -------------------------------------------------------------------------- */
/*  Hotspot card                                                              */
/* -------------------------------------------------------------------------- */
const card = document.getElementById('hs-card')
const cardParts = {
  kicker: document.getElementById('hs-kicker'),
  title: document.getElementById('hs-title'),
  body: document.getElementById('hs-body'),
  arabic: document.getElementById('hs-ar'),
  rows: document.getElementById('hs-rows'),
}
const closeButton = document.getElementById('hs-close')
let openHotspotId = null

function closeHotspot() {
  if (!openHotspotId) return
  const button = hotspotButtons.get(openHotspotId)
  button?.classList.remove('is-on')
  button?.setAttribute('aria-expanded', 'false')
  button?.focus({ preventScroll: true })
  openHotspotId = null
  card.hidden = true
}

function toggleHotspot(id) {
  const wasOpen = openHotspotId === id
  closeHotspot()
  if (wasOpen) return
  const copy = HOTSPOT_COPY[id]
  if (!copy) return
  cardParts.kicker.textContent = copy.kicker
  cardParts.title.textContent = copy.title
  cardParts.body.textContent = copy.body
  cardParts.arabic.textContent = copy.arabic
  cardParts.rows.innerHTML = copy.rows
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join('')
  card.hidden = false
  const button = hotspotButtons.get(id)
  button?.classList.add('is-on')
  button?.setAttribute('aria-expanded', 'true')
  openHotspotId = id
  closeButton.focus({ preventScroll: true })
}

closeButton?.addEventListener('click', closeHotspot)
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeHotspot()
})

/* -------------------------------------------------------------------------- */
/*  Standards badges                                                          */
/* -------------------------------------------------------------------------- */
const STD_NOTES = {
  BS: '<b>British Standards (BS)</b> — the product is checked against British specifications for salt used in water treatment, and compliance is declared on the batch certificate of analysis.',
  EN: '<b>European Standards (EN)</b> — analysed to <b>EN 973</b>, the European specification for sodium chloride used in water treatment, which keeps the product acceptable across EU markets.',
  ASTM: '<b>ASTM Standards</b> — <b>ASTM E534</b> is the reference test method behind the chemical analysis table, so results are comparable with international laboratories.',
  ISO: '<b>ISO Standards</b> — checked against international requirements, which supports smooth customs clearance and global acceptance of every shipment.',
}
const stdButtons = [...document.querySelectorAll('#std-badges button')]
const stdNote = document.getElementById('std-note')
stdButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const on = button.classList.contains('is-on')
    stdButtons.forEach((other) => {
      other.classList.remove('is-on')
      other.setAttribute('aria-pressed', 'false')
    })
    if (on) {
      stdNote.textContent = 'Select a standard to see how it applies to this product.'
      return
    }
    button.classList.add('is-on')
    button.setAttribute('aria-pressed', 'true')
    stdNote.innerHTML = STD_NOTES[button.dataset.std]
  })
})

/* -------------------------------------------------------------------------- */
/*  Scroll → story progress                                                   */
/* -------------------------------------------------------------------------- */
const panels = [...document.querySelectorAll('.panel')]
const railButtons = [...document.querySelectorAll('.rail button')]
const progressFill = document.getElementById('progress-fill')
const stepNow = document.getElementById('step-now')

let targetProgress = 0
let activeStep = -1
let smoothProgress = 0
let lockedProgress = null
let panelRects = []

/* Narrow screens put the copy in its own pane under the model window, so the
   scroll that drives the story lives on .story instead of the document. */
const storyEl = document.querySelector('.story')
const narrowQuery = window.matchMedia('(max-width: 1080px)')
const scrollTopNow = () => (narrowQuery.matches ? storyEl.scrollTop : window.scrollY)

const measurePanels = () => {
  const inPane = narrowQuery.matches
  const paneRect = inPane ? storyEl.getBoundingClientRect() : null
  const scrollTop = inPane ? storyEl.scrollTop : window.scrollY
  const vh = inPane ? storyEl.clientHeight : window.innerHeight
  panelRects = panels.map((panel) => {
    const rect = panel.getBoundingClientRect()
    // Where the scroll sits when this panel is centred in the visible area.
    const top = inPane ? rect.top - paneRect.top + scrollTop : rect.top + scrollTop
    return { anchor: top + rect.height / 2 - vh / 2, height: rect.height }
  })
}

/* One story step per panel: the section is "done" when it reaches mid-screen. */
const computeProgress = () => {
  const count = panelRects.length
  if (!count) return 0
  const y = scrollTopNow()
  if (y <= panelRects[0].anchor) return 0
  if (y >= panelRects[count - 1].anchor) return 1
  for (let i = 0; i < count - 1; i++) {
    const from = panelRects[i].anchor
    const to = panelRects[i + 1].anchor
    if (y >= from && y <= to) {
      const local = (y - from) / Math.max(to - from, 1)
      return (i + local) / (count - 1)
    }
  }
  return 1
}

const onScroll = () => {
  if (lockedProgress !== null) return
  targetProgress = computeProgress()
}
window.addEventListener('scroll', onScroll, { passive: true })
storyEl?.addEventListener('scroll', onScroll, { passive: true })

/* The layout swaps between a fixed pane and a scrolling document, so the
   reveals have to be rebuilt if that breakpoint is crossed. */
let narrowNow = narrowQuery.matches
window.addEventListener('resize', () => {
  if (narrowQuery.matches === narrowNow) return
  narrowNow = narrowQuery.matches
  window.location.reload()
})

let story = null

function buildStory() {
  const timeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
  timeline
    .to(state.bag, { spin: 1, duration: 0.22, ease: 'power1.inOut' }, 0.02)
    .to(state.cam, { k: 1, duration: 0.16, ease: 'power1.inOut' }, 0.02)
    .to(state.bag, { open: 1, duration: 0.1, ease: 'power2.out' }, 0.17)
    .to(state.bag, { tilt: 1, duration: 0.08, ease: 'power2.inOut' }, 0.25)
    .to(state.cam, { k: 2, duration: 0.11, ease: 'power1.inOut' }, 0.25)
    .to(state.pour, { u: 1, duration: 0.32, ease: 'none' }, 0.34)
    .to(state.cam, { k: 3, duration: 0.14, ease: 'power1.inOut' }, 0.54)
    .to(state.annot, { v: 1, duration: 0.06, ease: 'power1.out' }, 0.62)
    .to(state.bag, { tilt: 0.12, duration: 0.1, ease: 'power1.inOut' }, 0.64)
    .to(state.bag, { side: 1, duration: 0.12, ease: 'power1.inOut' }, 0.65)
    .to(state.bag, { open: 0, duration: 0.1, ease: 'power2.inOut' }, 0.68)
    .to(state.cam, { k: 4, duration: 0.14, ease: 'power1.inOut' }, 0.86)
    .to(state.annot, { v: 0, duration: 0.05, ease: 'power1.in' }, 0.93)

  story = timeline

  /* Reveal the copy as each panel arrives, and keep the rail in step.
     In the narrow layout the copy scrolls inside its own pane. */
  if (narrowQuery.matches) ScrollTrigger.defaults({ scroller: storyEl })

  panels.forEach((panel, index) => {
    gsap.fromTo(
      panel.querySelectorAll('.reveal'),
      { y: 26, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.055,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: panel,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      },
    )
  })

  measurePanels()
  onScroll()
  smoothProgress = targetProgress
  timeline.progress(smoothProgress)
  setStep(Math.min(panels.length - 1, Math.round(smoothProgress * (panels.length - 1))))
}

function setStep(index) {
  activeStep = index
  railButtons.forEach((button, i) => {
    const on = i === index
    button.classList.toggle('is-on', on)
    if (on) button.setAttribute('aria-current', 'true')
    else button.removeAttribute('aria-current')
  })
  if (stepNow) stepNow.textContent = String(index + 1).padStart(2, '0')
}

railButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    panels[index]?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  })
})

/* -------------------------------------------------------------------------- */
/*  Drag to look around (the scroll still owns the camera)                     */
/* -------------------------------------------------------------------------- */
let yaw = 0
let pitch = 0
let dragging = false
let lastX = 0
let lastY = 0

/* The canvas sits above the copy and ignores the pointer, so the drag is
   heard on the window — but never when it starts on something you can use. */
const interactiveTarget = (target) =>
  target instanceof Element &&
  !!target.closest('a, button, input, textarea, select, .panel-inner, .story, .rail, .bar, .hs-card')

window.addEventListener('pointerdown', (event) => {
  if (interactiveTarget(event.target)) return
  dragging = true
  lastX = event.clientX
  lastY = event.clientY
})
window.addEventListener('pointermove', (event) => {
  if (!dragging) return
  yaw -= (event.clientX - lastX) * 0.005
  pitch -= (event.clientY - lastY) * 0.003
  yaw = THREE.MathUtils.clamp(yaw, -0.9, 0.9)
  pitch = THREE.MathUtils.clamp(pitch, -0.45, 0.45)
  lastX = event.clientX
  lastY = event.clientY
})
const endDrag = () => {
  dragging = false
}
window.addEventListener('pointerup', endDrag)
window.addEventListener('pointercancel', endDrag)

/* -------------------------------------------------------------------------- */
/*  Frame loop                                                                */
/* -------------------------------------------------------------------------- */
const clock = new THREE.Clock()
const camPos = new THREE.Vector3()
const camTarget = new THREE.Vector3()
const offset = new THREE.Vector3()
const spherical = new THREE.Spherical()

function applyCamera() {
  const t = THREE.MathUtils.clamp(state.cam.k / (CAMERA_KEYS.length - 1), 0, 1)
  camPath.getPoint(t, camPos)
  targetPath.getPoint(t, camTarget)

  offset.copy(camPos).sub(camTarget)
  spherical.setFromVector3(offset)
  spherical.theta += yaw
  spherical.phi = THREE.MathUtils.clamp(spherical.phi + pitch, 0.35, 2.35)
  offset.setFromSpherical(spherical)

  camera.position.copy(camTarget).add(offset)
  camera.lookAt(camTarget)
}

function applyBag(elapsed) {
  const { spin, tilt, side, open } = state.bag
  bagRoot.rotation.y = spin * 0.92 + Math.sin(elapsed * 0.25) * 0.012
  bagRoot.rotation.z = tilt * -0.42
  bagRoot.position.x = side * 1.8
  bagRoot.position.z = -side * 1.55

  if (!mouth) return
  mouth.group.visible = open > 0.01
  mouth.dark.opacity = 0.95 * open
  mouth.throat.opacity = 0.9 * open
  mouth.lips.forEach((pivot) => {
    pivot.rotation.x = (pivot.userData.flip ? 1 : -1) * open * 1.05
  })
}

function updatePour() {
  if (!pourMesh) return
  const u = state.pour.u
  for (let i = 0; i < tablets.length; i++) {
    const t = pourAt(tablets[i], u, i)
    if (t === null) continue
    if (t <= 0) pourMesh.setMatrixAt(i, dummy.matrix.makeScale(0.0001, 0.0001, 0.0001))
  }
  pourMesh.instanceMatrix.needsUpdate = true
}

function tick() {
  // One delta per frame: getElapsedTime() already consumes it.
  const dt = Math.min(clock.getDelta(), 0.1)
  const elapsed = clock.elapsedTime

  if (story) {
    if (lockedProgress === null) {
      smoothProgress += (targetProgress - smoothProgress) * (1 - Math.exp(-dt * 6))
      story.progress(smoothProgress)
    }
    if (progressFill) progressFill.style.transform = `scaleX(${Math.max(0.001, smoothProgress)})`
    const step = Math.min(panels.length - 1, Math.round(smoothProgress * (panels.length - 1)))
    if (step !== activeStep) setStep(step)
  }

  applyBag(elapsed)
  updatePour()
  applyCamera()
  setAnnotationWeight(state.annot.v)
  // A card whose anchor has faded out would float over nothing.
  if (openHotspotId && state.annot.v < 0.35) closeHotspot()

  renderer.render(scene, camera)
  labelRenderer.render(scene, camera)
  requestAnimationFrame(tick)
}
tick()

/* -------------------------------------------------------------------------- */
/*  Resize, artwork stamp, dev hook                                           */
/* -------------------------------------------------------------------------- */
const resize = () => {
  const width = stage.clientWidth
  const height = stage.clientHeight
  if (!width || !height) return
  camera.aspect = width / height
  applyViewOffset()
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  labelRenderer.setSize(width, height)
  measurePanels()
  if (lockedProgress === null) targetProgress = computeProgress()
}
new ResizeObserver(resize).observe(stage)
window.addEventListener('resize', resize)

fetch(`/artwork/sack-50kg-texture.png?${stamp}`, { method: 'HEAD' })
  .then((response) => response.headers.get('last-modified'))
  .then((lastModified) => {
    if (!lastModified) return
    const when = new Date(lastModified)
    const label = when.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    })
    const target = document.getElementById('artwork-rev')
    if (target) target.textContent = `ARTWORK ${label.toUpperCase()}`
  })
  .catch(() => {})

if (import.meta.env.DEV) {
  window.__viewer = {
    lock: (p) => {
      lockedProgress = p
      smoothProgress = p
      story?.progress(p)
      return p
    },
    unlock: () => {
      lockedProgress = null
      onScroll()
    },
    state,
    camera,
  }
}
