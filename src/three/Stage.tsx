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
    g.addColorStop(0, '#081420')
    g.addColorStop(0.42, '#152a3a')
    g.addColorStop(0.52, '#2f5f7d')
    g.addColorStop(0.62, '#16232e')
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

function Glow({ color = '#4e9fce', intensity = 1, size = 4 }: { color?: string; intensity?: number; size?: number }) {
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
    // station 01 → dissolves once the camera has pushed through the surface
    const vis = 1 - sstep(0.13, 0.175, a)
    group.current.visible = vis > 0.01
    if (!group.current.visible) return

    // slow centre-screen turn; the drama comes from the camera dolly
    const spin = sstep(0.0, 0.18, a) * Math.PI * 0.72
    rot.current.y = smooth(rot.current.y, spin + gl.px * 0.26, 5, dt)
    rot.current.x = smooth(rot.current.x, -0.06 + gl.py * 0.12, 4, dt)
    inner.current.rotation.set(rot.current.x, rot.current.y, 0)

    // macro: the cluster starts large and keeps growing as we enter it
    group.current.position.y = smooth(group.current.position.y, 0.02 + a * 0.06, 4, dt)
    // narrow screens frame the crystal in the upper half, so it is scaled back
    const narrow = state.size.width < 760
    const base = narrow ? 0.92 : 1.52
    const s = base + sstep(0, 0.18, a) * (narrow ? 0.34 : 0.62)
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
      <Glow size={7} intensity={1.35} />
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
    const vis = sstep(0.15, 0.24, gl.act) * (1 - sstep(0.38, 0.45, gl.act))
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
        color: '#f4f4ef',
        roughness: 0.64,
        metalness: 0,
        clearcoat: 0.4,
        clearcoatRoughness: 0.5,
        sheen: 0.5,
        sheenColor: new THREE.Color('#cfe6f3'),
        envMapIntensity: 1.1,
      })
    })
    return m
  }, [scene])

  useFrame((s, dt) => {
    if (!group.current) return
    const vis = sstep(0.16, 0.23, gl.act) * (1 - sstep(0.37, 0.43, gl.act))
    group.current.visible = vis > 0.01
    onHotspots(gl.act > 0.19 && gl.act < 0.4)
    if (!group.current.visible) return
    spin.current += gl.reduced ? dt * 0.02 : dt * (0.16 + gl.vel * 0.8)
    const target = spin.current + gl.px * 0.4
    group.current.rotation.y = smooth(group.current.rotation.y, target, 4, dt)
    group.current.rotation.x = smooth(group.current.rotation.x, 0.12 - gl.py * 0.2, 3, dt)
    const enter = sstep(0.16, 0.25, gl.act)
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
 * 03 — printing: brand texture shared by the sack and the FIBC
 * ------------------------------------------------------------------ */
function BrandTexture() {
  return useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 1024
    c.height = 1024
    const x = c.getContext('2d')!
    // woven polypropylene ground
    x.fillStyle = '#f2f1ea'
    x.fillRect(0, 0, 1024, 1024)
    for (let i = 0; i < 1024; i += 8) {
      x.fillStyle = i % 16 === 0 ? 'rgba(26,107,156,0.035)' : 'rgba(0,0,0,0.02)'
      x.fillRect(0, i, 1024, 4)
      x.fillRect(i, 0, 4, 1024)
    }
    // printed plate
    const navy = '#0e1a2b'
    const blue = '#1a6b9c'
    const copper = '#c2712f'
    x.strokeStyle = 'rgba(26,107,156,0.5)'
    x.lineWidth = 4
    x.strokeRect(96, 84, 832, 856)

    // the mark is drawn once the asset is decoded; the plate ships with text only
    const img = new Image()
    img.onload = () => {
      const ratio = img.width / img.height
      const w = 470
      const h = w / ratio
      x.drawImage(img, 512 - w / 2, 140, w, h)
      x.textAlign = 'center'
      x.fillStyle = copper
      x.font = '700 96px Archivo, Helvetica, Arial, sans-serif'
      x.fillText('SINAI', 512 - 118, 140 + h + 104)
      x.fillStyle = blue
      x.fillText('CORE', 512 + 118, 140 + h + 104)
      x.fillStyle = navy
      x.font = '400 34px Archivo, Helvetica, Arial, sans-serif'
      x.fillText('At the Core of Quality and Purity', 512, 140 + h + 158)

      x.font = '700 46px Archivo, Helvetica, Arial, sans-serif'
      x.fillText('REFINED IODIZED SALT', 512, 640)
      x.font = '400 34px Archivo, Helvetica, Arial, sans-serif'
      x.fillStyle = '#33556e'
      x.fillText('PREMIUM VACUUM REFINED  ·  FOOD & INDUSTRIAL', 512, 690)

      x.fillStyle = navy
      x.font = '700 58px Archivo, Helvetica, Arial, sans-serif'
      x.fillText('FIBC 1 MT', 512, 790)
      x.font = '400 32px monospace'
      x.fillStyle = '#3c5a55'
      x.fillText('NaCl ≥ 99.5%  ·  SWL 5:1  ·  PRODUCT OF EGYPT', 512, 842)

      let bx = 372
      for (let i = 0; i < 40; i++) {
        const bw = (i % 3) + 1
        x.fillStyle = i % 2 ? navy : '#f2f1ea'
        x.fillRect(bx, 880, bw * 2, 44)
        bx += bw * 2 + 3
      }
      tex.needsUpdate = true
    }
    img.src = '/brand/logo-mark.png'

    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = 8
    return tex
  }, [])
}

