import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, ContactShadows, Preload, AdaptiveDpr, PerformanceMonitor } from '@react-three/drei'
import { gl, smooth, sstep, remap, clamp01 } from './state'
import { createHaliteMaterial } from './materials/HaliteMaterial'
import { destinations, ports } from '../data/content'

useGLTF.setDecoderPath('/draco/')

/* ------------------------------------------------------------------ *
 * Environment: a hand-built studio HDR-ish cube, so no remote asset
 * ------------------------------------------------------------------ */
function StudioEnvironment() {
  const { scene, gl: renderer } = useThree()
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(renderer)
    pmrem.compileEquirectangularShader()
    const c = document.createElement('canvas')
    c.width = 1024
    c.height = 512
    const ctx = c.getContext('2d')!
    const g = ctx.createLinearGradient(0, 0, 0, 512)
    g.addColorStop(0, '#0a1416')
    g.addColorStop(0.42, '#1d2a2b')
    g.addColorStop(0.52, '#3d5a58')
    g.addColorStop(0.62, '#182423')
    g.addColorStop(1, '#05090a')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 1024, 512)
    // soft studio strip lights
    const bars = [
      { x: 120, y: 150, w: 300, h: 26, a: 0.5 },
      { x: 600, y: 110, w: 210, h: 16, a: 0.35 },
      { x: 780, y: 210, w: 150, h: 60, a: 0.18 },
    ]
    for (const b of bars) {
      const rg = ctx.createRadialGradient(b.x + b.w / 2, b.y + b.h / 2, 2, b.x + b.w / 2, b.y + b.h / 2, b.w * 0.8)
      rg.addColorStop(0, `rgba(220,255,246,${b.a})`)
      rg.addColorStop(1, 'rgba(180,240,230,0)')
      ctx.fillStyle = rg
      ctx.fillRect(b.x - b.w * 0.4, b.y - b.h, b.w * 1.8, b.h * 3)
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
  }, [scene, renderer])
  return null
}

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */
function useAct() {
  return (a: number, b: number, c = 0, d = 1) => remap(gl.act, a, b, c, d)
}

function Glow({ color = '#7fd9c4', intensity = 1, size = 4 }: { color?: string; intensity?: number; size?: number }) {
  return (
    <mesh position={[0, 0.1, -1.1]} scale={size}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.045 * intensity} depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  )
}

/* ------------------------------------------------------------------ *
 * 01 — Halite crystal cluster
 * ------------------------------------------------------------------ */
function CrystalChapter() {
  const group = useRef<THREE.Group>(null)
  const inner = useRef<THREE.Group>(null)
  const mat = useMemo(() => createHaliteMaterial(), [])
  const { scene } = useGLTF('/models/crystal.glb')
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      if (mesh.name.includes('halite')) {
        mesh.material = mat
      } else {
        mesh.material = new THREE.MeshStandardMaterial({
          color: '#241d18',
          roughness: 0.94,
          metalness: 0.04,
          envMapIntensity: 0.5,
        })
      }
    })
    return m
  }, [scene, mat])

  const rot = useRef({ x: 0, y: 0 })
  useFrame((state, dt) => {
    if (!group.current || !inner.current) return
    const a = gl.act
    // visible during 0.0 → 0.26, dissolving out by 0.31
    const vis = 1 - sstep(0.2, 0.26, a)
    group.current.visible = vis > 0.01
    if (!group.current.visible) return

    // rotation follows scroll (0 → 2.4 rad) plus pointer parallax
    const spin = sstep(0.0, 0.3, a) * Math.PI * 1.15
    rot.current.y = smooth(rot.current.y, spin + gl.px * 0.32, 5, dt)
    rot.current.x = smooth(rot.current.x, -0.08 + gl.py * 0.14, 4, dt)
    inner.current.rotation.set(rot.current.x, rot.current.y, 0)

    // scroll momentum tips the cluster back, like a turntable picking up speed
    group.current.position.y = smooth(group.current.position.y, 0.02 - a * 0.1, 4, dt)
    const s = 1.02 - sstep(0, 0.28, a) * 0.12
    group.current.scale.setScalar(s)

    mat.uniforms.uTime.value = state.clock.elapsedTime
    mat.uniforms.uPulse.value = smooth(mat.uniforms.uPulse.value, gl.energy, 6, dt)
    mat.uniforms.uOpacity.value = 0.9 * vis
  })

  return (
    <group ref={group}>
      <group ref={inner}>
        <primitive object={model} />
      </group>
      <Glow size={5.5} intensity={1.2} />
    </group>
  )
}

