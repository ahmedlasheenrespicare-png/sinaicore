import { useEffect, useMemo, useRef, useState } from 'react'
import {
  chapters,
  colophon,
  entries,
  hero,
  nav,
  numbers,
  quote,
  type Block,
} from './content'

/* stacked prev / next — the reference keeps one at the bottom corner */
function Jump({ chapter, onGo, on }: { chapter: number; onGo: (i: number) => void; on: boolean }) {
  const last = chapters.length - 1
  return (
    <div className={`jump${on ? ' is-on' : ''}`}>
      <button
        type="button"
        onClick={() => onGo(Math.max(0, chapter - 1))}
        disabled={chapter === 0}
        aria-label="الفصل السابق"
        style={{ opacity: chapter === 0 ? 0.3 : 1 }}
      >
        ↑
      </button>
      <button
        type="button"
        onClick={() => onGo(Math.min(last, chapter + 1))}
        disabled={chapter === last}
        aria-label="الفصل التالي"
        style={{ opacity: chapter === last ? 0.3 : 1 }}
      >
        ↓
      </button>
    </div>
  )
}

/* Latin-only values (phone, e-mail, standards codes) must not be reordered by
   the RTL paragraph direction, so they are isolated and forced LTR. */
const AR = /[\u0600-\u06FF]/
function Val({ v }: { v: string }) {
  return AR.test(v) ? <>{v}</> : <span dir="ltr">{v}</span>
}

/* ------------------------------------------------------------------ *
 * one block of a chapter's body — paragraphs, plates, margin notes,
 * pull quotes and the little definition tables
 * ------------------------------------------------------------------ */
