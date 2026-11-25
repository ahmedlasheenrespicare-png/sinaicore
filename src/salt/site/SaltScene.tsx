/* ------------------------------------------------------------------ *
 * The scene.
 *
 * One fixed canvas for the page, and the product for each act comes from
 * `public/models` — the real GLBs already in this repository, Draco-compressed
 * and loaded with `useGLTF`. Nothing here is a placeholder: the crystal is
 * the halite specimen the grades table uses, the bag is the FIBC, the sack is
 * the printed 50 kg winter sack.
 *
 * Two things were not working before this page and had to be solved here as
 * well as in the site:
 *
 *   · the canvas must be *measured*. R3F measures its parent once; inside a
 *     lazy boundary that lands before layout and the canvas keeps the HTML
 *     default of 300×150, invisible. `FitCanvas` retries until the host has a
 *     real box.
 *   · the models carry no albedo maps, only flat base colours. They read as
 *     plastic until a real environment lights them. The rig below is the same
 *     one the reference uses for its bottle: a soft key, a cool rim, a warm
 *     low fill, baked into a PMREM.
 * ------------------------------------------------------------------ */

import { Suspense, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, Lightformer, ContactShadows, Preload } from '@react-three/drei'
import { products } from './content'

useGLTF.setDecoderPath('/draco/')

/* One mutable object carries the scroll into the render loop. React does not
   re-render on scroll; this is the only channel between the two. */
export const saltScene = { index: 0, turn: 0, close: 0, analysis: 0 }

const wide = () => window.innerWidth >= 1024

/* ------------------------------------------------------------------ *
 * Canvas sizing — see the header. Without this the page is blank.
 * ------------------------------------------------------------------ */
function FitCanvas() {
  const { gl, camera, setSize, size } = useThree()
  useEffect(() => {
    let raf = 0
    let tries = 0
    const solve = () => {
      const el = gl.domElement
      const w = el.parentElement?.clientWidth || el.clientWidth || 0
      const h = el.parentElement?.clientHeight || el.clientHeight || 0
      if (w < 2 || h < 2) return false
      if (size.width !== w || size.height !== h) setSize(w, h)
      const cam = camera as THREE.PerspectiveCamera
      cam.aspect = w / h
      cam.updateProjectionMatrix()
      return true
    }
    const tick = () => {
      tries++
      if (solve() || tries > 180) return
      raf = requestAnimationFrame(tick)
    }
    tick()
    const ro = new ResizeObserver(() => solve())
    ro.observe(gl.domElement.parentElement ?? gl.domElement)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, camera, setSize])
  return null
}

/* ------------------------------------------------------------------ *
 * Materials. The GLBs ship flat base colours with no maps. These override
 * them per node with something that answers to light properly:
 *
 *   halite  — a dielectric, not glass. High clearcoat, low roughness, a
 *             little transmission only where it is thin. Full transmission
 *             on a pale ground flattens it into paper.
 *   rock    — matte, dark, so the crystal has something to sit against.
 *   bag     — woven PP: sheen, roughness, a faint cool tint.
 *   print   — the branded panel, kept lighter so the ink reads.
 * ------------------------------------------------------------------ */
function materialFor(name: string, id: string): THREE.Material {
  const n = name.toLowerCase()

  if (n.includes('rock') || n.includes('host')) {
    /* the crystal cluster ships with its own low-poly pedestal. It is authored
       geometry and reads as cardboard next to a real scan, so it is hidden and
       the scanned bed takes its place. Returning a fully transparent material
       rather than hiding the node keeps the shadow pass simple. */
    return new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
  }
  if (n.includes('halite') || n.includes('crystal')) {
    return new THREE.MeshPhysicalMaterial({
      color: id === 'refined' ? '#dfeef6' : '#cfe0e8',
      roughness: 0.22,
      metalness: 0,
      transmission: 0.22,
      thickness: 0.5,
      ior: 1.54,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      envMapIntensity: 1.3,
      sheen: 0.35,
      sheenColor: new THREE.Color('#dff0ff'),
      sheenRoughness: 0.6,
    })
  }
  if (n.includes('print') || n.includes('brand') || n.includes('label')) {
    return new THREE.MeshStandardMaterial({ color: '#eef3f7', roughness: 0.72, metalness: 0 })
  }
  if (n.includes('woven') || n.includes('panel') || n.includes('body') || n.includes('sack')) {
    return new THREE.MeshPhysicalMaterial({
      color: '#f2f4f2',
      roughness: 0.86,
      metalness: 0,
      sheen: 0.5,
      sheenRoughness: 0.8,
      sheenColor: new THREE.Color('#cfdde8'),
      side: THREE.DoubleSide,
      envMapIntensity: 0.9,
    })
  }
  if (n.includes('cap') || n.includes('crimp') || n.includes('seal')) {
    return new THREE.MeshStandardMaterial({ color: '#eef1f4', roughness: 0.5, metalness: 0.15 })
  }
  if (n.includes('glass')) {
    return new THREE.MeshPhysicalMaterial({
      color: '#eaf4f8',
      roughness: 0.05,
      metalness: 0,
      transmission: 0.94,
      thickness: 0.35,
      ior: 1.46,
      transparent: true,
      side: THREE.DoubleSide,
      envMapIntensity: 1.2,
    })
  }
  return new THREE.MeshStandardMaterial({ color: '#dfe6ea', roughness: 0.7 })
}

