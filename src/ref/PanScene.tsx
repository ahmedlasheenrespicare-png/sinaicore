import { Suspense, memo, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useKTX2, ContactShadows, Environment } from '@react-three/drei'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  N8AO,
  ToneMapping,
  SMAA,
} from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'
import { useSackPrint } from '../three/textures'
import { BASIS, useWovenPBR, fabricProps } from './fabric'

useGLTF.setDecoderPath('/draco/')

/* ------------------------------------------------------------------ *
 * North Sinai salt-pan act.
 *
 * One pinned canvas, four scroll beats:
 *   01 the camera falls out of the sky onto the pans
 *   02 it drops to the crust and a block of crystallised salt is cut out
 *   03 the block is washed and graded into three grain sizes, in the air
 *   04 the grains stream into the export sack and it fills
 * ------------------------------------------------------------------ */

/* progress is written by the DOM thread and read inside useFrame */
export const pan = { p: 0, ready: false }

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)
const sstep = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a || 1e-6))
  return t * t * (3 - 2 * t)
}
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const PORTRAIT = typeof window !== 'undefined' && window.innerWidth < 820
/* reduced motion: hold the shader-animated sparks to a still frame */
const REDUCED =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ------------------------------------------------------------------ *
 * HDRI environment: a locally authored equirect sky (public/hdr/pans.hdr)
 * is prefiltered into the scene environment, so every PBR surface picks up
 * the sun, the haze and the bounced light off the brine — and reflections
 * are what actually makes the salt read as gloss.
 * ------------------------------------------------------------------ */
function PanEnvironment() {
  return <Environment files="/hdr/pans.hdr" background={false} environmentIntensity={0.5} />
}

/* ------------------------------------------------------------------ *
 * Pan landscape: procedural aerial texture of brine basins
 * ------------------------------------------------------------------ */
function usePanTexture() {
  return useMemo(() => {
    const N = 1024
    const c = document.createElement('canvas')
    c.width = c.height = N
    const x = c.getContext('2d')!
    x.fillStyle = '#b9b096'
    x.fillRect(0, 0, N, N)

    const rnd = (k: number) => {
      const v = Math.sin(k * 127.1 + 311.7) * 43758.5453
      return v - Math.floor(v)
    }

    // irregular basins: a skewed 5 × 5 grid, each pan its own salinity
    const cols = [0, 0.19, 0.37, 0.55, 0.76, 1]
    const rows = [0, 0.22, 0.4, 0.58, 0.79, 1]
    let seed = 1
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        seed += 7.13
        const px = cols[i] * N + 5
        const py = rows[j] * N + 5
        const w = (cols[i + 1] - cols[i]) * N - 10
        const h = (rows[j + 1] - rows[j]) * N - 10
        const salinity = rnd(seed)
        // brine: from pale turquoise (young) to deep teal (concentrated)
        const g = x.createLinearGradient(px, py, px + w * 0.7, py + h)
        g.addColorStop(0, salinity > 0.55 ? '#6fb9c9' : '#8fcfd8')
        g.addColorStop(0.55, salinity > 0.55 ? '#3f93aa' : '#5fb0c1')
        g.addColorStop(1, salinity > 0.55 ? '#2f7b93' : '#78c2ce')
        x.fillStyle = g
        x.fillRect(px, py, w, h)

        x.save()
        x.beginPath()
        x.rect(px, py, w, h)
        x.clip()
        // salt crust: broad fields plus a fizz of crystal
        const patches = 4 + Math.round(salinity * 8)
        for (let k = 0; k < patches; k++) {
          const cx = px + rnd(seed + k) * w
          const cy = py + rnd(seed + k + 40) * h
          const rr = 26 + rnd(seed + k + 80) * (w * 0.42)
          const rg = x.createRadialGradient(cx, cy, 2, cx, cy, rr)
          rg.addColorStop(0, 'rgba(255,255,255,0.72)')
          rg.addColorStop(0.45, 'rgba(240,251,255,0.4)')
          rg.addColorStop(1, 'rgba(225,244,250,0)')
          x.fillStyle = rg
          x.beginPath()
          x.arc(cx, cy, rr, 0, Math.PI * 2)
          x.fill()
        }
        for (let k = 0; k < 380; k++) {
          x.fillStyle = `rgba(255,255,255,${0.18 + rnd(seed + k + 7) * 0.5})`
          const sx = px + rnd(seed + k + 3) * w
          const sy = py + rnd(seed + k + 9) * h
          x.fillRect(sx, sy, 1.6, 1.6)
        }
        x.restore()

        // earthen bunds around each pan
        x.fillStyle = '#7d6a4f'
        x.fillRect(px - 3.5, py - 3.5, w + 7, 7)
        x.fillRect(px - 3.5, py + h - 3.5, w + 7, 7)
        x.fillRect(px - 3.5, py - 3.5, 7, h + 7)
        x.fillRect(px + w - 3.5, py - 3.5, 7, h + 7)
        x.fillStyle = 'rgba(255,255,255,0.35)'
        x.fillRect(px + 3, py + 3, w - 6, 4)
      }
    }
    // access tracks across the pans
    x.strokeStyle = 'rgba(196,180,150,0.85)'
    x.lineWidth = 7
    x.beginPath()
    x.moveTo(0, N * 0.39)
    x.bezierCurveTo(N * 0.3, N * 0.36, N * 0.7, N * 0.44, N, N * 0.4)
    x.stroke()

    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.repeat.set(6, 6)
    t.anisotropy = 8
    return t
  }, [])
}

