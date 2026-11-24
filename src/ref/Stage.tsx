import {
  Suspense,
  createContext,
  memo,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
} from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Preload, Environment, Lightformer } from '@react-three/drei'
import { SackArtTexture, useContainerPrint } from '../three/textures'
import { useWovenPBR, fabricProps } from './fabric'

useGLTF.setDecoderPath('/draco/')

export type Kind = 'container' | 'crystal' | 'tablets' | 'fibc' | 'sack' | 'globe' | 'jar'

/* ------------------------------------------------------------------ *
 * Environment — a real product-photography rig.
 *
 * The old version painted a gradient into a canvas and PMREM'd it, which
 * gives flat, directionless fill: every surface gets the same grey wash and
 * nothing reads as lit. Here the light comes from `public/hdr/studio.hdr`
 * (authored by scripts/build-textures.mjs: a big soft key, a low white fill,
 * a narrow rim strip and a grey seamless floor) plus a geometry light rig on
 * top of it, so glossy and transmissive surfaces get crisp, shaped
 * reflections and the shadow side keeps a believable gradient.
 * ------------------------------------------------------------------ */
function StudioEnv({ dark }: { dark: boolean }) {
  /* The lightformers are children of <Environment>: drei renders them into
     the environment scene and bakes them into the PMREM. Left as siblings
     they are drawn into the main scene as giant glowing planes — which is
     exactly the milky wash and hard diagonal band that used to sit over
     every plate. */
  return (
    <Environment
      files="/hdr/studio.hdr"
      background={false}
      environmentIntensity={dark ? 0.55 : 1.0}
      environmentRotation={[0, dark ? Math.PI * 0.72 : 0, 0]}
    >
      <Lightformer
        form="rect"
        intensity={dark ? 1.4 : 2.6}
        color="#ffffff"
        position={[-3.2, 4.6, 2.6]}
        rotation={[-0.6, -0.5, 0]}
        scale={[5, 3.4, 1]}
      />
      <Lightformer
        form="rect"
        intensity={dark ? 0.7 : 1.3}
        color="#eaf2f8"
        position={[4.4, 1.4, 1.8]}
        rotation={[0, -1.15, 0]}
        scale={[2.4, 4.2, 1]}
      />
      <Lightformer
        form="rect"
        intensity={dark ? 1.1 : 1.6}
        color="#fff4e6"
        position={[0.4, 2.2, -4.6]}
        scale={[6, 1.5, 1]}
      />
      {dark && <Lightformer form="ring" intensity={2.2} color="#9fd4f0" position={[-2, 1, -3]} scale={3} />}
    </Environment>
  )
}

/** the studio floor. Every model is positioned to stand on this height, so
 *  the plane can never cut through a subject. */
/* Every GLB is authored around its own origin, at its own scale, so no
   hardcoded seat offset can be right for all of them — and a wrong one either
   floats the object or buries it in the floor. Instead each rig measures its
   own bounding box at mount, centres the object on the origin, and reports its
   half-height up to the stage so the floor and the contact shadow can be
   placed exactly under its base. */

/** half-height of the model currently mounted, measured — not guessed */
const MetricsCtx = createContext<((halfHeight: number) => void) | null>(null)

