import { Component, Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges, RoundedBox, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import {
  clamp,
  easeOutCubic,
  localProgress,
  motion,
  phaseWeight,
  story,
} from '../story'
import {
  AssemblyFragments,
  FractureDust,
  Impurities,
  SortGrains,
  SurfaceCrystals,
  Vapor,
  WashGrains,
} from './Particles'
import Hotspots from './Hotspots'
import { quality } from '../lib/quality'
import { useSurfaceMaps } from '../lib/surfaceContext'
import { orbit } from '../lib/orbit'

/** Transmission is the single most expensive feature, so low-end devices get
 *  a clearcoat instead of real refraction. */
const transmissionFor = (value: number) => (quality.transmission ? value : 0)

/** Without the transmission pass the material has to fake glass: a light alpha,
 *  strong clearcoat and a crisp edge keep the silhouette readable. */
const glassExtras = (opacity: number) =>
  quality.transmission
    ? {}
    : {
        transparent: true,
        opacity,
        clearcoat: 0,
        /* the baked environment is deliberately bright; without transmission
           it would clip every pale solid to white, so the fallback leans on
           the direct lights instead */
        envMapIntensity: 0.22,
        color: '#9fd8d0',
        roughness: 0.34,
        flatShading: true,
      }

useGLTF.setDecoderPath('/draco/')

/** The eight tableaux share one position, one light rig and one fading envelope:
 *  at any scroll position only the two neighbouring forms are visible. */
function usePhaseGroup(index: number) {
  const ref = useRef<THREE.Group>(null!)

  useFrame(() => {
    const weight = phaseWeight(story.phase, index)
    const group = ref.current
    if (!group) return
    group.visible = weight > 0.004
    const scale = 0.86 + 0.14 * weight
    group.scale.setScalar(scale)
    group.traverse((object) => {
      const material = (object as THREE.Mesh).material
      if (!material) return
      const materials = Array.isArray(material) ? material : [material]
      materials.forEach((mat) => {
        if (mat.userData.baseOpacity === undefined) mat.userData.baseOpacity = mat.opacity
        mat.opacity = (mat.userData.baseOpacity as number) * weight
        mat.transparent = true
        mat.depthWrite = weight > 0.55
      })
    })
  })

  return ref
}

/* -------------------------------------------------------------------------- */
/*  01 — A transparent cube of seawater                                        */
/* -------------------------------------------------------------------------- */
function WaterSurface({ level }: { level: React.RefObject<number> }) {
  const mesh = useRef<THREE.Mesh>(null!)
  const geometry = useMemo(() => new THREE.PlaneGeometry(2.06, 2.06, 24, 24), [])
  const base = useMemo(() => (geometry.attributes.position.array as Float32Array).slice(), [geometry])

  useFrame(({ clock }) => {
    mesh.current.position.y = -1.06 + 2.12 * level.current + 0.012
    const position = geometry.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < position.count; i++) {
      const x = base[i * 3]
      const z = base[i * 3 + 1]
      position.setZ(
        i,
        Math.sin(x * 5.2 + clock.elapsedTime * 1.5) * 0.016 +
          Math.cos(z * 6.4 - clock.elapsedTime * 1.1) * 0.014,
      )
    }
    position.needsUpdate = true
    geometry.computeVertexNormals()
  })

  return (
    <mesh ref={mesh} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
      <meshPhysicalMaterial
        color="#b8e8e2"
        transmission={transmissionFor(0.55)}
        roughness={0.08}
        ior={1.333}
        thickness={0.4}
        clearcoat={1}
        envMapIntensity={1.6}
        side={THREE.DoubleSide}
        transparent
        opacity={0.82}
      />
    </mesh>
  )
}

function Ripples({ level }: { level: React.RefObject<number> }) {
  const rings = useRef<THREE.Mesh[]>([])

  useFrame(({ clock }) => {
    rings.current.forEach((ring, i) => {
      if (!ring) return
      const t = (clock.elapsedTime * 0.4 + i / 3) % 1
      ring.position.y = -1.06 + 2.12 * level.current + 0.028
      ring.scale.setScalar(0.28 + t * 1.35)
      ;(ring.material as THREE.MeshBasicMaterial).opacity = (1 - t) * 0.32
    })
  })

  return (
    <>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(element) => {
            if (element) rings.current[i] = element
          }}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[0.72, 0.006, 4, 72]} />
          <meshBasicMaterial color="#e8fbf5" transparent opacity={0.3} depthWrite={false} />
        </mesh>
      ))}
    </>
  )
}

