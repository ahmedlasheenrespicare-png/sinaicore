import { Suspense, memo, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Preload, ContactShadows, AdaptiveDpr, PerformanceMonitor } from '@react-three/drei'
import { gl, smooth, sstep } from '../three/state'
import { useContainerPrint } from '../three/textures'
import { seaPorts, seaRoutes } from './content'

useGLTF.setDecoderPath('/draco/')

/* ------------------------------------------------------------------ *
 * Environment — same studio cube as the main experience
 * ------------------------------------------------------------------ */
function StudioEnv() {
  const { scene, gl: renderer } = useThree()
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(renderer)
    const c = document.createElement('canvas')
    c.width = 1024
    c.height = 512
    const ctx = c.getContext('2d')!
    const g = ctx.createLinearGradient(0, 0, 0, 512)
    g.addColorStop(0, '#0a1723')
    g.addColorStop(0.42, '#1a3346')
    g.addColorStop(0.54, '#37667f')
    g.addColorStop(0.66, '#16242e')
    g.addColorStop(1, '#04080a')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 1024, 512)
    const bars = [
      { x: 140, y: 130, w: 340, h: 30, a: 0.5 },
      { x: 640, y: 96, w: 240, h: 18, a: 0.34 },
    ]
    for (const b of bars) {
      const rg = ctx.createRadialGradient(b.x + b.w / 2, b.y + b.h / 2, 2, b.x + b.w / 2, b.y + b.h / 2, b.w * 0.8)
      rg.addColorStop(0, `rgba(226,248,255,${b.a})`)
      rg.addColorStop(1, 'rgba(200,240,250,0)')
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
 * Helper: point on the globe for a lat/lon
 * ------------------------------------------------------------------ */
const R = 1.28
function llToVec(lat: number, lon: number, r = R) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  )
}

/** quaternion that stands an object on the globe, its +x along a route */
function globeQuat(at: THREE.Vector3, toward: THREE.Vector3) {
  const up = at.clone().normalize()
  const fwd = toward.clone().sub(at).normalize()
  // re-orthogonalise the tangent against the surface normal
  fwd.sub(up.clone().multiplyScalar(fwd.dot(up))).normalize()
  const z = new THREE.Vector3().crossVectors(fwd, up)
  const m = new THREE.Matrix4().makeBasis(fwd, up, z)
  return new THREE.Quaternion().setFromRotationMatrix(m)
}

/* ------------------------------------------------------------------ *
 * The scene
 * ------------------------------------------------------------------ */
/* 4 columns × 2 rows of 1.5 t jumbo bags fills the 5.9 × 2.35 m floor to
   within a few centimetres; the 50 kg sacks top up the void above */
const BAG_ROWS = [
  { x: -2.15, z: -0.55 },
  { x: -2.15, z: 0.55 },
  { x: -0.72, z: -0.55 },
  { x: -0.72, z: 0.55 },
  { x: 0.72, z: -0.55 },
  { x: 0.72, z: 0.55 },
  { x: 2.15, z: -0.55 },
  { x: 2.15, z: 0.55 },
]
/* the load sits on the container floor (y≈0.19) */
const JUMBO_Y = 0.78
const SACK_Y = 1.56

const SACK_TOPS = [
  { x: -2.1, z: -0.55 }, { x: -1.05, z: -0.55 }, { x: 0, z: -0.55 }, { x: 1.05, z: -0.55 }, { x: 2.1, z: -0.55 },
  { x: -2.1, z: 0.55 }, { x: -1.05, z: 0.55 }, { x: 0, z: 0.55 }, { x: 1.05, z: 0.55 }, { x: 2.1, z: 0.55 },
]