function useReportMetrics(scene: THREE.Object3D, deps: unknown[]) {
  const report = useContext(MetricsCtx)
  useLayoutEffect(() => {
    if (!report) return
    const box = new THREE.Box3().setFromObject(scene)
    report(Math.max(0.05, (box.max.y - box.min.y) / 2))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [report, scene, ...deps])
}

type Tone = 'paper' | 'mid' | 'stone' | 'slate'

/* ------------------------------------------------------------------ *
 * The cyclorama
 *
 * Drawn in WebGL, not as a CSS gradient behind the canvas. That matters:
 * a mesh with `transmission` is rendered in three.js through a separate
 * transmission pass that samples the *scene*, so it needs an opaque
 * framebuffer to work at all — on a transparent canvas the pass loses the
 * object entirely. Giving the plate its own painted cyclorama both fixes
 * the glass and gives the refraction something real to bend.
 *
 * Geometry is the classic studio cyc: a floor that curves up into a wall
 * through a large radius, so floor and wall are one surface with no
 * meeting line to seam. It is unlit — a photographic backdrop is a printed
 * sweep, lit by the rig rather than shaded by it — so the whole plate is
 * one continuous soft gradient with no lighting break at the horizon.
 * ------------------------------------------------------------------ */
const CYC = {
  front: 4.2,   // how far the floor runs toward camera
  radius: 1.9,  // the cove radius
  height: 7.0,  // how far the wall runs up
  half: 9.0,    // half-width
}

function useCycTexture(tone: Tone) {
  return useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 4
    c.height = 512
    const x = c.getContext('2d')!
    const g = x.createLinearGradient(0, 0, 0, 512)
    /* v = 0 is the front edge of the floor (nearest camera), v = 1 is the top
       of the wall. Every studio sweep is hottest just above the horizon and
       falls away both toward the lens and up the wall. */
    if (tone === 'stone') {
      g.addColorStop(0, '#242322')
      g.addColorStop(0.30, '#171716')
      g.addColorStop(0.52, '#2f2e2c')   // the horizon glow
      g.addColorStop(0.72, '#1b1a19')
      g.addColorStop(1, '#111010')
    } else if (tone === 'mid') {
      /* A mid-grey sweep: what you actually put a clear or white specimen on.
         A translucent subject on a white sweep has almost no separation —
         both sit near the same value and the object dissolves into the
         backdrop. Mid-grey keeps the backdrop darker than the lit faces and
         lets the transmitted light glow through the body. */
      g.addColorStop(0, '#8d979e')
      g.addColorStop(0.30, '#7d878f')
      g.addColorStop(0.50, '#a6b0b6')   // horizon glow
      g.addColorStop(0.66, '#9aa4ab')
      g.addColorStop(1, '#717b83')
    } else if (tone === 'slate') {
      g.addColorStop(0, '#4e565e')
      g.addColorStop(0.30, '#3a4147')
      g.addColorStop(0.52, '#6b747c')
      g.addColorStop(0.72, '#414850')
      g.addColorStop(1, '#2b3136')
    } else {
      g.addColorStop(0, '#cfd7dc')
      g.addColorStop(0.34, '#e6ebee')
      g.addColorStop(0.50, '#fbfcfd')   // the horizon glow
      g.addColorStop(0.60, '#f2f5f7')
      g.addColorStop(0.82, '#dbe2e7')
      g.addColorStop(1, '#c8d1d7')
    }
    x.fillStyle = g
    x.fillRect(0, 0, 4, 512)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 4
    return t
  }, [tone])
}

function Cyc({ tone, y }: { tone: Tone; y: number }) {
  const tex = useCycTexture(tone)

  const geo = useMemo(() => {
    /* profile in (z, y): straight floor, quarter-cove, straight wall */
    const pts: Array<[number, number]> = []
    const { front, radius: rad, height } = CYC
    pts.push([front, 0])
    for (let i = 0; i <= 10; i++) {
      const a = (i / 10) * (Math.PI / 2)
      pts.push([-rad * Math.sin(a), rad - rad * Math.cos(a)])
    }
    pts.push([-rad, height])

    const half = CYC.half
    const cols = 2
    const pos: number[] = []
    const uv: number[] = []
    const idx: number[] = []
    pts.forEach(([z, h], j) => {
      for (let i = 0; i < cols; i++) {
        pos.push(-half + (2 * half * i) / (cols - 1), h, z)
        uv.push(i / (cols - 1), j / (pts.length - 1))
      }
    })
    for (let j = 0; j < pts.length - 1; j++) {
      for (let i = 0; i < cols - 1; i++) {
        const a = j * cols + i
        idx.push(a, a + cols, a + 1, a + 1, a + cols, a + cols + 1)
      }
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2))
    g.setIndex(idx)
    g.computeVertexNormals()
    return g
  }, [])

  return (
    <mesh geometry={geo} position={[0, y, 0]} receiveShadow>
      <meshBasicMaterial map={tex} side={THREE.DoubleSide} toneMapped={false} />
    </mesh>
  )
}

/* ------------------------------------------------------------------ *
 * Individual model rigs
 * ------------------------------------------------------------------ */
/* slow turntable; `swing` keeps the object a little off-axis so the front
   face stays readable instead of presenting a bare back panel */
function useSpinner(speed = 0.16, tilt = 0, swing = 0) {
  const ref = useRef<THREE.Group>(null)
  const t = useRef(Math.PI * 2)
  useFrame((_, dt) => {
    if (!ref.current) return
    if (swing > 0) {
      t.current += dt * speed
      ref.current.rotation.y = Math.sin(t.current * 0.42) * swing
    } else {
      ref.current.rotation.y += dt * speed
    }
    ref.current.rotation.z = tilt
  })
  return ref
}

