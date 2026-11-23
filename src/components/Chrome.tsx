import { useEffect, useState } from 'react'
import { chapters } from '../data/content'

/** Fixed top header: wordmark, live status, and the "order" action. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="brand" aria-label="SinaiCore — الصفحة الرئيسية">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
            <path d="M16 2.5 27.7 9.3v13.4L16 29.5 4.3 22.7V9.3L16 2.5Z" stroke="currentColor" strokeWidth="1.2" />
            <path d="M16 2.5v27M4.3 9.3l11.7 6.8 11.7-6.8M4.3 22.7l11.7-6.6 11.7 6.6" stroke="currentColor" strokeWidth="0.7" opacity=".45" />
          </svg>
        </span>
        <span className="brand-word">
          <b>SINAI<span>CORE</span></b>
          <i>ملح سيناء الخام · North Sinai</i>
        </span>
      </a>

      <div className="header-right">
        <span className="header-status mono">
          <em /> EXPORT READY · AR-2026
        </span>
        <a className="header-cta" href="#contact">
          <span className="cta-long">طلب عرض سعر</span>
          <span className="cta-short">عرض سعر</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
          </svg>
        </a>
        <button className={`menu-btn ${open ? 'is-open' : ''}`} onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="site-menu">
          <span />
          <span />
        </button>
      </div>

      <nav id="site-menu" className={`site-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        {chapters.map((c) => (
          <a key={c.id} href={`#${c.id}`} onClick={() => setOpen(false)}>
            <span className="mono">{c.index}</span>
            {c.labelAr}
            <i>{c.label}</i>
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          <span className="mono">05</span>
          تواصل معنا<i>Contact</i>
        </a>
      </nav>
    </header>
  )
}

/** Vertical chapter spine on the outer edge — numbers only, labels fly out. */
export function ChapterRail() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const order = ['crystal', 'purity', 'packing', 'export']
    const onChapter = (e: Event) => {
      const i = order.indexOf((e as CustomEvent<string>).detail)
      if (i >= 0) setActive(i)
    }
    window.addEventListener('sinaicore:chapter', onChapter)
    return () => window.removeEventListener('sinaicore:chapter', onChapter)
  }, [])

  return (
    <nav className="chapter-rail" aria-label="فصول العرض">
      <span className="rail-progress" aria-hidden="true">
        <em className="mono">SCROLL</em>
        <i style={{ '--p': active / 3 } as React.CSSProperties} />
      </span>
      <ol>
        {chapters.map((c, i) => (
          <li key={c.id} className={active === i ? 'is-active' : ''}>
            <a href={`#${c.id}`} aria-label={`${c.index} — ${c.labelAr}`}>
              <span className="mono">{c.index}</span>
              <span className="rail-label">{c.labelAr}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
