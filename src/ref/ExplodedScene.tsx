/* The R3F side of the fixed canvas: lighting, camera rig and the bag.
 *
 * Kept in its own module so three.js, drei and the model loader are only
 * fetched when the exploded act is actually approached — the page's initial
 * payload does not change.
 */

import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, Lightformer, Preload } from '@react-three/drei'
import ExplodedBag from './ExplodedBag'

/* The same studio rig the plates use: a soft key, a low fill, a narrow rim
   strip and a grey seamless floor, baked into a PMREM. Repeated here rather
   than imported from Stage because Stage's version also draws a cyclorama
   and a floor plane — this canvas must stay transparent. */
function StudioEnv() {
  return (
    <Environment resolution={256} frames={1}>
      <Lightformer position={[-3, 2.4, 3]} scale={[4, 4, 1]} intensity={5} color="#ffffff" />
      <Lightformer position={[3.4, 0.6, -1.6]} scale={[3, 3, 1]} intensity={2.2} color="#dce9f2" />
      <Lightformer position={[0, -2.6, 1.4]} scale={[6, 1.4, 1]} intensity={1.1} color="#aeb9c2" />
      {/* a white card behind the model: with alpha:true there is no page
          background for the bag to catch light from, so a rim from the
          back is what separates a pale bag from a dark plate */}
      <Lightformer position={[0, 1.2, -4]} scale={[6, 6, 1]} intensity={2.4} color="#ffffff" />
    </Environment>
  )
}

/* A fixed full-screen canvas is wide on a desktop and taller than it is
   wide on a phone, and one camera cannot serve both. The solve has to keep
   the object inside whichever axis is *narrower*.

   Two attempts failed here and both are worth recording:

   · multiplying by the aspect on the horizontal side double-counted it, and
     the phone got a distance where the near plane cut the bag away.
   · solving for the object's horizontal extent as `height * aspect` is
     wrong when the object is taller than it is wide: on a portrait screen
     that expression shrinks, the "fits horizontally" distance comes out
     *smaller* than the vertical one, `max()` keeps the vertical answer, and
     the aspect never affects anything — which is exactly what the numbers
     showed (identical distance at 390x844 and 1440x900).

   The object is roughly as wide as it is tall, so its horizontal extent is
   its width, not `height * aspect`. With that, a portrait screen correctly
   demands the larger distance. */
function FitCamera({ size: obj = 4.4 }: { size?: number }) {
  const { camera, size, gl, setSize } = useThree()

  /* This component exists because of one specific, reproducible failure.
     The canvas is inside a `position: fixed` layer that fades in, and R3F
     measures its container on mount — at which point the container still
     has no box. The store ends up believing the viewport is 1x1, the
     drawing buffer stays at the canvas default of 300x150, and every frame
     is rendered into a buffer nine percent of the intended area and then
     stretched by CSS to fill the layer. The result is a blurry, empty
     plate: the DOM looks perfect, the pixels are nothing.

     Neither mounting two frames late nor pinning the canvas size in CSS
     fixed it, because the store keeps its own idea of the size. What does
     fix it is telling the store the real dimensions — and, because the
     box only appears after the fade begins, retrying on animation frames
     until there is something to measure. */
  useEffect(() => {
    let raf = 0
    let tries = 0
    let done = false

    const solve = () => {
      const el = gl.domElement
      const w = el.clientWidth || el.parentElement?.clientWidth || 0
      const h = el.clientHeight || el.parentElement?.clientHeight || 0
      if (w < 2 || h < 2) return false
      if (size.width !== w || size.height !== h) setSize(w, h)
      const cam = camera as THREE.PerspectiveCamera
      const aspect = w / h

      /* Frame the *width* of the assembly, because that is what the parts
         spread across when they come apart — the bag is 2.3 units wide
         once the loops have left, versus 1.6 tall. Fitting the height (my
         first version) left the exploded pieces running off both edges of
         a portrait screen, and fitting the height on a desktop cropped the
         loops too.

         So: keep a fixed vertical fov, and set the distance from the
         horizontal requirement. On a phone that means the camera sits
         further back — the bag reads smaller, which is honest, because
         there is a quarter of the horizontal room to show it in. */
      /* the assembled bag is 2.7 wide once the loops have left; the parts
         spread to roughly 4.5 at full separation */
      const spread = 5.4
      const vFov = 30
      const hHalf = Math.atan(Math.tan((vFov / 2) * (Math.PI / 180)) * aspect)
      /* required distance, plus a little air */
      const dist = spread / 2 / Math.tan(hHalf) * 1.08
      cam.fov = vFov
      /* On a portrait screen the copy occupies the lower half, so the
         camera looks slightly *up*: the bag then sits in the upper half of
         the frame with room under it for the text, without moving the
         object in the scene (which would need a separate model transform
         per breakpoint and would drift). */
      cam.position.set(0, aspect < 1 ? 0.85 : 0.1, Math.max(4.6, dist))
      cam.near = Math.max(0.4, cam.position.z * 0.08)
      cam.far = 60
      cam.lookAt(0, aspect < 1 ? -0.55 : 0, 0)
      cam.updateProjectionMatrix()
      return true
    }

    const tick = () => {
      tries++
      if (solve() || tries > 180) {
        done = true
        return
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    const ro = new ResizeObserver(() => {
      if (done) solve()
    })
    ro.observe(gl.domElement)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, camera, obj, setSize])

  return null
}

export default function ExplodedScene() {
  return (
    <Canvas
      /* a fixed full-screen layer does not need retina density to read as
         sharp — capping at 1.6 keeps a 1440px-wide canvas inside a sane
         fragment budget on integral GPUs */
      dpr={[1, 1.6]}
      shadows
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0.55, 6.4], fov: 32, near: 0.1, far: 60 }}
      onCreated={({ gl }) => {
        gl.setClearAlpha(0)
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 1.0
        gl.shadowMap.type = THREE.PCFShadowMap
      }}
    >
      <FitCamera size={4.4} />
      <StudioEnv />
      {/* three times the intensity a plate would need: the canvas is
          transparent, so none of the page's own light contributes, and the
          bag is a pale object on a near-black field — under-lit it reads as
          a silhouette rather than as an object */}
      {/* the smaller the object reads, the more its edge contrast matters,
          so the fill is heavier than a desktop plate would use */}
      {/* A hemisphere rather than more flat ambient: the bag is white and
          the ground is near-black, so an ambient term lights it evenly but
          leaves it flat and grey. Sky above, ground bounce below, gives the
          pale surface a value range — which is what was missing on the
          phone, where the same rig looked correct only because the object
          was small enough not to show its shadow side. */}
      <hemisphereLight args={['#ffffff', '#1a2a36', 2.2]} />
      <ambientLight intensity={0.9} />
      <directionalLight
        position={[3.2, 5, 3.4]}
        intensity={4.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      <directionalLight position={[-4, 1.5, -2]} intensity={1.4} color="#cfe0ee" />
      <directionalLight position={[0, -3, 2]} intensity={0.8} color="#ffffff" />
      <Suspense fallback={null}>
        <ExplodedBag />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
