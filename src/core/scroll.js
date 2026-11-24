/* smooth scroll — Lenis driving GSAP's ScrollTrigger */

import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reducedMotion } from './utils.js'

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
})

export function createScroll() {
  const reduce = reducedMotion()

  const lenis = new Lenis({
    duration: 1.15,
    lerp: reduce ? 1 : 0.085,
    wheelMultiplier: 1,
    touchMultiplier: 1.15,
    smoothWheel: !reduce,
    syncTouch: false,
    autoRaf: false,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  const scrollTo = (target, options = {}) => {
    if (typeof target === 'number') {
      lenis.scrollTo(target, {
        offset: 0,
        duration: reduce ? 0 : 1.55,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        ...options,
      })
      return
    }
    const el = typeof target === 'string' ? document.querySelector(target) : target
    if (!el) return
    lenis.scrollTo(el, {
      offset: 0,
      duration: reduce ? 0 : 1.55,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      ...options,
    })
  }

  return {
    lenis,
    scrollTo,
    start: () => lenis.start(),
    stop: () => lenis.stop(),
    resize: () => {
      ScrollTrigger.refresh()
    },
  }
}
