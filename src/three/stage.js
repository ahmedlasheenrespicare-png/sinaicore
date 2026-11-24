/* the fixed WebGL stage */

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { loadLattice } from './lattice.js'
import { loadSpecimens } from './specimens.js'
import { createParticles } from './particles.js'
import { createDrag } from './drag.js'
import { createHotspots } from './hotspots.js'
import { debounce, isMobile, reducedMotion } from '../core/utils.js'

const PAPER = 0xf4efe4

export async function createStage({ manager, state }) {
  const canvas = document.getElementById('gl')
  if (!canvas) return null

  let renderer
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !isMobile(),
      powerPreference: 'high-performance',
      preserveDrawingBuffer: false,
    })
  } catch (err) {
    console.warn('[SinaiCore] WebGL unavailable — falling back to the still.', err)
    document.body.classList.add('no-webgl')
    return null
  }

  const reduce = reducedMotion()
  /* transmission costs a full extra render of the scene — desktop only, and
     the refraction buffer is rendered at a fraction of the frame to keep the
     cost close to a single pass */
  const transmission = !isMobile() && !reduce

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile() ? 1.5 : 1.75))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.04
  renderer.setClearColor(PAPER, transmission ? 1 : 0)
  if (transmission) renderer.transmissionResolutionScale = 0.4

  const scene = new THREE.Scene()
  /* the transmission pass samples the framebuffer, so it needs something
     behind the crystals — the page's own paper colour, which is seamless */
  if (transmission) scene.background = new THREE.Color(PAPER)

  const camera = new THREE.PerspectiveCamera(
    33,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  )

  /* image-based light from a procedural room — no HDRI download */
  const pmrem = new THREE.PMREMGenerator(renderer)
  const envScene = new RoomEnvironment()
  const env = pmrem.fromScene(envScene, 0.04).texture
  scene.environment = env
  scene.environmentIntensity = 0.6

  const hemi = new THREE.HemisphereLight(0xf7f1e4, 0x2a2118, 0.45)
  scene.add(hemi)

  const key = new THREE.DirectionalLight(0xfff1dc, 3.1)
  key.position.set(3.6, 5.2, 4.2)
  scene.add(key)

  const rim = new THREE.DirectionalLight(0x9fd0ea, 1.7)
  rim.position.set(-4.2, 2.4, -3.4)
  scene.add(rim)

  const fill = new THREE.DirectionalLight(0xc2712f, 0.9)
  fill.position.set(0.5, -2.4, 3.2)
  scene.add(fill)

  const bounce = new THREE.PointLight(0x1a6b9c, 3.2, 7, 2)
  bounce.position.set(-2.4, 0.8, 1.8)
  scene.add(bounce)

  /* loaders */
  const draco = new DRACOLoader(manager)
  draco.setDecoderPath('/draco/')
  draco.preload()

  const ktx2 = new KTX2Loader(manager).setTranscoderPath('/ktx2/').detectSupport(renderer)

  const gltf = new GLTFLoader(manager)
  gltf.setDRACOLoader(draco)
  gltf.setKTX2Loader(ktx2)

  let lattice
  let specimens
  let wovenNormal
  try {
    ;[lattice, specimens, wovenNormal] = await Promise.all([
      loadLattice(gltf, '', { transmission }),
      loadSpecimens(gltf),
      ktx2.loadAsync('/textures/woven-normal.ktx2').catch((err) => {
        console.warn('[SinaiCore] KTX2 normal map unavailable:', err)
        return null
      }),
    ])
  } catch (err) {
    console.warn('[SinaiCore] model load failed — falling back to the still.', err)
    document.body.classList.add('no-webgl')
    return null
  }

  /* everything the reader can grab lives on one rig, so the drag rotates
     the crystals and the specimen together */
  const rig = new THREE.Group()
  rig.name = 'rig'
  scene.add(rig)
  rig.add(lattice.group)
  for (const spec of Object.values(specimens.groups)) rig.add(spec.group)

  /* the KTX2 compressed normal map goes on the woven body of the FIBC */
  if (wovenNormal) {
    wovenNormal.wrapS = wovenNormal.wrapT = THREE.RepeatWrapping
    wovenNormal.flipY = false
    const body = rig.getObjectByName('fibc_body')
    const mat = body?.material
    if (mat && !Array.isArray(mat)) {
      mat.normalMap = wovenNormal
      mat.normalScale = new THREE.Vector2(0.9, 0.9)
      mat.needsUpdate = true
    }
  }

  const particles = createParticles()
  scene.add(particles.group)

  const hotspots = createHotspots({ camera, rig, isMobile: isMobile() })
  const drag = createDrag({ camera, rig, enabled: !reduce && !isMobile() })

  /* mouse parallax */
  const mouse = { x: 0, y: 0 }
  const smooth = { x: 0, y: 0 }
  const onPointer = (e) => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
  }
  window.addEventListener('pointermove', onPointer, { passive: true })

  /* how far the composition sits left of centre, as a fraction of the
     half-viewport. Keeping it a *fraction* rather than a world offset means
     the crystal holds the same screen position at every camera distance. */
  const layoutShift = () => {
    const w = window.innerWidth
    if (w >= 1240) return 0.24
    if (w >= 1100) return 0.17
    if (w >= 860) return 0.1
    return 0
  }

  const camPos = new THREE.Vector3()
  const lookAt = new THREE.Vector3()

  let raf = 0
  let running = false
  let shouldRun = false
  let last = performance.now()

  function render(now) {
    if (!running) return
    raf = requestAnimationFrame(render)

    const dt = Math.min(0.05, (now - last) / 1000)
    last = now

    smooth.x += (mouse.x - smooth.x) * Math.min(1, dt * 4.5)
    smooth.y += (mouse.y - smooth.y) * Math.min(1, dt * 4.5)

    const shift = layoutShift()
    const parX = reduce ? 0 : smooth.x * 0.24
    const parY = reduce ? 0 : smooth.y * 0.16
    const idle = reduce ? 0 : Math.sin(now * 0.00042) * 0.018

    const dist = Math.hypot(state.camX - state.tx, state.camY - state.ty, state.camZ - state.tz)
    const halfW = dist * Math.tan((state.fov * Math.PI) / 360) * camera.aspect

    camPos.set(state.camX + parX, state.camY + parY + idle, state.camZ)
    camera.position.copy(camPos)
    lookAt.set(state.tx + halfW * shift, state.ty, state.tz)
    camera.lookAt(lookAt)
    if (Math.abs(camera.fov - state.fov) > 0.001) {
      camera.fov = state.fov
      camera.updateProjectionMatrix()
    }

    /* the reader's drag, layered on top of the scroll rotation */
    const orbit = drag.update(dt)
    rig.rotation.y = orbit.yaw
    rig.rotation.x = orbit.pitch
    rig.rotation.z = orbit.pitch * -0.25

    lattice.update(state, now)
    specimens.update(state, now)
    particles.update(state, now)

    renderer.render(scene, camera)
    hotspots.update()
  }

  function start() {
    if (running) return
    running = true
    shouldRun = true
    last = performance.now()
    raf = requestAnimationFrame(render)
  }

  function stop() {
    running = false
    shouldRun = false
    cancelAnimationFrame(raf)
    hotspots.hideAll()
  }

  function resize() {
    const w = window.innerWidth
    const h = window.innerHeight
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile() ? 1.5 : 1.75))
    renderer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }

  const onResize = debounce(resize, 160)
  window.addEventListener('resize', onResize)

  const onVisibility = () => {
    if (document.hidden) {
      running = false
      cancelAnimationFrame(raf)
    } else if (shouldRun && !running) {
      running = true
      last = performance.now()
      raf = requestAnimationFrame(render)
    }
  }
  document.addEventListener('visibilitychange', onVisibility)

  function dispose() {
    running = false
    shouldRun = false
    cancelAnimationFrame(raf)
    window.removeEventListener('pointermove', onPointer)
    window.removeEventListener('resize', onResize)
    document.removeEventListener('visibilitychange', onVisibility)
    drag.dispose()
    hotspots.dispose()
    lattice.dispose()
    specimens.dispose()
    particles.dispose()
    draco.dispose()
    ktx2.dispose()
    pmrem.dispose()
    envScene.traverse?.((obj) => {
      obj.geometry?.dispose?.()
      obj.material?.dispose?.()
    })
    renderer.dispose()
  }

  return {
    renderer,
    scene,
    camera,
    rig,
    lattice,
    specimens,
    particles,
    hotspots,
    drag,
    resize,
    start,
    stop,
    pause: stop,
    resume: start,
    dispose,
    setSpecimen: (name) => specimens.show(name),
    setChapter: (i) => hotspots.setChapter(i),
  }
}
