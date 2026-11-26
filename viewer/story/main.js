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
import { PRODUCTS, PRODUCT_ORDER } from './products.js'
import { CHAPTERS } from './chapters.js'

gsap.registerPlugin(ScrollTrigger)
// Never stretch timelines to cover a slow frame: real time wins, so a stall
// jumps the story forward instead of crawling through it.
gsap.ticker.lagSmoothing(0)

/* Vite serves from '/' in dev and from '/sinaicore/' on GitHub Pages. */
const BASE = import.meta.env.BASE_URL || '/'

const stage = document.getElementById('stage')
const status = document.getElementById('status')
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* -------------------------------------------------------------------------- */
/*  Language — English by default; the toggle turns the page right-to-left    */
/* -------------------------------------------------------------------------- */
const LANG_KEY = 'sinaicore:lang'
const languageEls = [...document.querySelectorAll('[data-ar]')]
  .filter((el) => !el.hasAttribute('data-letters'))
  .map((el) => ({ el, en: el.textContent, ar: el.getAttribute('data-ar') }))
const headingEls = [...document.querySelectorAll('[data-letters]')].map((el) => ({
  el,
  en: el.textContent.trim().replace(/\s+/g, ' '),
  ar: el.getAttribute('data-ar') || el.textContent.trim(),
}))
const langToggle = document.getElementById('lang-toggle')
let lang = 'en'

const t = (en, ar) => (lang === 'ar' ? ar : en)
const L = (en, ar) => ({ en, ar })

/* Arabic is joined script: it can never be split into per-letter boxes, so the
   headings swap as whole words and the word-rise animation is skipped. */
function setLanguage(next, { store = true } = {}) {
  lang = next === 'ar' ? 'ar' : 'en'
  const arabic = lang === 'ar'
  document.documentElement.lang = lang
  document.documentElement.dir = arabic ? 'rtl' : 'ltr'

  languageEls.forEach(({ el, en, ar }) => {
    el.textContent = arabic ? ar : en
  })

  headingEls.forEach(({ el, en, ar }) => {
    el.classList.toggle('is-ar', arabic)
    if (arabic) {
      el.textContent = ar
      return
    }
    el.textContent = ''
    const letters = splitLetters(el, en)
    if (letters.length) gsap.set(letters, { yPercent: 0, opacity: 1 })
  })

  langToggle.textContent = arabic ? 'EN' : 'AR'
  langToggle.setAttribute('aria-label', arabic ? 'English' : 'العربية')
  document.title = arabic ? 'SinaiCore · ملح، مضغوط.' : 'SinaiCore · Salt, pressed.'
  applyProductCopy()
  renderSwitcher()
  renderChapters()
  renderRange()
  applyAnnotationCopy()
  if (openHotspotId) renderHotspotCopy(openHotspotId)

  if (store) {
    try {
      localStorage.setItem(LANG_KEY, lang)
    } catch {
      // Private mode: the choice simply doesn't outlive the visit.
    }
  }
}

langToggle?.addEventListener('click', () => setLanguage(lang === 'ar' ? 'en' : 'ar'))

/* -------------------------------------------------------------------------- */
/*  Renderer, camera, light                                                   */
/* -------------------------------------------------------------------------- */
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, stage.clientWidth < 1080 ? 1.6 : 2))
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

/* A soft contact pool under an object keeps it from looking like it floats:
   the shadow map alone reads as a detached grey smudge on an invisible floor. */
const contactTexture = (() => {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, 'rgba(24, 43, 41, 0.34)')
  gradient.addColorStop(0.45, 'rgba(24, 43, 41, 0.17)')
  gradient.addColorStop(1, 'rgba(24, 43, 41, 0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
})()

const contactShadow = (width, depth, opacity = 1) => {
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(width, depth),
    new THREE.MeshBasicMaterial({
      map: contactTexture,
      transparent: true,
      opacity,
      depthWrite: false,
      toneMapped: false,
    }),
  )
  mesh.rotation.x = -Math.PI / 2
  mesh.renderOrder = 1
  return mesh
}

/* The copy column rides on the left (or at the bottom on narrow screens),
   so the frustum slides away from it. */
const applyViewOffset = () => {
  const width = stage.clientWidth
  const height = stage.clientHeight
  if (width < 1080) camera.setViewOffset(width, height, 0, height * 0.08, width, height)
  else camera.clearViewOffset()
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
  dissolve: { v: 0 },
}

const CAMERA_KEYS = [
  { pos: new THREE.Vector3(0.9, 1.15, 6.7), target: new THREE.Vector3(0, -0.12, 0.25) },
  { pos: new THREE.Vector3(0.5, 1.26, 5.15), target: new THREE.Vector3(0, 0.1, 0.15) },
  { pos: new THREE.Vector3(2.2, 1.12, 8.5), target: new THREE.Vector3(0.12, -0.3, 0.8) },
  { pos: new THREE.Vector3(0.95, -0.1, 2.25), target: new THREE.Vector3(0.35, -0.95, 1.62) },
  { pos: new THREE.Vector3(2.5, 2.35, 8.7), target: new THREE.Vector3(0.3, -0.5, 1.05) },
]
const camPath = new THREE.CatmullRomCurve3(CAMERA_KEYS.map((k) => k.pos), false, 'catmullrom', 0.4)
const targetPath = new THREE.CatmullRomCurve3(CAMERA_KEYS.map((k) => k.target), false, 'catmullrom', 0.4)

/* -------------------------------------------------------------------------- */
/*  Assets                                                                    */
/* -------------------------------------------------------------------------- */
const stamp = `v=${Date.now()}`
const draco = new DRACOLoader().setDecoderPath(`${BASE}draco/`)
const loader = new GLTFLoader().setDRACOLoader(draco)

const bagRoot = new THREE.Group()
bagRoot.position.set(0, FLOOR, 0)
scene.add(bagRoot)
const sack = new THREE.Group()
bagRoot.add(sack)
const bagContact = contactShadow(2.5, 2.1, 0.9)
bagContact.position.y = 0.004
bagRoot.add(bagContact)
let bagHeight = 2.06

let model = null
let mouth = null
let mouthAnchor = null
let pourMesh = null
let pourCount = 0
let annotationRoot = null
let dissolveMesh = null
let dissolveHalo = null
let sackMaterial = null
let baseSackTexture = null
const sackTextures = new Map()
let focusPoint = new THREE.Vector3(0.35, FLOOR + 0.05, 1.62)

const heroContact = contactShadow(0.66, 0.66, 0)
heroContact.position.set(focusPoint.x, FLOOR + 0.003, focusPoint.z)
scene.add(heroContact)

const tablets = []

