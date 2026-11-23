import { Suspense, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

useGLTF.setDecoderPath('/draco/')

/**
 * Station 05 — the laboratory sample jar.
 *
 * It lives in the quote section (not in the pinned act) so it can park at a
 * fixed angle beside the form: draw is one cheap canvas, no scroll coupling.
 */

/* A small studio cube so the glass and the metal cap have something to reflect. */
function StudioEnv() {
  const { scene, gl: renderer } = useThree()
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(renderer)
    const c = document.createElement('canvas')
    c.width = 512
    c.height = 256
    const ctx = c.getContext('2d')!
    const g = ctx.createLinearGradient(0, 0, 0, 256)
    g.addColorStop(0, '#0b1a26')
    g.addColorStop(0.46, '#2b5468')
    g.addColorStop(0.54, '#3c7488')
    g.addColorStop(1, '#05090a')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 512, 256)
    const bar = ctx.createRadialGradient(160, 78, 2, 160, 78, 120)
    bar.addColorStop(0, 'rgba(232,255,250,0.55)')
    bar.addColorStop(1, 'rgba(232,255,250,0)')
    ctx.fillStyle = bar
    ctx.fillRect(20, 0, 320, 190)
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
  }, [scene, renderer])
  return null
}

/* The paper label wrapped round the jar.
   The label wraps once (aspect ≈ 7.6:1), and the lathe winds clockwise, so the
   canvas is mirrored on the way in and the copy is laid out in reverse order. */
function useLabelTexture() {
  return useMemo(() => {
    const W = 1520
    const H = 200
    const c = document.createElement('canvas')
    c.width = W
    c.height = H
    const x = c.getContext('2d')!
    x.fillStyle = '#f4f3ed'
    x.fillRect(0, 0, W, H)
    // brand rules: hairline blue top and bottom, copper accent under the top one
    x.fillStyle = 'rgba(26,107,156,0.5)'
    x.fillRect(0, 7, W, 3)
    x.fillRect(0, H - 10, W, 3)
    x.fillStyle = 'rgba(194,113,47,0.55)'
    x.fillRect(0, 13, W, 2)

    const mir = (src: HTMLImageElement) => {
      const mc = document.createElement('canvas')
      mc.width = src.width
      mc.height = src.height
      const mx = mc.getContext('2d')!
      mx.translate(src.width, 0)
      mx.scale(-1, 1)
      mx.drawImage(src, 0, 0)
      return mc
    }

    const paint = (img?: HTMLImageElement) => {
      x.setTransform(1, 0, 0, 1, 0, 0)
      x.clearRect(0, 0, W, H)
      x.fillStyle = '#f4f3ed'
      x.fillRect(0, 0, W, H)
      x.fillStyle = 'rgba(26,107,156,0.5)'
      x.fillRect(0, 7, W, 3)
      x.fillRect(0, H - 10, W, 3)
      x.fillStyle = 'rgba(194,113,47,0.55)'
      x.fillRect(0, 13, W, 2)

      // front block: mark + SINAICORE wordmark + tagline, centred on the wrap
      const mh = 84
      const logoW = img ? mh * (img.width / img.height) : 0
      const font = '700 54px Archivo, Helvetica, Arial, sans-serif'
      x.font = font
      const wS = x.measureText('SINAI').width
      const wC = x.measureText('CORE').width
      const gap = 6
      const total = logoW + (logoW ? 26 : 0) + wS + gap + wC
      let cx = W / 2 - total / 2
      if (img) {
        x.drawImage(img, cx, 40, logoW, mh)
        cx += logoW + 26
      }
      x.textAlign = 'left'
      x.fillStyle = '#c2712f'
      x.fillText('SINAI', cx, 112)
      x.fillStyle = '#1a6b9c'
      x.fillText('CORE', cx + wS + gap, 112)
      x.fillStyle = '#33556e'
      x.font = '400 25px Archivo, Helvetica, Arial, sans-serif'
      x.textAlign = 'center'
      x.fillText('REFINED SALT · PRODUCT OF EGYPT', W / 2 + 6, 148)

      // batch blocks, a third of the way round on either side
      for (const bx of [W * 0.165, W * 0.835]) {
        x.textAlign = 'center'
        x.fillStyle = '#0e1a2b'
        x.font = '700 42px Archivo, Helvetica, Arial, sans-serif'
        x.fillText('LAB SAMPLE', bx, 90)
        x.fillStyle = '#8a5a2e'
        x.font = '400 28px monospace'
        x.fillText('NaCl ≥ 99.5% . 500 g', bx, 130)
        x.fillStyle = '#33556e'
        x.font = '400 23px monospace'
        x.fillText('BATCH . COA ON REQUEST', bx, 162)
      }
      sync()
    }

    // mirrored copy, then flipped so the wrap reads in the right direction
    const flip = document.createElement('canvas')
    flip.width = W
    flip.height = H
    const fx = flip.getContext('2d')!
    const tex = new THREE.CanvasTexture(flip)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = 8
    // turn the printed brand block to the camera's side of the jar
    tex.offset.x = 0.335

    // the lathe wraps clockwise with v inverted: a 180° turn reads true
    const sync = () => {
      fx.setTransform(1, 0, 0, 1, 0, 0)
      fx.clearRect(0, 0, W, H)
      const sx = -1
      const sy = -1
      fx.translate(sx < 0 ? W : 0, sy < 0 ? H : 0)
      fx.scale(sx, sy)
      fx.drawImage(c, 0, 0)
      fx.setTransform(1, 0, 0, 1, 0, 0)
      tex.needsUpdate = true
    }

    const img = new Image()
    img.onload = () => paint(img)
    img.onerror = () => paint()
    img.src = '/brand/logo-mark.png'
    paint()
    return tex
  }, [])
}