/* ------------------------------------------------------------------ *
 * 02 — Tablets + grain field (morph from the crystal shards)
 * ------------------------------------------------------------------ */
function GrainField({ count = 300 }: { count?: number }) {
  const points = useRef<THREE.Points>(null)
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const seed = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      // shell around the tablets so grains read as suspended dust/salt
      const r = 1.5 + Math.random() * 2.2
      const th = Math.random() * Math.PI * 2
      const ph = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th)
      pos[i * 3 + 1] = r * Math.cos(ph) * 0.72
      pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th)
      seed[i] = Math.random()
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1))
    return g
  }, [count])

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 }, uSize: { value: 1 } },
        vertexShader: /* glsl */ `
          attribute float aSeed;
          uniform float uTime;
          uniform float uSize;
          varying float vSeed;
          void main() {
            vSeed = aSeed;
            vec3 p = position;
            p.y += sin(uTime * 0.32 + aSeed * 20.0) * 0.06;
            p.x += cos(uTime * 0.21 + aSeed * 13.0) * 0.05;
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_Position = projectionMatrix * mv;
            gl_PointSize = (1.2 + aSeed * 2.4) * uSize * (22.0 / -mv.z);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float uOpacity;
          varying float vSeed;
          void main() {
            vec2 d = gl_PointCoord - 0.5;
            float a = smoothstep(0.5, 0.0, length(d));
            vec3 col = mix(vec3(0.55, 0.95, 0.88), vec3(1.0), vSeed);
            gl_FragColor = vec4(col, a * uOpacity * (0.1 + vSeed * 0.22));
          }
        `,
      }),
    [],
  )

  useFrame((s, dt) => {
    if (!points.current) return
    const vis = sstep(0.24, 0.34, gl.act) * (1 - sstep(0.52, 0.6, gl.act))
    points.current.visible = vis > 0.01
    material.uniforms.uTime.value = s.clock.elapsedTime
    material.uniforms.uOpacity.value = smooth(material.uniforms.uOpacity.value, vis, 5, dt)
    points.current.rotation.y += dt * 0.02
  })

  return <points ref={points} geometry={geom} material={material} frustumCulled={false} />
}

function TabletChapter({ onHotspots }: { onHotspots: (show: boolean) => void }) {
  const group = useRef<THREE.Group>(null)
  const spin = useRef(0)
  const { scene } = useGLTF('/models/tablets.glb')
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      mesh.material = new THREE.MeshPhysicalMaterial({
        color: '#eef2ef',
        roughness: 0.62,
        metalness: 0,
        clearcoat: 0.4,
        clearcoatRoughness: 0.5,
        sheen: 0.5,
        sheenColor: new THREE.Color('#bff2e6'),
        envMapIntensity: 1.1,
      })
    })
    return m
  }, [scene])

  useFrame((s, dt) => {
    if (!group.current) return
    const vis = sstep(0.25, 0.32, gl.act) * (1 - sstep(0.5, 0.56, gl.act))
    group.current.visible = vis > 0.01
    onHotspots(gl.act > 0.29 && gl.act < 0.53)
    if (!group.current.visible) return
    spin.current += gl.reduced ? dt * 0.02 : dt * (0.16 + gl.vel * 0.8)
    const target = spin.current + gl.px * 0.4
    group.current.rotation.y = smooth(group.current.rotation.y, target, 4, dt)
    group.current.rotation.x = smooth(group.current.rotation.x, 0.12 - gl.py * 0.2, 3, dt)
    const enter = sstep(0.25, 0.34, gl.act)
    group.current.scale.setScalar(0.82 + enter * 0.1)
    group.current.position.y = -0.12 + (gl.reduced ? 0 : Math.sin(s.clock.elapsedTime * 0.6) * 0.012)
  })

  return (
    <group ref={group}>
      <primitive object={model} />
      <GrainField />
      <Glow size={4.2} intensity={0.9} />
    </group>
  )
}

