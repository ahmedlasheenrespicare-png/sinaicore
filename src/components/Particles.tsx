import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { clamp, easeOutCubic, localProgress, motion, story } from '../story'

const dummy = new THREE.Object3D()

const seed = (i: number, salt = 1) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453
  return x - Math.floor(x)
}

type VaporProps = { count?: number; phase?: number; spread?: number; speed?: number }
/** Fine brine mist rising from the evaporating surface. */
export function Vapor({ count = 90, phase = 0, spread = 1.1, speed = 0.42 }: VaporProps) {
  const ref = useRef<THREE.InstancedMesh>(null!)
  const seeds = useMemo(
    () => Array.from({ length: count }, (_, i) => ({ x: seed(i, 1), y: seed(i, 2), z: seed(i, 3), s: seed(i, 4) })),
    [count],
  )

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const strength = easeOutCubic(clamp(localProgress(phase) * 2.2))
    for (let i = 0; i < count; i++) {
      const s = seeds[i]
      const y = -1.15 + ((s.y + t * speed * (0.5 + s.s)) % 2.7)
      const drift = Math.sin(t * 0.6 + s.x * 9) * 0.12
      dummy.position.set((s.x - 0.5) * spread * 2 + drift, y, (s.z - 0.5) * spread * 2)
      const size = (0.012 + s.s * 0.022) * strength * (1 - Math.abs(y) * 0.25)
      dummy.scale.setScalar(Math.max(size, 0.0001))
      dummy.rotation.set(0, 0, 0)
      dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    }
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#5f9c96" transparent opacity={0.5} depthWrite={false} />
    </instancedMesh>
  )
}

type CrystalsProps = { count?: number; phase?: number; radius?: number; size?: number }
/** Little cubic crystals growing out of a crust. */
export function SurfaceCrystals({ count = 110, phase = 1, radius = 1.18, size = 0.085 }: CrystalsProps) {
  const ref = useRef<THREE.InstancedMesh>(null!)
  const seeds = useMemo(
    () => Array.from({ length: count }, (_, i) => ({ x: seed(i, 7), z: seed(i, 8), r: seed(i, 9), y: seed(i, 10) })),
    [count],
  )

  useFrame(() => {
    const grow = easeOutCubic(clamp(localProgress(phase) * 1.9 - 0.12))
    for (let i = 0; i < count; i++) {
      const s = seeds[i]
      const a = s.x * Math.PI * 2
      const r = Math.sqrt(s.r) * radius
      dummy.position.set(Math.cos(a) * r, 0.2 + s.y * 0.05, Math.sin(a) * r)
      const scale = (0.35 + s.r * 0.75) * size * grow
      dummy.scale.setScalar(Math.max(scale, 0.0001))
      dummy.rotation.set(0, s.y * 3, 0)
      dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    }
    ref.current.instanceMatrix.needsUpdate = true
    ref.current.visible = grow > 0.01
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color="#f7f8f1" roughness={0.22} metalness={0} transmission={0.3} ior={1.5} thickness={0.4} clearcoat={0.6} />
    </instancedMesh>
  )
}

/** Shattered pieces drifting down from the fractured crust. */
export function FractureDust({ count = 64, phase = 2 }: { count?: number; phase?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null!)
  const seeds = useMemo(
    () => Array.from({ length: count }, (_, i) => ({ x: seed(i, 13), y: seed(i, 14), z: seed(i, 15), s: seed(i, 16) })),
    [count],
  )

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const amount = Math.sin(clamp(localProgress(phase)) * Math.PI)
    for (let i = 0; i < count; i++) {
      const s = seeds[i]
      const fall = (s.y + t * (0.16 + s.s * 0.2)) % 1
      dummy.position.set((s.x - 0.5) * 2.9, 0.15 - fall * 2.4, (s.z - 0.5) * 1.6)
      dummy.rotation.set(t * 0.4 + s.s * 6, t * 0.3, s.x * 4)
      dummy.scale.setScalar((0.018 + s.s * 0.035) * amount)
      dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    }
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <tetrahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#f3f1e6" roughness={0.55} transparent opacity={0.9} />
    </instancedMesh>
  )
}