loader
  .loadAsync(`${BASE}models/sack.glb?${stamp}`)
  .then(async (gltf) => {
    const texture = await new THREE.TextureLoader().loadAsync(`${BASE}artwork/sack-50kg-texture.png?${stamp}`)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())

    const weave = await new THREE.TextureLoader().loadAsync(`${BASE}textures/sack-weave.png?${stamp}`)
    weave.wrapS = weave.wrapT = THREE.RepeatWrapping
    weave.repeat.set(4, 9)
    weave.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())

    const crumple = await new THREE.TextureLoader().loadAsync(`${BASE}textures/sack-crumple.png?${stamp}`)
    crumple.wrapS = crumple.wrapT = THREE.RepeatWrapping
    crumple.repeat.set(2, 2)
    crumple.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())

    baseSackTexture = texture
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

    sackMaterial = printed

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
    const tabletGltf = await loader.loadAsync(`${BASE}models/tablet.glb?${stamp}`)
    const tabletSource = tabletGltf.scene.getObjectByProperty('isMesh', true)
    const grain = await new THREE.TextureLoader().loadAsync(`${BASE}textures/salt-detail.png?${stamp}`)
    grain.wrapS = grain.wrapT = THREE.RepeatWrapping
    grain.repeat.set(4, 4)

    const tabletMaterial = new THREE.MeshPhysicalMaterial({
      color: '#f7f5ee',
      roughness: 0.86,
      metalness: 0,
      bumpMap: grain,
      bumpScale: 0.055,
      sheen: 0.4,
      sheenRoughness: 0.62,
      sheenColor: new THREE.Color('#fffdf7'),
      envMapIntensity: 0.45,
    })

    shapes.tablet = tabletSource.geometry
    try {
      const crystal = await loader.loadAsync(`${BASE}models/salt-crystal.glb?${stamp}`)
      const crystalMesh = crystal.scene.getObjectByProperty('isMesh', true)
      if (crystalMesh) shapes.crystal = unitGeometry(crystalMesh)
    } catch (error) {
      console.warn('salt-crystal.glb missing — coarse salts fall back to tablets', error)
    }

    buildPour(tabletSource, tabletMaterial)
    buildAnnotations(focusPoint)
    // The callouts are built after the reader may already have switched language.
    applyAnnotationCopy()

    /* The hero disc gets its own copy so it can erode: an instanced mesh can
       only be scaled, and the dissolve needs a wetter material and a halo. */
    const dissolveMaterial = tabletMaterial.clone()
    dissolveMaterial.roughness = 0.48
    dissolveMaterial.clearcoat = 0.6
    dissolveMaterial.clearcoatRoughness = 0.35
    dissolveMesh = new THREE.Mesh(tabletSource.geometry.clone(), dissolveMaterial)
    dissolveMesh.castShadow = true
    dissolveMesh.receiveShadow = true
    dissolveMesh.visible = false
    scene.add(dissolveMesh)

    /* The pool the tablet leaves behind as it goes. */
    const halo = new THREE.Mesh(
      new THREE.CircleGeometry(1, 64),
      new THREE.MeshBasicMaterial({
        map: contactTexture,
        color: '#3d5a55',
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    )
    halo.rotation.x = -Math.PI / 2
    halo.position.set(focusPoint.x, FLOOR + 0.004, focusPoint.z)
    halo.visible = false
    scene.add(halo)
    dissolveHalo = halo

    status.dataset.state = 'ready'
    buildStory()

    /* The sack arrives: it drops onto the floor and settles. */
    if (!reduceMotion) {
      gsap.fromTo(
        bagRoot.position,
        { y: FLOOR + 1.3 },
        { y: FLOOR, duration: 1.55, ease: 'expo.out', delay: 0.15 },
      )
      gsap.fromTo(sack.rotation, { z: 0.14 }, { z: 0, duration: 1.55, ease: 'expo.out', delay: 0.15 })
      gsap.fromTo(
        heroContact.material,
        { opacity: 0 },
        { opacity: 0.85, duration: 0.9, ease: 'power2.out', delay: 0.9 },
      )
    }
  })
  .catch((error) => {
    console.error(error)
    status.dataset.state = 'error'
    status.textContent = t(
      'Could not load public/models/sack.glb — run npm run models',
      'تعذّر تحميل الشيكارة — شغّل npm run models',
    )
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
/* One instanced mesh carries whichever product is on stage: the capacity is
   the biggest particle set, and `.count` trims it down per product. */
const MAX_COUNT = 260
const PARTICLE_SIZE = { tablet: 0.108, grain: 0.021, crystal: 0.042 }
let product = PRODUCTS.tablets

function buildPour(source, material) {
  const geometry = source.geometry.clone()
  pourMesh = new THREE.InstancedMesh(geometry, material, MAX_COUNT)
  pourMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
  pourMesh.frustumCulled = false
  pourMesh.castShadow = true
  pourMesh.receiveShadow = true
  scene.add(pourMesh)
  seedParticles()
}

/* Where the copy column sits on the close-up (k3): nothing may land behind it,
   or the glass panel blurs a giant particle across the table of specs. */
const copyProbe = new THREE.PerspectiveCamera(30, 1, 0.05, 100)
copyProbe.position.copy(CAMERA_KEYS[3].pos)
copyProbe.lookAt(CAMERA_KEYS[3].target)
const probe = new THREE.Vector3()

/* Reseed the particle set for the product on stage: the same arcs, the same
   hero, only the count and the size of what falls changes. */
function seedParticles() {
  const { kind, count, size } = product.particle
  const total = Math.min(count, MAX_COUNT)
  pourCount = total
  pourMesh.count = total
  tablets.length = 0

  copyProbe.aspect = stage.clientWidth / stage.clientHeight
  copyProbe.setViewOffset(
    stage.clientWidth,
    stage.clientHeight,
    -stage.clientWidth * 0.15,
    0,
    stage.clientWidth,
    stage.clientHeight,
  )
  copyProbe.updateProjectionMatrix()
  copyProbe.updateMatrixWorld()
  const onCopy = (point) => {
    probe.copy(point).project(copyProbe)
    const x = (probe.x * 0.5 + 0.5) * stage.clientWidth
    const y = (-probe.y * 0.5 + 0.5) * stage.clientHeight
    return x < stage.clientWidth * 0.68 && y < stage.clientHeight * 0.92
  }

  let seed = 20261126
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
  }

  /* A tablet stands alone in the close-up; grains and crystals are shown as a
     small heap, so the chapter still has something to look at. */
  const heap = kind === 'tablet' ? 1 : (product.particle.heap?.count ?? 9)
  const heapScale = kind === 'tablet' ? 1 : (product.particle.heap?.scale ?? 1.5)

  for (let i = 0; i < total; i++) {
    const hero = i < heap
    let end = hero ? focusPoint.clone() : new THREE.Vector3()
    if (hero && i > 0) {
      const angle = (i / heap) * Math.PI * 2 + rnd() * 0.5
      const radius = 0.045 + rnd() * 0.085
      end.x += Math.sin(angle) * radius
      end.z += Math.cos(angle) * radius
      end.y += rnd() * 0.045
    }
    if (!hero) {
      let distance = 0.55 + rnd() * 1.35
      const angle = (rnd() * 2 - 1) * 1.85
      const spread = kind === 'grain' ? 0.72 : 1
      for (let tries = 0; tries < 14; tries++) {
        end.set(
          0.3 + Math.sin(angle) * distance * 1.35 * spread,
          FLOOR + 0.05 + (kind === 'tablet' ? 0 : rnd() * 0.09),
          0.5 + Math.cos(angle) * distance * spread,
        )
        end.z = Math.min(end.z, 0.62)
        // Keep a clean disc around the hero, and keep the copy column empty.
        if (end.distanceTo(focusPoint) > 1.28 && !onCopy(end)) break
        distance -= 0.16
        if (distance < 0.5) distance = 0.6 + rnd() * 1.7
      }
    }

    const scale = hero
      ? (kind === 'tablet' ? PARTICLE_SIZE.tablet : PARTICLE_SIZE[kind] * size * heapScale)
      : kind === 'tablet'
        ? PARTICLE_SIZE.tablet + rnd() * 0.016
        : PARTICLE_SIZE[kind] * size * (0.72 + rnd() * 0.62)

    tablets[i] = {
      end,
      hero,
      lift: 0.18 + rnd() * 0.34,
      drift: 0.34 + rnd() * 0.5,
      delay: (i / total) * 0.32 + rnd() * 0.05,
      duration: 0.42 + rnd() * 0.2,
      scale,
      restYaw: rnd() * Math.PI * 2,
      restPitch: kind === 'tablet' ? 0 : (rnd() - 0.5) * 0.7,
      restRoll: kind === 'tablet' ? 0 : (rnd() - 0.5) * 0.7,
      squash:
        kind === 'tablet'
          ? new THREE.Vector3(1, 0.88, 1)
          : new THREE.Vector3(0.78 + rnd() * 0.4, 0.78 + rnd() * 0.4, 0.78 + rnd() * 0.4),
      spinAxis: new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize(),
      spinAmount: 2.4 + rnd() * 4.4,
      jitter: new THREE.Vector3((rnd() - 0.5) * 0.26, -0.05 - rnd() * 0.1, (rnd() - 0.5) * 0.1),
    }
  }

  /* Grains are never one flat colour: a little per-particle shade keeps a
     pile from reading as a printed sheet. */
  const base = new THREE.Color(product.particle.tint)
  const shade = new THREE.Color()
  for (let i = 0; i < total; i++) {
    shade.copy(base).offsetHSL(0, 0, (rnd() - 0.5) * 0.08)
    pourMesh.setColorAt(i, shade)
  }
  for (let i = total; i < MAX_COUNT; i++) pourMesh.setColorAt(i, base)
  if (pourMesh.instanceColor) pourMesh.instanceColor.needsUpdate = true

  const matrix = new THREE.Matrix4()
  for (let i = 0; i < MAX_COUNT; i++) pourMesh.setMatrixAt(i, matrix.makeScale(0.0001, 0.0001, 0.0001))
  pourMesh.instanceMatrix.needsUpdate = true
}

/* -------------------------------------------------------------------------- */
/*  Particle shapes: tablets, refined grains, screened crystals               */
/* -------------------------------------------------------------------------- */
const shapes = {}

/* Normalise a loaded mesh so one unit of scale is one unit of radius. */
function unitGeometry(source) {
  const geometry = source.geometry.clone()
  geometry.computeBoundingSphere()
  const r = geometry.boundingSphere?.radius || 1
  geometry.scale(1 / r, 1 / r, 1 / r)
  return geometry
}

function shapeFor(kind) {
  if (kind === 'grain') {
    // A faceted pebble: salt grains are chipped, not moulded, but they are not
    // stars either — the shape does the work, the squash below breaks it up.
    if (!shapes.grain) {
      const g = new THREE.IcosahedronGeometry(1, 0)
      g.computeVertexNormals()
      shapes.grain = g
    }
    return shapes.grain
  }
  return shapes[kind] || shapes.tablet
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
  restQuat.setFromEuler(
    new THREE.Euler(tablet.restPitch ?? 0, tablet.restYaw, tablet.restRoll ?? 0),
  )
  tmpQuat.slerp(restQuat, settled)

  dummy.position.copy(tmpC)
  dummy.quaternion.copy(tmpQuat)
  const grow = Math.min(1, t * 6) * tablet.scale
  const squash = tablet.squash ?? { x: 1, y: 0.88, z: 1 }
  dummy.scale.set(grow * squash.x, grow * squash.y, grow * squash.z)
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
    kickerAr: 'الذوبان · خزان المحلول',
    titleAr: 'ذوبان بطيء',
    shortAr: 'ذوبان<br />بطيء',
    bodyAr:
      'كبس عالي الكثافة يقدّم للمحلول مساحة سطح صغيرة، فيذوب على مدى أسابيع لا ساعات، ويبقى التشبّع ثابتًا بين تعبئة وأخرى.',
    rowsAr: [
      ['الذوبان', 'بطيء'],
      ['الصلابة', 'عالية (كبس)'],
      ['الجرعة', '25 مم ثابتة'],
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
    kickerAr: 'التداول · سرير الملح',
    titleAr: 'يمنع تعليق الملح',
    shortAr: 'يمنع تعليق<br />الملح',
    bodyAr:
      'القرص يحافظ على شكله بدل أن يلتحم في قشرة صلبة، فلا تتكوّن جسور ملح فوق مخرج الخزان، ويظل المحلول يجري بلا تدخّل.',
    rowsAr: [
      ['المظهر', 'أقراص مضغوطة'],
      ['الشكل', 'قرص متماسك'],
      ['النتيجة', 'بلا تكتّل'],
    ],
  },
}

const hotspotButtons = new Map()
const labelElements = []
let dimMarks = null

function buildAnnotations(centre) {
  const root = new THREE.Group()
  root.position.copy(centre)
  scene.add(root)
  annotationRoot = root
  root.visible = false

  const radius = 0.115
  const half = 0.05
  const dimY = half + radius * 0.52
  const thickAnchorX = radius * 1.14

  const leaderMaterial = new THREE.MeshBasicMaterial({ color: INK, transparent: true, opacity: 0 })
  root.userData.materials = [null, leaderMaterial]

  const up = new THREE.Vector3(0, 1, 0)
  const a = new THREE.Vector3()
  const b = new THREE.Vector3()
  const bar = (x1, y1, z1, x2, y2, z2, thickness = 0.0008, material = leaderMaterial) => {
    a.set(x1, y1, z1)
    b.set(x2, y2, z2)
    const length = a.distanceTo(b)
    if (!length) return
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(thickness, thickness, length, 6), material)
    mesh.position.copy(a).add(b).multiplyScalar(0.5)
    mesh.quaternion.setFromUnitVectors(up, b.clone().sub(a).normalize())
    root.add(mesh)
  }

  /* Dimension marks are drawn in screen space so the ticks hug the disc at any
     zoom and stay hairline crisp instead of turning into fat little cylinders. */
  const mark = (className, html, x, y) => {
    const element = document.createElement('div')
    element.className = `dims ${className}`
    element.innerHTML = html
    element.style.opacity = '0'
    labelElements.push(element)
    const object = new CSS2DObject(element)
    object.position.set(x, y, 0)
    root.add(object)
    return { element, object }
  }

  const widthMark = mark('dims--x', '<span class="rule"></span><b><strong>Ø 25 mm</strong><span>Diameter</span></b>', 0, dimY)
  const thickMark = mark('dims--y', '<span class="rule"></span><b><strong>11 mm</strong><span>Thickness</span></b>', thickAnchorX, 0)
  const massMark = mark('dims--mass', '<b><strong>~15 g</strong><span>Net mass</span></b>', radius * 0.52, -radius * 1.5)
  dimMarks = { widthMark, thickMark, massMark, radius, half, dimY, thickAnchorX }

  for (const [id, x, y] of [['dissolve', radius * 2.15, radius * 1.5], ['bridging', radius * 2.15, -radius * 1.5]]) {
    const copy = HOTSPOT_COPY[id]
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'hotspot'
    button.setAttribute('aria-expanded', 'false')
    button.setAttribute('aria-label', `${copy.title} — open the specification`)
    button.innerHTML = `<span class="dot" aria-hidden="true"></span><span class="hs-label">${copy.short}</span>`
    button.style.opacity = '0'
    button.style.pointerEvents = 'none'
    button.addEventListener('click', () => toggleHotspot(id))
    const object = new CSS2DObject(button)
    object.position.set(x, y, 0)
    root.add(object)
    hotspotButtons.set(id, button)
    const sign = Math.sign(y)
    bar(radius * 1.0, radius * 0.6 * sign, 0, x - radius * 0.4, y - radius * 0.28 * sign, 0)
  }
}