/* ------------------------------------------------------------------ *
 * 03 — Jumbo bag with printed brand panel
 * ------------------------------------------------------------------ */
function BrandTexture() {
  return useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 1024
    c.height = 1024
    const x = c.getContext('2d')!
    x.fillStyle = '#e9e7dc'
    x.fillRect(0, 0, 1024, 1024)
    // subtle woven tint
    for (let i = 0; i < 1024; i += 8) {
      x.fillStyle = i % 16 === 0 ? 'rgba(0,0,0,0.018)' : 'rgba(255,255,255,0.03)'
      x.fillRect(0, i, 1024, 4)
      x.fillRect(i, 0, 4, 1024)
    }
    // brand block
    x.fillStyle = '#0c2222'
    x.fillRect(0, 0, 1024, 1024)
    x.fillStyle = '#e9e7dc'
    x.fillRect(48, 48, 928, 928)

    x.fillStyle = '#0c2222'
    x.font = '700 132px Archivo, Helvetica, Arial, sans-serif'
    x.textAlign = 'center'
    x.textBaseline = 'middle'
    x.fillText('SINAI', 512, 400)
    x.fillText('CORE', 512, 530)
    x.strokeStyle = '#0c2222'
    x.lineWidth = 6
    x.beginPath()
    x.moveTo(300, 620)
    x.lineTo(724, 620)
    x.stroke()

    x.font = '500 46px Archivo, Helvetica, Arial, sans-serif'
    x.fillStyle = '#1f4a45'
    x.fillText('NORTH SINAI  ·  EGYPT', 512, 690)
    x.fillText('HALITE  ·  NaCl 99.5%', 512, 752)

    x.font = '400 34px monospace'
    x.fillStyle = '#3c5a55'
    x.fillText('FIBC 1 MT  ·  SWL 5:1', 512, 820)
    x.fillText('LOT  AR-2411-0087', 512, 868)

    // barcode
    let bx = 340
    for (let i = 0; i < 42; i++) {
      const w = (i % 3) + 1
      x.fillStyle = i % 2 ? '#0c2222' : '#e9e7dc'
      x.fillRect(bx, 900, w * 2, 70)
      bx += w * 2 + 3
    }
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 8
    return t
  }, [])
}

function BagChapter() {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/models/jumbo-bag.glb')
  const brand = BrandTexture()
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      if (n.includes('brand_panel')) {
        mesh.material = new THREE.MeshStandardMaterial({
          map: brand,
          roughness: 0.78,
          metalness: 0,
          transparent: true,
          envMapIntensity: 0.8,
        })
      } else if (n.includes('fibc_body')) {
        mesh.material = new THREE.MeshStandardMaterial({
          color: '#e7e4d8',
          roughness: 0.82,
          metalness: 0,
          envMapIntensity: 0.9,
          side: THREE.DoubleSide,
        })
      } else if (n.includes('seams')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#c3bfae', roughness: 0.9 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#cfc4a4', roughness: 0.72 })
      }
    })
    return m
  }, [scene, brand])

  const rot = useRef(0)
  useFrame((s, dt) => {
    if (!group.current) return
    const vis = sstep(0.55, 0.64, gl.act) * (1 - sstep(0.86, 0.93, gl.act))
    group.current.visible = vis > 0.01
    if (!group.current.visible) return
    // one slow, deliberate revolution to reveal the print + seams
    const reveal = sstep(0.56, 0.92, gl.act)
    rot.current = smooth(rot.current, reveal * Math.PI * 1.85 + gl.px * 0.18, 3, dt)
    group.current.rotation.y = rot.current
    group.current.rotation.x = smooth(group.current.rotation.x, -0.03 + gl.py * 0.06, 3, dt)
    group.current.position.y = -0.06 + (gl.reduced ? 0 : Math.sin(s.clock.elapsedTime * 0.5) * 0.008)
    const enter = sstep(0.55, 0.68, gl.act)
    group.current.scale.setScalar(0.8 + enter * 0.06)
  })

  return (
    <group ref={group}>
      <primitive object={model} />
      <Glow size={4.6} intensity={0.8} />
    </group>
  )
}

