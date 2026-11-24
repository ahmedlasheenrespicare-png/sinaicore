/* the master scroll score — camera, explosion, ordering, specimen */

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { keyframes, frameToTween, initialFrame } from '../data/keyframes.js'
import { clamp, debounce, reducedMotion } from './utils.js'

gsap.registerPlugin(ScrollTrigger)

const SPECIMEN_BY_CHAPTER = { 5: 'tablets', 6: 'pack', 7: 'lab' }

export function createTimeline({ state, sections, onChapter, onSpecimen }) {
  const story = document.getElementById('story')
  const reduce = reducedMotion()

  Object.assign(state, frameToTween(initialFrame), { specimen: 'none' })

  function positions() {
    const vh = window.innerHeight
    const storyRect = story.getBoundingClientRect()
    const storyTop = storyRect.top + window.scrollY
    const total = Math.max(1, story.offsetHeight - vh)

    const out = [0]
    for (const section of sections) {
      const r = section.getBoundingClientRect()
      const center = r.top + window.scrollY + r.height / 2
      out.push(clamp((center - vh / 2 - storyTop) / total))
    }
    out.push(1)

    // keep the score strictly increasing, with a little air between stops
    for (let i = 1; i < out.length; i++) {
      out[i] = Math.max(out[i], out[i - 1] + 0.012)
    }
    const over = out[out.length - 1] - 1
    if (over > 0) {
      for (let i = 1; i < out.length; i++) out[i] -= (over * i) / (out.length - 1)
    }
    return out
  }

  let tl = null

  function build() {
    if (tl) {
      tl.scrollTrigger?.kill()
      tl.kill()
      tl = null
    }

    const pos = positions()
    tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: story,
        start: 'top top',
        end: 'bottom bottom',
        scrub: reduce ? true : 1.1,
        invalidateOnRefresh: true,
      },
    })

    tl.set(state, { ...frameToTween(keyframes[0]) }, 0)

    let prev = 0
    for (let i = 1; i < keyframes.length; i++) {
      const p = pos[i]
      const tween = frameToTween(keyframes[i])
      tl.to(state, { ...tween, duration: Math.max(0.001, p - prev) }, prev)
      prev = p
    }

    const last = frameToTween(keyframes[keyframes.length - 1])
    tl.to(state, { ...last, duration: Math.max(0.001, 1 - prev) }, prev)

    return tl
  }

  /* ------------------------------------------------------------------ *
   * which chapter is on screen
   *
   * One resolver instead of one ScrollTrigger per chapter: overlapping
   * trigger ranges make the "last toggle wins" order depend on refresh
   * timing, which can leave the rail blank for a whole chapter. Measuring
   * the chapters once and resolving on every scroll frame is deterministic.
   * ------------------------------------------------------------------ */

  let edges = []
  let current = null
  let dirty = true

  function measure() {
    edges = sections.map((section) => {
      const r = section.getBoundingClientRect()
      return { top: r.top + window.scrollY, h: r.height }
    })
    dirty = false
  }

  function resolve() {
    if (dirty) {
      measure()
      current = null
    }
    if (!edges.length) return
    const probe = window.scrollY + window.innerHeight * 0.5
    let index = -1
    for (let i = 0; i < edges.length; i++) {
      const e = edges[i]
      if (probe >= e.top && probe < e.top + e.h) {
        index = i
        break
      }
    }
    if (index === -1 && probe >= edges[edges.length - 1].top + edges[edges.length - 1].h) {
      index = -2 // past the last chapter: numbers, quote, footer
    }
    if (index === current) return
    current = index
    onChapter?.(index)
    onSpecimen?.(SPECIMEN_BY_CHAPTER[index] || 'none')
  }

  /* images decode lazily and move the chapters under the reader — re-measure
     whenever the document box actually changes size */
  const ro =
    typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => {
          dirty = true
          requestAnimationFrame(resolve)
        })
      : null
  ro?.observe(story)

  const resolver = ScrollTrigger.create({
    trigger: story,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: resolve,
  })

  /* ScrollTrigger only calls onUpdate while its own progress moves; a plain
     scroll listener catches the last frame of a smooth jump. */
  window.addEventListener('scroll', resolve, { passive: true })

  const onRefresh = () => {
    measure()
    current = null
    resolve()
  }
  ScrollTrigger.addEventListener('refresh', onRefresh)
  // images decode lazily and change the document height after boot
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })

  const rebuild = debounce(() => {
    build()
    ScrollTrigger.refresh()
  }, 220)

  function dispose() {
    rebuild.cancel?.()
    ro?.disconnect()
    window.removeEventListener('scroll', resolve)
    resolver.kill()
    ScrollTrigger.removeEventListener('refresh', onRefresh)
    tl?.scrollTrigger?.kill()
    tl?.kill()
  }

  return { build, rebuild, dispose, get timeline() { return tl } }
}