function ShippingScene() {
  const container = useGLTF('/models/container.glb')
  const jumbo = useGLTF('/models/jumbo-bag.glb')
  const sack = useGLTF('/models/sack-50kg.glb')
  const globe = useGLTF('/models/globe.glb')
  const ship = useGLTF('/models/cargo-ship.glb')
  const print = useContainerPrint()

  const root = useRef<THREE.Group>(null)
  const doorsL = useRef<THREE.Group>(null)
  const doorsR = useRef<THREE.Group>(null)
  const bags = useRef<THREE.Group>(null)
  const sackGroup = useRef<THREE.Group>(null)
  const seal = useRef<THREE.Group>(null)
  const innerLight = useRef<(THREE.PointLight | null)[]>([null, null])
  const shipRef = useRef<THREE.Group>(null)
  const worldRef = useRef<THREE.Group>(null)
  const homePos = useRef(new THREE.Vector3(0, 0, 0))
  const homeQuat = useRef(new THREE.Quaternion().setFromEuler(new THREE.Euler(0, -0.46, 0)))
  const bayLocal = useRef(new THREE.Vector3())

  /* --- container materials + door nodes ------------------------------ */
  const model = useMemo(() => {
    const m = container.scene.clone(true)
    const toRemove: THREE.Object3D[] = []
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      if (n.includes('plate')) {
        mesh.material = new THREE.MeshStandardMaterial({
          map: print, transparent: true, roughness: 0.62, metalness: 0.1, envMapIntensity: 0.8, side: THREE.DoubleSide,
        })
        return
      }
      if (n.includes('door')) {
        // the leaves are hoisted out of the body and re-parented onto hinges
        toRemove.push(mesh)
        return
      }
      if (n.includes('frame')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#1b2c38', roughness: 0.44, metalness: 0.62, envMapIntensity: 1 })
      } else if (n.includes('floor')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#2a231b', roughness: 0.88 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#1c5c82', roughness: 0.52, metalness: 0.38, envMapIntensity: 1 })
      }
    })
    for (const o of toRemove) o.parent?.remove(o)
    return m
  }, [container.scene, print])

  /* one leaf shape shared by both hinges; the mirror is done by the hinge's
     scale, so the locking bars stay on the outside face after the swing */
  const doorLeaf = useMemo(() => {
    const src = container.scene.getObjectByName('cont_door_left')
    if (!src) return null
    return new THREE.Mesh((src as THREE.Mesh).geometry, new THREE.MeshStandardMaterial({
      color: '#22698f', roughness: 0.48, metalness: 0.42, envMapIntensity: 1, side: THREE.DoubleSide,
    }))
  }, [container.scene])

  /* --- bags (jumbo) -------------------------------------------------- */
  const jumboModel = useMemo(() => {
    const m = jumbo.scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      if (n.includes('brand_panel')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#f2f4f2', roughness: 0.8, envMapIntensity: 0.7 })
      } else if (n.includes('fibc_body')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#f7f7f2', roughness: 0.88, side: THREE.DoubleSide, envMapIntensity: 0.6 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#dfe8ee', roughness: 0.84 })
      }
    })
    return m
  }, [jumbo.scene])

  const sackModel = useMemo(() => {
    const m = sack.scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      mesh.material = new THREE.MeshStandardMaterial({ color: '#fbfbf7', roughness: 0.93, side: THREE.DoubleSide })
    })
    return m
  }, [sack.scene])

  /* stable clones: React must not see a fresh object every render */
  const bagClones = useMemo(
    () => BAG_ROWS.map(() => jumboModel.clone(true)),
    [jumboModel],
  )
  const sackClones = useMemo(
    () => SACK_TOPS.map(() => sackModel.clone(true)),
    [sackModel],
  )

  /* --- globe + ship -------------------------------------------------- */
  const globeModel = useMemo(() => {
    const m = globe.scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      if (mesh.name.includes('ocean')) {
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#08161f', roughness: 0.5, metalness: 0.2, clearcoat: 0.3, clearcoatRoughness: 0.6, envMapIntensity: 0.8,
        })
      } else {
        mesh.material = new THREE.MeshBasicMaterial({ color: '#4e9fce', toneMapped: false, transparent: true, opacity: 0.9 })
      }
    })
    return m
  }, [globe.scene])

  const shipModel = useMemo(() => {
    const m = ship.scene.clone(true)
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      const n = mesh.name
      if (n.includes('bridge')) mesh.material = new THREE.MeshStandardMaterial({ color: '#e7ecef', roughness: 0.6 })
      else if (n.includes('stacks')) mesh.material = new THREE.MeshStandardMaterial({ color: '#1f6288', roughness: 0.66, metalness: 0.2 })
      else mesh.material = new THREE.MeshStandardMaterial({ color: '#0a1620', roughness: 0.44, metalness: 0.45 })
    })
    return m
  }, [ship.scene])

  const routes = useMemo(() => {
    const origin = llToVec(seaPorts[0].lat0, seaPorts[0].lon, R * 1.004)
    return seaRoutes.map((d) => {
      const to = llToVec(d.lat, d.lon, R * 1.004)
      const mid = origin.clone().add(to).multiplyScalar(0.5).normalize().multiplyScalar(R + origin.distanceTo(to) * 0.42)
      const curve = new THREE.QuadraticBezierCurve3(origin, mid, to)
      const pts = curve.getPoints(64)
      const g = new THREE.BufferGeometry().setFromPoints(pts)
      const line = new THREE.Line(g, new THREE.LineBasicMaterial({
        color: new THREE.Color('#7fd6f2'), transparent: true, opacity: 0, depthWrite: false,
      }))
      line.geometry.setDrawRange(0, 0)
      // a bright head that runs along the arc as the route "plots" itself
      const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.008, 8, 8),
        new THREE.MeshBasicMaterial({ color: '#d4884d', toneMapped: false, transparent: true, opacity: 0 }),
      )
      return { curve, line, dest: to, head }
    })
  }, [])

  /* --- per-frame choreography ---------------------------------------- */
  useFrame((s, dt) => {
    const a = gl.act
    const t = s.clock.elapsedTime

    /* ---- the ship: waits in the roads, takes the box, then sails --------- */
    let shipScale = 0
    if (shipRef.current) {
      // 0 at the yard beat, 1 once the camera is out on the globe
      const out = sstep(0.6, 0.84, a)
      const sail = sstep(0.84, 1, a)
      shipScale = 0.34 + (0.019 - 0.34) * out
      shipRef.current.scale.setScalar(shipScale)
      shipRef.current.visible = a > 0.58

      const route = routes[0]
      const start = llToVec(seaPorts[0].lat0, seaPorts[0].lon, R + 0.03)
      const travel = route.curve.getPoint(Math.min(1, sail))
      const yard = new THREE.Vector3(1.25, -0.75, -4.6)
      const yardQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, -0.28, 0))

      // on the globe the hull must sit tangent, bow along the route
      const pos = new THREE.Vector3()
      const quat = new THREE.Quaternion()
      if (out < 1) {
        const gp = new THREE.Vector3().lerpVectors(yard, start, out)
        pos.fromArray(gp.toArray())
        const gq = globeQuat(start, route.curve.getPoint(0.02))
        quat.copy(yardQ).slerp(gq, out)
      } else {
        pos.copy(travel)
        quat.copy(globeQuat(travel, route.curve.getPoint(Math.min(1, sail + 0.02))))
      }
      // the crossing: nudge the bow up a touch so it reads as sailing
      shipRef.current.position.copy(pos)
      shipRef.current.quaternion.copy(quat)
      if (out >= 1) shipRef.current.rotateX(-0.12)

      // container rides in the deck bay once it has been hoisted aboard
      const board = sstep(0.62, 0.8, a)
      if (root.current) {
        shipRef.current.updateMatrixWorld()
        // a slot on the deck stack, in the ship's own frame
        bayLocal.current.set(0.15, 2.6, 1.1)
        const bayWorld = shipRef.current.localToWorld(bayLocal.current.clone())
        const boxScale = shipScale * 0.78
        root.current.scale.setScalar(1 + (boxScale - 1) * board)
        root.current.position.lerpVectors(
          homePos.current,
          bayWorld,
          board,
        )
        root.current.position.y += (1 - board) * (gl.reduced ? 0 : 0.02 * Math.sin(t * 0.6))
        root.current.quaternion.slerpQuaternions(homeQuat.current, shipRef.current.quaternion, board)
        root.current.visible = true
      }
    }

    // hinges sit at the opening jambs; 0 = shut, ±90° = folded out against the sides
    const shut = sstep(0.44, 0.56, a)
    const swing = (1 - shut) * 1.62
    // both hinges share the same sign because the right one is z-mirrored, so
    // +90° folds each leaf flat against the outside of its own side wall
    if (doorsL.current) doorsL.current.rotation.y = -swing
    if (doorsR.current) doorsR.current.rotation.y = swing

    // the seal appears once the doors latch
    if (innerLight.current) {
      const shut2 = sstep(0.42, 0.55, a)
      innerLight.current.forEach((l, i) => {
        if (l) l.intensity = (i === 0 ? 26 : 16) * (1 - shut2 * 0.92)
      })
    }

    if (seal.current) {
      const on = sstep(0.55, 0.6, a)
      seal.current.visible = on > 0.02
      seal.current.scale.setScalar(0.001 + on * 1)
    }

    // bags fly in, one by one, and settle in their slot
    if (bags.current) {
      bags.current.children.forEach((child, i) => {
        const start = 0.16 + i * 0.032
        const p = sstep(start, start + 0.1, a)
        const base = BAG_ROWS[i]
        // each bag arrives through the open doors, then settles into its slot
        child.position.set(
          base.x + (1 - p) * 4.6,
          JUMBO_Y + (1 - p) * 0.9,
          base.z,
        )
        child.rotation.y = (1 - p) * 0.5
        child.visible = p > 0.001
      })
    }
    if (sackGroup.current) {
      sackGroup.current.children.forEach((child, i) => {
        const start = 0.36 + i * 0.022
        const p = sstep(start, start + 0.08, a)
        const base = SACK_TOPS[i]
        child.position.set(base.x + (1 - p) * 4.2, SACK_Y + (1 - p) * 0.7, base.z)
        child.visible = p > 0.001
      })
    }

    // globe fades in behind, routes draw themselves
    if (worldRef.current) {
      const wv = sstep(0.7, 0.82, a)
      worldRef.current.visible = wv > 0.01
      worldRef.current.scale.setScalar(wv * (0.98 + 0.04 * Math.sin(t * 0.3)))
      worldRef.current.rotation.y = -1.32 + (gl.reduced ? 0 : Math.sin(t * 0.06) * 0.05)
    }
    routes.forEach((r, i) => {
      const grow = sstep(0.8 + i * 0.035, 1, a)
      const m = r.line.material as THREE.LineBasicMaterial
      m.opacity = grow * 0.85
      r.line.geometry.setDrawRange(0, Math.max(0, Math.round(grow * 65)))
      const hm = r.head.material as THREE.MeshBasicMaterial
      hm.opacity = grow > 0.02 && grow < 0.995 ? 0.9 : 0
      r.head.position.copy(r.curve.getPoint(grow))
      const hs = 1 + Math.sin(t * 4) * 0.25
      r.head.scale.setScalar(hs)
    })
  })

  return (
    <>
      <ambientLight intensity={0.95} />
      <directionalLight position={[-6, 9, 7]} intensity={3.2} color="#f4fbff" />
      <directionalLight position={[6, 6, 12]} intensity={1.4} color="#dceefb" />
      <directionalLight position={[7, 4, 5]} intensity={0.9} color="#a9d3eb" />
      <directionalLight position={[2, 3, -8]} intensity={1.1} color="#7ebde1" />
      <spotLight position={[3, 10, -4]} angle={0.8} penumbra={1} intensity={90} color="#d4e9f5" distance={30} />
      <pointLight position={[0, -2.6, 3]} intensity={12} color="#1a6b9c" distance={16} />

      {/* the container, with its two hinged leaves */}
      <group ref={root} position={[0, 0, 0]} rotation={[0, -0.46, 0]}>
        <primitive object={model} />
        {doorLeaf && (
          <>
            {/* hinges at the two jambs; each leaf is modelled opening along +z,
                so the left one is mirrored to fold toward the centre */}
            <group ref={doorsL} position={[3.03, 0, 1.2]} scale={[1, 1, -1]}>
              <primitive object={doorLeaf} />
            </group>
            <group ref={doorsR} position={[3.03, 0, -1.2]}>
              <primitive object={doorLeaf.clone()} />
            </group>
          </>
        )}

        {/* the load */}
        <group ref={bags}>
          {BAG_ROWS.map((r, i) => (
            <group key={`b${i}`} position={[r.x, JUMBO_Y, r.z]} scale={0.72}>
              <primitive object={bagClones[i]} />
            </group>
          ))}
        </group>
        <group ref={sackGroup}>
          {SACK_TOPS.map((r, i) => (
            <group key={`s${i}`} position={[r.x, SACK_Y, r.z]} scale={0.46}>
              <primitive object={sackClones[i]} />
            </group>
          ))}
        </group>

        {/* interior fill so the load reads inside the steel box */}
        <pointLight ref={(l) => { innerLight.current[0] = l }} position={[1.6, 2.2, 0]} intensity={26} distance={9} decay={1.7} color="#eaf6ff" />
        <pointLight ref={(l) => { innerLight.current[1] = l }} position={[-1.8, 2.0, 0]} intensity={16} distance={7} decay={1.7} color="#cfe6f6" />

        {/* export seal, sitting on the door seam */}
        <group ref={seal} position={[3.055, 1.42, 0]} scale={0.001}>
          <mesh>
            <boxGeometry args={[0.03, 0.05, 0.055]} />
            <meshStandardMaterial color="#c2712f" roughness={0.34} metalness={0.85} envMapIntensity={1.4} />
          </mesh>
          <mesh position={[0, 0.028, 0]}>
            <torusGeometry args={[0.018, 0.004, 8, 20, Math.PI]} />
            <meshStandardMaterial color="#c9d3d8" roughness={0.24} metalness={0.9} />
          </mesh>
          <mesh position={[0.006, 0.02, 0]}>
            <boxGeometry args={[0.012, 0.09, 0.012]} />
            <meshStandardMaterial color="#c9d3d8" roughness={0.24} metalness={0.9} />
          </mesh>
        </group>
      </group>

      {/* globe + routes + ship */}
      <group ref={worldRef} visible={false} position={[0, 0.1, 0]}>
        <primitive object={globeModel} />
        {routes.map((r, i) => (
          <group key={i}>
            <primitive object={r.line} />
            <primitive object={r.head} />
          </group>
        ))}
        {/* the two load ports, marked on the coast */}
        {seaPorts.map((p) => (
          <group key={p.id} position={llToVec(p.lat0, p.lon, R * 1.006)}>
            <mesh>
              <sphereGeometry args={[0.012, 12, 12]} />
              <meshBasicMaterial color="#fdf5ee" toneMapped={false} />
            </mesh>
            <mesh>
              <ringGeometry args={[0.02, 0.026, 24]} />
              <meshBasicMaterial color="#7fd6f2" toneMapped={false} transparent opacity={0.7} side={THREE.DoubleSide} />
            </mesh>
          </group>
        ))}
        <group ref={shipRef} position={[1.25, -0.75, -4.6]} visible={false}>
          <primitive object={shipModel} />
        </group>
      </group>

      <ContactShadows position={[0, -1.42, 0]} opacity={0.42} scale={22} blur={2.8} far={6} color="#001014" resolution={256} frames={1} />
    </>
  )
}