/* ------------------------------------------------------------------ *
 * 04 — Export globe
 * ------------------------------------------------------------------ */
const R = 1.28

function llToVec(lat: number, lon: number, r = R) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta))
}

function Arc({ from, to, lifted = 0.45, color = '#7fd9c4', width = 0.007 }: { from: THREE.Vector3; to: THREE.Vector3; lifted?: number; color?: string; width?: number }) {
  const { geometry, drawCount } = useMemo(() => {
    const mid = from.clone().add(to).multiplyScalar(0.5)
    const dist = from.distanceTo(to)
    mid.normalize().multiplyScalar(R + dist * lifted)
    const curve = new THREE.QuadraticBezierCurve3(from, mid, to)
    const seg = 90
    const pts = curve.getPoints(seg)
    const g = new THREE.BufferGeometry()
    const pos = new Float32Array(pts.length * 3)
    const prog = new Float32Array(pts.length)
    pts.forEach((p, i) => {
      pos[i * 3] = p.x
      pos[i * 3 + 1] = p.y
      pos[i * 3 + 2] = p.z
      prog[i] = i / (pts.length - 1)
    })
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aProg', new THREE.BufferAttribute(prog, 1))
    g.setDrawRange(0, pts.length)
    return { geometry: g, drawCount: pts.length }
  }, [from, to, lifted])

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uGrow: { value: 0 },
          uColor: { value: new THREE.Color(color) },
        },
        vertexShader: /* glsl */ `
          attribute float aProg;
          varying float vProg;
          void main() {
            vProg = aProg;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float uTime;
          uniform float uGrow;
          uniform vec3 uColor;
          varying float vProg;
          void main() {
            if (vProg > uGrow) discard;
            // bright head, fading tail
            float head = smoothstep(uGrow - 0.22, uGrow, vProg);
            float tail = smoothstep(0.0, 0.35, vProg);
            float base = 0.1 + 0.22 * tail;
            // travelling packet
            float pulse = exp(-pow((fract(uTime * 0.28) - vProg) * 9.0, 2.0));
            vec3 col = uColor * (base + head * 1.4 + pulse * 1.8);
            float a = base + head * 0.9 + pulse * 0.9;
            gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
          }
        `,
      }),
    [color],
  )

  useFrame((s, dt) => {
    material.uniforms.uTime.value = s.clock.elapsedTime
    material.uniforms.uGrow.value = smooth(material.uniforms.uGrow.value, sstep(0.74, 0.92, gl.act), 2.2, dt)
  })

  void drawCount
  const line = useMemo(() => {
    const l = new THREE.Line(geometry, material)
    l.frustumCulled = false
    return l
  }, [geometry, material])
  return <primitive object={line} />
}

function SurfaceDot({ pos, color = '#a8f0dc', size = 0.014, phase = 0 }: { pos: THREE.Vector3; color?: string; size?: number; phase?: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    if (!ref.current) return
    const t = s.clock.elapsedTime
    const k = 1 + Math.sin(t * 2 + phase) * 0.28
    ref.current.scale.setScalar(k * sstep(0.78, 0.9, gl.act))
  })
  return (
    <mesh ref={ref} position={pos}>
      <sphereGeometry args={[size, 10, 10]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  )
}