/* The product assets are ours. The *ground* they sit on is the other kind of
   model: four photographic scans of real coast rock, published by Poly Haven
   under CC0, simplified from 2.6 M triangles to 271 k and re-encoded to GLB
   by scripts/build-real-models.mjs. They carry baked albedo, normal and
   roughness maps, which is what our authored meshes do not have — and what
   makes the plate read as a photographed object rather than a render.

   Using a scan for the ground rather than for the product is deliberate: a
   coastline boulder is honest scenery for a salt company, whereas a scanned
   rock presented as "our product" would not be. */
const FILES: Record<string, string> = {
  crystal: '/models/crystal.glb',
  bag: '/models/jumbo-bag.glb',
  sack: '/models/sack-50kg.glb',
  jar: '/models/sample-jar.glb',
  globe: '/models/globe.glb',
}

const TERRAIN: Record<string, string> = {
  refined: '/models/real/rock-boulder.glb',
  washed: '/models/real/rock-coast.glb',
  deicing: '/models/real/rock-shore.glb',
  close: '/models/real/rock-land.glb',
}

/* Each product's own scale and lift, measured from its bounds. */
/* Vertical placement. Every model is normalised to sit with its base at y=0,
   so the only lift needed is to put that base on the shadow plane — one
   number for all of them, rather than five that drift apart. */
const BASE_Y = -0.86

/* Each asset has a different natural aspect: the crystal cluster is wide and
   low, the FIBC is tall and narrow. Normalising by the bounding sphere makes
   the bag overflow the frame while the crystal looks small, so each model is
   scaled to a *height* — the dimension the camera actually frames against —
   and the target itself is per-model because the bag is more interesting
   wide than tall. */
const FIT: Record<string, number> = {
  crystal: 1.32,
  bag: 1.6,
  sack: 1.5,
  jar: 1.35,
  globe: 1.5,
}

function Model({ file, id }: { file: string; id: string }) {
  const { scene } = useGLTF(FILES[file])
  /* Normalise before wrapping: centre the model's own root on x/z and put its
     base at y=0, then scale the *wrapper*. Scaling the inner clone while the
     clone also carries an offset compounds the two — which is how the first
     run put a three-metre crystal across the headline. */
  const model = useMemo(() => {
    const inner = scene.clone(true)
    inner.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(inner)
    const size = new THREE.Vector3()
    const centre = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(centre)
    const g = new THREE.Group()
    g.add(inner)
    inner.position.set(-centre.x, -box.min.y, -centre.z)
    const target = FIT[file] ?? 1.1
    const k = target / Math.max(size.y, 0.001)
    g.scale.setScalar(k)
    inner.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.material = materialFor(mesh.name, id)
    })
    return g
  }, [scene, id])

  return <primitive object={model} position={[0, BASE_Y, 0]} />
}

/* The scanned ground. Its materials are already correct — baked albedo,
   normal, AO/roughness — so nothing is overridden here; the only work is to
   measure it, drop it so its top surface is at y=0, and size it to read as a
   bed the product sits on rather than a landscape. */
function Terrain({ file, y = 0 }: { file: string; y?: number }) {
  const { scene } = useGLTF(TERRAIN[file] ?? TERRAIN.refined)
  const obj = useMemo(() => {
    const inner = scene.clone(true)
    /* Box3.setFromObject on a cloned glTF scene whose matrices have not been
       composed yet returns a box around the *untransformed* geometry, which
       for a scan flattened at import is metres wide in one axis and nothing
       in the others. Adding it to a parent and forcing a world update before
       measuring is what makes the box real. */
    const probe = new THREE.Group()
    probe.add(inner)
    probe.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(probe)
    const size = new THREE.Vector3()
    const centre = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(centre)
    const g = new THREE.Group()
    g.add(inner)
    /* centred on x/z, and its *top* brought to the origin so the product does
       not sink into it */
    /* Centre on all three axes. Anchoring on the top surface pushes the whole
       mass of the rock below the group origin, which put it under the frame;
       centring it and letting the caller place the slab is what makes the
       bed read as ground the product stands on. */
    inner.position.set(-centre.x, -centre.y, -centre.z)
    const k = 3.6 / Math.max(size.x, size.z)
    g.scale.setScalar(k)
    inner.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      mesh.castShadow = false
      mesh.receiveShadow = true
    })
    return g
  }, [scene, file])
  return <primitive object={obj} position={[0, y, 0]} />
}