function Jar() {
  const { scene } = useGLTF('/models/sample-jar.glb')
  const label = useLabelTexture()
  const group = useRef<THREE.Group>(null)

  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      if (n.includes('glass')) {
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#eaf6f4',
          roughness: 0.06,
          metalness: 0,
          transmission: 0.92,
          thickness: 0.42,
          ior: 1.49,
          transparent: true,
          opacity: 1,
          clearcoat: 1,
          clearcoatRoughness: 0.05,
          envMapIntensity: 1.5,
          side: THREE.DoubleSide,
        })
      } else if (n.includes('salt')) {
        mesh.material = new THREE.MeshStandardMaterial({
          color: '#f7f8f4',
          roughness: 0.92,
          metalness: 0,
          envMapIntensity: 0.9,
        })
      } else if (n.includes('label')) {
        mesh.material = new THREE.MeshStandardMaterial({ map: label, roughness: 0.88, envMapIntensity: 0.7 })
      } else if (n.includes('seal')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#c2712f', roughness: 0.32, metalness: 0.85, envMapIntensity: 1.2 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#0e1a2b', roughness: 0.38, metalness: 0.5, envMapIntensity: 1.1 })
      }
    })
    return m
  }, [scene, label])

  useFrame((s, dt) => {
    if (!group.current) return
    // parked: a fixed three-quarter angle, with the faintest breath of life
    group.current.rotation.y = -0.62
    const t = s.clock.elapsedTime
    group.current.position.y = 0.02 + Math.sin(t * 0.6) * 0.012
    group.current.rotation.z = Math.sin(t * 0.42) * 0.006
    void dt
  })

  return (
    <group ref={group} scale={1.0}>
      <primitive object={model} />
    </group>
  )
}

export default function SampleJar() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ fov: 28, position: [0, 0.46, 2.55], near: 0.1, far: 20 }}
      onCreated={({ gl: r }) => {
        r.setClearColor(0x000000, 0)
        r.toneMapping = THREE.ACESFilmicToneMapping
        r.toneMappingExposure = 1.05
      }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[-2.4, 3.4, 2.6]} intensity={2.1} color="#f4fbff" />
      <directionalLight position={[2.6, 1.2, 1.4]} intensity={0.8} color="#a9d3eb" />
      <pointLight position={[0, -1.6, 1.8]} intensity={3} color="#c2712f" distance={6} />
      <Suspense fallback={null}>
        <StudioEnv />
        <Jar />
      </Suspense>
    </Canvas>
  )
}
