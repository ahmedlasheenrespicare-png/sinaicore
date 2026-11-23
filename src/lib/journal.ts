/**
 * Scroll journal — a single source of truth for the timeline.
 *
 * The page is a normal document; this module only *observes* it. It writes two
 * custom properties onto <html> every frame:
 *
 *   --w          global weighted scroll progress, 0 → 1
 *   --scroll-s   smoothed scroll offset in px (used by the side rail)
 *
 * Elements opt in with data attributes:
 *   data-track="name"        → element's own 0..1 progress through the viewport
 *   data-reveal              → toggles .is-in when the element enters
 *
 * Everything is rAF-throttled and reads layout only when the DOM changes size,
 * so scrolling stays at 60fps even with the WebGL canvas running.
 */

const tracks = new Map<string, HTMLElement[]>()
const reveals = new Set<HTMLElement>()
let raf = 0
let manual = false

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v
}

function measure() {
  const vh = window.innerHeight
  const max = Math.max(1, document.documentElement.scrollHeight - vh)

  for (const [name, els] of tracks) {
    for (const el of els) {
      const r = el.getBoundingClientRect()
      // progress: 0 when the top hits the bottom of the viewport,
      // 1 when the bottom leaves the top.
      const span = r.height + vh
      const p = clamp01((vh - r.top) / span)
      el.style.setProperty(`--track-${name}`, p.toFixed(4))
      if (name === 'scene') el.style.setProperty('--p', p.toFixed(4))
    }
  }

  const y = window.scrollY
  document.documentElement.style.setProperty('--scroll-s', `${y}px`)
  document.documentElement.style.setProperty('--scroll-max', `${max}px`)

  // coarse "scroll velocity" used for motion blur / light streaks
  const v = Math.min(1, Math.abs(y - lastY) / 60)
  lastY = y
  velocity = velocity * 0.86 + v * 0.14
  document.documentElement.style.setProperty('--vel', velocity.toFixed(4))

  // section index for the chapter rail
  let active = 0
  sceneEls.forEach((el, i) => {
    const r = el.getBoundingClientRect()
    if (r.top <= vh * 0.45) active = i
  })
  document.documentElement.style.setProperty('--chapter', String(active))
  if (active !== activeChapter) {
    activeChapter = active
    onChange?.(active)
  }
}
let lastY = 0
let velocity = 0
let activeChapter = -1
let onChange: ((i: number) => void) | null = null
let sceneEls: HTMLElement[] = []

function loop() {
  raf = 0
  if (manual) return
  measure()
}

function schedule() {
  if (!raf) raf = requestAnimationFrame(loop)
}

export const journal = {
  tracks,
  observe() {
    sceneEls = Array.from(document.querySelectorAll<HTMLElement>('[data-chapter]'))
    tracks.clear()
    reveals.clear()
    for (const el of document.querySelectorAll<HTMLElement>('[data-track]')) {
      const name = el.dataset.track!
      if (!tracks.has(name)) tracks.set(name, [])
      tracks.get(name)!.push(el)
    }
    for (const el of document.querySelectorAll<HTMLElement>('[data-reveal]')) reveals.add(el)

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )
    for (const el of reveals) io.observe(el)

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    measure()
    schedule()
  },
  /** used while a scroll-driven animation scrubs the page programmatically */
  setManual(v: boolean) {
    manual = v
    if (!v) schedule()
  },
  onChange(cb: (i: number) => void) {
    onChange = cb
  },
  refresh: schedule,
  get progress() {
    return readNum('--w')
  },
}

function readNum(name: string) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name)
  return parseFloat(raw) || 0
}