/* ------------------------------------------------------------------ *
 * Sparkle: additive points that twinkle with a per-point phase
 * ------------------------------------------------------------------ */
function Sparkles({ count = 1800, radius = 30, height = 2.2, y = 0.15 }: { count?: number; radius?: number; height?: number; y?: number }) {
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const phase = new Float32Array(count)
    const size = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2
      const r = Math.sqrt(Math.random()) * radius
      pos[i * 3] = Math.cos(a) * r
      pos[i * 3 + 1] = y + Math.random() * height
      pos[i * 3 + 2] = Math.sin(a) * r
      phase[i] = Math.random() * Math.PI * 2
      size[i] = 0.5 + Math.random() * 1.6
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1))
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
    return g
  }, [count, radius, height, y])

  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uTime: { value: 0 }, uOpacity: { value: 1 }, uColor: { value: new THREE.Color('#eaf7ff') } },
        vertexShader: /* glsl */ `
          attribute float aPhase;
          attribute float aSize;
          uniform float uTime;
          varying float vTw;
          void main() {
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vTw = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(uTime * 2.4 + aPhase * 6.2831), 2.0);
            gl_PointSize = clamp(aSize * (110.0 / max(1.0, -mv.z)) * vTw, 0.0, 5.5);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: /* glsl */ `
          uniform vec3 uColor;
          uniform float uOpacity;
          varying float vTw;
          void main() {
            vec2 d = gl_PointCoord - 0.5;
            float r = length(d);
            if (r > 0.5) discard;
            float core = smoothstep(0.5, 0.0, r);
            gl_FragColor = vec4(uColor, core * core * vTw * uOpacity);
          }
        `,
      }),
    [],
  )

  useFrame((s) => {
    if (!REDUCED) mat.uniforms.uTime.value = s.clock.elapsedTime
    mat.uniforms.uOpacity.value = 1 - sstep(0.34, 0.5, pan.p) * 0.85
  })

  return <points geometry={geo} material={mat} />
}

/* ------------------------------------------------------------------ *
 * The pans themselves — a huge plane with a rim wall for the horizon
 * ------------------------------------------------------------------ */
function Pans() {
  const tex = usePanTexture()
  const crust = useKTX2('/tex/crust_n.ktx2', BASIS)
  const crustN = useMemo(() => {
    const t = crust.clone()
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.repeat.set(70, 70)
    t.anisotropy = 8
    t.needsUpdate = true
    return t
  }, [crust])
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 200, 1, 1]} />
        <meshStandardMaterial
          map={tex}
          normalMap={crustN}
          normalScale={new THREE.Vector2(0.42, 0.42)}
          roughness={0.46}
          metalness={0.02}
          envMapIntensity={1.25}
        />
      </mesh>
      {/* wet sheen, a second layer so the surface shimmers as the camera moves */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.012, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshPhysicalMaterial
          color="#9fd8e6"
          roughness={0.06}
          metalness={0.05}
          transparent
          opacity={0.16}
          envMapIntensity={1.8}
        />
      </mesh>
    </group>
  )
}

/* ------------------------------------------------------------------ *
 * The salt block: a chiselled cube, cut out of the crust
 * ------------------------------------------------------------------ */
function useBlockGeometry() {
  return useMemo(() => {
    const g = new THREE.BoxGeometry(1, 1.15, 0.9, 4, 4, 4)
    const pos = g.attributes.position as THREE.BufferAttribute
    const v = new THREE.Vector3()
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i)
      // break each face into broad facets, then chip the top edge
      const n = Math.sin(v.x * 5.1 + v.z * 3.7) * 0.055 + Math.cos(v.y * 6.3 + v.x * 2.1) * 0.04
      v.x += n
      v.z -= n * 0.8
      if (v.y > 0.4) v.y -= Math.abs(Math.sin(v.x * 6.1 + v.z * 4.3)) * 0.13
      pos.setXYZ(i, v.x, v.y, v.z)
    }
    g.computeVertexNormals()
    return g
  }, [])
}

function SaltBlock() {
  const geo = useBlockGeometry()
  const ref = useRef<THREE.Group>(null)
  useFrame(() => {
    const g = ref.current
    if (!g) return
    const p = pan.p
    const carve = sstep(0.2, 0.34, p)
    const lift = sstep(0.3, 0.46, p)
    const grade = sstep(0.52, 0.6, p)
    g.visible = carve > 0.001 && grade < 0.999
    const scale = 0.005 + carve * 0.78
    g.scale.setScalar(scale * (1 - grade))
    g.position.set(PORTRAIT ? 0.1 : -0.55, 0.95 + lift * 2.2, 0)
    g.rotation.y = carve * 0.9 + lift * 1.4
    g.rotation.x = 0.06 + lift * 0.12
  })
  return (
    <group ref={ref}>
      {/* halite is translucent: light enters, scatters and leaves the edges.
          Transmission alone reads as glass, so the interior is faked with an
          inner glow shell and a thin-film clearcoat on the outer facets. */}
      <mesh geometry={geo} castShadow>
        <meshPhysicalMaterial
          color="#f4fcff"
          roughness={0.14}
          metalness={0.04}
          ior={1.5}
          transmission={0.34}
          thickness={0.7}
          attenuationColor="#5fb2cc"
          attenuationDistance={0.3}
          clearcoat={1}
          clearcoatRoughness={0.05}
          specularIntensity={1}
          envMapIntensity={1.9}
          emissive="#9fd8ea"
          emissiveIntensity={0.02}
          side={THREE.DoubleSide}
          flatShading
        />
      </mesh>
      {/* inner scatter shell — the pale core you see inside a salt lump */}
      <mesh geometry={geo} scale={0.74}>
        <meshStandardMaterial
          color="#dff4fb"
          emissive="#9ed9ec"
          emissiveIntensity={0.55}
          roughness={0.6}
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>
      {/* a faint light under it, so it reads as lifted, not stuck in the pan */}
      <pointLight position={[0, -0.5, 0]} intensity={2.4} distance={3.2} color="#bfe8f6" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.42, 0]}>
        <circleGeometry args={[0.72, 28]} />
        <meshBasicMaterial color="#0b2b3c" transparent opacity={0.28} depthWrite={false} />
      </mesh>
    </group>
  )
}

/* ------------------------------------------------------------------ *
 * Wash: a curtain of water the block passes through
 * ------------------------------------------------------------------ */
function Wash() {
  const ring = useRef<THREE.Group>(null)
  const curtain = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    const p = pan.p
    const on = sstep(0.42, 0.5, p) * (1 - sstep(0.58, 0.65, p))
    if (ring.current) {
      ring.current.visible = on > 0.01
      ring.current.rotation.y = s.clock.elapsedTime * 0.5
      ring.current.position.y = 0.95 + sstep(0.3, 0.46, p) * 2.2
      ring.current.position.x = PORTRAIT ? 0.1 : -0.55
      const sc = 0.6 + on * 0.5
      ring.current.scale.setScalar(sc)
    }
    if (curtain.current) {
      const m = curtain.current.material as THREE.MeshPhysicalMaterial
      m.opacity = on * 0.3
      curtain.current.visible = on > 0.01
      curtain.current.position.y = 0.95 + sstep(0.3, 0.46, p) * 2.2
      curtain.current.position.x = PORTRAIT ? 0.1 : -0.55
      curtain.current.scale.setScalar(1 - sstep(0.5, 0.66, p) * 0.25)
      const tex = m.map
      if (tex) tex.offset.y = -s.clock.elapsedTime * 1.6
    }
  })

  const waterTex = useMemo(() => {
    const N = 128
    const c = document.createElement('canvas')
    c.width = N
    c.height = N
    const x = c.getContext('2d')!
    x.fillStyle = 'rgba(255,255,255,0)'
    x.fillRect(0, 0, N, N)
    for (let i = 0; i < 64; i++) {
      const px = Math.random() * N
      const py = Math.random() * N
      const h = 10 + Math.random() * 26
      const g = x.createLinearGradient(px, py, px, py + h)
      g.addColorStop(0, 'rgba(255,255,255,0.95)')
      g.addColorStop(1, 'rgba(240,252,255,0)')
      x.fillStyle = g
      x.fillRect(px, py, 2.6, h)
    }
    // fade the veil out at the top and bottom of the sheet
    x.globalCompositeOperation = 'destination-in'
    const fade = x.createLinearGradient(0, 0, 0, N)
    fade.addColorStop(0, 'rgba(0,0,0,0)')
    fade.addColorStop(0.18, 'rgba(0,0,0,0.85)')
    fade.addColorStop(0.82, 'rgba(0,0,0,0.85)')
    fade.addColorStop(1, 'rgba(0,0,0,0)')
    x.fillStyle = fade
    x.fillRect(0, 0, N, N)
    const t = new THREE.CanvasTexture(c)
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.repeat.set(3.2, 1)
    return t
  }, [])

  return (
    <>
      <group ref={ring} visible={false}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          const a = (i / 10) * Math.PI * 2
          return (
            <mesh key={i} position={[Math.cos(a) * 1.2, -0.35 + (i % 3) * 0.22, Math.sin(a) * 1.2]} scale={[0.6, 2.4, 0.6]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshPhysicalMaterial color="#eafaff" roughness={0.05} metalness={0} transparent opacity={0.55} />
            </mesh>
          )
        })}
      </group>
      <mesh ref={curtain} visible={false}>
        <cylinderGeometry args={[1.2, 1.42, 2.9, 44, 1, true]} />
        <meshPhysicalMaterial
          map={waterTex}
          color="#dff6ff"
          transparent
          opacity={0}
          roughness={0.1}
          metalness={0}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </>
  )
}

/* ------------------------------------------------------------------ *
 * Grading: the grains split into coarse / medium / fine layers
 * ------------------------------------------------------------------ */
const GRADES = [
  { size: 0.062, tint: '#f9feff', x: -1.55, y: 2.3, n: 42 },
  { size: 0.046, tint: '#eefaff', x: -1.1, y: 2.72, n: 48 },
  { size: 0.032, tint: '#e4f5fe', x: -0.62, y: 3.05, n: 54 },
]

function Grains() {
  const ref = useRef<THREE.Group>(null)
  useFrame((s) => {
    const p = pan.p
    const on = sstep(0.52, 0.62, p) * (1 - sstep(0.7, 0.8, p))
    // the three heaps drift together into the pour column above the sack
    const pour = sstep(0.58, 0.72, p)
    const g = ref.current
    if (!g) return
    g.visible = on > 0.01
    g.children.forEach((child, gi) => {
      const spec = GRADES[gi]
      const t = s.clock.elapsedTime
      child.children.forEach((m, i) => {
        const a = (i / spec.n) * Math.PI * 2 + gi
        const wob = Math.sin(t * 0.9 + i) * 0.05
        const cx = lerp(spec.x, PORTRAIT ? 0.1 : -0.72, pour)
        m.position.set(
          cx + Math.cos(a) * (0.1 + (i % 4) * 0.045) * (1 - pour * 0.7) + wob,
          spec.y + Math.sin(a * 2) * 0.12 + (i % 5) * 0.035 + Math.sin(t + i) * 0.03,
          Math.sin(a) * (0.1 + (i % 3) * 0.05) * (1 - pour * 0.7),
        )
      })
      child.scale.setScalar(on)
    })
  })

  return (
    <group ref={ref}>
      {GRADES.map((spec, gi) => (
        <group key={gi}>
          {Array.from({ length: spec.n }).map((_, i) => (
            <mesh key={i} scale={spec.size * 9}>
              <dodecahedronGeometry args={[0.16, 0]} />
              <meshStandardMaterial color={spec.tint} roughness={0.55} metalness={0.05} envMapIntensity={1.2} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ *
 * The sack the grains end up in
 * ------------------------------------------------------------------ */
function Pour() {
  const ref = useRef<THREE.Points>(null)
  const geo = useMemo(() => {
    const n = 260
    const g = new THREE.BufferGeometry()
    const p = new Float32Array(n * 3)
    const seed = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      p[i * 3] = (Math.random() - 0.5) * 1.1
      p[i * 3 + 1] = Math.random() * 3
      p[i * 3 + 2] = (Math.random() - 0.5) * 1.1
      seed[i] = Math.random()
    }
    g.setAttribute('position', new THREE.BufferAttribute(p, 3))
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1))
    return g
  }, [])
  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { uTime: { value: 0 }, uOn: { value: 0 } },
        vertexShader: /* glsl */ `
          attribute float aSeed;
          uniform float uTime;
          uniform float uOn;
          varying float vA;
          void main() {
            vec3 p = position;
            float fall = fract(aSeed + uTime * (0.55 + aSeed * 0.4));
            p.y = 3.1 - fall * 3.0;
            p.x *= 0.35 + fall * 0.75;
            p.z *= 0.35 + fall * 0.75;
            vA = uOn * smoothstep(0.0, 0.15, fall) * (1.0 - smoothstep(0.85, 1.0, fall));
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = clamp(3.4 * (90.0 / max(1.0, -mv.z)), 0.0, 4.5);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: /* glsl */ `
          varying float vA;
          void main() {
            vec2 d = gl_PointCoord - 0.5;
            if (length(d) > 0.5) discard;
            gl_FragColor = vec4(0.99, 1.0, 1.0, vA * 0.9);
          }
        `,
      }),
    [],
  )
  useFrame((s) => {
    if (!REDUCED) mat.uniforms.uTime.value = s.clock.elapsedTime
    const on = sstep(0.74, 0.82, pan.p) * (1 - sstep(0.95, 1, pan.p))
    mat.uniforms.uOn.value = on
    if (ref.current) {
      const fill = sstep(0.8, 0.97, pan.p)
      ref.current.visible = on > 0.01
      ref.current.position.set(PORTRAIT ? 0.1 : -0.72, PORTRAIT ? 2.8 : 0.42 + fill * 0.16, 1.1)
    }
  })
  return <points ref={ref} geometry={geo} material={mat} visible={false} />
}

