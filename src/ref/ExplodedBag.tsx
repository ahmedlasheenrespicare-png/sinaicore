/* ------------------------------------------------------------------ *
 * The exploded view, driven by the scroll bar.
 *
 * One FIBC (the big-bag we actually export in) taken apart in public:
 * body, seams, lifting loops, brand panel, the two printed cards and the
 * top spout each peel away from the whole along their own line, then come
 * back together. Nothing is faked and nothing is authored twice — the
 * seven pieces are the seven named nodes that already exist inside
 * /models/jumbo-bag.glb, so what separates is what the bag is really made
 * of.
 *
 * The driving value is a single number, `explode`, and it is written by a
 * GSAP ScrollTrigger timeline that scrubs it from 0 to 1 across the act.
 * The 3D side reads it in useFrame, interpolated against its own clock, so
 * scrolling never triggers a React render of the scene. This is the same
 * division of labour as the rest of the site: DOM decides where you are,
 * the render loop decides how fast to get there.
 * ------------------------------------------------------------------ */

import { memo, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useWovenPBR, fabricProps } from './fabric'
import { explode } from './scrollState'

useGLTF.setDecoderPath('/draco/')

/* Where each piece travels when the bag opens. The numbers are in the
   model's own units and were placed by eye against the rendered piece —
   a bag is not symmetrical, so a formula (e.g. "every mesh × 1.4 along its
   normal") gives a pile rather than a diagram. Order in this table is also
   the order the pieces leave in: the outside first, the contents last, the
   way you would actually open one. */
const PIECES: { name: string; to: [number, number, number]; turn?: [number, number, number] }[] = [
  /* `anchor_label_front`, `anchor_label_back` and `anchor_top_spout` are
     empty transform nodes, not meshes: each one parents several meshes, and
     the model has no other nodes to name. Three earlier attempts failed
     here, and the third explained why. Matching on `includes('top_spout')`
     never fires (the mesh is `anchor_top_spout` and it has no geometry);
     matching the parent and calling `position.copy()` moves every child
     with it, which is how the seams, the cards and the spout all ended up
     in the air at once. The parent is kept and the *children* are moved,
     so the transform hierarchy stays intact. */
  { name: 'anchor_label_front', to: [0, 0.18, 1.35] },
  { name: 'anchor_label_back', to: [0, 0.18, -1.35] },
  { name: 'anchor_top_spout', to: [0, 1.5, 0] },
  // then the structure peels away from the body
  { name: 'fibc_loops', to: [1.45, 0.55, 0] },
  /* `fibc_seams` is misnamed in the model. Its geometry is a closed box,
     1.36 x 1.5 x 1.36, that encloses the body entirely — 10 920 vertices
     and 54 840 indices forming a shell, not a set of stitched edges. It is
     the inner liner. It leaves by sliding down and back out of the body,
     which is the only direction that reads as "a layer came off" rather
     than as "a cage flew away". */
  { name: 'fibc_seams', to: [0, -1.15, -0.75] },
  // the brand panel lifts and turns so its print faces you
  { name: 'brand_panel', to: [0, 0.35, 1.15], turn: [0, Math.PI * 0.32, 0] },
  // the body itself halves out of the way, last
  { name: 'fibc_body', to: [0, -0.35, 0] },
]

