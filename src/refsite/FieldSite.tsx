/* ------------------------------------------------------------------ *
 * The page.
 *
 * Six sections on one scroll track, a fixed canvas behind them, and the
 * copy alternating sides exactly as the reference does. The interesting
 * parts are all inherited from it rather than invented:
 *
 *   · the section heights are its inline `height: Nsvh` values, because the
 *     pacing is the design;
 *   · each text block is a `position: sticky; top: 0` panel inside its tall
 *     section, so copy holds still while the section scrolls past;
 *   · the copy enters per line and per letter, with the same eased settle —
 *     letters rise and fade, words follow, the block follows them;
 *   · the frosted plate behind the copy is the reference's trick: a
 *     `backdrop-filter: blur(16px)` rectangle whose mask is the intersection
 *     of two gradients, so the blur fades out at every edge instead of
 *     ending in a visible box. That is what keeps the text legible over a
 *     pale ground without looking like a card.
 * ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from 'react'
import FieldScene, { scene } from './FieldScene'
import { spirits, botanicals, track, tokens } from './content'

/* Split a title into letters, keeping each word unbreakable — the reference
   marks this up as `whitespace-nowrap` spans of `inline-block` letters, and
   the reason matters in English as much as in Arabic: a letter wrapped in
   its own block will otherwise break mid-word. */