function ExportSack() {
  const { scene } = useGLTF('/models/sack-50kg.glb')
  const art = useSackPrint()
  // the woven maps tile at the tape scale of a real 50 kg PP sack
  const woven = useWovenPBR([4.5, 7], 1.5)
  const ref = useRef<THREE.Group>(null)

  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      if (n.includes('panel')) {
        mesh.material = new THREE.MeshPhysicalMaterial({
          map: art,
          roughness: 0.7,
          clearcoat: 0.35,
          clearcoatRoughness: 0.4,
          envMapIntensity: 1,
        })
      } else if (n.includes('crimp')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.7, envMapIntensity: 1 })
      } else {
        mesh.material = new THREE.MeshPhysicalMaterial(fabricProps(woven))
      }
      mesh.castShadow = true
      mesh.receiveShadow = true
    })
    return m
  }, [scene, art, woven])

  useFrame(() => {
    const g = ref.current
    if (!g) return
    const p = pan.p
    const arrive = sstep(0.68, 0.8, p)
    const fill = sstep(0.8, 0.97, p)
    g.visible = arrive > 0.001
    g.position.set(PORTRAIT ? 0.1 : -0.72, PORTRAIT ? 2.45 : 0.12 + fill * 0.16, 1.1)
    g.scale.setScalar((PORTRAIT ? 1.0 : 1.2) + arrive * (PORTRAIT ? 0.35 : 0.35))
    // the sack is limp until the grains land, then rounds out
    g.scale.y = ((PORTRAIT ? 1.0 : 1.2) + arrive * (PORTRAIT ? 0.35 : 0.35)) * (0.5 + fill * 0.54)
    g.rotation.y = 0.5 + arrive * 0.5
  })

  return (
    <group ref={ref} visible={false}>
      <primitive object={model} />
    </group>
  )
}

