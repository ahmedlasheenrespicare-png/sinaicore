/* ------------------------------------------------------------------ *
 * The page.
 *
 * The reference's skeleton, in Arabic, for a salt exporter:
 *
 *   · six sections on one tall track, the same svh ratios;
 *   · a sticky panel inside each, so copy holds while the section passes;
 *   · display type split into letters — which for Arabic is *not* the same
 *     operation as for English. Arabic is a connected script: splitting a
 *     word into per-letter inline-blocks severs every join and the word comes
 *     out as isolated glyphs. So the reveal here is per *word* and per
 *     *line*, with the letters only ever split inside a word whose own
 *     shaping survives. That constraint is the reason this page does not
 *     simply copy the reference's letter stagger.
 * ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from 'react'
import SaltScene, { saltScene } from './SaltScene'
import { products, analysis, hero, close, track, tokens } from './content'

/* Words are the unit: `inline-block` on a whole word keeps its internal
   joins intact. Within the word, each glyph is wrapped only to be able to
   stagger it — and the wrapper must not break the run, so no letter here
   gets `display:inline-block` with its own box; the browser keeps the
   shaping and we animate the word. */
function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').map((w, i) => (
        <span className="s3-word" key={i}>
          {w}
          {'\u00A0'}
        </span>
      ))}
    </>
  )
}

