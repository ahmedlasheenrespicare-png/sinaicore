/* ------------------------------------------------------------------ *
 * The scene.
 *
 * One fixed canvas for the whole page, as the original has: `fixed inset-0`
 * with the document scrolling over it. The camera does not follow the
 * scroll page-by-page; the *bottle* does, and the camera only eases back as
 * a bottle arrives so the copy beside it stays clear.
 *
 * Everything the scroll says arrives as one number in a mutable object,
 * read in useFrame — the same arrangement the rest of this codebase uses,
 * and the reason a 300svh section does not cost a React render.
 * ------------------------------------------------------------------ */

import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer, ContactShadows } from '@react-three/drei'
import Bottle from './Bottle'
import { spirits } from './content'

/* One number per: which bottle, and how far through its own act we are.
   Written by the DOM side, read here. */
export const scene = { index: 0, turn: 0, close: 0 }

/* Where the product sits in the frame. On a wide screen the copy holds the
   left 46vw, so the bottle lives to the right of centre; on a phone the copy
   is underneath and the bottle is centred.
   This is read every frame rather than captured at mount: a rotated tablet
   or a resized window must move the product, and a constant read once at
   module load would leave it stranded off-frame. */
const baseX = () => (window.innerWidth >= 1024 ? 1.45 : 0)

/* On a phone there is no room beside the product, so the product moves
   above the copy: the whole rig is lifted and scaled down. Doing this on a
   wrapper — not on the camera — keeps the camera looking straight at the
   bottle's middle, so its silhouette stays symmetrical instead of going
   perspective-skewed. */
const portrait = () => window.innerHeight > window.innerWidth * 1.05

function Bottles() {
  const group = useRef<THREE.Group>(null)
  const wrap = useRef<THREE.Group>(null)
  const shown = useRef(0)
  const shut = useRef(0)

  useFrame((_, dt) => {
    const k = 1 - Math.exp(-6 * Math.min(dt, 0.1))
    shown.current += (scene.index - shown.current) * k
    shut.current += (scene.close - shut.current) * k
    if (wrap.current) {
      const tall = portrait()
      /* In the close the bottle steps back: smaller, further right, so the
         centred headline has a clear field. Interpolated, not toggled —
         a jump here reads as a glitch rather than a move. */
      const c = shut.current
      /* eased so a rotate does not snap the product across the screen */
      const target = (tall ? 1.38 : 0) - c * 0.1
      const scale = ((tall ? 0.62 : 1) - c * (tall ? 0.14 : 0.24))
      wrap.current.position.y += (target - wrap.current.position.y) * k
      wrap.current.position.x += (c * (tall ? 0.25 : 1.5) - wrap.current.position.x) * k
      const sc = wrap.current.scale.x + (scale - wrap.current.scale.x) * k
      wrap.current.scale.setScalar(sc)
    }
    if (group.current) {
      /* Each bottle is a fixed distance apart on one axis and the group is
         slid so the active one lands centre. Sliding a group of three keeps
         the geometry static — no re-parenting, no re-mount, no pop when the
         index changes. */
      group.current.position.x = shown.current * 6.2 + baseX()
    }
  })

  return (
    /* The base offset puts the product in the right half of the frame, where
       the copy is not. Six-and-a-bit units of spacing means exactly one
       bottle is inside the 30° frustum at a time, so the neighbours are out
       of shot rather than lurking at the edges. */
    <group ref={wrap}>
      <group ref={group}>
        {spirits.map((s, i) => (
          <group key={s.id} position={[i * -6.2, 0, 0]}>
            <Bottle spirit={s} turn={i === 0 ? scene.turn : 0} />
          </group>
        ))}
      </group>
    </group>
  )
}

/* The camera: a long lens from slightly above, the way a bottle is shot for
   a label photo. `fov` is solved against the viewport so a phone gets the
   same framing as a desktop rather than a cropped bottle. */
function Fit() {
  const { camera, gl, setSize, size } = useThree()
  useEffect(() => {
    let raf = 0
    let tries = 0
    const solve = () => {
      const el = gl.domElement
      const w = el.clientWidth || el.parentElement?.clientWidth || 0
      const h = el.clientHeight || el.parentElement?.clientHeight || 0
      if (w < 2 || h < 2) return false
      if (size.width !== w || size.height !== h) setSize(w, h)
      const cam = camera as THREE.PerspectiveCamera
      const aspect = w / h
      /* On a wide screen the copy holds the left 46vw, so the bottle is
         pushed right — an off-centre camera gives that framing without an
         off-centre object. On a phone the copy is below, so the bottle sits
         high and the camera looks down slightly more. */
      const wide = aspect > 1
      cam.fov = wide ? 30 : 34
      cam.position.set(wide ? 1.15 : 0, wide ? 0.55 : 0.35, wide ? 6.4 : 6.9)
      cam.lookAt(wide ? 0.25 : 0, wide ? 0.15 : 0.05, 0)
      cam.near = 0.5
      cam.far = 40
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
    ro.observe(gl.domElement)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, camera, setSize])
  return null
}

/* A studio rig: one large soft key from the front-left, a cool fill from
   behind to draw the glass silhouette, and a warm strip low on the right
   that the liquid picks up. Baked once into the environment. */
function Studio() {
  return (
    <Environment resolution={256} frames={1}>
      <Lightformer position={[-2.5, 2.2, 3]} scale={[5, 5, 1]} intensity={4.5} color="#ffffff" />
      <Lightformer position={[3, 1.2, -2]} scale={[4, 4, 1]} intensity={2.2} color="#e8f0f8" />
      <Lightformer position={[2.4, -1.4, 2]} scale={[3, 2, 1]} intensity={1.4} color="#ffd7b0" />
      <Lightformer position={[0, 3, -3]} scale={[6, 3, 1]} intensity={1.6} color="#ffffff" />
    </Environment>
  )
}

export default function FieldScene() {
  return (
    <Canvas
      dpr={[1, 1.7]}
      shadows
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [1.15, 0.55, 6.4], fov: 30, near: 0.5, far: 40 }}
      onCreated={({ gl }) => {
        gl.setClearAlpha(0)
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 1.05
        gl.shadowMap.type = THREE.PCFShadowMap
      }}
    >
      <Fit />
      <Studio />
      <ambientLight intensity={0.55} />
      <directionalLight position={[2.6, 4.2, 3]} intensity={2.6} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-3, 1.4, -1.5]} intensity={0.9} color="#dce9f5" />
      <Suspense fallback={null}>
        <Bottles />
        {/* a soft contact shadow under the bottle — the only grounding the
            reference gives its product; there is no floor plane */}
        <ContactShadows
          position={[0, -1.06, 0]}
          opacity={0.32}
          scale={9}
          blur={2.6}
          far={2}
          resolution={512}
          color="#5a3a26"
        />
      </Suspense>
    </Canvas>
  )
}