function WaterPhase() {
  const group = usePhaseGroup(0)
  const brine = useRef<THREE.Mesh>(null!)
  const crust = useRef<THREE.MeshStandardMaterial>(null!)
  const level = useRef(1)

  useFrame(() => {
    const u = clamp(localProgress(0) * 2)
    level.current = 1 - u * 0.42
    if (brine.current) {
      brine.current.scale.y = level.current
      brine.current.position.y = -1.06 + level.current * 1.06
    }
    if (crust.current) crust.current.opacity = Math.max(0, (u - 0.55) * 1.7) * 0.85
  })

  return (
    <group ref={group}>
      <RoundedBox args={[2.45, 2.45, 2.45]} radius={0.07} smoothness={5}>
        <meshPhysicalMaterial
          color="#c9f0ea"
          transmission={transmissionFor(0.92)}
          roughness={0.04}
          ior={1.333}
          thickness={1.1}
          attenuationColor="#7fd6cf"
          attenuationDistance={9}
          clearcoat={1}
          clearcoatRoughness={0.06}
          envMapIntensity={1.8}
          {...glassExtras(0.34)}
        />
        <Edges threshold={18} color="#2b7c7c" scale={1.001} />
      </RoundedBox>
      <mesh ref={brine} position={[0, 0, 0]}>
        <boxGeometry args={[2.12, 2.12, 2.12]} />
        <meshPhysicalMaterial
          color="#3fb2b4"
          transmission={transmissionFor(0.35)}
          roughness={0.12}
          ior={1.34}
          thickness={0.8}
          envMapIntensity={1.5}
          transparent
          opacity={0.32}
          depthWrite={false}
        />
      </mesh>
      <WaterSurface level={level} />
      <Ripples level={level} />
      <mesh position={[0, -1.16, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 2.2]} />
        <meshStandardMaterial ref={crust} color="#edf3e9" roughness={0.9} transparent opacity={0} depthWrite={false} />
      </mesh>
      <Vapor phase={0} />
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/*  02 — The crust crystallises                                                */
/* -------------------------------------------------------------------------- */
function makeCrustGeometry() {
  const geometry = new THREE.BoxGeometry(2.55, 0.44, 2.55, 30, 3, 30)
  const position = geometry.attributes.position as THREE.BufferAttribute
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i)
    const y = position.getY(i)
    const z = position.getZ(i)
    const noise = Math.sin(x * 5.7) * Math.cos(z * 4.9) * 0.032 + Math.sin(x * 13.3 + z * 7.1) * 0.009
    position.setY(i, y > 0 ? y + noise : y)
  }
  geometry.computeVertexNormals()
  return geometry
}

function CrustPhase() {
  const group = usePhaseGroup(1)
  const maps = useSurfaceMaps()
  const slab = useRef<THREE.Mesh>(null!)
  const geometry = useMemo(makeCrustGeometry, [])

  useFrame(() => {
    const u = clamp(localProgress(1) * 2 + 0.15)
    if (slab.current) {
      slab.current.scale.y = 0.28 + easeOutCubic(u) * 0.72
      slab.current.rotation.y = Math.sin(story.phase * 0.7) * 0.02
    }
  })

  return (
    <group ref={group}>
      <mesh ref={slab} geometry={geometry}>
        <meshPhysicalMaterial
          color="#f6f3e8"
          bumpMap={maps.salt}
          bumpScale={0.05}
          roughness={0.48}
          metalness={0}
          transmission={transmissionFor(0.12)}
          ior={1.5}
          thickness={0.75}
          clearcoat={0.42}
          clearcoatRoughness={0.35}
          envMapIntensity={1.25}
        />
      </mesh>
      <SurfaceCrystals phase={1} />
      <Vapor phase={1} count={55} spread={1.35} speed={0.28} />
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/*  03 — The crust fractures along a straight line                            */
/* -------------------------------------------------------------------------- */
function makeFractureGeometry(side: -1 | 1) {
  const width = 1.24
  const geometry = new THREE.BoxGeometry(width, 0.44, 2.5, 18, 2, 22)
  const position = geometry.attributes.position as THREE.BufferAttribute
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i)
    const y = position.getY(i)
    const z = position.getZ(i)
    const inner = side === 1 ? x < -width / 2 + 0.24 : x > width / 2 - 0.24
    const jagged = Math.sin(z * 8.2) * 0.058 + Math.sin(z * 19.7) * 0.017
    if (inner) position.setX(i, x + side * jagged)
    if (y > 0) position.setY(i, y + Math.sin(x * 6 + z * 5) * 0.017)
  }
  geometry.computeVertexNormals()
  return geometry
}