function GlobeChapter() {
  const group = useRef<THREE.Group>(null)
  const spin = useRef(0)
  const { scene } = useGLTF('/models/globe.glb')
  const model = useMemo(() => {
    const m = scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      if (mesh.name.includes('ocean')) {
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#0a1f22',
          roughness: 0.52,
          metalness: 0.18,
          clearcoat: 0.35,
          clearcoatRoughness: 0.5,
          envMapIntensity: 0.8,
        })
      } else {
        mesh.material = new THREE.MeshBasicMaterial({ color: '#6fd8c4', toneMapped: false, transparent: true, opacity: 0.92 })
      }
    })
    return m
  }, [scene])

  // routes: both ports to every destination
  const arcs = useMemo(() => {
    const out: { from: THREE.Vector3; to: THREE.Vector3; lifted: number }[] = []
    const origin = llToVec(ports[0].lat, ports[0].lon)
    const suez = llToVec(ports[1].lat, ports[1].lon)
    for (const d of destinations) {
      const to = llToVec(d.lat, d.lon)
      out.push({ from: origin, to, lifted: 0.34 + (d.id.length % 3) * 0.05 })
    }
    // the internal leg: Arish rotates through Suez before heading east
    out.push({ from: origin, to: suez, lifted: 0.06 })
    return out
  }, [])

  useFrame((s, dt) => {
    if (!group.current) return
    const vis = sstep(0.9, 0.97, gl.act)
    group.current.visible = vis > 0.01
    if (!group.current.visible) return
    // start with Sinai facing the camera, then rotate east towards Suez / Asia
    const start = -1.9
    spin.current = smooth(spin.current, start + sstep(0.9, 1.0, gl.act) * 0.7 + gl.px * 0.35, 2.5, dt)
    group.current.rotation.y = spin.current + (gl.reduced ? 0 : s.clock.elapsedTime * 0.035)
    group.current.rotation.x = 0.22 + gl.py * 0.12
    group.current.scale.setScalar(0.86 + vis * 0.05)
  })

  const origin = useMemo(() => llToVec(ports[0].lat, ports[0].lon, R * 1.002), [])
  const suez = useMemo(() => llToVec(ports[1].lat, ports[1].lon, R * 1.002), [])
  const dests = useMemo(() => destinations.map((d) => llToVec(d.lat, d.lon, R * 1.002)), [])

  return (
    <group ref={group}>
      <primitive object={model} />
      {arcs.map((a, i) => (
        <Arc key={i} from={a.from} to={a.to} lifted={a.lifted} color={i === arcs.length - 1 ? '#e0c79a' : '#7fd9c4'} />
      ))}
      <SurfaceDot pos={origin} color="#ffffff" size={0.013} />
      <SurfaceDot pos={suez} color="#e0c79a" size={0.011} phase={1.4} />
      {dests.map((p, i) => (
        <SurfaceDot key={i} pos={p} color="#a8f0dc" size={0.008} phase={i} />
      ))}
      {/* atmosphere */}
      <mesh scale={1.075}>
        <sphereGeometry args={[R, 48, 32]} />
        <meshBasicMaterial color="#2f9d92" transparent opacity={0.05} side={THREE.BackSide} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  )
}

/* ------------------------------------------------------------------ *
 * Camera rig — one dolly move across the whole act
 * ------------------------------------------------------------------ */
function Rig() {
  const { camera, size } = useThree()
  const target = useRef(new THREE.Vector3(0, 0, 0))
  useFrame((_, dt) => {
    const a = gl.act
    // framing per chapter: [act, camera height, distance]
    const key: [number, number, number][] = [
      [0, 0.5, 5.5],
      [0.2, 0.3, 5.2],
      [0.42, 0.05, 5.0],
      [0.58, 0.02, 5.6],
      [0.86, 0.08, 5.4],
      [1, 0.05, 5.0],
    ]
    let z = key[0][2]
    let y = key[0][1]
    for (let i = 0; i < key.length - 1; i++) {
      const [a0, y0, z0] = key[i]
      const [a1, y1, z1] = key[i + 1]
      const t = sstep(a0, a1, a)
      y = y0 + (y1 - y0) * t
      z = z0 + (z1 - z0) * t
    }
    // on desktop the copy sits on the right, so the object is composed left
    const wide = size.width > 980
    const shift = wide ? (size.width > 1400 ? 0.62 : 0.45) : 0
    // on phones the copy sits low, so the model is framed in the upper half
    const lift = wide ? 0 : 0.18
    const lookY = wide ? 0.02 : -0.78
    camera.position.x = smooth(camera.position.x, shift + gl.px * 0.2, 2.4, dt)
    camera.position.y = smooth(camera.position.y, y + lift + gl.py * 0.1, 2.4, dt)
    camera.position.z = smooth(camera.position.z, wide ? z : z * 1.02, 2.2, dt)
    target.current.set(shift, lookY, 0)
    camera.lookAt(target.current)
  })
  return null
}