/* Woven PP fabric: a seamless tile of threads plus the brand's blue weft stripe. */
function useWovenTexture() {
  return useMemo(() => {
    const N = 256
    const c = document.createElement('canvas')
    c.width = c.height = N
    const x = c.getContext('2d')!
    x.fillStyle = '#f0f0ea'
    x.fillRect(0, 0, N, N)
    // warp / weft threads
    for (let i = 0; i < N; i += 4) {
      x.fillStyle = i % 8 === 0 ? 'rgba(26,107,156,0.10)' : 'rgba(120,130,140,0.05)'
      x.fillRect(0, i, N, 2)
      x.fillStyle = i % 8 === 0 ? 'rgba(26,107,156,0.07)' : 'rgba(150,160,170,0.04)'
      x.fillRect(i, 0, 2, N)
    }
    // the printed blue stripe seen on the real FIBCs
    x.fillStyle = 'rgba(26,107,156,0.55)'
    x.fillRect(N * 0.46, 0, 8, N)
    x.fillStyle = 'rgba(194,113,47,0.35)'
    x.fillRect(N * 0.56, 0, 4, N)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.repeat.set(2, 2)
    t.anisotropy = 4
    return t
  }, [])
}

/* 03 — packing station: 50 kg sack beside the FIBC, one slow revolution */
function PackingChapter() {
  const group = useRef<THREE.Group>(null)
  const sackRef = useRef<THREE.Group>(null)
  const bagRef = useRef<THREE.Group>(null)
  const sack = useGLTF('/models/sack-50kg.glb')
  const jumbo = useGLTF('/models/jumbo-bag.glb')
  const brand = BrandTexture()
  const woven = useWovenTexture()

  const sackModel = useMemo(() => {
    const m = sack.scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      if (n.includes('brand_panel')) {
        mesh.material = new THREE.MeshStandardMaterial({ map: brand, roughness: 0.8, transparent: true, envMapIntensity: 0.8 })
      } else if (n.includes('body')) {
        mesh.material = new THREE.MeshStandardMaterial({
          color: '#fbfbf6', map: woven, roughness: 0.88, metalness: 0, envMapIntensity: 0.8, side: THREE.DoubleSide,
        })
      } else if (n.includes('crease') || n.includes('seam')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#cfdde6', roughness: 0.9 })
      } else if (n.includes('stitch')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#8f9aa2', roughness: 0.92 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#e2ebf1', roughness: 0.85 })
      }
    })
    return m
  }, [sack.scene, brand, woven])

  const bagModel = useMemo(() => {
    const m = jumbo.scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      if (n.includes('brand_panel')) {
        mesh.material = new THREE.MeshStandardMaterial({ map: brand, roughness: 0.78, metalness: 0, transparent: true, envMapIntensity: 0.8 })
      } else if (n.includes('fibc_body')) {
        mesh.material = new THREE.MeshStandardMaterial({
          color: '#fbfbf6', map: woven, roughness: 0.86, metalness: 0, envMapIntensity: 0.8, side: THREE.DoubleSide,
        })
      } else if (n.includes('seams')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#c6d8e4', roughness: 0.9 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#dde7ee', roughness: 0.8 })
      }
    })
    return m
  }, [jumbo.scene, brand, woven])

  useFrame((s, dt) => {
    if (!group.current || !sackRef.current || !bagRef.current) return
    // one station: fades in as the purity act clears, out before the globe
    const vis = sstep(0.42, 0.5, gl.act) * (1 - sstep(0.72, 0.78, gl.act))
    group.current.visible = vis > 0.01
    if (!group.current.visible) return
    // 360°: a full revolution across the station, so print, seams and spout all pass
    const turn = sstep(0.44, 0.76, gl.act) * Math.PI * 2 + gl.px * 0.2
    sackRef.current.rotation.y = smooth(sackRef.current.rotation.y, -0.3 + turn * 0.92, 3, dt)
    bagRef.current.rotation.y = smooth(bagRef.current.rotation.y, 0.42 - turn * 0.75, 3, dt)
    const bob = gl.reduced ? 0 : Math.sin(s.clock.elapsedTime * 0.5) * 0.01
    sackRef.current.position.y = -0.18 + bob
    bagRef.current.position.y = -0.02 - bob
    group.current.scale.setScalar(0.82 + sstep(0.42, 0.56, gl.act) * 0.06)
  })

  return (
    <group ref={group}>
      <group ref={sackRef} position={[-1.24, -0.14, 0.2]} scale={1.0}>
        <primitive object={sackModel} />
      </group>
      <group ref={bagRef} position={[-0.12, -0.02, -0.22]} scale={0.78}>
        <primitive object={bagModel} />
      </group>
      <Glow size={4.8} intensity={0.8} />
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

function Arc({ from, to, lifted = 0.45, color = '#4e9fce', width = 0.007 }: { from: THREE.Vector3; to: THREE.Vector3; lifted?: number; color?: string; width?: number }) {
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
    material.uniforms.uGrow.value = smooth(material.uniforms.uGrow.value, sstep(0.76, 0.96, gl.act), 2.2, dt)
  })

  void drawCount
  const line = useMemo(() => {
    const l = new THREE.Line(geometry, material)
    l.frustumCulled = false
    return l
  }, [geometry, material])
  return <primitive object={line} />
}