function HarvestPhase() {
  const group = usePhaseGroup(2)
  const right = useRef<THREE.Mesh>(null!)
  const left = useRef<THREE.Mesh>(null!)
  const rightGeo = useMemo(() => makeFractureGeometry(1), [])
  const leftGeo = useMemo(() => makeFractureGeometry(-1), [])

  useFrame(() => {
    const opening = easeOutCubic(clamp(localProgress(2) * 1.7))
    const gap = 0.06 + Math.max(opening * 0.52, motion.explode * 0.62)
    if (right.current) {
      right.current.position.x = 0.62 + gap
      right.current.rotation.z = -opening * 0.07
      right.current.rotation.x = opening * 0.025
    }
    if (left.current) {
      left.current.position.x = -0.62 - gap
      left.current.rotation.z = opening * 0.07
      left.current.rotation.x = -opening * 0.025
    }
  })

  return (
    <group ref={group}>
      <mesh ref={right} geometry={rightGeo}>
        <meshPhysicalMaterial
          color="#f7f4e9"
          roughness={0.42}
          transmission={transmissionFor(0.1)}
          ior={1.51}
          thickness={0.8}
          clearcoat={0.3}
          envMapIntensity={1.2}
        />
      </mesh>
      <mesh ref={left} geometry={leftGeo}>
        <meshPhysicalMaterial
          color="#f7f4e9"
          roughness={0.42}
          transmission={transmissionFor(0.1)}
          ior={1.51}
          thickness={0.8}
          clearcoat={0.3}
          envMapIntensity={1.2}
        />
      </mesh>
      <FractureDust phase={2} />
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/*  04 — Washing in a vortex                                                    */
/* -------------------------------------------------------------------------- */
function WashPhase() {
  const group = usePhaseGroup(3)
  const vessel = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (vessel.current) vessel.current.rotation.y = story.phase * 0.08
  })

  return (
    <group ref={group}>
      <mesh ref={vessel}>
        <cylinderGeometry args={[1.48, 1.3, 2.5, 72, 1, true]} />
        <meshPhysicalMaterial
          color="#7fc4be"
          transmission={transmissionFor(0.9)}
          roughness={0.06}
          ior={1.33}
          thickness={0.6}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          envMapIntensity={1.7}
          depthWrite={false}
        />
      </mesh>
      <WashGrains />
      <Impurities />
      <mesh position={[0, -1.24, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.3, 64]} />
        <meshStandardMaterial color="#d9e7de" roughness={0.7} transparent opacity={0.38} />
      </mesh>
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/*  05 — One perfectly refined crystal (Draco-compressed GLB)                  */
/* -------------------------------------------------------------------------- */
function FallbackCrystal() {
  return (
    <RoundedBox args={[1.7, 1.7, 1.7]} radius={0.045} smoothness={4}>
      <meshPhysicalMaterial color="#e8f7f5" transmission={transmissionFor(1)} roughness={0.02} ior={1.544} thickness={1.8} clearcoat={1} envMapIntensity={2.1} iridescence={0.25} />
    </RoundedBox>
  )
}

function crystalMaterial() {
  return new THREE.MeshPhysicalMaterial({
    color: '#cdeee8',
    transmission: transmissionFor(1),
    roughness: 0.07,
    metalness: 0,
    ior: 1.544,
    thickness: 2.1,
    clearcoat: 1,
    clearcoatRoughness: 0.02,
    iridescence: 0.28,
    iridescenceIOR: 1.31,
    envMapIntensity: 2.2,
    attenuationColor: new THREE.Color('#79c3b9'),
    attenuationDistance: 3.5,
    ...glassExtras(0.8),
  })
}

/** The authored halite: stepped "hopper" faces, chamfered edges and two small
 *  satellite grains, all in one Draco mesh (~2.7 kB) built by `npm run models`. */
function DracoCrystal() {
  const gltf = useGLTF('/models/salt-crystal.glb', '/draco/')

  const object = useMemo(() => {
    const clone = gltf.scene.clone(true)
    clone.traverse((node) => {
      const mesh = node as THREE.Mesh
      if (!mesh.isMesh) return
      mesh.material = crystalMaterial()
      mesh.castShadow = true
      mesh.frustumCulled = false
    })
    return clone
  }, [gltf])

  /* A fixed three-quarter tilt: dead-on the hopper faces are parallel to the
     camera and the grain reads as a flat plate, however good the shading is. */
  return <primitive object={object} scale={1.42} rotation={[0.34, 0.62, 0.11]} />
}

class AssetBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(error: unknown) {
    console.warn('3D asset unavailable, using the procedural crystal instead.', error)
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

function RefinePhase() {
  const group = usePhaseGroup(4)
  const inner = useRef<THREE.Mesh>(null!)
  const halo = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (inner.current) {
      inner.current.rotation.set(clock.elapsedTime * 0.09, clock.elapsedTime * 0.13, 0)
      const s = 0.5 + Math.sin(clock.elapsedTime * 0.7) * 0.02
      inner.current.scale.setScalar(s)
    }
    if (halo.current) {
      halo.current.rotation.z = clock.elapsedTime * 0.12
      halo.current.rotation.x = Math.PI / 2 + Math.sin(clock.elapsedTime * 0.22) * 0.18
    }
  })

  return (
    <group ref={group}>
      <AssetBoundary fallback={<FallbackCrystal />}>
        <Suspense fallback={<FallbackCrystal />}>
          <DracoCrystal />
        </Suspense>
      </AssetBoundary>
      <mesh ref={inner}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color="#bfe8e2"
          transmission={transmissionFor(0.6)}
          roughness={0.08}
          ior={1.5}
          thickness={1.2}
          envMapIntensity={1.8}
          {...glassExtras(0.55)}
        />
      </mesh>
      <mesh scale={1.78}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#3e8c84" wireframe transparent opacity={0.2} depthWrite={false} />
      </mesh>
      <mesh ref={halo} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.48, 0.004, 4, 120]} />
        <meshBasicMaterial color="#a9d8d1" transparent opacity={0.45} depthWrite={false} />
      </mesh>
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/*  06 — Three sieves                                                          */
/* -------------------------------------------------------------------------- */
function Sieve({ y, radius, opacity }: { y: number; radius: number; opacity: number }) {
  const rim = useRef<THREE.Mesh>(null!)
  useFrame(({ clock }) => {
    if (rim.current) rim.current.rotation.z = Math.sin(clock.elapsedTime * 0.5 + y) * 0.02
  })
  return (
    <group position={[0, y, 0]}>
      <mesh ref={rim} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.032, 10, 80]} />
        <meshStandardMaterial color="#9cb8b2" metalness={0.85} roughness={0.28} transparent opacity={opacity} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[radius * 1.86, radius * 1.86, 7, 7]} />
        <meshBasicMaterial color="#b9d4cd" wireframe transparent opacity={opacity * 0.42} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
    </group>
  )
}