/* ------------------------------------------------------------------ *
 * Lights
 * ------------------------------------------------------------------ */
function Lights() {
  return (
    <>
      <ambientLight intensity={0.26} />
      <directionalLight position={[-3, 5, 4]} intensity={1.45} color="#f2fffc" />
      <directionalLight position={[4, 1.5, 2]} intensity={0.65} color="#a8e9dd" />
      <spotLight position={[2.5, 6, -1]} angle={0.8} penumbra={1} intensity={70} color="#bff3e8" distance={20} />
      <pointLight position={[0, -2.6, 2]} intensity={9} color="#2f9d92" distance={8} />
    </>
  )
}

/* ------------------------------------------------------------------ *
 * Loading progress for the DOM curtain
 * ------------------------------------------------------------------ */
function Loader({ onReady }: { onReady: () => void }) {
  // Rendering at all means every chapter's GLB has resolved its suspense.
  useGLTF('/models/crystal.glb')
  useGLTF('/models/tablets.glb')
  useGLTF('/models/jumbo-bag.glb')
  useGLTF('/models/globe.glb')
  useEffect(() => {
    const t = setTimeout(onReady, 260)
    return () => clearTimeout(t)
  }, [onReady])
  return null
}

export default function Stage({
  onReady,
  onHotspots,
}: {
  onReady: () => void
  onHotspots: (show: boolean) => void
}) {
  const [dpr, setDpr] = useState<[number, number]>(() =>
    window.innerWidth < 760 ? [1, 1.5] : [1, 1.75],
  )
  const [active, setActive] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    gl.reduced = mq.matches
    const onChange = () => { gl.reduced = mq.matches }
    mq.addEventListener('change', onChange)

    // stop drawing frames once the pinned act has scrolled away
    const host = document.querySelector('.act')
    let io: IntersectionObserver | undefined
    if (host) {
      io = new IntersectionObserver(
        ([e]) => setActive(e.isIntersecting),
        { rootMargin: '120px 0px 120px 0px' },
      )
      io.observe(host)
    }
    return () => {
      mq.removeEventListener('change', onChange)
      io?.disconnect()
    }
  }, [])
  const [err, setErr] = useState<string | null>(null)
  useEffect(() => {
    const onErr = (e: ErrorEvent) => setErr(e.message)
    window.addEventListener('error', onErr)
    return () => window.removeEventListener('error', onErr)
  }, [])

  return (
    <>
      {err && <pre style={{ position: 'absolute', bottom: 0, left: 0, color: 'red', fontSize: 11, zIndex: 9 }}>{err}</pre>}
      <Canvas
        dpr={dpr}
        frameloop={active ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: false }}
        camera={{ fov: 34, position: [0, 0.35, 3.2], near: 0.1, far: 60 }}
        onCreated={({ gl: r }) => {
          r.setClearColor(0x000000, 0)
          r.toneMapping = THREE.ACESFilmicToneMapping
          r.toneMappingExposure = 0.92
        }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <PerformanceMonitor onDecline={() => setDpr([1, 1])} onIncline={() => setDpr([1, 1.9])} />
        <AdaptiveDpr pixelated />
        <StudioEnvironment />
        <Lights />
        <Suspense fallback={null}>
          <CrystalChapter />
          <TabletChapter onHotspots={onHotspots} />
          <BagChapter />
          <GlobeChapter />
          <Preload all />
          <Loader onReady={onReady} />
        </Suspense>
        <ContactShadows position={[0, -1.15, 0]} opacity={0.4} scale={8} blur={2.6} far={3} color="#001010" resolution={256} frames={1} />
        <Rig />
      </Canvas>
    </>
  )
}
