import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { motion, clamp } from '../story'
import { LIMIT, orbit, releaseOrbit } from '../lib/orbit'

/**
 * Pointer drag on the canvas: limited orbit for the product stations.
 * The vertical axis belongs to the page on touch devices (`touch-action: pan-y`),
 * so a phone can still scroll with a finger and rotate with a sideways drag.
 */
export default function Interaction() {
  const gl = useThree((state) => state.gl)
  const pointer = useRef({ id: -1, x: 0, y: 0, idle: 0 })

  /* Which chapter allows the drag: refine, pack and analysis. */
  useFrame((_, delta) => {
    const station = clamp(
      Math.max(motion.refine, motion.pack * 1.15, motion.analysis * 1.2) * 1.6 - 0.35,
    )
    orbit.station = station
    orbit.enabled = station > 0.35

    if (!orbit.dragging) {
      pointer.current.idle += delta
      /* spring back after a couple of quiet seconds so the story keeps its
       * composition instead of drifting away from the art direction */
      if (pointer.current.idle > 2.2) {
        orbit.targetX *= 0.94
        orbit.targetY *= 0.94
      }
    }

    const dt = Math.min(delta, 1 / 30)
    orbit.x = THREE.MathUtils.damp(orbit.x, orbit.targetX, orbit.dragging ? 14 : 6, dt)
    orbit.y = THREE.MathUtils.damp(orbit.y, orbit.targetY, orbit.dragging ? 14 : 6, dt)
  })

  useEffect(() => {
    const element = gl.domElement
    const root = document.documentElement

    const onDown = (event: PointerEvent) => {
      if (event.button !== 0 && event.pointerType === 'mouse') return
      if (!orbit.enabled) return
      pointer.current.id = event.pointerId
      pointer.current.x = event.clientX
      pointer.current.y = event.clientY
      pointer.current.idle = 0
      orbit.dragging = true
      root.classList.add('is-orbiting')
      element.setPointerCapture?.(event.pointerId)
    }

    const onMove = (event: PointerEvent) => {
      if (!orbit.dragging || event.pointerId !== pointer.current.id) return
      const dx = event.clientX - pointer.current.x
      const dy = event.clientY - pointer.current.y
      pointer.current.x = event.clientX
      pointer.current.y = event.clientY
      pointer.current.idle = 0
      orbit.targetY = THREE.MathUtils.clamp(orbit.targetY + dx * 0.0042, -LIMIT.y, LIMIT.y)
      orbit.targetX = THREE.MathUtils.clamp(orbit.targetX + dy * 0.0032, -LIMIT.x, LIMIT.x)
    }

    const onUp = (event: PointerEvent) => {
      if (!orbit.dragging) return
      orbit.dragging = false
      pointer.current.id = -1
      pointer.current.idle = 0
      root.classList.remove('is-orbiting')
      element.releasePointerCapture?.(event.pointerId)
      if (Math.abs(orbit.targetY) < 0.02 && Math.abs(orbit.targetX) < 0.02) releaseOrbit()
    }

    element.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)

    return () => {
      element.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      root.classList.remove('is-orbiting')
    }
  }, [gl])

  return null
}