function ContainerModel() {
  const { scene } = useGLTF('/models/container.glb')
  const print = useContainerPrint()
  const ref = useSpinner(0.16)
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      if (n.includes('plate')) {
        mesh.material = new THREE.MeshStandardMaterial({
          map: print,
          transparent: true,
          roughness: 0.62,
          metalness: 0.1,
          side: THREE.DoubleSide,
        })
      } else if (n.includes('frame')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#243b4b', roughness: 0.44, metalness: 0.6, envMapIntensity: 1.2 })
      } else if (n.includes('floor')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#2a231b', roughness: 0.9 })
      } else {
        /* corrugated steel: low roughness so the key light draws a long
           vertical highlight down each rib, like the real box */
        mesh.material = new THREE.MeshStandardMaterial({
          color: '#1f6b93',
          roughness: 0.34,
          metalness: 0.46,
          envMapIntensity: 1.25,
        })
      }
    })
    return m
  }, [scene, print])

  useReportMetrics(model, [model, print])
  return (
    <group ref={ref} position={[0, 0, 0]} rotation={[0, -0.6, 0]} scale={0.55}>
      <primitive object={model} />
    </group>
  )
}

/* ------------------------------------------------------------------ *
 * Halite — a translucent dielectric, not painted glass.
 *
 * `transmission` with a small `thickness` and an attenuation tint is the
 * physically-based way to get salt: the light enters, travels a short way,
 * scatters, and leaves. Combined with a high `ior`, a clearcoat and the
 * studio HDR, the cluster picks up a bright rim on every facet edge and a
 * cool body, which is what makes it read as a mineral specimen rather than
 * a paper cut-out.
 * ------------------------------------------------------------------ */
function CrystalModel() {
  const { scene } = useGLTF('/models/crystal.glb')
  const ref = useSpinner(0.1, 0, 0.22)
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const rock = mesh.name.includes('rock') || mesh.name.includes('host')
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.material = rock
        ? new THREE.MeshStandardMaterial({ color: '#3d352c', roughness: 0.92, metalness: 0.02, envMapIntensity: 0.5 })
        : new THREE.MeshPhysicalMaterial({
            /* Halite photographed in a light studio is NOT transparent — it
               reads as a dense, faintly translucent mineral: bright where a
               facet faces the key, cool grey where it turns away, with a
               soft inner scatter in the thin edges. So: opaque body colour,
               a low `transmission` just for the edge glow, a strong clearcoat
               for the facet highlights, and sheen for the scatter.
               (Full transmission on a bright backdrop is what flattened it
               into paper.) */
            color: '#cfe4ee',
            roughness: 0.3,
            metalness: 0,
            /* Real halite is a translucent dielectric: light enters, scatters
               off internal cleavage planes, and leaves tinted. `transmission`
               gives exactly that, and it now works because the plate draws an
               opaque cyclorama (see Cyc) — the earlier flattened-white result
               was not the material's fault but the bright transparent canvas
               behind it. */
            /* enough transmission to refract the sweep behind the specimen
               and tint it, not so much that the bright backdrop swallows the
               body — real halite photographed on a white sweep is still a
               solid, visibly faceted object */
            transmission: 0.55,
            thickness: 0.8,
            attenuationColor: new THREE.Color('#7fbcd6'),
            attenuationDistance: 0.55,
            ior: 1.54,
            clearcoat: 0.75,
            clearcoatRoughness: 0.12,
            specularIntensity: 1,
            envMapIntensity: 0.5,
            transparent: false,
            emissive: new THREE.Color('#08202c'),
            emissiveIntensity: 0.06,
            sheen: 0.45,
            sheenColor: new THREE.Color('#7db4cd'),
            sheenRoughness: 0.6,
            iridescence: 0.18,
            iridescenceIOR: 1.6,
            iridescenceThicknessRange: [140, 360],
          })
    })
    return m
  }, [scene])
  useReportMetrics(model, [model])
  return (
    <group ref={ref} position={[0, 0, 0]} scale={1.3} rotation={[0.04, 0.4, 0]}>
      <primitive object={model} />
    </group>
  )
}

/* ------------------------------------------------------------------ *
 * Water-softening tablets — matte pressed salt.
 *
 * The reference photo is a scattered cluster of off-white cylinders with a
 * soft, slightly chalky surface and darker pressed edges. So: a rough
 * dielectric with a whisper of sheen, not a white plastic puck.
 * ------------------------------------------------------------------ */
function TabletsModel() {
  const { scene } = useGLTF('/models/tablets.glb')
  const ref = useSpinner(0.2, 0, 0.3)
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.material = new THREE.MeshPhysicalMaterial({
        color: '#f2efe6',
        roughness: 0.82,
        metalness: 0,
        clearcoat: 0.12,
        clearcoatRoughness: 0.6,
        sheen: 0.55,
        sheenColor: new THREE.Color('#fffaf0'),
        sheenRoughness: 0.7,
        envMapIntensity: 0.95,
      })
    })
    return m
  }, [scene])
  useReportMetrics(model, [model])
  return (
    <group ref={ref} position={[0, 0, 0]} scale={1.2} rotation={[0.1, 0, 0]}>
      <primitive object={model} />
    </group>
  )
}

