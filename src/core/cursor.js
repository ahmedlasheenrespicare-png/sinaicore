/* a quiet copper cursor for fine pointers */

import gsap from 'gsap'
import { finePointer, reducedMotion } from './utils.js'

export function initCursor() {
  if (!finePointer() || reducedMotion()) return
  const cursor = document.getElementById('cursor')
  const dot = cursor?.querySelector('.cursor__dot')
  const ring = cursor?.querySelector('.cursor__ring')
  if (!cursor || !dot || !ring) return

  document.body.classList.add('has-cursor')

  const xDot = gsap.quickTo(dot, 'x', { duration: 0.18, ease: 'power3.out' })
  const yDot = gsap.quickTo(dot, 'y', { duration: 0.18, ease: 'power3.out' })
  const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
  const yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

  window.addEventListener(
    'pointermove',
    (e) => {
      document.body.classList.add('is-cursor-live')
      xDot(e.clientX)
      yDot(e.clientY)
      xRing(e.clientX)
      yRing(e.clientY)
    },
    { passive: true },
  )

  const hoverables = 'a, button, select, input, textarea, [data-cursor]'
  document.addEventListener('pointerover', (e) => {
    if (e.target.closest(hoverables)) cursor.classList.add('is-hover')
  })
  document.addEventListener('pointerout', (e) => {
    if (e.target.closest(hoverables)) cursor.classList.remove('is-hover')
  })
}
