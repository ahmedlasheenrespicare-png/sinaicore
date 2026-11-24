/* preloader — a press proof that reports real asset progress */

import gsap from 'gsap'
import { reducedMotion } from './utils.js'

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

export function createPreloader(manager) {
  const el = document.getElementById('loader')
  const count = document.getElementById('loader-count')
  const fill = document.getElementById('loader-fill')

  let target = 0
  let displayed = 0
  let finished = false

  if (manager) {
    manager.onProgress = (_url, loaded, total) => {
      if (total > 0) target = Math.max(target, loaded / total)
    }
    manager.onLoad = () => {
      target = 1
    }
    manager.onError = (url) => {
      console.warn('[SinaiCore] asset failed:', url)
    }
  } else {
    target = 1
  }

  function frame() {
    if (finished) return
    displayed += (target - displayed) * 0.075
    if (target >= 1 && target - displayed < 0.002) displayed = 1
    const pct = Math.min(100, Math.round(displayed * 100))
    if (count) count.textContent = String(pct).padStart(2, '0')
    if (fill) fill.style.transform = `scaleX(${displayed})`
    if (displayed < 1) requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)

  async function finish() {
    target = 1

    // never let the proof flash: at least 1.4 s of presence
    const start = performance.now()
    const reduce = reducedMotion()
    while (displayed < 0.999 || (!reduce && performance.now() - start < 1400)) {
      if (displayed < 0.999) displayed += (1 - displayed) * 0.08
      if (count) count.textContent = String(Math.min(100, Math.round(displayed * 100))).padStart(2, '0')
      if (fill) fill.style.transform = `scaleX(${displayed})`
      await wait(16)
    }

    if (count) count.textContent = '100'
    if (fill) fill.style.transform = 'scaleX(1)'
    await wait(220)

    el?.classList.add('is-done')
    if (el) {
      gsap.to(el, {
        yPercent: -100,
        duration: 1.05,
        ease: 'power4.inOut',
        delay: 0.12,
      })
    }
    await wait(1250)
    if (el) el.style.display = 'none'
    finished = true
  }

  return {
    finish,
    setProgress: (v) => {
      target = Math.max(target, v)
    },
  }
}
