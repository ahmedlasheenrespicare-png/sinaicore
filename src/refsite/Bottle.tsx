/* ------------------------------------------------------------------ *
 * The bottle.
 *
 * The original loads /models/bottle.glb and shades it with two custom
 * materials patched into MeshPhysicalMaterial with `onBeforeCompile`. The
 * model is not in the saved archive and cannot be fetched, so the bottle
 * here is built from a lathed profile instead — the same *approach*, drawn
 * with the numbers the shaders imply. What is reproduced is the part that
 * actually reads on screen:
 *
 *   · the glass is nearly transparent facing you and opaque at grazing
 *     angles — `facing = |dot(normal, viewDir)|`, alpha `0.03 + edge³·0.55`,
 *     which is the original's expression, not an approximation of it;
 *   · the liquid is a second lathe inside the first, tinted and lit from
 *     within, with its own surface cap;
 *   · the shoulders carry a faint sheen so the silhouette never disappears
 *     against the pale ground.
 *
 * Three bottles share this geometry and differ only in liquid colour and
 * fill height, which is how the original does it too.
 * ------------------------------------------------------------------ */

import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import type { Spirit } from './content'

/* A 50cl spirits bottle: broad shoulder, short neck, heavy base. Points are
   (radius, height) from the base up, and are lathed. */
const PROFILE: [number, number][] = [
  [0.0, 0.0],
  [0.36, 0.0],
  [0.4, 0.02],
  [0.42, 0.08],
  [0.42, 0.72],
  [0.41, 0.92],
  [0.37, 1.06],
  [0.29, 1.17],
  [0.2, 1.24],
  [0.16, 1.3],
  [0.155, 1.42],
  [0.16, 1.5],
  [0.172, 1.54],
  [0.172, 1.6],
  [0.15, 1.62],
  [0.0, 1.63],
]

function lathe(points: [number, number][], segments = 64) {
  const shape = points.map(([r, h]) => new THREE.Vector2(Math.max(0.0001, r), h))
  return new THREE.LatheGeometry(shape, segments)
}

/* The glass: MeshPhysicalMaterial with the original's facing-based alpha
   patched in. `transmission` alone washes out at the silhouette and the
   bottle becomes a smudge, so the edge term is doing real work. */
function makeGlass() {
  const mat = new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    roughness: 0.06,
    metalness: 0,
    transmission: 0.94,
    thickness: 0.55,
    ior: 1.46,
    envMapIntensity: 1.15,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
  })
  mat.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <opaque_fragment>',
      `
      float facing = abs(dot(normal, normalize(vViewPosition)));
      float edge = pow(1.0 - facing, 3.0);
      gl_FragColor = vec4(outgoingLight, 0.03 + edge * 0.55);
      `,
    )
  }
  mat.customProgramCacheKey = () => 'ref-glass'
  return mat
}

/* The liquid: opaque, lit from inside, and its top surface is a separate
   cap so the meniscus catches the key light. Without that cap the bottle
   reads as a solid coloured object rather than a filled one. */
function makeLiquid(color: string) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color),
    roughness: 0.24,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    emissive: new THREE.Color(color).multiplyScalar(0.16),
    transmission: 0.18,
    thickness: 0.6,
    ior: 1.34,
    transparent: true,
    opacity: 0.96,
  })
}

export default function Bottle({
  spirit,
  turn = 0,
}: {
  spirit: Spirit
  /* 0 → 1 across the act; the bottle rotates with it */
  turn?: number
}) {
  const glassGeo = useMemo(() => lathe(PROFILE), [])
  const liquidGeo = useMemo(() => {
    /* the liquid fills from the base to `depth`, following the profile so it
       cannot poke through the glass at the shoulders */
    const top = 0.08 + spirit.liquid.depth * 1.12
    const pts = PROFILE.filter(([, h]) => h <= top)
    const last = pts[pts.length - 1] ?? [0.42, top]
    const rad = last[0] || 0.42
    return lathe(
      [
        [0.0, 0.02],
        [rad * 0.99, 0.02],
        ...pts.filter(([, h]) => h > 0.02).map(([r, h]) => [r * 0.985, h] as [number, number]),
        [rad * 0.99, top],
        [0.0, top],
      ],
      48,
    )
  }, [spirit.liquid.depth])

  const liquidMat = useMemo(() => makeLiquid(spirit.liquid.color), [spirit.liquid.color])
  const glassMat = useMemo(() => makeGlass(), [])
  const group = useRef<THREE.Group>(null)

  useFrame((state, dt) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    /* a slow drift rather than a spin: a product shot that turns
       continuously looks like a turntable, and the original's bottles settle
       once you stop scrolling */
    group.current.rotation.y = turn * 1.4 - 0.35 + Math.sin(t * 0.28) * 0.06
    group.current.position.y = -0.85 + Math.sin(t * 0.6) * 0.012
    group.current.rotation.z = Math.sin(t * 0.4) * 0.008
    /* keep the loop honest at 60fps without allocating */
    void dt
  })

  return (
    <group ref={group} position={[0, -0.85, 0]}>
      <mesh geometry={liquidGeo} material={liquidMat} castShadow />
      {/* a brass-gold cap: the bottles in the reference all share one closure */}
      <mesh position={[0, 1.63, 0]}>
        <cylinderGeometry args={[0.178, 0.178, 0.14, 32]} />
        <meshStandardMaterial color="#b8905a" roughness={0.34} metalness={0.85} />
      </mesh>
      <mesh position={[0, 1.71, 0]}>
        <cylinderGeometry args={[0.16, 0.178, 0.04, 32]} />
        <meshStandardMaterial color="#c9a06a" roughness={0.28} metalness={0.9} />
      </mesh>
      <mesh geometry={glassGeo} material={glassMat} renderOrder={2} />
    </group>
  )
}