function FibcModel() {
  const { scene } = useGLTF('/models/jumbo-bag.glb')
  const woven = useWovenPBR([3, 3])
  const ref = useSpinner(0.16)
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      mesh.castShadow = true
      if (n.includes('brand_panel')) {
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#f6f7f4',
          roughness: 0.76,
          sheen: 0.35,
          sheenColor: new THREE.Color('#e6f0f6'),
          envMapIntensity: 1,
        })
      } else if (n.includes('body')) {
        mesh.material = new THREE.MeshPhysicalMaterial(fabricProps(woven))
      } else if (n.includes('loops')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#1a6b9c', roughness: 0.78 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#e9eef2', roughness: 0.84 })
      }
    })
    return m
  }, [scene, woven])
  useReportMetrics(model, [model])
  return (
    <group ref={ref} position={[0, 0, 0]} scale={0.95}>
      <primitive object={model} />
    </group>
  )
}

function SackModel() {
  const { scene } = useGLTF('/models/sack-50kg.glb')
  const art = SackArtTexture()
  const plainWeave = useWovenPBR([3, 4])
  // no full turn: the printed face is the point, so it swings within ±0.75 rad
  const ref = useSpinner(0.3, 0, 0.34)
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      mesh.castShadow = true
      if (n.includes('panel')) {
        mesh.material = new THREE.MeshStandardMaterial({ map: art, roughness: 0.88, envMapIntensity: 0.85 })
      } else if (n.includes('crimp')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.74, envMapIntensity: 0.9 })
      } else {
        mesh.material = new THREE.MeshPhysicalMaterial(fabricProps(plainWeave))
      }
    })
    return m
  }, [scene, art, plainWeave])
  useReportMetrics(model, [model])
  return (
    <group ref={ref} position={[0, 0, 0]} scale={1.2}>
      <primitive object={model} />
    </group>
  )
}

/* ------------------------------------------------------------------ *
 * Sample jar — real thin glass over a real heap of salt.
 *
 * Opaque white glass is what made the old plate look like a blank tumbler.
 * Thin borosilicate is `transmission` with almost no attenuation: you see
 * the salt through it, tinted a hair cool, with a bright edge where the wall
 * turns away and a crisp specular off the shoulder.
 * ------------------------------------------------------------------ */
function JarModel() {
  const { scene } = useGLTF('/models/sample-jar.glb')
  const ref = useSpinner(0.18)
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      mesh.castShadow = true
      if (n.includes('glass')) {
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#ffffff',
          roughness: 0.02,
          metalness: 0,
          ior: 1.5,
          transmission: 1,
          thickness: 0.16,
          attenuationColor: new THREE.Color('#eaf6fb'),
          attenuationDistance: 2.4,
          clearcoat: 1,
          clearcoatRoughness: 0.02,
          envMapIntensity: 2.0,
          specularIntensity: 1,
          side: THREE.DoubleSide,
        })
      } else if (n.includes('salt')) {
        /* a heap of granules: matte, slightly warm, with fine relief coming
           from the normal map so it is not a smooth cone */
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#fbfaf6',
          roughness: 0.94,
          metalness: 0,
          sheen: 0.4,
          sheenColor: new THREE.Color('#ffffff'),
          clearcoat: 0.08,
          clearcoatRoughness: 0.85,
          envMapIntensity: 0.9,
        })
      } else if (n.includes('cap')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#12293c', roughness: 0.34, metalness: 0.42, envMapIntensity: 1.3 })
      } else if (n.includes('seal')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#c2712f', roughness: 0.28, metalness: 0.88, envMapIntensity: 1.4 })
      } else if (n.includes('label')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.66, envMapIntensity: 1 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#e6edf2', roughness: 0.62 })
      }
    })
    return m
  }, [scene])
  useReportMetrics(model, [model])
  return (
    <group ref={ref} position={[0, 0, 0]} scale={2.2}>
      <primitive object={model} />
    </group>
  )
}