export default function SaltSite() {
  const main = useRef<HTMLElement>(null)
  const [ready, setReady] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const root = main.current
    if (!root) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    const read = () => {
      raf = 0
      const acts = Array.from(root.querySelectorAll<HTMLElement>('[data-act]'))
      if (!acts.length) return
      /* Pick the act that owns the centre line, then keep its product until
         the *next* act's product genuinely takes over. Iterating and letting
         the last match win let the analysis act, which has no product, hand
         the index back to the previous one mid-scroll — the sack vanished
         while its own copy was still on screen. */
      const mid = window.innerHeight * 0.5
      let owner: HTMLElement | null = null
      for (const el of acts) {
        const r = el.getBoundingClientRect()
        if (r.top <= mid && r.bottom > mid) owner = el
      }
      let best = saltScene.index
      let turn = 0
      let closing = 0
      if (owner) {
        const b = owner.dataset.product
        /* a product act claims its bottle; a non-product act (hero, analysis,
           close) leaves whichever bottle was last on screen in place, so the
           plate never goes blank between acts */
        if (b !== undefined) best = Number(b)
        closing = owner.hasAttribute('data-close') ? 1 : 0
        const r = owner.getBoundingClientRect()
        turn = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight)))
      }
      saltScene.index = best
      saltScene.turn = turn
      saltScene.close = closing
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const fades = Array.from(root.querySelectorAll<HTMLElement>('[data-fades]'))
    const reveals = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    reveals.forEach((r, i) => r.style.setProperty('--i', String(i)))

    if (reduced || !('IntersectionObserver' in window)) {
      fades.forEach((f) => f.classList.add('is-on'))
      reveals.forEach((r) => r.classList.add('is-on'))
      return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    }

    const io = new IntersectionObserver(
      (list) => {
        for (const e of list) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-on')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0 },
    )
    fades.forEach((f) => io.observe(f))
    reveals.forEach((r) => io.observe(r))

    const t1 = setTimeout(() => setReady(true), 700)
    const t2 = setTimeout(() => setGone(true), 1600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      {gone ? null : (
        <div className={`s3-loader${ready ? ' is-done' : ''}`} aria-hidden={ready}>
          <span className="s3-loader-mark">SinaiCore</span>
          <span className="s3-loader-wave" />
        </div>
      )}

      <div className="s3-fixed">
        <SaltScene />
      </div>

      <main className="s3" ref={main} dir="rtl">
        {/* ------------------------------------------------ act 1: title */}
        <section className="s3-act" style={{ height: `${track[0]}svh` }} data-act>
          <div className="s3-sticky">
            <div className="s3-panel s3-hero" data-reveal>
              <div className="s3-brand">
                <span className="s3-brandname">SinaiCore</span>
                <span className="s3-cross">·</span>
                <span className="s3-brandsub">{hero.brand[1]}</span>
              </div>
              <h1 className="s3-h1">
                <span aria-label={hero.title}>
                  <Words text={hero.title} />
                </span>
              </h1>
              <p className="s3-lead">{hero.lead}</p>
              <div className="s3-cta">
                <a className="s3-btn" href="#grades">
                  {hero.cta} <span aria-hidden="true">←</span>
                </a>
                <a className="s3-link" href="#quote">
                  {hero.cta2}
                </a>
              </div>
              <div className="s3-made">
                <span>{hero.madeBy}</span>
                <b>{hero.madeValue}</b>
              </div>
              <div className="s3-cue" aria-hidden="true">
                <span className="s3-cue-line">
                  <span />
                </span>
              </div>
            </div>
          </div>
          {/* the second hero state, at the reference's 175svh */}
          <div className="s3-passing">
            <div className="s3-panel">
              <p className="s3-pull" data-reveal>
                {hero.passing}
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------- acts 2–4: the products */}
        {products.map((p, i) => (
          <section
            key={p.id}
            className="s3-act"
            style={{ height: `${track[i + 1]}svh` }}
            data-act
            data-product={i}
            id={i === 0 ? 'grades' : undefined}
          >
            <div className="s3-sticky">
              <div className={`s3-panel s3-product${i === 1 ? ' is-left' : ''}`}>
                <div className="s3-fros" data-fades aria-hidden="true" />
                <div className="s3-copy" data-reveal>
                  {p.pill ? (
                    <p className="s3-kicker">
                      <span className="s3-pill" style={{ background: p.pill.color }}>
                        {p.pill.label}
                      </span>
                    </p>
                  ) : null}
                  <p className="s3-kicker" style={{ color: p.pill ? p.pill.color : undefined }}>
                    {p.kicker}
                  </p>
                  <h2 className="s3-h2">
                    <span aria-label={p.title}>
                      <Words text={p.title} />
                    </span>
                  </h2>
                  <p className="s3-meta" dir="ltr">
                    {p.meta}
                  </p>
                  <p className="s3-body">{p.body}</p>
                  <dl className="s3-specs">
                    {p.specs.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd dir="ltr" style={{ color: p.accent }}>
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* -------------------------------------- act 5: the analysis */}
        <section className="s3-act" style={{ height: `${track[4]}svh` }} data-act>
          <div className="s3-sticky">
            <div className="s3-panel s3-analysis">
              <div className="s3-fros" data-fades aria-hidden="true" />
              <div className="s3-copy s3-analysis-in" data-reveal>
                <p className="s3-kicker">{analysis.kicker}</p>
                <h2 className="s3-h2">
                  <span aria-label={analysis.title}>
                    <Words text={analysis.title} />
                  </span>
                </h2>
                <p className="s3-body">{analysis.body}</p>
                <ul className="s3-rows">
                  {analysis.rows.map(([k, v]) => (
                    <li key={k}>
                      <span>{k}</span>
                      <b dir="ltr">{v}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------ act 6: the close */}
        <section
          className="s3-act"
          style={{ height: `${track[5]}svh` }}
          data-act
          data-close
          id="quote"
        >
          <div className="s3-sticky">
            <div className="s3-panel s3-close" data-reveal>
              <div className="s3-fros" data-fades aria-hidden="true" />
              <div className="s3-close-in">
                <h2 className="s3-h2 s3-h2-center">
                  <span aria-label={close.title}>
                    <Words text={close.title} />
                  </span>
                </h2>
                <p className="s3-close-body">{close.body}</p>
                <div className="s3-cta s3-cta-center">
                  <a className="s3-btn" href="mailto:sales@sinaicore.com">
                    {close.cta} <span aria-hidden="true">←</span>
                  </a>
                  <a className="s3-link" href="mailto:sales@sinaicore.com">
                    {close.cta2}
                  </a>
                </div>
                <p className="s3-credit">{close.credit}</p>
                <p className="s3-made s3-made-center">
                  <span>الشحن من</span>
                  <b dir="ltr">ARISH · SUEZ</b>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