function SortPhase() {
  const group = usePhaseGroup(5)
  const piles = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (!piles.current) return
    const u = easeOutCubic(clamp(localProgress(5) * 2 - 0.9))
    piles.current.children.forEach((child, i) => child.scale.setScalar(0.001 + u * (1 - i * 0.14)))
  })

  return (
    <group ref={group} rotation={[0.12, 0, 0]}>
      <Sieve y={0.95} radius={1.1} opacity={0.9} />
      <Sieve y={0} radius={0.92} opacity={0.75} />
      <Sieve y={-0.95} radius={0.74} opacity={0.6} />
      <SortGrains />
      <group ref={piles} position={[0, -1.45, 0]}>
        {[0.52, 0.42, 0.32].map((size, i) => (
          <mesh key={i} position={[(i - 1) * 0.85, 0, 0]} scale={[1, 0.45, 1]}>
            <sphereGeometry args={[size, 24, 12]} />
            <meshStandardMaterial color="#f4f4eb" roughness={0.75} transparent opacity={0.9} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/*  07 — Printing and filling a 50 kg sack, then stacking a container          */
/* -------------------------------------------------------------------------- */
/** The printed artwork generated by `npm run artwork` (artwork/sack-50kg-front.html).
 *  The canvas below is only a stand-in until the PNG arrives, so the sack never
 *  flashes empty on a slow connection. */
const SACK_ARTWORK = '/artwork/sack-50kg-texture.png'

function drawSackFallback() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 836
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#f4f1e8'
  ctx.fillRect(0, 0, 512, 836)
  ctx.fillStyle = '#0d3d41'
  ctx.fillRect(0, 0, 512, 130)
  ctx.fillStyle = '#f2ecdd'
  ctx.font = 'bold 44px Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('SINAICORE', 256, 80)
  ctx.fillStyle = '#18211f'
  ctx.font = 'bold 54px Tahoma, Arial, sans-serif'
  ctx.fillText('SINAICORE', 256, 260)
  ctx.fillStyle = '#c97942'
  ctx.fillRect(48, 320, 416, 200)
  ctx.fillStyle = '#fff8ee'
  ctx.font = 'bold 150px Arial, sans-serif'
  ctx.fillText('50', 330, 470)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function useSackTexture() {
  const fallback = useMemo(drawSackFallback, [])
  const [texture, setTexture] = useState<THREE.Texture>(fallback)

  useEffect(() => {
    let cancelled = false
    new THREE.TextureLoader().load(
      SACK_ARTWORK,
      (loaded) => {
        if (cancelled) {
          loaded.dispose()
          return
        }
        loaded.colorSpace = THREE.SRGBColorSpace
        /* the face is small on screen; a crisp linear filter reads better than
           a deep mip chain, especially on software rasterisers */
        loaded.minFilter = THREE.LinearFilter
        loaded.magFilter = THREE.LinearFilter
        loaded.generateMipmaps = false
        loaded.anisotropy = 1
        setTexture(loaded)
      },
      undefined,
      () => {
        /* keep the drawn fallback if the artwork is missing */
      },
    )
    return () => {
      cancelled = true
    }
  }, [])

  return texture
}

type SackProps = {
  scale?: number
  position?: [number, number, number]
  texture: THREE.Texture
}

/** The authored bag: a filled, pinched, stitched PP sack whose printed face is
 *  a separate shell with upright UVs, so the artwork wraps the panel instead of
 *  being box-mapped over the folds. */
function SackAsset({ scale = 1, position = [0, 0, 0], texture }: SackProps) {
  const maps = useSurfaceMaps()
  const gltf = useGLTF('/models/sack.glb', '/draco/')

  const object = useMemo(() => {
    const clone = gltf.scene.clone(true)
    /* The baked environment is bright enough to clip cream paper to white, so
       the print is pulled back with a tint and a low env contribution. */
    /* The story's key light is brighter than the study rig, so the paper base
       is pulled down a touch to keep the white bag from clipping (and with it
       the blue). */
    const printed = new THREE.MeshStandardMaterial({
      map: texture,
      color: '#c9c1b0',
      vertexColors: true,
      bumpMap: maps.weave,
      bumpScale: 0.024,
      roughnessMap: maps.weave,
      roughness: 0.95,
      metalness: 0,
      envMapIntensity: 0.24,
    })
    const fabric = new THREE.MeshStandardMaterial({
      color: '#c9c1b0',
      vertexColors: true,
      envMapIntensity: 0.38,
      bumpMap: maps.weave,
      bumpScale: 0.028,
      roughnessMap: maps.weave,
      roughness: 0.95,
      metalness: 0,
    })
    clone.traverse((node) => {
      const mesh = node as THREE.Mesh
      if (!mesh.isMesh) return
      mesh.material = mesh.name === 'sack-panel' ? printed : fabric
      mesh.castShadow = true
      mesh.receiveShadow = true
    })
    return clone
  }, [gltf, maps, texture])

  /* No two bags drop the same way: a deterministic hash of the position gives
     each instance its own lean and squeeze without keeping state. */
  const jitter = useMemo(() => {
    const seed = Math.abs(Math.sin(position[0] * 12.9898 + position[1] * 78.233 + position[2] * 37.719) * 43758.5453)
    const r = seed - Math.floor(seed)
    return {
      rotationY: (r - 0.5) * 0.42,
      rotationZ: (r - 0.5) * 0.055,
      scale: 0.965 + r * 0.07,
    }
  }, [position])

  return (
    <group
      position={position}
      scale={scale * jitter.scale}
      rotation={[0, jitter.rotationY, jitter.rotationZ]}
    >
      <primitive object={object} />
    </group>
  )
}

/** Procedural stand-in used only if the GLB cannot be fetched or decoded. */
function ProceduralSack({ scale = 1, position = [0, 0, 0] as [number, number, number], texture }: SackProps) {
  const maps = useSurfaceMaps()
  return (
    <group position={position} scale={scale}>
      <RoundedBox args={[1.62, 2.05, 0.86]} radius={0.13} smoothness={4}>
        <meshStandardMaterial
          map={texture}
          bumpMap={maps.weave}
          bumpScale={0.022}
          roughnessMap={maps.weave}
          roughness={0.88}
          metalness={0}
        />
      </RoundedBox>
      <mesh position={[0, 1.07, 0]}>
        <boxGeometry args={[1.35, 0.08, 0.7]} />
        <meshStandardMaterial color="#d6d0c0" roughness={1} />
      </mesh>
    </group>
  )
}

function Sack(props: SackProps) {
  return (
    <AssetBoundary fallback={<ProceduralSack {...props} />}>
      <Suspense fallback={<ProceduralSack {...props} />}>
        <SackAsset {...props} />
      </Suspense>
    </AssetBoundary>
  )
}

type ContainerProps = {
  closed?: number | { value: number }
  showSacks?: boolean
  scale?: number
  texture: THREE.Texture
}

/** The authored 20 ft box: trapezoid corrugation, cast corner fittings, locking
 *  bars and two door leaves exported as named nodes, so a single rotation.y per
 *  leaf swings them open. Draco mesh, ~15 kB. */
function ContainerAsset({ closed = 1, showSacks = true, scale = 1, texture }: ContainerProps) {
  const gltf = useGLTF('/models/container.glb', '/draco/')

  const object = useMemo(() => {
    const clone = gltf.scene.clone(true)
    clone.traverse((node) => {
      const mesh = node as THREE.Mesh
      if (!mesh.isMesh) return
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
      materials.forEach((material) => {
        const standard = material as THREE.MeshStandardMaterial
        standard.envMapIntensity = 0.9
        standard.side = THREE.FrontSide
      })
      mesh.castShadow = true
      mesh.receiveShadow = true
    })
    return clone
  }, [gltf])

  const leaves = useMemo(
    () => ({
      left: object.getObjectByName('door-left'),
      right: object.getObjectByName('door-right'),
    }),
    [object],
  )

  useFrame(() => {
    const c = clamp(typeof closed === 'number' ? closed : closed.value)
    const open = (1 - c) * 1.32
    if (leaves.left) leaves.left.rotation.y = -open
    if (leaves.right) leaves.right.rotation.y = open
  })

  return (
    <group scale={scale}>
      <primitive object={object} />
      {showSacks && (
        <group position={[0, -0.72, -0.35]}>
          {[-1.5, -0.5, 0.5, 1.5].map((x) => (
            <Sack key={x} position={[x, 0, 0]} scale={0.46} texture={texture} />
          ))}
          {[-1, 0, 1].map((x) => (
            <Sack key={x} position={[x, 0.87, -0.1]} scale={0.46} texture={texture} />
          ))}
        </group>
      )}
    </group>
  )
}

/** Procedural stand-in: used only if the GLB cannot be fetched or decoded. */
function ShippingContainer({
  closed = 1,
  showSacks = true,
  scale = 1,
  texture,
}: ContainerProps) {
  const leftDoor = useRef<THREE.Group>(null!)
  const rightDoor = useRef<THREE.Group>(null!)
  const ribs = useMemo(() => Array.from({ length: 24 }, (_, i) => i), [])

  useFrame(() => {
    const c = clamp(typeof closed === 'number' ? closed : closed.value)
    if (leftDoor.current) leftDoor.current.rotation.y = -(1 - c) * 1.15
    if (rightDoor.current) rightDoor.current.rotation.y = (1 - c) * 1.15
  })

  const steel = <meshStandardMaterial color="#17484c" metalness={0.55} roughness={0.62} />

  return (
    <group scale={scale}>
      <mesh position={[0, 0, -1.35]}>
        <boxGeometry args={[4.8, 3.1, 0.1]} />
        {steel}
      </mesh>
      <mesh position={[0, -1.55, 0]}>
        <boxGeometry args={[4.8, 0.1, 2.7]} />
        {steel}
      </mesh>
      <mesh position={[0, 1.55, 0]}>
        <boxGeometry args={[4.8, 0.1, 2.7]} />
        {steel}
      </mesh>
      <mesh position={[-2.4, 0, 0]}>
        <boxGeometry args={[0.1, 3.1, 2.7]} />
        {steel}
      </mesh>
      <mesh position={[2.4, 0, 0]}>
        <boxGeometry args={[0.1, 3.1, 2.7]} />
        {steel}
      </mesh>
      {ribs.map((i) => (
        <mesh key={i} position={[-2.25 + i * 0.195, 0, -1.28]}>
          <boxGeometry args={[0.028, 2.8, 0.09]} />
          <meshStandardMaterial color="#28656a" metalness={0.6} roughness={0.5} />
        </mesh>
      ))}
      {showSacks && (
        <group position={[0, -0.72, -0.35]}>
          {[-1.5, -0.5, 0.5, 1.5].map((x) => (
            <Sack key={x} position={[x, 0, 0]} scale={0.46} texture={texture} />
          ))}
          {[-1, 0, 1].map((x) => (
            <Sack key={x} position={[x, 0.87, -0.1]} scale={0.46} texture={texture} />
          ))}
        </group>
      )}
      <group ref={leftDoor} position={[-2.35, 0, 1.36]}>
        <mesh position={[1.17, 0, 0]}>
          <boxGeometry args={[2.34, 3.05, 0.09]} />
          <meshStandardMaterial color="#1b565b" metalness={0.6} roughness={0.5} />
        </mesh>
      </group>
      <group ref={rightDoor} position={[2.35, 0, 1.36]}>
        <mesh position={[-1.17, 0, 0]}>
          <boxGeometry args={[2.34, 3.05, 0.09]} />
          <meshStandardMaterial color="#1b565b" metalness={0.6} roughness={0.5} />
        </mesh>
      </group>
    </group>
  )
}

function PackPhase() {
  const group = usePhaseGroup(6)
  const sackGroup = useRef<THREE.Group>(null!)
  const texture = useSackTexture()
  const duplicates = useRef<THREE.Group>(null!)

  useFrame(() => {
    const u = localProgress(6)
    const drop = easeOutCubic(clamp(u * 1.9))
    if (sackGroup.current) {
      sackGroup.current.position.y = 1.6 * (1 - drop) + Math.sin(drop * Math.PI * 3) * 0.06 * (1 - drop)
      sackGroup.current.rotation.y = 0.18 + (1 - drop) * 0.35
    }
    if (duplicates.current) {
      const visible = clamp((u - 0.45) * 2.2)
      duplicates.current.children.forEach((child) => child.scale.setScalar(0.001 + visible * 0.62))
    }
  })

  return (
    <group ref={group}>
      <group ref={sackGroup} position={[0, 0, 1.35]}>
        <Sack texture={texture} />
      </group>
      <group ref={duplicates} position={[0, -0.35, -0.35]}>
        <Sack texture={texture} position={[0, 0, 0]} scale={1} />
        <Sack texture={texture} position={[0.2, 0.02, -0.12]} scale={1} />
      </group>
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/*  08 — Sealed container next to the certificate of analysis                  */
/* -------------------------------------------------------------------------- */
function useSpecTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 620
    canvas.height = 760
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = '#0a2428'
    ctx.fillRect(0, 0, 620, 760)
    ctx.strokeStyle = 'rgba(180,220,212,.42)'
    ctx.lineWidth = 2
    ctx.strokeRect(18, 18, 584, 724)
    ctx.fillStyle = '#d8efe8'
    ctx.font = '500 24px Arial, sans-serif'
    ctx.fillText('CERTIFICATE OF ANALYSIS', 52, 84)
    ctx.fillStyle = '#7faaa4'
    ctx.font = '18px "DM Mono", monospace'
    ctx.fillText('SINAICORE / LOT SC-08 / SINAI, EGYPT', 52, 124)

    const rows: [string, string][] = [
      ['NaCl', '99.5 %'],
      ['H2O', '0.18 %'],
      ['CaSO4', '0.05 %'],
      ['MgCl2', '0.02 %'],
      ['SIEVE', 'MEDIUM / FINE'],
    ]
    rows.forEach(([label, value], i) => {
      const y = 204 + i * 88
      ctx.fillStyle = '#e8f2ec'
      ctx.font = '30px "DM Mono", monospace'
      ctx.fillText(label, 52, y)
      ctx.fillStyle = '#e8b184'
      ctx.textAlign = 'right'
      ctx.fillText(value, 568, y)
      ctx.textAlign = 'left'
      ctx.strokeStyle = 'rgba(180,220,212,.18)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(52, y + 26)
      ctx.lineTo(568, y + 26)
      ctx.stroke()
    })
    ctx.fillStyle = '#7faaa4'
    ctx.font = '17px "DM Mono", monospace'
    ctx.fillText('RELEASED · 08 / 08', 52, 688)

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = 8
    return texture
  }, [])
}

function AnalysisPhase() {
  const group = usePhaseGroup(7)
  const specTexture = useSpecTexture()
  const sackTexture = useSackTexture()
  const scan = useRef<THREE.Mesh>(null!)
  const panel = useRef<THREE.Group>(null!)
  const doors = useMemo(() => ({ value: 0 }), [])

  useFrame(({ clock }) => {
    const u = localProgress(7)
    doors.value = clamp(u * 1.6)
    if (scan.current) {
      scan.current.position.y = -1.5 + ((clock.elapsedTime * 0.4) % 3)
      const material = scan.current.material as THREE.MeshBasicMaterial
      material.opacity = Math.sin(u * Math.PI) * 0.5
    }
    if (panel.current) {
      panel.current.position.x = 2.7 + (1 - easeOutCubic(clamp(u * 1.5))) * 0.7
    }
  })

  return (
    <group ref={group}>
      <group scale={0.78} position={[-0.85, -0.2, -0.2]}>
        <AssetBoundary fallback={<ShippingContainer closed={doors} texture={sackTexture} />}>
          <Suspense fallback={<ShippingContainer closed={doors} texture={sackTexture} />}>
            <ContainerAsset closed={doors} texture={sackTexture} />
          </Suspense>
        </AssetBoundary>
      </group>
      <mesh ref={scan} position={[0, -1.5, 1.3]}>
        <planeGeometry args={[3.6, 0.012]} />
        <meshBasicMaterial color="#9fe0d3" transparent opacity={0.4} depthWrite={false} />
      </mesh>
      <group ref={panel} position={[2.7, 0, 0.5]} rotation={[0, -0.42, 0]}>
        <mesh>
          <planeGeometry args={[1.55, 1.9]} />
          <meshBasicMaterial map={specTexture} transparent opacity={0.92} side={THREE.DoubleSide} toneMapped={false} />
        </mesh>
        <mesh position={[0, 0, -0.02]}>
          <planeGeometry args={[1.72, 2.07]} />
          <meshBasicMaterial color="#6f9c95" transparent opacity={0.14} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  )
}

export function Sculpture() {
  const group = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    const p = story.phase
    const focus = motion.refine
    if (group.current) {
      group.current.rotation.y =
        Math.sin(clock.elapsedTime * 0.16) * 0.12 +
        story.pointerX * 0.12 +
        p * 0.035 +
        orbit.y * orbit.station
      group.current.rotation.x =
        story.pointerY * 0.05 - motion.sort * 0.04 + orbit.x * orbit.station
      group.current.position.y = -0.05 + Math.sin(clock.elapsedTime * 0.5) * 0.035 - focus * 0.05
    }
  })

  return (
    <group ref={group}>
      <AssemblyFragments />
      <WaterPhase />
      <CrustPhase />
      <HarvestPhase />
      <WashPhase />
      <RefinePhase />
      <SortPhase />
      <PackPhase />
      <AnalysisPhase />
      <Hotspots />
    </group>
  )
}