const probePoint = new THREE.Vector3()
const toScreen = (x, y, z) => {
  probePoint.set(x, y, z).project(camera)
  return {
    x: (probePoint.x * 0.5 + 0.5) * stage.clientWidth,
    y: (-probePoint.y * 0.5 + 0.5) * stage.clientHeight,
  }
}

/* Size the hairline rules to the disc's real projection, every frame. */
const updateDims = () => {
  if (!dimMarks || !annotationRoot?.visible) return
  const { widthMark, thickMark, massMark, radius, half, dimY, thickAnchorX } = dimMarks
  const c = annotationRoot.position
  const top = half * 0.9
  const left = toScreen(c.x - radius, c.y + top, c.z)
  const right = toScreen(c.x + radius, c.y + top, c.z)
  const up = toScreen(c.x + radius, c.y + half, c.z)
  const down = toScreen(c.x + radius, c.y - half, c.z)
  widthMark.element.style.setProperty('--len', `${Math.max(24, Math.abs(right.x - left.x)).toFixed(1)}px`)

  // Extension lines: from the rule down to the disc, and across to the silhouette.
  const rule = toScreen(c.x, c.y + dimY, c.z)
  widthMark.element.style.setProperty('--drop', `${Math.max(3, rule.y - left.y).toFixed(1)}px`)
  const thickRule = toScreen(c.x + thickAnchorX, c.y, c.z)
  thickMark.element.style.setProperty('--len', `${Math.max(12, Math.abs(down.y - up.y)).toFixed(1)}px`)
  thickMark.element.style.setProperty('--gap', `${Math.max(3, thickRule.x - right.x).toFixed(1)}px`)

  const chip = massMark.element.firstElementChild
  const halfChip = (chip?.offsetHeight ?? 30) / 2
  const massAnchor = toScreen(c.x + radius * 0.52, c.y - radius * 1.5, c.z)
  massMark.element.style.setProperty('--rise', `${Math.max(2, massAnchor.y - halfChip - down.y).toFixed(1)}px`)
}

