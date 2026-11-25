import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import type { SpecSheet } from '../data/specs'

type SpecCardProps = {
  sheet: SpecSheet | null
  onClose: () => void
}

/** The card a 3D hotspot opens: an editorial data sheet, not a modal dialog. */
export default function SpecCard({ sheet, onClose }: SpecCardProps) {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!sheet || !root.current) return
    const context = gsap.context(() => {
      gsap.fromTo(
        '.spec-card',
        { yPercent: 6, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.55, ease: 'power3.out' },
      )
      gsap.fromTo(
        '.spec-card-row',
        { x: 18, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.055, delay: 0.12, ease: 'power2.out' },
      )
      gsap.fromTo(
        '.spec-card-veil',
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power1.out' },
      )
    }, root)
    return () => context.revert()
  }, [sheet])

  useEffect(() => {
    if (!sheet) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [sheet, onClose])

  if (!sheet) return null

  return (
    <div className="spec-layer" ref={root}>
      <button
        type="button"
        className="spec-card-veil"
        aria-label="إغلاق بطاقة المواصفات"
        onClick={onClose}
      />
      <article className="spec-card" role="dialog" aria-modal="false" aria-labelledby="spec-title">
        <header className="spec-card-head">
          <div>
            <p className="spec-card-kicker">{sheet.kicker}</p>
            <h3 id="spec-title">{sheet.title}</h3>
          </div>
          <button type="button" className="spec-card-close" onClick={onClose} aria-label="إغلاق">
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <p className="spec-card-lead">{sheet.lead}</p>

        <dl className="spec-card-rows">
          {sheet.rows.map((row) => (
            <div className="spec-card-row" key={row.label}>
              <dt>
                {row.label}
                {row.hint && <em>{row.hint}</em>}
              </dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>

        <footer className="spec-card-foot">
          <span>{sheet.footnote}</span>
          <span className="spec-card-stamp">SINAICORE · SC-08</span>
        </footer>
      </article>
    </div>
  )
}
