/* drag the object — a limited orbit on the crystal / the sack / the jar.
 *
 * The listener lives on window because the document is stacked above the
 * fixed canvas; a raycast decides whether the press actually landed on the
 * object, so text and links keep behaving normally.
 */

import * as THREE from 'three'

const INTERACTIVE = 'a, button, input, textarea, select, label, [data-hotspot], [data-no-drag]'
const TEXT = 'p, h1, h2, h3, h4, li, dt, dd, blockquote, figure, .rows, .note, .grade, .step, .hs-card'

const LIMIT_YAW = 0.95
const LIMIT_PITCH = 0.38

export function createDrag({ camera, rig, enabled = true }) {
  const ray = new THREE.Raycaster()
  const ndc = new THREE.Vector2()

  const target = { yaw: 0, pitch: 0 }
  const value = { yaw: 0, pitch: 0 }

  let dragging = false
  let active = false
  let pointerId = null
  let lastX = 0
  let lastY = 0
  let velX = 0
  let velY = 0
  let moved = 0
  let hoverAt = 0

  const meshes = []
  rig.traverse((o) => {
    if (o.isMesh) meshes.push(o)
  })

  function toNdc(e) {
    ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1)
    ray.setFromCamera(ndc, camera)
    return ray.intersectObjects(meshes, false).length > 0
  }

  function down(e) {
    if (!enabled || e.button !== undefined && e.button !== 0) return
    if (e.target?.closest?.(INTERACTIVE)) return
    if (e.target?.closest?.(TEXT)) return
    if (!toNdc(e)) return

    dragging = true
    active = true
    pointerId = e.pointerId
    lastX = e.clientX
    lastY = e.clientY
    velX = 0
    velY = 0
    moved = 0
    document.body.classList.add('is-dragging')
    // keep the browser from starting a scroll from this press
    if (e.cancelable) e.preventDefault()
  }

  function move(e) {
    if (!dragging) {
      /* hover affordance, throttled — a full raycast per mousemove is wasteful */
      const now = performance.now()
      if (now - hoverAt > 110) {
        hoverAt = now
        const over = !e.target?.closest?.(INTERACTIVE) && !e.target?.closest?.(TEXT) && toNdc(e)
        document.body.classList.toggle('is-over-object', over)
      }
      return
    }
    if (e.pointerId !== pointerId) return
    const dx = e.clientX - lastX
    const dy = e.clientY - lastY
    lastX = e.clientX
    lastY = e.clientY
    moved += Math.abs(dx) + Math.abs(dy)

    target.yaw = THREE.MathUtils.clamp(target.yaw + dx * 0.0062, -LIMIT_YAW, LIMIT_YAW)
    target.pitch = THREE.MathUtils.clamp(target.pitch + dy * 0.0042, -LIMIT_PITCH, LIMIT_PITCH)
    velX = dx
    velY = dy
  }

  function up(e) {
    if (!dragging || (e.pointerId !== undefined && e.pointerId !== pointerId)) return
    dragging = false
    pointerId = null
    document.body.classList.remove('is-dragging')
    // a small fling, then the spring takes over
    target.yaw = THREE.MathUtils.clamp(target.yaw + velX * 0.004, -LIMIT_YAW, LIMIT_YAW)
    target.pitch = THREE.MathUtils.clamp(target.pitch + velY * 0.0026, -LIMIT_PITCH, LIMIT_PITCH)
  }

  window.addEventListener('pointerdown', down, { passive: false })
  window.addEventListener('pointermove', move, { passive: true })
  window.addEventListener('pointerup', up, { passive: true })
  window.addEventListener('pointercancel', up, { passive: true })

  function update(dt) {
    const k = dragging ? 1 - Math.exp(-dt * 16) : 1 - Math.exp(-dt * 5.5)
    if (!dragging) {
      // ease back to the composed orientation
      target.yaw *= Math.exp(-dt * 1.15)
      target.pitch *= Math.exp(-dt * 1.35)
    }
    value.yaw += (target.yaw - value.yaw) * k
    value.pitch += (target.pitch - value.pitch) * k
    return value
  }

  function dispose() {
    window.removeEventListener('pointerdown', down)
    window.removeEventListener('pointermove', move)
    document.body.classList.remove('is-over-object', 'is-dragging')
    window.removeEventListener('pointerup', up)
    window.removeEventListener('pointercancel', up)
  }

  return {
    update,
    dispose,
    reset() {
      target.yaw = 0
      target.pitch = 0
    },
    get dragging() { return dragging },
    get active() { return active },
  }
}