/* The globe gets its own rig: it tilts toward the viewer and turns slowly. */
function GlobeModel() {
  const { scene } = useGLTF('/models/globe.glb')
  const ref = useRef<THREE.Group>(null)
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      if (mesh.name.includes('ocean')) {
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#08161f',
          roughness: 0.42,
          metalness: 0.28,
          clearcoat: 0.45,
          clearcoatRoughness: 0.45,
          envMapIntensity: 1.1,
        })
      } else {
        mesh.material = new THREE.MeshBasicMaterial({ color: '#63b7dd', toneMapped: false, transparent: true, opacity: 0.92 })
      }
    })
    return m
  }, [scene])
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.09
  })
  return (
    <group ref={ref} rotation={[0.18, -1.35, 0.03]} scale={1.5}>
      <primitive object={model} />
    </group>
  )
}

/* each plate gets the backdrop its subject needs to read */
const TONE: Record<Kind, Tone> = {
  container: 'paper',
  crystal: 'mid',
  tablets: 'paper',
  fibc: 'paper',
  sack: 'mid',
  globe: 'slate',
  jar: 'slate',
}

const MODELS: Record<Kind, ComponentType> = {
  container: ContainerModel,
  crystal: CrystalModel,
  tablets: TabletsModel,
  fibc: FibcModel,
  sack: SackModel,
  globe: GlobeModel,
  jar: JarModel,
}

/* ------------------------------------------------------------------ *
 * One stage = one canvas, mounted only while on screen
 * ------------------------------------------------------------------ */
function ModelStage({
  kind,
  dark = false,
  camera,
}: {
  kind: Kind
  dark?: boolean
  camera?: { position: [number, number, number]; fov?: number }
}) {
  const host = useRef<HTMLDivElement>(null)
  const [live, setLive] = useState(false)
  /* measured from the mounted model, so the floor and the shadow sit under
     its actual base whatever scale the rig uses */
  const [half, setHalf] = useState(0.5)
  const Model = MODELS[kind]

  useEffect(() => {
    const el = host.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setLive(e.isIntersecting), { rootMargin: '200px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const pos = camera?.position ?? [3.2, 2.1, 4.4]

  return (
    <div className="ref-stage" ref={host}>
      {live && (
        <Canvas
          dpr={[1, 1.8]}
          shadows
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
          camera={{ position: pos, fov: camera?.fov ?? 34, near: 0.05, far: 60 }}
          onCreated={({ gl: r }) => {
            r.setClearColor(0x000000, 1)
            r.toneMapping = THREE.ACESFilmicToneMapping
            r.toneMappingExposure = dark ? 1.0 : 0.85
            r.shadowMap.type = THREE.PCFShadowMap
          }}
        >
          <MetricsCtx.Provider value={setHalf}>
          <StudioEnv dark={dark} />
          <Cyc tone={TONE[kind]} y={-half} />
          <ambientLight intensity={dark ? 0.26 : 0.22} />
          {/* one key with a real shadow, one fill, one rim — a three-light
              set rather than three equal directionals */}
          <directionalLight
            position={[-4.2, 6.4, 4.2]}
            intensity={dark ? 1.9 : 1.75}
            color="#ffffff"
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0008}
            shadow-radius={3}
          >
            <orthographicCamera attach="shadow-camera" args={[-3.2, 3.2, 3.2, -3.2, 0.5, 22]} />
          </directionalLight>
          <directionalLight position={[5.2, 2.6, 2.4]} intensity={dark ? 0.55 : 0.7} color="#dcecf8" />
          <directionalLight position={[0.4, 3.2, -5.4]} intensity={dark ? 1.0 : 0.85} color="#fff3e4" />
          <Suspense fallback={null}>
            <Model />
            <Preload all />
          </Suspense>
          </MetricsCtx.Provider>
          {/* The cyc is unlit (it is a printed sweep, not a shaded surface)
              so it cannot receive the key's shadow. This invisible catcher —
              ShadowMaterial, which renders nothing but the darkness cast onto
              it — sits a hair above the floor and gives the subject the
              grounded contact shadow a product plate needs. */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -half + 0.002, 0]} receiveShadow>
            <planeGeometry args={[CYC.half * 2, CYC.front + CYC.radius]} />
            <shadowMaterial transparent opacity={dark ? 0.55 : 0.34} toneMapped={false} />
          </mesh>
          {/* No ContactShadows here: it renders into a plane just above the
              cyc floor, and since the cyc is now the actual ground the two
              are coplanar and fight. The cyc`receiveShadow`s the key
              directly, which gives a real, lit contact shadow instead of a
              stamped one. */}
          {/* no EffectComposer here: the composer does not preserve the
              transparent canvas alpha these plates sit on, and it erased the
              render. ACES tone mapping on the canvas plus MSAA in the
              framebuffer is the finish a sharp product plate needs. */}
        </Canvas>
      )}
    </div>
  )
}

export default memo(ModelStage)