/* ------------------------------------------------------------------ *
 * Camera: out of the sky, down to the crust, up with the block
 * ------------------------------------------------------------------ */
function Rig() {
  const { camera } = useThree()
  const look = useRef(new THREE.Vector3())
  useFrame((_, dt) => {
    const p = pan.p
    // [progress, eye x/y/z, look x/y/z]
    const keys = [
      [0, 9, 27, 23, 0, 1.2, 0],
      [0.12, 6, 15, 15, 0, 1.0, 0],
      [0.24, 2.2, 6.6, 8.2, 0, 1.0, 0],
      [0.34, 1.8, 2.6, 4.4, 0, 1.15, 0],
      [0.42, 2.0, 2.9, 5.4, 0, 2.3, 0],
      [0.5, 2.2, 3.1, 6.2, 0, 3.0, 0],
      [0.6, 2.2, 3.3, 5.6, 0, 2.3, 0],
      [0.72, 2.4, 3.4, 4.8, -0.5, 1.25, 0.8],
      [0.86, 1.8, 3.0, 4.2, -0.66, 0.95, 1.0],
      [1, 1.5, 2.9, 4.0, -0.7, 0.85, 1.1],
    ]
    let ex = keys[0][1], ey = keys[0][2], ez = keys[0][3]
    let tx = keys[0][4], ty = keys[0][5], tz = keys[0][6]
    for (let i = 0; i < keys.length - 1; i++) {
      const k0 = keys[i]
      const k1 = keys[i + 1]
      const t = sstep(k0[0], k1[0], p)
      ex = lerp(ex, lerp(k0[1], k1[1], t), 1)
      ey = k0[2] + (k1[2] - k0[2]) * t
      ez = k0[3] + (k1[3] - k0[3]) * t
      tx = k0[4] + (k1[4] - k0[4]) * t
      ty = k0[5] + (k1[5] - k0[5]) * t
      tz = k0[6] + (k1[6] - k0[6]) * t
      if (p <= k1[0]) break
    }
    const portrait = window.innerWidth < 820
    const k = portrait ? 2.2 : 1
    // portrait: drop the aim so the action rides above the copy — then
    // raise it again for the sack so the bag is not cropped at the top
    const aimDown = portrait ? lerp(2.9, 0.15, sstep(0.72, 0.93, p)) : 0
    const target = new THREE.Vector3(tx, ty - aimDown, tz)
    camera.position.x += (ex * k - camera.position.x) * Math.min(1, dt * 3.2)
    camera.position.y += (ey * (portrait ? 1.15 : 1) - camera.position.y) * Math.min(1, dt * 3.2)
    camera.position.z += (ez * k - camera.position.z) * Math.min(1, dt * 3.2)
    look.current.lerp(target, Math.min(1, dt * 3.4))
    camera.lookAt(look.current)
  })
  return null
}