function ExplodedBag() {
  const { scene } = useGLTF('/models/jumbo-bag.glb')
  const woven = useWovenPBR([3, 3])
  const group = useRef<THREE.Group>(null)

  /* one clone of the model, and a handle on every piece we move. The clone
     is built once: materials are shared with the other plates on the page,
     so cloning per frame (or per scroll) would leak GPU memory. */
  const { model, parts } = useMemo(() => {
    const m = scene.clone(true)
    const parts: { node: THREE.Object3D; to: THREE.Vector3; turn: THREE.Euler }[] = []
    m.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (mesh.isMesh) {
        mesh.castShadow = true
        mesh.receiveShadow = true
      }
      const n = o.name
      if (!n) return
      const spec = PIECES.find((p) => n === p.name)
      if (spec) {
        parts.push({
          node: o,
          to: new THREE.Vector3(...spec.to),
          turn: new THREE.Euler(...(spec.turn ?? [0, 0, 0])),
        })
      }
      /* the same materials the flat plate uses, so the bag in the exploded
         view and the bag in the product grid are visibly the same object */
      if (!mesh.isMesh) return
      if (n.includes('brand_panel')) {
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#f6f7f4',
          roughness: 0.76,
          sheen: 0.35,
          sheenColor: new THREE.Color('#e6f0f6'),
          envMapIntensity: 1,
        })
      } else if (n.includes('body')) {
        mesh.material = new THREE.MeshPhysicalMaterial(fabricProps(woven))
      } else if (n.includes('loops')) {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#1a6b9c', roughness: 0.78 })
      } else {
        mesh.material = new THREE.MeshStandardMaterial({ color: '#e9eef2', roughness: 0.84 })
      }
    })
    /* Each piece remembers where it started, so the tween is a lerp
       between two known points rather than an accumulating offset.
       `parts` is sorted into the order PIECES declares, because
       `traverse` walks the scene graph — the departure order was coming
       out as whatever order the exporter happened to write the nodes in,
       which put half the bag apart on the first frame. */
    const ordered = PIECES.map((spec) => parts.find((p) => p.node.name === spec.name)).filter(
      (p): p is NonNullable<typeof p> => !!p,
    )
    ordered.forEach((p) => {
      p.node.userData.home = p.node.position.clone()
    })
    return { model: m, parts: ordered }
  }, [scene, woven])

  /* the damped value the DOM thread hands over, and its local copy */
  const shown = useRef(0)

  useFrame((_, dt) => {
    const target = explode.v
    /* exponential smoothing, frame-rate independent: never overshoots, and
       a fast flick of the scroll wheel does not slam the pieces apart */
    const k = 1 - Math.exp(-12 * Math.min(dt, 0.1))
    shown.current += (target - shown.current) * k
    const t = shown.current

    for (let i = 0; i < parts.length; i++) {
      const p = parts[i]
      const home = p.node.userData.home as THREE.Vector3
      /* each piece has its own slice of the timeline, in order, with a
         little overlap so the motion reads as a peel rather than a queue */
      /* the first piece does not leave until the act is 8% in, so the
         section opens on a whole bag rather than on one already coming
         apart, and the last is home again before the end */
      const start = 0.08 + (i / parts.length) * 0.4
      const raw = (t - start) / 0.52
      const local = raw <= 0 ? 0 : raw >= 1 ? 1 : raw
      /* ease-in-out cubic: settles at both ends, which matters because the
         first and last frames are the ones people look at */
      const e = local < 0.5 ? 4 * local ** 3 : 1 - (-2 * local + 2) ** 3 / 2
      p.node.position.copy(home).addScaledVector(p.to, e)
      p.node.rotation.set(p.turn.x * e, p.turn.y * e, p.turn.z * e)
    }

    if (group.current) {
      /* A slower turn than the pieces: the assembly rotates through about
         30 degrees over the whole act, so pieces separate in depth as well
         as across the screen. At 0.55 rad the parts at the top of the bag
         swung out of the frustum at the start of the act — the section
         opened on an empty plate, which no amount of DOM testing would
         have caught. */
      group.current.rotation.y = -0.12 + Math.sin(t * Math.PI) * 0.26
    }
  })

  return (
    /* shifted to the reading edge's opposite side: the copy holds the right
       of the screen in RTL, so the bag sits a little left of centre rather
       than dead centre where it would fight the text */
    <group ref={group} position={[0.2, 0, 0]} scale={0.88}>
      <primitive object={model} />
    </group>
  )
}

export default memo(ExplodedBag)