const setAnnotationWeight = (value) => {
  if (!annotationRoot) return
  // On a phone the callouts would land on top of the copy column, and only the
  // tablet has dimensions to draw.
  const v = stage.clientWidth < 1080 || product.particle.kind !== 'tablet' ? 0 : value
  annotationRoot.visible = v > 0.005
  const [barMaterial, leaderMaterial] = annotationRoot.userData.materials ?? []
  if (barMaterial) barMaterial.opacity = 0.92 * THREE.MathUtils.clamp(v * 1.3, 0, 1)
  if (leaderMaterial) leaderMaterial.opacity = 0.5 * v
  for (const el of labelElements) el.style.opacity = String(Math.min(1, v * 1.4))
  for (const button of hotspotButtons.values()) {
    button.style.opacity = String(Math.min(1, v * 1.4))
    button.style.pointerEvents = v > 0.4 ? 'auto' : 'none'
  }
}

/* The 3D callouts are drawn in the scene, so they carry their own copy. */
function applyAnnotationCopy() {
  if (!dimMarks) return
  const arabic = lang === 'ar'
  dimMarks.widthMark.element.innerHTML = arabic
    ? '<span class="rule"></span><b><strong>Ø 25 مم</strong><span>القطر</span></b>'
    : '<span class="rule"></span><b><strong>Ø 25 mm</strong><span>Diameter</span></b>'
  dimMarks.thickMark.element.innerHTML = arabic
    ? '<span class="rule"></span><b><strong>11 مم</strong><span>السماكة</span></b>'
    : '<span class="rule"></span><b><strong>11 mm</strong><span>Thickness</span></b>'
  dimMarks.massMark.element.innerHTML = arabic
    ? '<b><strong>≈ 15 جم</strong><span>الوزن الصافي</span></b>'
    : '<b><strong>~15 g</strong><span>Net mass</span></b>'

  hotspotButtons.forEach((button, id) => {
    const copy = HOTSPOT_COPY[id]
    const label = button.querySelector('.hs-label')
    if (label) label.innerHTML = arabic ? copy.shortAr : copy.short
    button.setAttribute(
      'aria-label',
      arabic ? `${copy.titleAr} — فتح المواصفة` : `${copy.title} — open the specification`,
    )
  })
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

/* The card serves two masters: a hotspot on the tablet, or the product's own
   spec sheet from the readout corner. Either way it closes the same way. */
function closeCard({ restoreFocus = true } = {}) {
  if (openCard === 'hotspot' && openHotspotId) {
    const button = hotspotButtons.get(openHotspotId)
    button?.classList.remove('is-on')
    button?.setAttribute('aria-expanded', 'false')
    if (restoreFocus) button?.focus({ preventScroll: true })
  }
  if (openCard === 'spec' && restoreFocus) copyEls.specOpen?.focus({ preventScroll: true })
  openHotspotId = null
  openCard = null
  card.hidden = true
}

const closeHotspot = () => closeCard()

/* The written spec sheet for whichever product is on stage. */
function renderSpecCard() {
  if (openCard !== 'spec') return
  const arabic = lang === 'ar'
  card.classList.add('is-ar')
  cardParts.kicker.textContent = pick(product.name)
  cardParts.title.textContent = arabic ? 'المواصفات' : 'Specification'
  cardParts.body.textContent = pick(product.hero.line)
  cardParts.arabic.textContent = ''
  cardParts.rows.innerHTML = product.specs
    .map((row) => `<div><dt>${pick(row.label)}</dt><dd>${pick(row.value)}</dd></div>`)
    .join('')
}

function openSpecSheet() {
  closeCard({ restoreFocus: false })
  openCard = 'spec'
  renderSpecCard()
  card.hidden = false
  closeButton.focus({ preventScroll: true })
}

function renderHotspotCopy(id) {
  const copy = HOTSPOT_COPY[id]
  if (!copy) return
  const arabic = lang === 'ar'
  card.classList.remove('is-ar')
  cardParts.kicker.textContent = arabic ? copy.kickerAr : copy.kicker
  cardParts.title.textContent = arabic ? copy.titleAr : copy.title
  cardParts.body.textContent = arabic ? copy.bodyAr : copy.body
  cardParts.arabic.textContent = copy.arabic
  cardParts.rows.innerHTML = (arabic ? copy.rowsAr : copy.rows)
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join('')
}

function toggleHotspot(id) {
  const wasOpen = openHotspotId === id
  closeCard({ restoreFocus: false })
  if (wasOpen) return
  if (!HOTSPOT_COPY[id]) return
  openCard = 'hotspot'
  card.classList.remove('is-ar')
  renderHotspotCopy(id)
  card.hidden = false
  const button = hotspotButtons.get(id)
  button?.classList.add('is-on')
  button?.setAttribute('aria-expanded', 'true')
  openHotspotId = id
  closeButton.focus({ preventScroll: true })
}

closeButton?.addEventListener('click', () => closeCard())
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

const measurePanels = () => {
  const vh = window.innerHeight
  panelRects = panels.map((panel) => {
    const rect = panel.getBoundingClientRect()
    // Where the scroll sits when this panel is centred in the viewport.
    return { anchor: rect.top + window.scrollY + rect.height / 2 - vh / 2, height: rect.height }
  })
}

/* One story step per panel: the section is "done" when it reaches mid-screen. */
const computeProgress = () => {
  const count = panelRects.length
  if (!count) return 0
  const y = window.scrollY
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
  // The magazine is print: the 3D chrome steps out of its way.
  const paper = [rangeEls.section, mag.section].filter(Boolean)
  if (paper.length) {
    const top = Math.min(...paper.map((element) => element.getBoundingClientRect().top))
    document.body.classList.toggle('is-paper', top < window.innerHeight * 0.45)
  }
  if (lockedProgress !== null) return
  targetProgress = computeProgress()
}
window.addEventListener('scroll', onScroll, { passive: true })

let story = null

/* Words stay unbroken; every glyph gets its own box so it can rise. */
function splitLetters(heading, source = heading.textContent) {
  const text = source.trim().replace(/\s+/g, ' ')
  const letters = []
  heading.textContent = ''
  text.split(' ').forEach((word, index, words) => {
    const wrap = document.createElement('span')
    wrap.className = 'word'
    for (const char of word) {
      const letter = document.createElement('span')
      letter.className = 'letter'
      letter.textContent = char
      wrap.appendChild(letter)
      letters.push(letter)
    }
    heading.appendChild(wrap)
    if (index < words.length - 1) heading.appendChild(document.createTextNode(' '))
  })
  return letters
}

/* The timeline is rebuilt per product: only the tablet erodes on screen, so
   only the tablet gets the dissolve tween. */
function buildTimeline() {
  // A rebuilt timeline must start from the same values it started from the
  // first time, or the camera would begin wherever the reader left it.
  Object.assign(state.bag, { spin: 0, open: 0, tilt: 0, side: 0 })
  state.cam.k = 0
  state.pour.u = 0
  state.annot.v = 0
  state.dissolve.v = 0

  const timeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
  timeline
    .to(state.bag, { spin: 1, duration: 0.14, ease: 'power1.inOut' }, 0.02)
    .to(state.cam, { k: 1, duration: 0.1, ease: 'power1.inOut' }, 0.02)
    .to(state.bag, { open: 1, duration: 0.08, ease: 'power2.out' }, 0.09)
    .to(state.bag, { tilt: 1, duration: 0.07, ease: 'power2.inOut' }, 0.15)
    .to(state.cam, { k: 2, duration: 0.08, ease: 'power1.inOut' }, 0.16)
    .to(state.pour, { u: 1, duration: 0.19, ease: 'none' }, 0.21)
    .to(state.bag, { tilt: 0.12, duration: 0.07, ease: 'power1.inOut' }, 0.4)
    .to(state.cam, { k: 3, duration: 0.07, ease: 'power1.inOut' }, 0.39)
    .to(state.bag, { side: 1, duration: 0.08, ease: 'power1.inOut' }, 0.42)
    .to(state.bag, { open: 0, duration: 0.06, ease: 'power2.inOut' }, 0.44)
    .to(state.annot, { v: 1, duration: 0.06, ease: 'power1.out' }, 0.42)
    .to(state.annot, { v: 0, duration: 0.05, ease: 'power1.in' }, 0.56)

  if (!product.dissolve.fixed) {
    timeline.to(state.dissolve, { v: 1, duration: 0.155, ease: 'power1.inOut' }, 0.575)
  }

  timeline
    .to(state.cam, { k: 4, duration: 0.13, ease: 'power1.inOut' }, 0.7)
    // The tweens stop short of 1; a zero-length set at the end makes the
    // timeline duration exactly 1 so progress() and the scroll agree.
    .set({}, {}, 1)

  if (story) story.kill()
  story = timeline
  story.progress(smoothProgress || 0)
  return timeline
}

function buildStory() {
  applyProductCopy()
  buildTimeline()

  /* Display headings set letter by letter; everything else rises into place
     as its panel takes the screen. */
  panels.forEach((panel) => {
    panel.querySelectorAll('[data-letters]').forEach((heading) => {
      // Arabic headings keep their glyphs joined; they fade rather than rise.
      if (lang === 'ar') {
        heading.classList.add('is-ar')
        return
      }
      const letters = splitLetters(heading)
      if (reduceMotion) return
      gsap.from(letters, {
        yPercent: 108,
        opacity: 0,
        duration: 0.9,
        ease: 'expo.out',
        stagger: 0.018,
        scrollTrigger: {
          trigger: panel,
          start: 'top 72%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    const bits = panel.querySelectorAll('[data-reveal]')
    if (bits.length) {
      gsap.from(bits, {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: panel,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })
    }
  })

  measurePanels()
  onScroll()
  smoothProgress = targetProgress
  story.progress(smoothProgress)
  setStep(smoothProgress < 0.2 ? 0 : smoothProgress < 0.42 ? 1 : smoothProgress < 0.72 ? 2 : 3)
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

const RAIL_TARGETS = [0, 2, 3, 6]
railButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    panels[RAIL_TARGETS[index]]?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
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
  !!target.closest('a, button, input, textarea, select, .ov, .story, .rail, .bar, .hs-card')

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

  // A portrait screen shows far less width than the camera was framed for.
  // Hold the hero framing, then back off through the tablet and wide shots.
  const portrait =
    camera.aspect < 1 ? Math.min(1.45, Math.pow(1 / camera.aspect, 0.35)) : 1
  const back =
    (1 + (portrait - 1) * THREE.MathUtils.smoothstep(state.cam.k, 1.6, 2.6)) * product.sack.back

  camera.position.copy(camTarget).addScaledVector(offset, back)
  camera.lookAt(camTarget)
}

function applyBag(elapsed) {
  const { spin, tilt, side, open } = state.bag
  bagRoot.rotation.y = spin * 0.92 + Math.sin(elapsed * 0.25) * 0.012
  bagRoot.rotation.z = tilt * -0.42
  // Portrait crops the frame's width, so the sack steps in to stay in shot.
  const tight = camera.aspect < 1 ? 0.5 : 1
  bagRoot.position.x = side * 1.1 * tight
  bagRoot.position.z = -side * 0.7

  if (!mouth) return
  mouth.group.visible = open > 0.01
  mouth.dark.opacity = 0.95 * open
  mouth.throat.opacity = 0.9 * open
  mouth.lips.forEach((pivot) => {
    pivot.rotation.x = (pivot.userData.flip ? 1 : -1) * open * 1.05
  })
}

/* The tablet erodes from its rim inwards while the halo spreads. */
function updateDissolve() {
  if (!dissolveMesh) return
  const v = state.dissolve.v
  const hero = tablets[0]
  const on = v > 0.002
  dissolveMesh.visible = on
  // The hero's own contact shadow must shrink with it, or the speck floats.
  heroContact.scale.setScalar(on ? Math.max(0.4, 1 - v * 0.55) : 1)
  if (dissolveHalo) {
    dissolveHalo.visible = on
    dissolveHalo.scale.setScalar(0.16 + v * 0.62)
    dissolveHalo.material.opacity = on
      ? 0.5 * Math.min(1, v * 1.6) * (1 - 0.45 * THREE.MathUtils.smoothstep(v, 0.78, 1))
      : 0
  }
  if (!on || !hero) return

  const base = hero.scale
  const shrink = 1 - v * 0.55
  dissolveMesh.position.copy(hero.end)
  dissolveMesh.position.y += v * 0.006
  dissolveMesh.rotation.set(0, hero.restYaw + v * 0.9, 0)
  dissolveMesh.scale.set(base * shrink, base * 0.88 * (1 - v * 0.34), base * shrink)
  heroContact.material.opacity *= 0.35 + 0.65 * shrink

  // One instance is the same disc: hide it while the stand-in is on stage.
  pourMesh.setMatrixAt(0, dummy.matrix.makeScale(0.0001, 0.0001, 0.0001))
  pourMesh.instanceMatrix.needsUpdate = true
}

function updatePour() {
  if (!pourMesh) return
  const u = state.pour.u
  heroContact.material.opacity = 0.85 * THREE.MathUtils.smoothstep(u, 0.5, 0.92)
  for (let i = 0; i < tablets.length; i++) {
    const t = pourAt(tablets[i], u, i)
    if (t === null) continue
    if (t <= 0) pourMesh.setMatrixAt(i, dummy.matrix.makeScale(0.0001, 0.0001, 0.0001))
  }
  pourMesh.instanceMatrix.needsUpdate = true
}

/* -------------------------------------------------------------------------- */
/*  HUD — the copy rides on the model                                        */
/* -------------------------------------------------------------------------- */
const hudEls = {
  hero: document.getElementById('ov-hero'),
  purity: document.getElementById('ov-purity'),
  pack: document.getElementById('ov-pack'),
  pour: document.getElementById('ov-pour'),
  count: document.getElementById('ov-count'),
  tablet: document.getElementById('ov-tablet'),
  standard: document.getElementById('ov-standard'),
  why: document.getElementById('ov-why'),
  where: document.getElementById('ov-where'),
  dissolve: document.getElementById('ov-dissolve'),
  supply: document.getElementById('ov-supply'),
  countValue: document.getElementById('hud-count'),
  diameter: document.getElementById('hud-diameter'),
  places: [...document.querySelectorAll('#places li')],
}

/* Every string the product switch rewrites lives here. */
const copyEls = {
  heroTitle: document.getElementById('hero-title'),
  heroLine: document.getElementById('hero-line'),
  purityValue: document.getElementById('purity-value'),
  purityLabel: document.getElementById('purity-label'),
  packTitle: document.getElementById('pack-title'),
  packTags: document.getElementById('pack-tags'),
  pourTitle: document.getElementById('pour-title'),
  pourLine: document.getElementById('pour-line'),
  countLabel: document.getElementById('count-label'),
  closeEyebrow: document.getElementById('close-eyebrow'),
  railClose: document.getElementById('rail-close'),
  closeTitle: document.getElementById('close-title'),
  closeLine: document.getElementById('close-line'),
  standardValue: document.getElementById('standard-value'),
  standardLabel: document.getElementById('standard-label'),
  whyTitle: document.getElementById('why-title'),
  whyLine: document.getElementById('why-line'),
  dissolveUnit: document.getElementById('dissolve-unit'),
  dissolveLabel: document.getElementById('dissolve-label'),
  whereTitle: document.getElementById('where-title'),
  places: document.getElementById('places'),
  specOpen: document.getElementById('spec-open'),
  switcher: document.getElementById('product-switch'),
}

const pick = (value) => (lang === 'ar' ? value.ar : value.en)

/* A heading is a row of glyph boxes in English and plain text in Arabic. */
function setHeading(el, text) {
  if (!el) return
  el.textContent = ''
  if (lang === 'ar') {
    el.classList.add('is-ar')
    el.textContent = text
    return
  }
  el.classList.remove('is-ar')
  const letters = splitLetters(el, text)
  if (letters.length) gsap.set(letters, { yPercent: 0, opacity: 1 })
}

function applyProductCopy() {
  const p = product
  setHeading(copyEls.heroTitle, pick(p.hero.title))
  copyEls.heroLine.textContent = pick(p.hero.line)
  copyEls.purityValue.textContent = p.purity.value
  copyEls.purityLabel.textContent = pick(p.purity.label)

  setHeading(copyEls.packTitle, pick(p.pack.title))
  copyEls.packTags.innerHTML = p.pack.tags.map((tag) => `<li>${pick(tag)}</li>`).join('')

  setHeading(copyEls.pourTitle, pick(p.pour.title))
  copyEls.pourLine.textContent = pick(p.pour.line)
  copyEls.countLabel.textContent = pick(p.pour.countLabel)

  copyEls.closeEyebrow.textContent = pick(p.close.eyebrow)
  copyEls.railClose.textContent = `03 ${pick(p.close.nav)}`
  setHeading(copyEls.closeTitle, pick(p.close.title))
  copyEls.closeLine.textContent = pick(p.close.line)
  copyEls.standardValue.textContent = p.close.standard.value
  copyEls.standardLabel.textContent = p.close.standard.label

  setHeading(copyEls.whyTitle, pick(p.why.title))
  copyEls.whyLine.textContent = pick(p.why.line)

  copyEls.dissolveUnit.textContent = pick(p.dissolve.unit)
  copyEls.dissolveLabel.textContent = pick(p.dissolve.label)

  setHeading(copyEls.whereTitle, pick(p.where.title))
  copyEls.places.innerHTML = p.where.places
    .map((place, i) => `<li data-place="${i}"><i>${String(i + 1).padStart(2, '0')}</i><span>${pick(place)}</span></li>`)
    .join('')
  hudEls.places = [...copyEls.places.querySelectorAll('li')]

  if (copyEls.specOpen) copyEls.specOpen.textContent = lang === 'ar' ? 'المواصفات' : 'Specification'
  if (openCard) renderSpecCard()
}

/* -------------------------------------------------------------------------- */
/*  The product switch — one scene, five products                            */
/* -------------------------------------------------------------------------- */
const PRODUCT_KEY = 'sinaicore:product'
let openCard = null

function renderSwitcher() {
  if (!copyEls.switcher) return
  copyEls.switcher.innerHTML = PRODUCT_ORDER.map((id) => {
    const entry = PRODUCTS[id]
    const on = entry.id === product.id
    return `<button type="button" data-product="${id}" class="${on ? 'is-on' : ''}" aria-pressed="${on}">${pick(entry.short)}</button>`
  }).join('')
}

async function loadSackTexture(file) {
  if (!file) return baseSackTexture
  if (sackTextures.has(file)) return sackTextures.get(file)
  const texture = await new THREE.TextureLoader().loadAsync(`${BASE}artwork/${file}?${stamp}`)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())
  sackTextures.set(file, texture)
  return texture
}

async function setProduct(id, { store = true } = {}) {
  const next = PRODUCTS[id]
  if (!next) return
  const changed = next.id !== product.id
  product = next

  if (sackMaterial) {
    const texture = await loadSackTexture(next.sack.texture)
    if (texture) {
      sackMaterial.map = texture
      sackMaterial.needsUpdate = true
    }
  }
  sack.scale.setScalar(next.sack.scale)

  if (pourMesh) {
    pourMesh.geometry = shapeFor(next.particle.kind)
    // The tint rides on the instances, so the material itself stays white.
    pourMesh.material.color.set('#ffffff')
    pourMesh.material.roughness = next.particle.rough
  }
  if (dissolveMesh) dissolveMesh.geometry = shapeFor(next.particle.kind)
  if (pourMesh) seedParticles()
  if (next.dissolve.fixed) state.dissolve.v = 0

  applyProductCopy()
  renderSwitcher()
  if (story && changed) buildTimeline()

  if (store) {
    try {
      localStorage.setItem(PRODUCT_KEY, next.id)
    } catch {
      // Private mode: the choice just doesn't outlive the visit.
    }
  }
}

copyEls.switcher?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-product]')
  if (button) setProduct(button.dataset.product)
})

copyEls.specOpen?.addEventListener('click', openSpecSheet)

/* -------------------------------------------------------------------------- */
/*  The range — five products, one screen each                               */
/* -------------------------------------------------------------------------- */
/*  One sticky sack, five panels scrolling past it. The sack changes when a    */
/*  panel takes the middle of the screen; the text column alternates sides so  */
/*  the two never sit on top of each other.                                   */
/* -------------------------------------------------------------------------- */
const rangeEls = {
  section: document.getElementById('range'),
  stage: document.getElementById('range-stage'),
  sacks: document.getElementById('range-sacks'),
  panels: document.getElementById('range-panels'),
  eyebrow: document.getElementById('range-eyebrow'),
  title: document.getElementById('range-title'),
  lede: document.getElementById('range-lede'),
  index: document.getElementById('range-index'),
  total: document.getElementById('range-total'),
}

const RANGE_COPY = {
  eyebrow: L('The range · Sinai, Egypt', 'خط الإنتاج · سيناء، مصر'),
  title: L('Five salts, one plant.', 'خمسة أملاح، مصنع واحد.'),
  lede: L(
    'The same pans, five ways out: tablets for brine, refined for the table, washed and rock for industry, road salt for winter.',
    'نفس الأحواض، وخمسة طرق للخروج: أقراص للمحاليل، ومكرّر للمائدة، ومغسول وصخري للصناعة، وملح طرق للشتاء.',
  ),
}

const RANGE_SIDE = ['right', 'left', 'right', 'left', 'right']

const RANGE_END = {
  eyebrow: L('Sinai · Egypt', 'سيناء · مصر'),
  title: L('One plant. Five salts.', 'مصنع واحد. خمسة أملاح.'),
  line: L(
    'Fifty-kilo sacks or one-tonne jumbos, printed to your grade and shipped from El-Arish.',
    'شكاير خمسين كيلو أو جامبو طن، مطبوعة على مقاسك، ومشحونة من العريش.',
  ),
  call: L('Call the plant', 'اتصل بالمصنع'),
  whatsapp: L('WhatsApp', 'واتساب'),
  flats: L('See the flats', 'شوف الملاحة'),
  foot: L('El-Arish · North Sinai · +20 110 753 9914', 'العريش · شمال سيناء · ‎+20 110 753 9914'),
}

/* English letters rise one by one; Arabic words are never broken. */
function rangeTitle(heading, text) {
  heading.textContent = ''
  if (lang === 'ar') {
    heading.textContent = text
    return
  }
  let index = 0
  text.split(' ').forEach((word, position, words) => {
    const wrap = document.createElement('span')
    wrap.className = 'rw'
    for (const char of word) {
      const letter = document.createElement('span')
      letter.className = 'rl'
      letter.style.setProperty('--i', index++)
      letter.textContent = char
      wrap.appendChild(letter)
    }
    heading.appendChild(wrap)
    if (position < words.length - 1) heading.appendChild(document.createTextNode(' '))
  })
}

function renderRange() {
  if (!rangeEls.panels) return
  const arabic = lang === 'ar'
  const pick2 = (value) => (arabic ? value.ar : value.en)

  rangeEls.eyebrow.textContent = pick2(RANGE_COPY.eyebrow)
  rangeEls.title.textContent = pick2(RANGE_COPY.title)
  rangeEls.lede.textContent = pick2(RANGE_COPY.lede)
  rangeEls.total.textContent = String(PRODUCT_ORDER.length).padStart(2, '0')

  rangeObserver.disconnect()
  rangeNear.disconnect()
  rangeEndObserver.disconnect()
  rangeEls.sacks.innerHTML = PRODUCT_ORDER.map(
    (id, index) =>
      `<img src="${BASE}artwork/still-${id}.webp" alt="" ${index === 0 ? 'class="is-on"' : ''} loading="lazy" decoding="async" width="765" height="1100" />`,
  ).join('')

  rangeEls.panels.innerHTML = PRODUCT_ORDER.map((id, index) => {
    const product = PRODUCTS[id]
    return `
      <article class="rpanel" data-index="${index}" data-product="${id}" data-side="${RANGE_SIDE[index]}" style="--accent:${product.range.accent}">
        <div class="rpanel__inner">
          <span class="rpanel__chip">${pick2(product.pack.title)}</span>
          <p class="rpanel__eyebrow"><span dir="ltr">NaCl ${product.purity.value}</span></p>
          <h2 class="rpanel__title"></h2>
          <p class="rpanel__spec"><span dir="ltr">${pick2(product.close.title)} mm</span></p>
          <p class="rpanel__line">${pick2(product.hero.line)}</p>
          <ul class="rpanel__uses">${product.range.uses.map((use) => `<li>${pick2(use)}</li>`).join('')}</ul>
        </div>
      </article>`
  }).join('')

  rangeEls.panels.insertAdjacentHTML(
    'beforeend',
    `
    <div class="rend">
      <div class="rend__inner">
        <p class="eyebrow">${pick2(RANGE_END.eyebrow)}</p>
        <h2 class="rend__title">${pick2(RANGE_END.title)}</h2>
        <p class="rend__line">${pick2(RANGE_END.line)}</p>
        <div class="rend__cta">
          <a href="tel:+201107539914">${pick2(RANGE_END.call)}<span aria-hidden="true">→</span></a>
          <a href="https://wa.me/201107539914" target="_blank" rel="noopener">${pick2(RANGE_END.whatsapp)}</a>
          <a href="#mag" data-goto-flats>${pick2(RANGE_END.flats)}</a>
        </div>
        <p class="rend__foot">${pick2(RANGE_END.foot)}</p>
      </div>
    </div>`,
  )

  rangeEndObserver.observe(rangeEls.panels.querySelector('.rend'))

  rangeEls.panels.querySelector('[data-goto-flats]')?.addEventListener('click', (event) => {
    event.preventDefault()
    mag.section?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  })

  rangeEls.panels.querySelectorAll('.rpanel').forEach((panel) => {
    const product = PRODUCTS[panel.dataset.product]
    rangeTitle(panel.querySelector('.rpanel__title'), pick2(product.name))
    rangeObserver.observe(panel)
    rangeNear.observe(panel)
  })

  setRangeActive(0)
}

function setRangeActive(index) {
  if (!rangeEls.sacks) return
  rangeEls.stage.dataset.side = RANGE_SIDE[index] || 'right'
  rangeEls.index.textContent = String(index + 1).padStart(2, '0')
  rangeEls.sacks.querySelectorAll('img').forEach((img, position) => {
    img.classList.toggle('is-on', position === index)
  })
  const accent = PRODUCTS[PRODUCT_ORDER[index]].range.accent
  rangeEls.section.style.setProperty('--clay', accent)
  rangeEls.stage.style.setProperty('--glow', `${accent}2b`)
}

const rangeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-in')
      setRangeActive(Number(entry.target.dataset.index))
    })
  },
  { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
)

