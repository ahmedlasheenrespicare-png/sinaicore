import { Suspense, memo, useEffect, useMemo, useRef, useState, type ComponentType } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Preload, ContactShadows } from '@react-three/drei'
import { SackArtTexture, useContainerPrint } from '../three/textures'
import { useWovenPBR, fabricProps } from './fabric'

useGLTF.setDecoderPath('/draco/')

export type Kind = 'container' | 'crystal' | 'tablets' | 'fibc' | 'sack' | 'globe' | 'jar'

/* ------------------------------------------------------------------ *
 * Studio environment — a bright softbox rig for the light sections and
 * a cooler one for the dark panels.
 * ------------------------------------------------------------------ */
function StudioEnv({ dark }: { dark: boolean }) {
  const { scene, gl: renderer } = useThree()
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(renderer)
    const c = document.createElement('canvas')
    c.width = 1024
    c.height = 512
    const x = c.getContext('2d')!
    const g = x.createLinearGradient(0, 0, 0, 512)
    if (dark) {
      g.addColorStop(0, '#0b1b28')
      g.addColorStop(0.45, '#1d3d54')
      g.addColorStop(0.55, '#2c5d78')
      g.addColorStop(1, '#050b12')
    } else {
      g.addColorStop(0, '#ffffff')
      g.addColorStop(0.46, '#eef3f7')
      g.addColorStop(0.54, '#cfdce5')
      g.addColorStop(1, '#8fa2af')
    }
    x.fillStyle = g
    x.fillRect(0, 0, 1024, 512)
    // two soft key lights
    for (const b of [
      { x: 210, y: 120, w: 360, h: 34, a: dark ? 0.42 : 0.95 },
      { x: 700, y: 92, w: 220, h: 20, a: dark ? 0.3 : 0.7 },
    ]) {
      const rg = x.createRadialGradient(b.x + b.w / 2, b.y, 2, b.x + b.w / 2, b.y, b.w * 0.9)
      rg.addColorStop(0, `rgba(255,255,255,${b.a})`)
      rg.addColorStop(1, 'rgba(255,255,255,0)')
      x.fillStyle = rg
      x.fillRect(b.x - b.w * 0.5, b.y - b.h * 2, b.w * 2, b.h * 5)
    }
    const tex = new THREE.CanvasTexture(c)
    tex.mapping = THREE.EquirectangularReflectionMapping
    tex.colorSpace = THREE.SRGBColorSpace
    const env = pmrem.fromEquirectangular(tex).texture
    scene.environment = env
    return () => {
      env.dispose()
      tex.dispose()
      pmrem.dispose()
    }
  }, [scene, renderer, dark])
  return null
}

/* ------------------------------------------------------------------ *
 * Individual model rigs
 * ------------------------------------------------------------------ */
function useSpinner(speed = 0.16, tilt = 0) {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * speed
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
          roughness: 0.6,
          metalness: 0.1,
          side: THREE.DoubleSide,
        })
      } else if (n.includes('frame')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#243b4b', roughness: 0.42, metalness: 0.62, envMapIntensity: 1.1 })
      } else if (n.includes('floor')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#2a231b', roughness: 0.88 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#1f6b93', roughness: 0.48, metalness: 0.38, envMapIntensity: 1.1 })
      }
    })
    return m
  }, [scene, print])

  return (
    <group ref={ref} position={[0, -1.25, 0]} rotation={[0, -0.6, 0]} scale={0.62}>
      <primitive object={model} />
    </group>
  )
}

function CrystalModel() {
  const { scene } = useGLTF('/models/crystal.glb')
  const ref = useSpinner(0.12)
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const rock = mesh.name.includes('host')
      mesh.material = rock
        ? new THREE.MeshStandardMaterial({ color: '#3d372f', roughness: 0.95 })
        : new THREE.MeshPhysicalMaterial({
            // the section sits on a dark plate, so real transmission works here:
            // halite = a bright dielectric with a hint of scatter (attenuation)
            color: '#f2fbff',
            roughness: 0.16,
            metalness: 0.02,
            ior: 1.54,
            transmission: 0.5,
            thickness: 0.8,
            attenuationColor: '#63b4cd',
            attenuationDistance: 0.5,
            clearcoat: 0.9,
            clearcoatRoughness: 0.06,
            specularIntensity: 1,
            envMapIntensity: 1.6,
            emissive: '#7cc6dd',
            emissiveIntensity: 0.06,
          })
    })
    return m
  }, [scene])
  return (
    <group ref={ref} position={[0, -0.62, 0]} scale={1.05}>
      <primitive object={model} />
    </group>
  )
}