/* ------------------------------------------------------------------ *
 * Sky + sun
 * ------------------------------------------------------------------ */
function Sky() {
  const { scene } = useThree()
  useEffect(() => {
    const N = 512
    const c = document.createElement('canvas')
    c.width = N
    c.height = N
    const x = c.getContext('2d')!
    const g = x.createLinearGradient(0, 0, 0, N)
    g.addColorStop(0, '#1d5c86')
    g.addColorStop(0.3, '#3f8db4')
    g.addColorStop(0.5, '#79bdd4')
    g.addColorStop(0.62, '#c6e4ec')
    g.addColorStop(0.68, '#eef6f4')
    g.addColorStop(0.74, '#dfe9e2')
    g.addColorStop(1, '#c9d8d8')
    x.fillStyle = g
    x.fillRect(0, 0, N, N)
    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(240, 32, 20),
      new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, depthWrite: false }),
    )
    scene.add(sphere)
    const old = scene.background
    scene.background = null
    return () => {
      scene.remove(sphere)
      sphere.geometry.dispose()
      ;(sphere.material as THREE.Material).dispose()
      tex.dispose()
      scene.background = old
    }
  }, [scene])
  return null
}

function Sun() {
  const ref = useRef<THREE.Sprite>(null)
  const tex = useMemo(() => {
    const N = 256
    const c = document.createElement('canvas')
    c.width = c.height = N
    const x = c.getContext('2d')!
    const g = x.createRadialGradient(N / 2, N / 2, 2, N / 2, N / 2, N / 2)
    g.addColorStop(0, 'rgba(255,255,250,1)')
    g.addColorStop(0.16, 'rgba(255,246,224,0.85)')
    g.addColorStop(0.5, 'rgba(255,226,180,0.22)')
    g.addColorStop(1, 'rgba(255,220,170,0)')
    x.fillStyle = g
    x.fillRect(0, 0, N, N)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  }, [])
  useFrame((s) => {
    if (ref.current) {
      ref.current.position.set(-52, 34, -96)
      const sc = 8.5 + Math.sin(s.clock.elapsedTime * 0.4) * 0.3
      ref.current.scale.setScalar(sc)
    }
  })
  return (
    <sprite ref={ref}>
      <spriteMaterial map={tex} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
    </sprite>
  )
}