function Carousel() {
  const group = useRef<THREE.Group>(null)
  const wrap = useRef<THREE.Group>(null)
  const shown = useRef(0)
  const shut = useRef(0)

  useFrame((state, dt) => {
    const k = 1 - Math.exp(-6 * Math.min(dt, 0.1))
    shown.current += (saltScene.index - shown.current) * k
    shut.current += (saltScene.close - shut.current) * k
    const t = state.clock.elapsedTime
    if (group.current) {
      /* exactly one product inside the frustum: neighbours are parked far
         enough that they never appear at the edge of a wide frame */
      /* RTL page: the copy holds the right-hand 46vw, so the product lives
         on the left. Mirroring the axis is the whole difference. */
      group.current.position.x = shown.current * 7.5 - (wide() ? 1.45 : 0)
      group.current.rotation.y = saltScene.turn * 0.5 + Math.sin(t * 0.22) * 0.05
    }
    if (wrap.current) {
      const tall = !wide()
      const c = shut.current
      /* Portrait: one column, copy below. The product gets the top third,
         so it is lifted well clear of the headline and shrunk to about a
         third of its desktop size — at desktop scale it overlapped the title
         and pushed the copy off the bottom of the screen. */
      const targetY = (tall ? 1.72 : 0) - c * 0.1
      /* portrait: the scanned bed is wide, so the whole rig shrinks further
         than the product alone would need — at 0.5 the rock ran under the
         headline and swallowed the grade name */
      const scale = (tall ? 0.34 : 1) - c * (tall ? 0.08 : 0.22)
      wrap.current.position.y += (targetY - wrap.current.position.y) * k
      wrap.current.position.x += (c * (tall ? 0.2 : 1.4) - wrap.current.position.x) * k
      const sc = wrap.current.scale.x + (scale - wrap.current.scale.x) * k
      wrap.current.scale.setScalar(sc)
      wrap.current.rotation.z = Math.sin(t * 0.35) * 0.006
    }
  })

  return (
    <group ref={wrap}>
      <group ref={group}>
        {products.map((p, i) => (
          <group key={p.id} position={[i * -7.5, 0, 0]}>
            <Suspense fallback={null}>
              {/* the scanned bed sits a hair below the product's base, and is
                  wider than it, so the shadow lands on rock not on nothing */}
              <Terrain file={p.id} y={-1.02} />
              <Model file={p.model} id={p.id} />
            </Suspense>
          </group>
        ))}
      </group>
      <ContactShadows
        position={[0, -0.86, 0]}
        opacity={0.24}
        scale={9}
        blur={2.8}
        far={2.2}
        resolution={512}
        color="#3a2a1e"
      />
    </group>
  )
}

/* The studio. Same idea as the reference's: soft key front-left, cool rim
   behind, warm low fill on the right, baked once into the environment. */
function Studio() {
  return (
    <Environment resolution={256} frames={1}>
      <Lightformer position={[-2.5, 2.2, 3]} scale={[5, 5, 1]} intensity={4.2} color="#ffffff" />
      <Lightformer position={[3, 1.2, -2]} scale={[4, 4, 1]} intensity={2.4} color="#e2eef8" />
      <Lightformer position={[2.4, -1.4, 2]} scale={[3, 2, 1]} intensity={1.3} color="#ffdfc2" />
      <Lightformer position={[0, 3, -3]} scale={[6, 3, 1]} intensity={1.5} color="#ffffff" />
    </Environment>
  )
}

export default function SaltScene() {
  return (
    <Canvas
      dpr={[1, 1.7]}
      shadows
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      /* 9.2 units back at 30°: the vertical frustum is ±2.47 at the origin,
         which fits a 2.5-unit product with room for the shadow. At 6.2 the
         bag's own height overflowed the frame. */
      camera={{ position: [-1.6, 0.42, 7.4], fov: 32, near: 0.5, far: 50 }}
      onCreated={({ gl }) => {
        gl.setClearAlpha(0)
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 1.06
        gl.shadowMap.type = THREE.PCFShadowMap
      }}
    >
      <FitCanvas />
      <Studio />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-3.4, 5.6, 4.4]}
        intensity={2.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0006}
      />
      <directionalLight position={[4.6, 2.2, 2.2]} intensity={0.8} color="#dcecf8" />
      <directionalLight position={[0.4, 2.6, -5.2]} intensity={0.9} color="#fff1de" />
      <Suspense fallback={null}>
        <Carousel />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