function TabletsModel() {
  const { scene } = useGLTF('/models/tablets.glb')
  const ref = useSpinner(0.2)
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      mesh.material = new THREE.MeshStandardMaterial({ color: '#f7f8f7', roughness: 0.7, envMapIntensity: 1 })
    })
    return m
  }, [scene])
  return (
    <group ref={ref} position={[0, -0.1, 0]} scale={1.5}>
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
      if (n.includes('brand_panel')) {
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#f6f7f4',
          roughness: 0.74,
          sheen: 0.3,
          sheenColor: new THREE.Color('#e6f0f6'),
          envMapIntensity: 0.95,
        })
      } else if (n.includes('body')) {
        mesh.material = new THREE.MeshPhysicalMaterial(fabricProps(woven))
      } else if (n.includes('loops')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#1a6b9c', roughness: 0.8 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#e9eef2', roughness: 0.82 })
      }
    })
    return m
  }, [scene, woven])
  return (
    <group ref={ref} position={[0, -0.95, 0]} scale={1.02}>
      <primitive object={model} />
    </group>
  )
}

function SackModel() {
  const { scene } = useGLTF('/models/sack-50kg.glb')
  const art = SackArtTexture()
  const plainWeave = useWovenPBR([3, 4])
  const ref = useSpinner(0.22)
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      if (n.includes('panel')) {
        mesh.material = new THREE.MeshStandardMaterial({ map: art, roughness: 0.86, envMapIntensity: 0.8 })
      } else if (n.includes('crimp')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.72, envMapIntensity: 0.9 })
      } else {
        mesh.material = new THREE.MeshPhysicalMaterial(fabricProps(plainWeave))
      }
    })
    return m
  }, [scene, art, plainWeave])
  return (
    <group ref={ref} position={[0, -0.5, 0]} scale={1.62}>
      <primitive object={model} />
    </group>
  )
}

function JarModel() {
  const { scene } = useGLTF('/models/sample-jar.glb')
  const ref = useSpinner(0.18)
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      if (n.includes('glass')) {
        // a light glass plate: thin, glossy, just enough opacity to read
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#ffffff',
          roughness: 0.05,
          metalness: 0,
          clearcoat: 1,
          clearcoatRoughness: 0.02,
          transparent: true,
          opacity: 0.28,
          envMapIntensity: 2,
          side: THREE.DoubleSide,
        })
      } else if (n.includes('salt')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#f4f7f6', roughness: 0.95, metalness: 0 })
      } else if (n.includes('cap')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#12293c', roughness: 0.42, metalness: 0.35 })
      } else if (n.includes('seal')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#c2712f', roughness: 0.3, metalness: 0.85 })
      } else if (n.includes('label')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.62, envMapIntensity: 1 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#e6edf2', roughness: 0.6 })
      }
    })
    return m
  }, [scene])
  return (
    <group ref={ref} position={[0, -0.36, 0]} scale={2.1}>
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
          roughness: 0.45,
          metalness: 0.25,
          clearcoat: 0.4,
          clearcoatRoughness: 0.5,
          envMapIntensity: 1,
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
  shadow = true,
  shadowsAt = -1.3,
}: {
  kind: Kind
  dark?: boolean
  camera?: { position: [number, number, number]; fov?: number }
  shadow?: boolean
  shadowsAt?: number
}) {
  const host = useRef<HTMLDivElement>(null)
  const [live, setLive] = useState(false)
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
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          camera={{ position: pos, fov: camera?.fov ?? 34, near: 0.05, far: 60 }}
          onCreated={({ gl: r }) => {
            r.setClearColor(0x000000, 0)
            r.toneMapping = THREE.ACESFilmicToneMapping
            r.toneMappingExposure = dark ? 1.1 : 1.0
          }}
        >
          <StudioEnv dark={dark} />
          <ambientLight intensity={dark ? 0.75 : 1.15} />
          <directionalLight position={[-5, 7, 5]} intensity={dark ? 2.4 : 2.2} color="#ffffff" />
          <directionalLight position={[6, 3, 4]} intensity={0.8} color="#cfe4f2" />
          <directionalLight position={[0, 4, -6]} intensity={0.9} color="#ffffff" />
          <Suspense fallback={null}>
            <Model />
            <Preload all />
          </Suspense>
          {shadow && (
            <ContactShadows
              position={[0, shadowsAt, 0]}
              opacity={dark ? 0.55 : 0.3}
              scale={9}
              blur={2.6}
              far={5}
              color={dark ? '#001018' : '#24506a'}
              resolution={256}
              frames={1}
            />
          )}
        </Canvas>
      )}
    </div>
  )
}

export default memo(ModelStage)