/* ------------------------------------------------------------------ *
 * Scene + canvas
 * ------------------------------------------------------------------ */
function Scene() {
  return (
    <>
      <Sky />
      <Sun />
      <Suspense fallback={null}>
        <PanEnvironment />
      </Suspense>
      <fog attach="fog" args={['#cbe2ea', 60, 240]} />
      {/* the HDRI carries most of the light; the sun adds the hard specular
          streak and the shadow the contact pass needs */}
      <ambientLight intensity={0.18} />
      <hemisphereLight args={['#eaf7fb', '#c8bda2', 0.3]} />
      <directionalLight
        position={[-16, 26, -34]}
        intensity={2.3}
        color="#fff3e0"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        shadow-camera-near={1}
        shadow-camera-far={60}
        shadow-bias={-0.0012}
        shadow-normalBias={0.02}
      />
      <Pans />
      <Sparkles />
      <SaltBlock />
      <Wash />
      <Grains />
      <Pour />
      <ExportSack />
      {/* grounding: soft contact shadow under the sack, refreshed as it fills */}
      <ContactShadows
        position={[PORTRAIT ? 0.1 : -0.72, 0.02, 1.1]}
        scale={6}
        blur={2.8}
        far={2.4}
        opacity={0.35}
        resolution={256}
        color="#0a2333"
        frames={Infinity}
      />
      <Rig />
    </>
  )
}