function SurfaceDot({ pos, color = '#a9d3eb', size = 0.014, phase = 0 }: { pos: THREE.Vector3; color?: string; size?: number; phase?: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    if (!ref.current) return
    const t = s.clock.elapsedTime
    const k = 1 + Math.sin(t * 2 + phase) * 0.28
    ref.current.scale.setScalar(k * sstep(0.8, 0.92, gl.act))
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
          color: '#0b1b2c',
          roughness: 0.52,
          metalness: 0.18,
          clearcoat: 0.35,
          clearcoatRoughness: 0.5,
          envMapIntensity: 0.8,
        })
      } else {
        mesh.material = new THREE.MeshBasicMaterial({ color: '#4e9fce', toneMapped: false, transparent: true, opacity: 0.92 })
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
    const vis = sstep(0.72, 0.8, gl.act)
    group.current.visible = vis > 0.01
    if (!group.current.visible) return
    // start with Sinai facing the camera, then rotate east towards Suez / Asia
    const start = -1.9
    spin.current = smooth(spin.current, start + sstep(0.72, 0.95, gl.act) * 0.7 + gl.px * 0.35, 2.5, dt)
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
      <SurfaceDot pos={suez} color="#d9a273" size={0.011} phase={1.4} />
      {dests.map((p, i) => (
        <SurfaceDot key={i} pos={p} color="#a9d3eb" size={0.008} phase={i} />
      ))}
      {/* atmosphere */}
      <mesh scale={1.075}>
        <sphereGeometry args={[R, 48, 32]} />
        <meshBasicMaterial color="#1a6b9c" transparent opacity={0.06} side={THREE.BackSide} depthWrite={false} blending={THREE.AdditiveBlending} />
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
      // 01 — the dolly pushes into the macro crystal
      [0, 0.62, 6.6],
      [0.07, 0.34, 4.4],
      [0.13, 0.06, 2.9],
      [0.175, 0.0, 1.85],
      // 02 — out, and low across the tablets
      [0.26, 0.05, 5.0],
      [0.4, 0.05, 4.9],
      // 03 — back a little for the full bag silhouette
      [0.5, 0.02, 5.4],
      [0.68, 0.04, 5.3],
      // 04 — settle for the globe
      [0.82, 0.1, 5.2],
      [1, 0.06, 4.9],
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
      <ambientLight intensity={0.3} />
      <directionalLight position={[-3, 5, 4]} intensity={1.45} color="#f4fbff" />
      <directionalLight position={[4, 1.5, 2]} intensity={0.6} color="#a9d3eb" />
      <spotLight position={[2.5, 6, -1]} angle={0.8} penumbra={1} intensity={70} color="#d4e9f5" distance={20} />
      <pointLight position={[0, -2.6, 2]} intensity={9} color="#1a6b9c" distance={8} />
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
  useGLTF('/models/sack-50kg.glb')
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
          r.toneMappingExposure = 0.98
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
          <PackingChapter />
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