/* The closing panel takes over the tally. */
const rangeEndObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => rangeEls.section.classList.toggle('is-end', entry.isIntersecting))
  },
  { threshold: 0.35 },
)

/* Copy steps back as its product leaves the middle of the screen. */
const rangeNear = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('is-near', entry.isIntersecting))
  },
  { rootMargin: '-38% 0px -38% 0px', threshold: 0 },
)

/* -------------------------------------------------------------------------- */
/*  Cursor — a clay dot with a ring that lags a beat behind                   */
/* -------------------------------------------------------------------------- */
const cursorEl = document.getElementById('cursor')

if (cursorEl && !window.matchMedia('(pointer: coarse)').matches) {
  const dot = cursorEl.querySelector('.cursor__dot')
  const ring = cursorEl.querySelector('.cursor__ring')
  let pointerX = window.innerWidth / 2
  let pointerY = window.innerHeight / 2
  let ringX = pointerX
  let ringY = pointerY
  let seen = false

  window.addEventListener(
    'pointermove',
    (event) => {
      pointerX = event.clientX
      pointerY = event.clientY
      if (!seen) {
        seen = true
        ringX = pointerX
        ringY = pointerY
        cursorEl.classList.add('is-on')
      }
    },
    { passive: true },
  )

  const interactive = 'a, button, [data-cursor], .rpanel__chip, .rend__cta a'
  window.addEventListener(
    'pointerover',
    (event) => {
      const target = event.target instanceof Element ? event.target.closest(interactive) : null
      cursorEl.classList.toggle('is-hot', Boolean(target))
    },
    { passive: true },
  )

  document.addEventListener('pointerleave', () => {
    cursorEl.classList.remove('is-on')
    seen = false
  })

  const drawCursor = () => {
    ringX += (pointerX - ringX) * 0.16
    ringY += (pointerY - ringY) * 0.16
    dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
    requestAnimationFrame(drawCursor)
  }
  requestAnimationFrame(drawCursor)
}