/* ------------------------------------------------------------------ *
 * Camera: yard dolly → into the open doors → pull back → orbit the globe
 * ------------------------------------------------------------------ */
function Rig() {
  const { camera, size } = useThree()
  const target = useRef(new THREE.Vector3(0, 1.2, 0))
  useFrame((_, dt) => {
    const a = gl.act
    // [progress, eye.x, eye.y, eye.z, look.x, look.y, look.z]
    const keys: number[][] = [
      [0, 13.4, 6.2, 11.6, 0.1, 1.2, 0],
      [0.16, 12.6, 5.6, 10.8, 0.35, 1.25, 0],
      [0.34, 11.6, 5.0, 9.9, 0.4, 1.3, 0],
      [0.5, 12.8, 5.4, 10.9, 0.3, 1.25, 0],
      [0.62, 14.2, 6.0, 12.2, 0, 1.25, 0],
      [0.72, 6.6, 3.8, 8.0, 0, 0.7, 0],
      [0.84, 1.9, 2.4, 5.2, 0, 0.3, 0],
      [1, 0.5, 1.35, 5.5, 0, 0.14, 0],
    ]
    let ex = keys[0][1], ey = keys[0][2], ez = keys[0][3]
    let tx = keys[0][4], ty = keys[0][5], tz = keys[0][6]
    for (let i = 0; i < keys.length - 1; i++) {
      const k0 = keys[i]
      const k1 = keys[i + 1]
      const t = sstep(k0[0], k1[0], a)
      ex = k0[1] + (k1[1] - k0[1]) * t
      ey = k0[2] + (k1[2] - k0[2]) * t
      ez = k0[3] + (k1[3] - k0[3]) * t
      tx = k0[4] + (k1[4] - k0[4]) * t
      ty = k0[5] + (k1[5] - k0[5]) * t
      tz = k0[6] + (k1[6] - k0[6]) * t
      if (a <= k1[0]) break
    }
    const wide = size.width > 900
    // portrait: a narrow horizontal FOV needs far more distance, and the box
    // has to sit above the copy card
    // on the yard beats the box must fit the narrow frame; on the globe beat
    // the mapping can come back closer
    const globeBeat = sstep(0.74, 0.88, a)
    // a higher look-at point pushes the subject DOWN in frame, so the globe
    // beat needs a negative lift to clear the copy card
    const k = wide ? 1 : 1.9 - globeBeat * 0.45
    const lift = wide ? 0 : 0.55 - globeBeat * 1.75
    camera.position.x = smooth(camera.position.x, ex * k + gl.px * 0.22, 2.6, dt)
    camera.position.y = smooth(camera.position.y, ey * k + 0.15 + gl.py * 0.14, 2.6, dt)
    camera.position.z = smooth(camera.position.z, ez * k, 2.4, dt)
    target.current.set(tx, ty + lift, tz)
    camera.lookAt(target.current)
  })
  return null
}

