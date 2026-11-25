import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  AdaptiveDpr,
  ContactShadows,
  Environment,
  Lightformer,
  PerformanceMonitor,
} from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import * as THREE from 'three'
import { AmbientDust } from './Particles'
import { Sculpture } from './Sculpture'
import Interaction from './Interaction'
import { quality } from '../lib/quality'
import { loadSurfaceMaps, type SurfaceMaps } from '../lib/surfaces'
import { SurfaceMapsContext } from '../lib/surfaceContext'
import { clamp, motion, story } from '../story'
import { initialSceneState, sceneAt } from '../motion/scene'

/** Two-stage damping, exactly like the reference: sceneAt() → soft state →
 *  scene state. Scroll acceleration produces the extra "surge" channel. */
function SceneDamping() {
  const soft = useRef({ ...initialSceneState })
  const velocity = useRef({ last: Number.NaN, speed: 0 })

  useFrame((_, delta) => {
    const dt = Math.min(delta, 1 / 30)
    const lambda = story.reducedMotion ? 1000 : 8
    const target = sceneAt(story.position) as unknown as Record<string, number>
    const softValues = soft.current as unknown as Record<string, number>
    const hardValues = motion as unknown as Record<string, number>

    Object.keys(target).forEach((key) => {
      const value = target[key]
      softValues[key] = THREE.MathUtils.damp(softValues[key] ?? value, value, lambda, dt)
      hardValues[key] = THREE.MathUtils.damp(hardValues[key] ?? value, softValues[key], lambda, dt)
    })
    story.phase = hardValues.phase

    const tracker = velocity.current
    const speed = Number.isNaN(tracker.last) ? 0 : (hardValues.scroll - tracker.last) / dt
    const acceleration = (speed - tracker.speed) / dt
    tracker.last = hardValues.scroll
    tracker.speed = speed
    story.surge = THREE.MathUtils.clamp(-0.1 * acceleration, -1.5, 1.5)
  })

  return null
}

function CameraRig() {
  const look = useMemo(() => new THREE.Vector3(0, 0, 0), [])

  useFrame(({ camera, size }) => {
    const smoothing = story.reducedMotion ? 1 : 0.12
    const perspective = camera as THREE.PerspectiveCamera
    const aspect = size.width / size.height
    /* Narrow screens get a little more distance so the object still fits above
     * the stacked text card; wide screens keep the keyframed distance. */
    const framing = aspect < 1.2 ? clamp(0.92 / aspect, 1, 1.75) : 1

    camera.position.lerp(
      new THREE.Vector3(
        motion.camX + story.pointerX * 0.22 + story.surge * 0.035,
        motion.camY + story.pointerY * 0.12,
        motion.camZ * framing,
      ),
      smoothing,
    )
    look.lerp(new THREE.Vector3(motion.targetX, motion.targetY, motion.targetZ), smoothing)
    camera.lookAt(look)
    camera.rotation.z += story.surge * 0.006

    /* On stacked layouts the editorial card owns the lower half: shift the
     * rendered window so the specimen sits in the upper part of the screen. */
    const stacked = size.width < 1180 || aspect < 1
    if (stacked) {
      camera.setViewOffset(size.width, size.height, 0, size.height * 0.16, size.width, size.height)
    } else if (perspective.view?.enabled) {
      camera.clearViewOffset()
    }
  })

  return null
}

/** The paper-and-grid backdrop lives inside the canvas, so the 3D object sits
 *  in the same space as the drawing board even with post-processing enabled. */
function StageBackdrop() {
  const { scene } = useThree()
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 1024
    const ctx = canvas.getContext('2d')!
    const gradient = ctx.createRadialGradient(512, 440, 0, 512, 440, 720)
    gradient.addColorStop(0, '#fdfcf7')
    gradient.addColorStop(0.65, '#e8eee7')
    gradient.addColorStop(1, '#dce4dc')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 1024, 1024)
    ctx.strokeStyle = 'rgba(31,111,112,0.055)'
    ctx.lineWidth = 1
    for (let i = 0; i <= 1024; i += 44) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 1024); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(1024, i); ctx.stroke()
    }
    const map = new THREE.CanvasTexture(canvas)
    map.colorSpace = THREE.SRGBColorSpace
    return map
  }, [])

  useEffect(() => {
    scene.background = texture
    return () => {
      scene.background = null
    }
  }, [scene, texture])

  return null
}

/** A soft, slightly darker specimen panel behind the object. It gives the
 *  pale crystal and the sack a surface to read against, and it is far enough
 *  back that the depth of field dissolves its edges. */
function SpecimenStage() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 640
    const ctx = canvas.getContext('2d')!
    const gradient = ctx.createRadialGradient(512, 300, 40, 512, 300, 620)
    gradient.addColorStop(0, '#e7e6d8')
    gradient.addColorStop(0.55, '#e9e7db')
    gradient.addColorStop(1, 'rgba(244,241,232,0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 1024, 640)
    ctx.globalAlpha = 0.05
    ctx.strokeStyle = '#18211f'
    for (let y = 0; y < 640; y += 4) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(1024, y)
      ctx.stroke()
    }
    const map = new THREE.CanvasTexture(canvas)
    map.colorSpace = THREE.SRGBColorSpace
    return map
  }, [])

  return (
    <mesh position={[0, 0.1, -6]} scale={[1, 1, 1]}>
      <planeGeometry args={[26, 16]} />
      <meshBasicMaterial map={texture} transparent depthWrite={false} toneMapped={false} />
    </mesh>
  )
}