function BlockView({ b, noteIndex, marked }: { b: Block; noteIndex: number; marked?: string[] }) {
  if (b.kind === 'p') {
    /* Arabic is cursive: a floated ::first-letter would break the joining of
       the first word. Instead the whole opening word is set large on the
       first line, so the letter forms stay correct. */
    const cut = b.drop ? b.text.indexOf(' ') : -1
    const first = cut > 0 ? b.text.slice(0, cut) : ''
    const rest = cut > 0 ? b.text.slice(cut) : b.text
    return (
      <p className={b.drop ? 'opening rise' : 'rise'}>
        {first && <span className="opener">{first}</span>}
        {rest}
        {marked?.map((n) => (
          <sup className="fn" key={n}>
            <a href={`#note-${n}`} style={{ border: 0 }}>
              {n}
            </a>
          </sup>
        ))}
      </p>
    )
  }
  if (b.kind === 'note') {
    return (
      <aside className="note rise" id={`note-${b.n}`}>
        <span className="n">ملاحظة {b.n}</span>
        <h4>{b.title}</h4>
        <p>{b.text}</p>
      </aside>
    )
  }
  if (b.kind === 'quote') {
    return (
      <figure className="pull rise">
        <p>{b.text}</p>
        <cite>{b.cite}</cite>
      </figure>
    )
  }
  if (b.kind === 'rows') {
    return (
      <div className="rows rise">
        <h4>{b.title}</h4>
        <dl>
          {b.rows.map(([k, v]) => (
            <div className="r" key={k}>
              <dt>{k}</dt>
              <dd>
                <Val v={v} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }
  return (
    <figure className={`fig rise${b.bare ? ' bare' : ''}`} data-note={noteIndex}>
      <div className="frame" style={b.ratio ? { aspectRatio: b.ratio } : undefined}>
        <span className="plate" aria-hidden="true" />
        <img src={b.src} alt={b.alt} loading="lazy" decoding="async" />
      </div>
      <figcaption>{b.caption}</figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------------ *
 * a chapter: reading column + sticky margin
 * ------------------------------------------------------------------ */
function ChapterView({
  ch,
  index,
  marks,
}: {
  ch: (typeof chapters)[number]
  index: number
  marks: Record<number, string[]>
}) {
  return (
    <section className="chapter" id={ch.id} data-index={index}>
      <div className="shell row">
        <div className="body">
          <p className="lead rise">{ch.lead}</p>
          {ch.blocks.map((b, i) => (
            <BlockView key={i} b={b} noteIndex={i} marked={marks[i]} />
          ))}
        </div>
        <div className="margin">
          <div className="margin-in">
            <div className="chapter-head">
              <span className="n">{ch.n}</span>
              <h2>{ch.title}</h2>
              <p>{ch.sub}</p>
            </div>
            <ol className="chapter-list">
              {entries.map((e, i) => (
                <li key={e.n} className={i === index ? 'is-on' : undefined}>
                  <a href={`#${chapters[i].id}`}>
                    <span className="i">{e.n}</span>
                    <span className="t">{e.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function NotesApp() {
  const [pinned, setPinned] = useState(false)
  const [here, setHere] = useState<string>('')
  const [chapter, setChapter] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  const goChapter = (i: number) => {
    const el = document.getElementById(chapters[i]?.id ?? '')
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /* one scroll journal for the whole document: progress hairline, the
     header's pinned state, the current chapter and the corner status */
  useEffect(() => {
    let raf = 0
    const read = () => {
      raf = 0
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--p', String(max > 0 ? y / max : 0))
      setPinned(y > 12)
      setScrolled(y > window.innerHeight * 0.6)

      const secs = Array.from(document.querySelectorAll<HTMLElement>('.chapter'))
      let current = 0
      for (let i = 0; i < secs.length; i++) {
        const r = secs[i].getBoundingClientRect()
        if (r.top <= window.innerHeight * 0.42) current = i
      }
      setChapter(current)
      const near: string[] = []
      for (const id of ['intro', 'notes', 'numbers', 'quote']) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) near.push(id)
      }
      setHere(near[near.length - 1] ?? '')
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  /* reveals — the only motion on the page besides the figures' slow zoom */
  useEffect(() => {
    const els = Array.from(root.current?.querySelectorAll('.rise') ?? [])
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (list) => {
        for (const e of list) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])

  /* footnote markers: sup numbers are inserted after the paragraphs that
     own a margin note, matching the reference's sup.fig behaviour */
  const marks = useMemo(
    () =>
      chapters.map((c) => {
        const out: Record<number, string[]> = {}
        c.blocks.forEach((b, i) => {
          if (b.kind !== 'note') return
          // hang the marker on the nearest preceding paragraph
          let j = i - 1
          while (j >= 0 && c.blocks[j].kind !== 'p') j--
          const at = j >= 0 ? j : i
          ;(out[at] ||= []).push(b.n)
        })
        return out
      }),
    [],
  )

  return (
    <div ref={root}>
      <div className="progress" aria-hidden="true">
        <i />
      </div>

      <header className={`head${pinned ? ' is-pinned' : ''}`}>
        <div className="shell head-in">
          <span className="count" aria-hidden="true">
            <b>{entries[chapter]?.n ?? '01'}</b>
          </span>
          <a className="wordmark" href="#intro" aria-label="SinaiCore — ملاحظات الميدان">
            <b>SinaiCore</b>
            <span className="dash" aria-hidden="true" />
            <span style={{ fontFamily: 'var(--f-ar)' }}>ملاحظات الميدان</span>
          </a>
          <nav aria-label="التنقل">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className={here === n.href.slice(1) ? 'is-here' : undefined}>
                {n.label}
              </a>
            ))}
            <span className="lang" aria-hidden="true">
              <span>ع</span>
              <span>EN</span>
            </span>
          </nav>
        </div>
      </header>

      <main>
        {/* ---------------------------------------------------- hero */}
        <section className="hero" id="intro">
          <div className="shell">
            <div className="kicker mono">
              <em>{hero.kicker}</em>
            </div>
            <h1>
              <span>{hero.line1}</span>
              <span>{hero.line2}</span>
            </h1>
            <div className="hero-grid">
              <div className="lede-wrap">
                <p className="lede">{hero.lede}</p>
                <a className="start" href="#notes">
                  <span className="dot" aria-hidden="true" />
                  <span>{hero.cta}</span>
                  <small>{hero.ctaSub}</small>
                </a>
              </div>
              <ol className="hero-contents">
                <li className="hc-head mono">المحتويات</li>
                {entries.map((e, i) => (
                  <li key={e.n}>
                    <a href={`#${chapters[i].id}`}>
                      <span className="i mono">{e.n}</span>
                      <span className="t">{e.title}</span>
                      <span className="d" aria-hidden="true" />
                      <span className="s">{e.sub}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <dl className="hero-meta">
                {hero.meta.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* --------------------------------------- full-bleed plate */}
        <figure className="band">
          <div className="frame">
            <img src={hero.band.src} alt={hero.band.alt} loading="lazy" decoding="async" />
            <span className="tag mono">{hero.band.tag}</span>
          </div>
          <figcaption className="shell">
            <span className="mono">BRINE</span>
            <p>{hero.band.caption}</p>
          </figcaption>
        </figure>

        {/* --------------------------------------------------- notes */}
        <div className="notes" id="notes">
          {chapters.map((ch, i) => (
            <ChapterView key={ch.id} ch={ch} index={i} marks={marks[i]} />
          ))}
        </div>

        {/* ------------------------------------------------- numbers */}
        <section className="numbers" id="numbers">
          <div className="shell">
            <h2>{numbers.title}</h2>
            <p className="sub">{numbers.sub}</p>
            <div className="grid">
              {numbers.rows.map(([k, v]) => (
                <div className="r" key={k}>
                  <span>{k}</span>
                  <b>
                    <Val v={v} />
                  </b>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------- quote */}
        <section className="quote-sec" id="quote">
          <div className="shell row">
            <div className="body">
              <h2>{quote.title}</h2>
              <p>{quote.body}</p>
              <a className="btn" href="mailto:info@sinaicore.com?subject=SinaiCore%20RFQ">
                {quote.cta}
                <span className="arw" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
            <dl className="quote-meta">
              {quote.meta.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>
                    <Val v={v} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <footer className="shell colophon">
          <div className="mark">
            <b>{colophon.line1}</b>
            <span className="dash" aria-hidden="true" />
            <span className="lat" dir="ltr">
              {colophon.line2}
            </span>
          </div>
          <p>{colophon.note}</p>
          <ul>
            {colophon.links.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </footer>
      </main>

      <Jump chapter={chapter} onGo={(i) => goChapter(i)} on={scrolled} />

      <div className={`status${scrolled ? ' is-on' : ''}`} aria-hidden="true">
        <span>
          فصل <b>{entries[chapter]?.n}</b>
        </span>
        <span>{entries[chapter]?.title}</span>
        <span>
          {String(chapter + 1).padStart(2, '0')} / {String(entries.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