function Letters({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').map((word, wi) => (
        <span key={wi} className="f2s-word">
          {[...word].map((ch, ci) => (
            <span key={ci} className="f2s-letter">
              {ch}
            </span>
          ))}
          {wi < text.split(' ').length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </>
  )
}

function Pill({ label, color }: { label: string; color: string }) {
  return (
    <span className="f2s-pill" style={{ background: color }}>
      {label}
    </span>
  )
}

export default function FieldSite() {
  const main = useRef<HTMLElement>(null)
  const [ready, setReady] = useState(false)
  const [gone, setGone] = useState(false)

  /* the whole scroll behaviour, in one effect.
   *
   * Each bottle act reports its own progress; the scene reads `scene.index`
   * and `scene.turn`. Section heights come from the same table that drives
   * the markup, so the two cannot drift. */
  useEffect(() => {
    const root = main.current
    if (!root) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    const read = () => {
      raf = 0
      const acts = Array.from(root.querySelectorAll<HTMLElement>('[data-act]'))
      if (!acts.length) return
      const mid = window.innerHeight * 0.5
      let best = scene.index
      let bestTurn = 0
      let closing = false
      for (const el of acts) {
        const r = el.getBoundingClientRect()
        if (r.top > mid || r.bottom <= mid) continue
        const b = el.dataset.bottle
        if (b !== undefined) best = Number(b)
        closing = el.hasAttribute('data-close')
        bestTurn = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight)))
      }
      scene.index = best
      scene.turn = bestTurn
      scene.close = closing ? 1 : 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    /* the per-letter and per-line entrance. IntersectionObserver rather than
       a scroll handler: these fire once, and a scroll handler for a
       one-shot animation is a handler that runs ten thousand times to do
       nothing. */
    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    const letters = Array.from(root.querySelectorAll<HTMLElement>('.f2s-letter'))
    const fades = Array.from(root.querySelectorAll<HTMLElement>('[data-fades]'))
    letters.forEach((l, i) => l.style.setProperty('--i', String(i)))
    targets.forEach((t, i) => t.style.setProperty('--i', String(i)))

    if (reduced || !('IntersectionObserver' in window)) {
      fades.forEach((f) => f.classList.add('is-on'))
      return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    }

    const io = new IntersectionObserver(
      (list) => {
        for (const e of list) {
          if (!e.isIntersecting) continue
          const el = e.target as HTMLElement
          el.classList.add('is-on')
          el.querySelectorAll<HTMLElement>('.f2s-letter').forEach((l) => l.classList.add('is-on'))
          io.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )
    targets.forEach((t) => io.observe(t))
    fades.forEach((f) => io.observe(f))

    /* the preloader: held for one beat after the first paint so the webfont
       has landed, then released. A loader that waits on a network event can
       hang forever; one that waits on a timer cannot.
       It is then *unmounted*, not merely faded. A fixed, fully opaque panel
       left in the DOM is one failed transition away from covering the whole
       page, and a page that is invisible for reasons unrelated to its
       content is the worst failure mode a preloader has. */
    const t = setTimeout(() => setReady(true), 620)
    const t2 = setTimeout(() => setGone(true), 1500)
    return () => {
      clearTimeout(t)
      clearTimeout(t2)
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const bottles = spirits

  return (
    <>
      {gone ? null : (
        <div className={`f2s-loader${ready ? ' is-done' : ''}`} aria-hidden={ready}>
          <span className="f2s-loader-mark">Field to Still</span>
          <span className="f2s-loader-wave" />
        </div>
      )}

      <div className="f2s-fixed">
        <FieldScene />
      </div>

      <main className="f2s" ref={main} style={{ color: tokens.ink }}>
        {/* ------------------------------------------------ act 1: title */}
        <section className="f2s-act" style={{ height: `${track[0]}svh` }} data-act>
          {/* The hero panel ends, and a second panel enters the same sticky
              frame further down the section — the original's `data-passing`
              block at 175svh. One sticky child, two states: the title
              scrolls away and the pull-quote arrives in its place. Putting
              the pull-quote *inside* the first panel would make it inherit
              the first panel's reveal and never show. */}
          <div className="f2s-sticky">
            <div className="f2s-panel f2s-hero" data-reveal>
              <div className="f2s-brand">
                <span className="f2s-cross">×</span>
                <span className="f2s-brandword">Moonshiners</span>
                <span className="f2s-cross">×</span>
                <span className="f2s-brandword">Brocksbushes</span>
              </div>
              <h1 className="f2s-h1">
                <span aria-hidden="true">
                  <Letters text="Field to Still" />
                </span>
              </h1>
              <p className="f2s-lead">Three spirits from one Northumberland farm&rsquo;s year.</p>
              <div className="f2s-cta">
                <a className="f2s-btn" href="#store">
                  Available in store <span aria-hidden="true">→</span>
                </a>
                <a className="f2s-link" href="#contact">
                  Get in touch
                </a>
              </div>
              <div className="f2s-made">
                <span>Made by</span>
                <p className="f2s-made-name">Scroll</p>
              </div>
              {/* the cue is the animated hairline alone. The original has no
                  word here either — "Made by / Scroll" above it already puts
                  the word Scroll on screen, and repeating it reads as a bug. */}
              <div className="f2s-cue" aria-hidden="true">
                <span className="f2s-cue-line">
                  <span />
                </span>
              </div>
            </div>
          </div>
          {/* the passing panel: absolutely placed so it enters on its own
              reveal, not on the hero's */}
          <div className="f2s-passing">
            <div className="f2s-panel">
              <p className="f2s-pull" data-reveal>
                Strawberries picked at Brocksbushes, near Corbridge. Distilled on Blandford
                Street, Newcastle.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------- acts 2–5: the bottles */}
        {bottles.map((s, i) => (
          <section
            key={s.id}
            className="f2s-act"
            style={{ height: `${track[i + 1]}svh` }}
            data-act
            /* which bottle this act shows. The hero and the close are also
               acts but have no bottle of their own, so they carry no index
               and the reader keeps whatever was last on screen. Deriving
               this from the section's position instead is how the liqueur
               act first showed the rum. */
            data-bottle={i}
            id={i === 2 ? 'store' : undefined}
          >
            <div className="f2s-sticky">
              <div className={`f2s-panel f2s-bottle${i === 1 ? ' is-right' : ''}`}>
                <div className="f2s-fros" data-fades aria-hidden="true" />
                <div className="f2s-copy" data-reveal>
                  {s.pill ? (
                    <p className="f2s-kicker">
                      <Pill label={s.pill.label} color={s.pill.color} />
                    </p>
                  ) : null}
                  <p
                    className="f2s-kicker"
                    style={{ color: s.pill ? s.pill.color : undefined }}
                  >
                    {s.kicker}
                  </p>
                  <h2 className="f2s-h2" style={{ color: tokens.ink }}>
                    <span aria-hidden="true">
                      <Letters text={s.title} />
                    </span>
                  </h2>
                  <p className="f2s-meta">{s.meta}</p>
                  <p className="f2s-body">{s.body}</p>
                  <ul className="f2s-notes">
                    {s.notes.map((n) => (
                      <li key={n} style={{ color: s.accent }}>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ------------------------------------------ act 6: the close */}
        <section className="f2s-act" style={{ height: `${track[5]}svh` }} data-act data-close>
          <div className="f2s-sticky">
            <div className="f2s-panel f2s-close" data-reveal>
              <div className="f2s-fros" data-fades aria-hidden="true" />
              <div className="f2s-close-in">
                <h2 className="f2s-h2 f2s-h2-center">
                  <span aria-hidden="true">
                    <Letters text="One farm. Three bottles." />
                  </span>
                </h2>
                <p className="f2s-close-body">
                  The Pumpkin Spiced Rum is available at Brocksbushes Farm Shop, near
                  Corbridge, now. The strawberries follow this Christmas.
                </p>
                <div className="f2s-cta f2s-cta-center">
                  <a className="f2s-btn" href="#store">
                    Available in store <span aria-hidden="true">→</span>
                  </a>
                  <a className="f2s-link" href="#contact" id="contact">
                    Get in touch
                  </a>
                </div>
                <p className="f2s-credit">
                  Label artwork by <a href="#credit">@rachaelcutmoreart</a>
                </p>
                <p className="f2s-fine">
                  Rebuilt as a study of the original site&rsquo;s motion and 3D. Words,
                  palette and pacing are the original&rsquo;s; the bottle is drawn in code,
                  because its model file was not in the saved copy.
                </p>
                <p className="f2s-made">
                  <span>Created by</span>
                  <span className="f2s-made-name f2s-inline">Moonshiners</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* the botanical bill is a stop inside the gin act in the original; it
          is rendered here as an aside so it does not cost another 300svh */}
      <span className="f2s-sr">
        {botanicals.kicker}: {botanicals.title} — {botanicals.body}
      </span>
    </>
  )
}