/** A soft studio HDRI built in-scene: bright, neutral, no network requests. */
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.34} color="#fffdf7" />
      <hemisphereLight args={['#f4f8f6', '#9fb2ab', 0.4]} />
      <directionalLight
        position={[4.5, 6.5, 5]}
        intensity={1.85}
        color="#fff7ea"
        castShadow
        shadow-mapSize={[quality.shadowMapSize, quality.shadowMapSize]}
        shadow-bias={-0.0002}
      />
      <directionalLight position={[-5, 2, -4]} intensity={0.65} color="#9fd8d2" />
      <pointLight position={[0, -2.6, 3.5]} intensity={2.4} distance={9} color="#ffd6a8" />
      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={5} color="#ffffff" scale={[10, 6, 1]} position={[-4, 5, 5]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={3.2} color="#fff3e2" scale={[6, 4, 1]} position={[5, 2, 3]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={2.4} color="#d6f2ec" scale={[8, 3, 1]} position={[0, -4, -3]} target={[0, 0, 0]} />
        {/* two tall side panels give the glass and the sack a gradient to
            reflect, which is what makes a pale object read as a volume */}
        <Lightformer form="rect" intensity={2.6} color="#4a9d97" scale={[3, 9, 1]} position={[-7, 0.5, 2.5]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={1.7} color="#eabf95" scale={[3, 9, 1]} position={[7, -0.6, 2.5]} target={[0, 0, 0]} />
      </Environment>
    </>
  )
}

/** Dev-only handle so the QA scripts can inspect the live scene graph. */
function DevHandle() {
  const scene = useThree((state) => state.scene)
  useEffect(() => {
    if (!import.meta.env.DEV) return
    const global = window as unknown as { __sinaicore?: Record<string, unknown> }
    global.__sinaicore = { ...(global.__sinaicore ?? {}), scene }
  }, [scene])
  return null
}

/** Transcodes the KTX2 maps once and shares them with every material. */
function SurfaceProvider({ children }: { children: React.ReactNode }) {
  const gl = useThree((state) => state.gl)
  const [maps, setMaps] = useState<SurfaceMaps>({})

  useEffect(() => {
    let cancelled = false
    loadSurfaceMaps(gl).then((loaded) => {
      if (!cancelled) setMaps(loaded)
    })
    return () => {
      cancelled = true
    }
  }, [gl])

  return <SurfaceMapsContext.Provider value={maps}>{children}</SurfaceMapsContext.Provider>
}

/** The focus point rides with the sculpture, so the model stays sharp while
 *  the backdrop and the flying grains fall out of focus. */
function FocusRig({ target }: { target: THREE.Vector3 }) {
  useFrame(() => {
    target.set(
      motion.targetX + story.pointerX * 0.05,
      motion.targetY,
      motion.targetZ,
    )
  })
  return null
}

function Effects() {
  const focus = useMemo(() => new THREE.Vector3(0, 0, 0), [])
  if (!quality.postprocessing) return null
  return (
    <>
      <FocusRig target={focus} />
      <EffectComposer multisampling={0} enableNormalPass={false}>
  <DepthOfField target={focus} focusRange={0.3} bokehScale={0.9} resolutionScale={0.9} />
        <Bloom luminanceThreshold={0.94} luminanceSmoothing={0.18} intensity={0.16} mipmapBlur />
      </EffectComposer>
    </>
  )
}

export default function Scene() {
  const [dpr, setDpr] = useState(() =>
    Math.min(quality.dpr, typeof window === 'undefined' ? 1 : window.devicePixelRatio),
  )

  return (
    <Canvas
      dpr={dpr}
      shadows
      camera={{ position: [0, 0.08, 7.4], fov: 37, near: 0.1, far: 40 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 0.98
        gl.setClearColor('#ffffff', 0)
      }}
      performance={{ min: 0.5 }}
    >
      <DevHandle />
      <PerformanceMonitor
        flipflops={2}
        onDecline={() => setDpr(Math.min(1.25, quality.maxDpr))}
        onFallback={() => setDpr(1)}
        onIncline={() => setDpr(Math.min(quality.maxDpr, window.devicePixelRatio))}
      />
      <AdaptiveDpr pixelated />
      <SurfaceProvider>
        <StageBackdrop />
        <SpecimenStage />
        <Lighting />
        <Sculpture />
      </SurfaceProvider>
      <AmbientDust count={Math.round(240 * quality.particles)} />
      <SceneDamping />
      <ContactShadows
        position={[0, -2.05, 0]}
        opacity={0.3}
        scale={9}
        blur={2.7}
        far={5}
        resolution={quality.low ? 256 : 512}
        color="#516a64"
      />
      <Effects />
      <CameraRig />
      <Interaction />
    </Canvas>
  )
}