/* ------------------------------------------------------------------ *
 * Post: depth of field on the action, gentle bloom on the sun and the
 * water veil, occlusion in the pan ruts, ACES tone map, SMAA on top.
 * ------------------------------------------------------------------ */
function Post() {
  return (
    <EffectComposer multisampling={0} enableNormalPass={false}>
      <N8AO aoRadius={1.8} intensity={0.7} distanceFalloff={1} halfRes quality="performance" />
      {/* focus rides with the action: world units, so the block and the sack
          stay sharp while the far pans and the near foreground fall away */}
      <DepthOfField
        worldFocusDistance={6.5}
        worldFocusRange={34}
        bokehScale={0.8}
        resolutionScale={0.7}
      />
      {/* only genuine highlights (sun disk, water veil, crystal caustics) bloom */}
      <Bloom mipmapBlur intensity={0.3} luminanceThreshold={1.15} luminanceSmoothing={0.12} />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      <SMAA />
    </EffectComposer>
  )
}

export default memo(function PanScene({
  onReady,
  active = true,
}: {
  onReady: () => void
  active?: boolean
}) {
  useEffect(() => {
    const t = setTimeout(onReady, 200)
    return () => clearTimeout(t)
  }, [onReady])

  // post only on real GPUs: on a software rasteriser it costs more than it gives
  const [post, setPost] = useState(true)
  useEffect(() => {
    const gl = document.createElement('canvas').getContext('webgl2') as WebGL2RenderingContext | null
    if (!gl) {
      setPost(false)
      return
    }
    const dbg = gl.getExtension('WEBGL_debug_renderer_info')
    const name = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : ''
    const soft = /swiftshader|software|llvmpipe|basic render/i.test(name) && !(window as any).__PAN_FORCE_POST
    const mobile = window.innerWidth < 820
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setPost(!soft && !mobile && !reduced)
    gl.getExtension('WEBGL_lose_context')?.loseContext()
  }, [])

  return (
    <Canvas
      dpr={[1, 1.75]}
      frameloop={active ? 'always' : 'never'}
      shadows
      gl={{ antialias: !post, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [9, 27, 23], fov: 44, near: 0.05, far: 400 }}
      onCreated={({ gl }) => {
        // tone mapping runs in the post chain when it is on, otherwise here
        gl.toneMapping = post ? THREE.NoToneMapping : THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 0.9
        gl.setClearColor(0x000000, 0)
      }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Scene />
      {post && <Post />}
    </Canvas>
  )
})