/** Salt grains caught in a slow vortex. */
export function WashGrains({ count = 260 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null!)
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        a: seed(i, 21) * Math.PI * 2,
        r: seed(i, 22),
        y: seed(i, 23),
        s: seed(i, 24),
        j: seed(i, 25),
      })),
    [count],
  )

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const u = localProgress(3)
    for (let i = 0; i < count; i++) {
      const s = seeds[i]
      const radius = 0.38 + s.r * 0.82 - u * 0.18
      const angle = s.a + t * (0.35 + s.s * 0.55) * (1.25 - u * 0.5)
      const y = -1.05 + ((s.y + t * (0.09 + s.s * 0.14)) % 2.1)
      dummy.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius * 0.78)
      dummy.rotation.set(t * 0.6 + s.j * 6, angle, s.j * 3)
      dummy.scale.setScalar(0.035 + s.s * 0.05)
      dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    }
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color="#fbfbf4" roughness={0.2} transmission={0.28} ior={1.52} thickness={0.3} clearcoat={0.7} envMapIntensity={1.4} />
    </instancedMesh>
  )
}

/** Dark mineral impurities sinking out of the brine. */
export function Impurities({ count = 42 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null!)
  const seeds = useMemo(
    () => Array.from({ length: count }, (_, i) => ({ x: seed(i, 31), z: seed(i, 32), y: seed(i, 33), s: seed(i, 34) })),
    [count],
  )

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const u = localProgress(3)
    for (let i = 0; i < count; i++) {
      const s = seeds[i]
      const y = 1.05 - ((s.y + t * (0.24 + s.s * 0.18) * (0.6 + u)) % 2.3)
      dummy.position.set((s.x - 0.5) * 2.1, y, (s.z - 0.5) * 1.7)
      dummy.rotation.set(t * 0.3, s.x * 6, s.z * 6)
      dummy.scale.setScalar(0.025 + s.s * 0.035)
      dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    }
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#3c3a32" roughness={0.95} />
    </instancedMesh>
  )
}

/** Grains falling through three virtual sieves, separated by size. */
export function SortGrains({ count = 210 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null!)
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        x: seed(i, 41),
        z: seed(i, 42),
        y: seed(i, 43),
        s: seed(i, 44),
        tier: i % 3,
      })),
    [count],
  )

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const u = localProgress(5)
    for (let i = 0; i < count; i++) {
      const s = seeds[i]
      const level = s.tier
      const fall = (s.y + t * (0.22 + s.s * 0.2)) % 1
      const y = 1.35 - fall * (1.05 + level * 0.34)
      const spread = 0.78 - level * 0.14
      dummy.position.set((s.x - 0.5) * spread * 2, y, (s.z - 0.5) * spread * 2)
      dummy.rotation.set(t * 0.4, s.x * 8, 0)
      dummy.scale.setScalar((0.052 - level * 0.012) * (0.7 + s.s * 0.6) * (0.35 + u * 0.65))
      dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    }
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color="#f8f8f1" roughness={0.28} transmission={0.2} ior={1.5} thickness={0.2} clearcoat={0.5} />
    </instancedMesh>
  )
}

/** Sparse atmospheric salt dust shared by the whole scene. */
export function AmbientDust({ count = 380 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      array[i * 3] = (seed(i, 51) - 0.5) * 15
      array[i * 3 + 1] = (seed(i, 52) - 0.5) * 9
      array[i * 3 + 2] = (seed(i, 53) - 0.5) * 9 - 2
    }
    return array
  }, [count])

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.008
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.05) * 0.03
  })

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#547e77" transparent opacity={0.28} sizeAttenuation depthWrite={false} />
    </points>
  )
}

/** Small pieces pulled out of the central object by the timeline's `explode`
 *  keyframe. This is what makes the disassembly scrub in both directions. */
export function AssemblyFragments({ count = 64 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null!)

  const seeds = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        angle: seed(i, 61) * Math.PI * 2,
        y: seed(i, 62),
        r: seed(i, 63),
        s: seed(i, 64),
      })),
    [count],
  )

  useFrame(({ clock }) => {
    const explode = motion.explode
    const material = ref.current.material as THREE.MeshStandardMaterial
    material.opacity = 0.12 + explode * 0.5
    for (let i = 0; i < count; i++) {
      const s = seeds[i]
      const radius = 0.5 + explode * (1.05 + s.r * 0.9)
      const angle = s.angle + motion.twist * 2 + clock.elapsedTime * 0.045
      dummy.position.set(
        Math.cos(angle) * radius,
        (s.y - 0.5) * (0.55 + explode * 1.75),
        Math.sin(angle) * radius * 0.78,
      )
      dummy.rotation.set(angle, s.s * 6, clock.elapsedTime * 0.12 * (s.s > 0.5 ? 1 : -1))
      dummy.scale.setScalar((0.016 + s.s * 0.03) * (0.35 + explode * 1.3))
      dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    }
    ref.current.instanceMatrix.needsUpdate = true
    ref.current.visible = explode > 0.02 && !story.reducedMotion
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3d837d" roughness={0.45} metalness={0.1} transparent opacity={0.4} depthWrite={false} />
    </instancedMesh>
  )
}
