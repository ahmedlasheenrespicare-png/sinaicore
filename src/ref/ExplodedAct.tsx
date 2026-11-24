/* ------------------------------------------------------------------ *
 * The exploded act: a tall scroll track whose only job is to hand the
 * scroll position to GSAP, plus the copy that scrolls over the fixed canvas.
 *
 * The timeline is a ScrollTrigger with `scrub`, so the bag's state is a pure
 * function of where the scroll bar is — scroll up and it closes again,
 * exactly as it opened. This is the property that makes the scrubbing worth
 * having: the animation can be inspected frame by frame by dragging, which
 * a time-based tween cannot.
 *
 * Everything here degrades in the right direction. No GSAP, no
 * IntersectionObserver, reduced motion — in every one of those cases the
 * act is a readable section with the bag at rest, never an empty screen.
 * ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from 'react'
import { explode } from './scrollState'
import ExplodedCanvas from './ExplodedCanvas'
import { explodeStops } from './content'

export default function ExplodedAct() {
  const track = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [step, setStep] = useState(0)

  /* mount the 3D layer only when the act is in reach, and unmount it when
     it leaves — a fixed canvas that is always alive is the expensive half
     of this architecture */
  useEffect(() => {
    const el = track.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => setActive(e.isIntersecting),
      { rootMargin: '400px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  /* the ScrollTrigger timeline. Imported dynamically so gsap is not in the
     initial bundle for a page whose top half does not use it. */
  useEffect(() => {
    const el = track.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      explode.v = 1
      setStep(explodeStops.length - 1)
      return
    }

    let st: { kill: () => void } | null = null
    let cancelled = false

    ;(async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)

      const state = { p: 0 }
      const tween = gsap.to(state, {
        p: 1,
        ease: 'none',
        /* the value is read by the render loop, not by React */
        onUpdate: () => {
          explode.v = state.p
          /* which of the copy stops the reader is inside; this is the only
             thing that re-renders, and only when the index actually changes */
          const n = explodeStops.length
          const idx = Math.min(n - 1, Math.floor(state.p * n))
          setStep((cur) => (cur === idx ? cur : idx))
        },
        scrollTrigger: {
          trigger: el,
          /* the track is 340vh; the pin lasts 240vh of it, so the act has
             room to breathe at both ends instead of starting mid-scroll */
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })
      st = { kill: () => { tween.scrollTrigger?.kill(); tween.kill() } }
    })()

    return () => {
      cancelled = true
      st?.kill()
    }
  }, [])

  return (
    <section className="ref-xact" id="assembly" aria-labelledby="assembly-title" ref={track}>
      <ExplodedCanvas active={active} />

      <div className="ref-xact-pin">
        <div className="ref-shell ref-xact-in">
          <header className="ref-xact-head">
            <span className="over mono">FIG. 01 · EXPLODED ASSEMBLY</span>
            <h2 id="assembly-title">ما الذي في الكيس</h2>
          </header>

          <ol className="ref-xact-stops">
            {explodeStops.map((s, i) => (
              <li key={s.id} className={step === i ? 'is-live' : ''}>
                <span className="n mono">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <span className="part mono">{s.part}</span>
                </div>
              </li>
            ))}
          </ol>

          {/* the empty column. Declared rather than implied by a gap so it
              is obvious in the markup that the middle of the screen is
              left clear for the object on purpose. */}
          <div className="ref-xact-space" aria-hidden="true" />

          {/* the scroll affordance: says plainly that this section is
              driven by the scroll bar, so nobody waits for a button */}
          <div className="ref-xact-hint mono" aria-hidden="true">
            <span />
            اسحب للأسفل لتفكيك الكيس
          </div>
        </div>
      </div>
    </section>
  )
}
