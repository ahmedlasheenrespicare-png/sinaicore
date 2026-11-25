import { chapters } from '../data/chapters'
import { scrollToTarget } from '../lib/smoothScroll'

type OverlayProps = { active: number }

export default function Overlay({ active }: OverlayProps) {

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">◆</span>
          <span>SINAICORE</span>
        </div>
        <div className="topbar-mid">THE SALT CHRONICLES / 01—08</div>
        <div className="topbar-count" aria-live="polite">
          <span>CHAPTER</span>
          <strong>{String(active + 1).padStart(2, '0')}</strong>
          <span>/ 08</span>
        </div>
      </header>

      <nav className="chapter-nav" aria-label="فصول القصة">
        {chapters.map((chapter, index) => (
          <button
            key={chapter.id}
            type="button"
            className={`nav-item${index === active ? ' is-active' : ''}`}
            onClick={() => scrollToTarget(chapter.id)}
            aria-current={index === active ? 'step' : undefined}
            title={chapter.nav}
          >
            <span className="nav-line" aria-hidden="true" />
            <span className="nav-number">{chapter.number}</span>
            <span className="nav-label">{chapter.nav}</span>
          </button>
        ))}
      </nav>

      <div className={`drag-hint${active >= 4 && active <= 6 ? ' is-on' : ''}`} aria-hidden={active < 4 || active > 6}>
        <span className="drag-hint-icon" aria-hidden="true">↔</span>
        <span>اسحب المجسّم للتدوير</span>
        <em>LIMITED ORBIT</em>
      </div>

      <div className="stage-hud" aria-live="polite">
        <span className="hud-number">{chapters[active].number}</span>
        <span className="hud-label">{chapters[active].stageLabel}</span>
      </div>
    </>
  )
}
