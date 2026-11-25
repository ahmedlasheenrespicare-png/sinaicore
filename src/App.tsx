import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { chapters, specRows } from './data/chapters'
import { CHAPTER_COUNT, clamp, story } from './story'
import { sceneAt, positionForPhase, STORY_LENGTH } from './motion/scene'
import { smoothScroller, scrollToTarget } from './lib/smoothScroll'
import Scene from './components/Scene'
import Overlay from './components/Overlay'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import SpecCard from './components/SpecCard'
import { specSheets } from './data/specs'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [active, setActive] = useState(0)
  const [ready, setReady] = useState(false)
  const [preloaderVisible, setPreloaderVisible] = useState(true)
  const [specId, setSpecId] = useState<string | null>(null)
  const progressRef = useRef<HTMLSpanElement>(null)
  const [webglSupported] = useState(() => {
    try {
      const canvas = document.createElement('canvas')
      return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
    } catch {
      return false
    }
  })

  /* Hold the curtain until the actual assets are in the browser cache. */
  useEffect(() => {
    let cancelled = false
    const started = performance.now()
    const image = new Image()
    image.src = '/plates/01-sea.jpg'
    const imageReady = new Promise<void>((resolve) => {
      image.onload = () => resolve()
      image.onerror = () => resolve()
    })
    const fontReady = document.fonts?.ready ?? Promise.resolve()
    const modelReady = fetch('/models/salt-crystal.glb')
      .then(() => undefined)
      .catch(() => undefined)

    Promise.all([imageReady, fontReady, modelReady]).then(async () => {
      const remaining = Math.max(0, 1250 - (performance.now() - started))
      if (remaining) await new Promise((resolve) => setTimeout(resolve, remaining))
      if (!cancelled) setReady(true)
    })

    // Never let a slow third-party font hold the curtain forever.
    const failsafe = window.setTimeout(() => {
      if (!cancelled) setReady(true)
    }, 4200)

    return () => {
      cancelled = true
      window.clearTimeout(failsafe)
    }
  }, [])

  useEffect(() => {
    story.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const onPointer = (event: PointerEvent) => {
      story.pointerX = (event.clientX / window.innerWidth - 0.5) * 2
      story.pointerY = (0.5 - event.clientY / window.innerHeight) * 2
    }
    window.addEventListener('pointermove', onPointer, { passive: true })
    return () => window.removeEventListener('pointermove', onPointer)
  }, [])

  /* A 3D hotspot dispatches this event; the card itself is plain DOM. */
  useEffect(() => {
    const onSpec = (event: Event) => {
      setSpecId((event as CustomEvent<string>).detail)
    }
    window.addEventListener('sinaicore:spec', onSpec)
    return () => window.removeEventListener('sinaicore:spec', onSpec)
  }, [])

  /* Lenis is the reference's smooth-scroll engine. Its rAF is driven by the
   * same GSAP ticker as the scrub, so DOM and canvas never disagree. */
  useEffect(() => {
    if (story.reducedMotion) return
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      respectReducedMotion: true,
    })
    smoothScroller.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      smoothScroller.current = null
    }
  }, [])

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      /* One timeline playhead spans the whole story in "screens". sceneAt()
       * below expands that single number into the individual motion channels. */
      const playhead = { position: 0 }
      const timeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
      timeline.to(playhead, { position: STORY_LENGTH, duration: 1 })
      timeline.eventCallback('onUpdate', () => {
        story.position = playhead.position
        story.progress = playhead.position / STORY_LENGTH
        const state = sceneAt(story.position)
        story.phase = state.phase
        story.targetPhase = state.phase
      })

      const proxy = { position: 0 }
      const scrubTo = (value: number) => {
        gsap.to(proxy, {
          position: value,
          duration: story.reducedMotion ? 0 : 0.45,
          ease: 'power1.out',
          overwrite: true,
          onUpdate: () => timeline.progress(proxy.position),
        })
      }

      /* Steps have different heights, so keyframes are placed between the
       * measured centres of the real DOM sections. */
      let centres: number[] = []
      const measure = () => {
        centres = chapters.map((chapter) => {
          const rect = document.getElementById(chapter.id)!.getBoundingClientRect()
          return rect.top + window.scrollY + rect.height / 2
        })
      }
      measure()

      ScrollTrigger.create({
        trigger: '#steps',
        start: 'top top',
        end: 'bottom bottom',
        invalidateOnRefresh: true,
        onRefreshInit: measure,
        onUpdate: (self) => {
          story.progress = self.progress
          const focus = window.scrollY + window.innerHeight / 2
          let phase = 0
          if (focus <= centres[0]) {
            phase = 0
          } else if (focus >= centres[centres.length - 1]) {
            phase = CHAPTER_COUNT - 1
          } else {
            for (let i = 0; i < centres.length - 1; i++) {
              if (focus >= centres[i] && focus <= centres[i + 1]) {
                phase = i + (focus - centres[i]) / (centres[i + 1] - centres[i])
                break
              }
            }
          }
          const safePhase = clamp(phase, 0, CHAPTER_COUNT - 1)
          scrubTo(positionForPhase(safePhase) / STORY_LENGTH)
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${Math.max(0.001, self.progress)})`
          }
        },
      })

      chapters.forEach((chapter, index) => {
        ScrollTrigger.create({
          trigger: `#${chapter.id}`,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) setActive(index)
          },
        })
      })

      gsap.to('.hero-copy', {
        opacity: 0,
        y: -48,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      })

      return () => timeline.kill()
    })

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    return () => {
      window.removeEventListener('load', refresh)
      context.revert()
    }
  }, [])

  const hidePreloader = useCallback(() => setPreloaderVisible(false), [])

  return (
    <div className="app">
      <div className="scene-shell">
        {webglSupported ? (
          <Scene />
        ) : (
          <div
            className="static-scene"
            style={{ backgroundImage: `url(${chapters[active].plate})` }}
          />
        )}
      </div>
      <div className="grain" aria-hidden="true" />
      <div className="top-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
      <Overlay active={active} />

      <main className="content">
        <section className="hero" id="top">
          <div className="hero-topline">
            <span>SINAICORE — SINAI, EGYPT</span>
            <span>29°N / 32°E · EST. 2026</span>
          </div>
          <div className="hero-copy">
            <p className="kicker">A MATERIAL STORY IN EIGHT CHAPTERS</p>
            <h1>
              من ماء البحر
              <em>إلى ملح المائدة</em>
            </h1>
            <p className="hero-lede">
              ثمانية فصول في تحوّل مادة واحدة: من حوضٍ فيروزي على ساحل سيناء،
              إلى بلورةٍ شفّافة، إلى شكارةٍ مُختومة تحمل الاسم إلى أبعد مائدة.
            </p>
            <div className="hero-meta">
              <span>READING TIME · 8 MIN</span>
              <span>MEDIUM · NaCl</span>
              <span>SCROLL · SCRUB · TRANSFORM</span>
            </div>
            <div className="scroll-cue">
              <span className="scroll-cue-line" />
              <span>اسحب للأسفل لتبدأ الرحلة</span>
            </div>
          </div>
        </section>

        <div className="steps" id="steps">
          {chapters.map((chapter, index) => (
            <section
              key={chapter.id}
              id={chapter.id}
              className={`step${index % 2 === 1 ? ' step--flip' : ''}${active === index ? ' is-active' : ''}`}
              aria-labelledby={`${chapter.id}-title`}
            >
              <div className="step-text">
                <div className="step-head">
                  <span className="step-index">{chapter.number}</span>
                  <div>
                    <p className="step-eyebrow">{chapter.eyebrow}</p>
                    <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
                  </div>
                </div>
                <p className="step-lead">{chapter.lead}</p>
                <p className="step-body">{chapter.body}</p>
                {chapter.note && <blockquote className="step-note">{chapter.note}</blockquote>}
                <div className="step-stats">
                  {chapter.stats.map((stat) => (
                    <div key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
                {chapter.spec && (
                  <div className="spec-table">
                    <div className="spec-head">
                      <span>CERTIFICATE OF ANALYSIS</span>
                      <span>LOT SC-08</span>
                    </div>
                    {specRows.map(([label, value]) => (
                      <div className="spec-row" key={label}>
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <figure className="step-plate">
                <div className="figure-image">
                  <img
                    src={chapter.plate}
                    alt={chapter.caption}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
                <figcaption>
                  <span>PLATE / {chapter.number}</span>
                  <span>{chapter.caption}</span>
                </figcaption>
              </figure>
            </section>
          ))}
        </div>

        <section className="colophon">
          <p className="kicker">COLOPHON / END OF STORY</p>
          <h2>
            ملحٌ يبدأ من سيناء،
            <em>وينتهي على كل مائدة.</em>
          </h2>
          <p className="colophon-text">ثمانية فصول، ومادة واحدة، وطريقٌ لا يختصره إلا التمرير.</p>
          <div className="colophon-actions">
            <button type="button" onClick={() => scrollToTarget(0)}>
              أعد الرحلة <span aria-hidden="true">↥</span>
            </button>
            <span>SINAICORE © 2026 · PRODUCT OF EGYPT</span>
          </div>
        </section>
      </main>

      <SpecCard
        sheet={specSheets.find((sheet) => sheet.id === specId) ?? null}
        onClose={() => setSpecId(null)}
      />
      <Cursor />
      {preloaderVisible && <Preloader ready={ready} onDone={hidePreloader} />}
    </div>
  )
}