/* -------------------------------------------------------------------------- */
/*  The salt flats — the editorial half, rendered from the chapter list       */
/* -------------------------------------------------------------------------- */
const mag = {
  section: document.getElementById('mag'),
  eyebrow: document.getElementById('mag-eyebrow'),
  title: document.getElementById('mag-title'),
  lede: document.getElementById('mag-lede'),
  list: document.getElementById('mag-list'),
  foot: document.getElementById('mag-foot'),
}

const MAG_COPY = {
  eyebrow: L('The salt flats · eight chapters', 'ملاحات سيناء · ثمانية فصول'),
  title: L('From seawater to sack', 'من ماء البحر إلى الشيكارة'),
  lede: L(
    'Eight steps between the sea and a fifty-kilo sack — photographed on the pans, with no models at all.',
    'ثماني خطوات بين البحر وشيكارة من خمسين كيلو — مصوّرة على الأحواض، وبلا أي مجسّم ثلاثي الأبعاد.',
  ),
  foot: L('El-Arish · North Sinai, Egypt', 'العريش · شمال سيناء، مصر'),
}

const magObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-in')
      magObserver.unobserve(entry.target)
    })
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
)

function renderChapters() {
  if (!mag.list) return
  const arabic = lang === 'ar'
  const pick2 = (value) => (arabic ? value.ar : value.en)

  mag.eyebrow.textContent = pick2(MAG_COPY.eyebrow)
  mag.title.textContent = pick2(MAG_COPY.title)
  mag.lede.textContent = pick2(MAG_COPY.lede)
  mag.foot.textContent = pick2(MAG_COPY.foot)

  mag.list.innerHTML = CHAPTERS.map(
    (chapter) => `
      <article class="chap">
        <figure class="chap__plate">
          <img src="${BASE}${chapter.plate}" alt="${pick2(chapter.caption)}" loading="lazy" decoding="async" width="1408" height="792" />
          <figcaption>${chapter.n} · ${pick2(chapter.caption)}</figcaption>
        </figure>
        <div class="chap__text">
          <p class="chap__num">${chapter.n} · ${pick2(chapter.eyebrow)}</p>
          <h3 class="chap__title">${pick2(chapter.title)}</h3>
          <p class="chap__lead">${pick2(chapter.lead)}</p>
          <p class="chap__body">${pick2(chapter.body)}</p>
          ${chapter.note ? `<p class="chap__note">${pick2(chapter.note)}</p>` : ''}
          <dl class="chap__stats">
            ${chapter.stats
              .map((stat) => `<div><dt>${stat.value}</dt><dd>${pick2(stat.label)}</dd></div>`)
              .join('')}
          </dl>
        </div>
      </article>`,
  ).join('')

  magObserver.disconnect()
  mag.list.querySelectorAll('.chap').forEach((article) => {
    if (reduceMotion) article.classList.add('is-in')
    else magObserver.observe(article)
  })
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
/* Fade in over a→b, hold, fade out over c→d. */
const ramp = (p, a, b, c, d) =>
  p < b ? clamp01((p - a) / Math.max(b - a, 1e-4)) : p > c ? 1 - clamp01((p - c) / Math.max(d - c, 1e-4)) : 1

const fadeHud = (el, v) => {
  if (!el) return
  const e = Math.round(v * 100) / 100
  if (el.dataset.v === String(e)) return
  el.dataset.v = String(e)
  el.style.opacity = String(e)
  el.style.transform = `translateY(${(1 - e) * 14}px)`
}

let landedTablets = -1
const syncHud = (p) => {
  if (!hudEls.hero) return
  fadeHud(hudEls.hero, ramp(p, -1, 0, 0.06, 0.1))
  fadeHud(hudEls.purity, ramp(p, 0.03, 0.09, 0.13, 0.17))
  fadeHud(hudEls.pack, ramp(p, 0.12, 0.17, 0.19, 0.23))
  fadeHud(hudEls.pour, ramp(p, 0.235, 0.28, 0.36, 0.41))
  fadeHud(hudEls.count, ramp(p, 0.25, 0.3, 0.38, 0.43))
  fadeHud(hudEls.tablet, ramp(p, 0.44, 0.48, 0.56, 0.61))
  fadeHud(hudEls.standard, ramp(p, 0.49, 0.54, 0.56, 0.61))
  fadeHud(hudEls.why, ramp(p, 0.58, 0.62, 0.76, 0.8))
  fadeHud(hudEls.dissolve, ramp(p, 0.6, 0.645, 0.76, 0.8))

  /* The readout counts down while the tablet actually erodes; every other
     product keeps a fixed number, so it simply sits there. */
  if (hudEls.diameter) {
    const { from, to, fixed } = product.dissolve
    const value = fixed ? from : from - state.dissolve.v * (from - to)
    const rounded = Math.abs(value) >= 10 ? Math.round(value) : Math.round(value * 10) / 10
    const label = `${rounded}`
    if (hudEls.diameter.dataset.mm !== label) {
      hudEls.diameter.dataset.mm = label
      hudEls.diameter.textContent = label
    }
  }
  fadeHud(hudEls.where, ramp(p, 0.8, 0.85, 0.9, 0.94))
  fadeHud(hudEls.supply, ramp(p, 0.93, 0.97, 2, 3))

  /* The counter is the model talking: it only counts tablets that landed. */
  if (hudEls.countValue && tablets.length) {
    const u = state.pour.u
    let landed = 0
    for (const tablet of tablets) {
      if ((u - tablet.delay) / tablet.duration >= 0.96) landed++
    }
    if (landed !== landedTablets) {
      landedTablets = landed
      hudEls.countValue.textContent = String(landed).padStart(2, '0')
    }
  }

  /* The four places tick on as the sack arrives in the left-hand field. */
  const local = clamp01((p - 0.815) / 0.05)
  hudEls.places.forEach((li, index) => {
    li.classList.toggle('is-on', local > index / 4.4)
  })
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
    // The rail keeps the four story beats, while the page has six panels.
    const step =
      smoothProgress < 0.2 ? 0 : smoothProgress < 0.42 ? 1 : smoothProgress < 0.72 ? 2 : 3
    if (step !== activeStep) setStep(step)
  }

  applyBag(elapsed)
  updatePour()
  updateDissolve()
  applyCamera()
  setAnnotationWeight(state.annot.v)
  updateDims()
  syncHud(smoothProgress)
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

fetch(`${BASE}artwork/sack-50kg-texture.png?${stamp}`, { method: 'HEAD' })
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
    scene,
    get annotationRoot() { return annotationRoot },
  }
}

/* Don't burn a phone battery while the tab sits in the background. */
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) clock.getDelta()
})

/* The reader's last choice wins on the next visit. */
let savedLang = null
try {
  savedLang = localStorage.getItem(LANG_KEY)
} catch {
  savedLang = null
}
setLanguage(savedLang === 'ar' ? 'ar' : 'en', { store: false })

let savedProduct = null
try {
  savedProduct = localStorage.getItem(PRODUCT_KEY)
} catch {
  savedProduct = null
}
setProduct(savedProduct && PRODUCTS[savedProduct] ? savedProduct : 'tablets', { store: false })