/* ------------------------------------------------------------------ *
 * Exported canvas
 * ------------------------------------------------------------------ */
function AltStage({ onReady }: { onReady: () => void }) {
  const [dpr, setDpr] = useState<[number, number]>(() => (window.innerWidth < 760 ? [1, 1.5] : [1, 1.75]))
  const host = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    gl.reduced = mq.matches
    const on = () => { gl.reduced = mq.matches }
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  useEffect(() => {
    const el = host.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { rootMargin: '160px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="alt-canvas" ref={host}>
      <Canvas
        dpr={dpr}
        frameloop={active ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ fov: 33, position: [13.4, 6.2, 11.6], near: 0.05, far: 90 }}
        onCreated={({ gl: r }) => {
          r.setClearColor(0x000000, 0)
          r.toneMapping = THREE.ACESFilmicToneMapping
          r.toneMappingExposure = 1.18
        }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <PerformanceMonitor onDecline={() => setDpr([1, 1])} onIncline={() => setDpr([1, 1.9])} />
        <AdaptiveDpr pixelated />
        <StudioEnv />
        <Suspense fallback={null}>
          <ShippingScene />
          <Preload all />
          <Ready onReady={onReady} />
        </Suspense>
        <Rig />
      </Canvas>
    </div>
  )
}

export default memo(AltStage)

function Ready({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    const t = setTimeout(onReady, 320)
    return () => clearTimeout(t)
  }, [onReady])
  return null
}
