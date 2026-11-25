import type Lenis from 'lenis'

/** The Lenis instance is created in App and shared with the navigation. */
export const smoothScroller: { current: Lenis | null } = { current: null }

export function scrollToTarget(target: string | number | HTMLElement, duration = 1.1) {
  if (smoothScroller.current) {
    smoothScroller.current.scrollTo(target, { duration, offset: 0 })
    return
  }

  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
  } else {
    const element = typeof target === 'string' ? document.getElementById(target) : target
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
