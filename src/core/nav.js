/* chapter rail, running header, index overlay, anchors */

import gsap from 'gsap'
import { toArabicDigits, clamp } from './utils.js'

export function createNav({ chapters, scroll, onSpecimen }) {
  const items = Array.from(document.querySelectorAll('[data-rail]'))
  const runningNum = document.getElementById('running-num')
  const runningTitle = document.getElementById('running-title')
  const railCount = document.getElementById('rail-count')
  const chrome = document.getElementById('chrome')
  const progressEl = document.getElementById('chrome-progress')
  const mobileCurrent = document.getElementById('mobile-current')
  const mobilePrev = document.getElementById('mobile-prev')
  const mobileNext = document.getElementById('mobile-next')

  let active = -1

  function setRunning(num, title) {
    if (runningNum) runningNum.textContent = num
    if (runningTitle) {
      gsap.fromTo(
        runningTitle,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', overwrite: true },
      )
      runningTitle.textContent = title
    }
  }

  function setActive(index) {
    if (index === active) return
    active = index

    items.forEach((item, i) => {
      const on = i === index
      item.classList.toggle('is-active', on)
      if (on) item.setAttribute('aria-current', 'step')
      else item.removeAttribute('aria-current')
    })

    if (index >= 0) {
      const ch = chapters[index]
      setRunning(toArabicDigits(ch.n), ch.title)
      if (railCount) railCount.textContent = `${toArabicDigits(ch.n)} / ٠٨`
      if (mobileCurrent) mobileCurrent.textContent = `${toArabicDigits(ch.n)} — ${ch.title}`
      document.documentElement.style.setProperty('--chapter', String(index + 1))
    } else if (index === -1) {
      setRunning('٠٠', 'ملاحظات الميدان')
      if (railCount) railCount.textContent = '٠٠ / ٠٨'
      if (mobileCurrent) mobileCurrent.textContent = '٠٠ — ملاحظات الميدان'
      document.documentElement.style.setProperty('--chapter', '0')
    } else if (index === -2) {
      setRunning('—', 'الأرقام')
      if (railCount) railCount.textContent = '٠٨ / ٠٨'
      if (mobileCurrent) mobileCurrent.textContent = '— الأرقام'
    }

    document.body.classList.toggle('is-past-story', index === -2)
    if (mobilePrev) mobilePrev.disabled = index <= 0
    if (mobileNext) mobileNext.disabled = index >= chapters.length - 1
  }

  function scrollToChapter(index) {
    const ch = chapters[index]
    if (!ch) return
    scroll.scrollTo(`#${ch.id}`, { duration: 1.65 })
  }

  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      const i = Number(item.dataset.rail)
      scrollToChapter(i)
    })
  })

  mobilePrev?.addEventListener('click', () => scrollToChapter(Math.max(0, active - 1)))
  mobileNext?.addEventListener('click', () => scrollToChapter(Math.min(chapters.length - 1, active + 1)))

  /* header progress + scrolled state */
  function onScroll(e) {
    const p = clamp(e.progress ?? 0)
    if (progressEl) progressEl.style.setProperty('--progress', String(p))
    if (chrome) chrome.classList.toggle('is-scrolled', (e.scroll ?? 0) > 40)
  }
  scroll.lenis.on('scroll', onScroll)

  return { setActive, scrollToChapter, get active() { return active } }
}

/* ------------------------------------------------------------------ *
 * index overlay
 * ------------------------------------------------------------------ */

export function createMenu({ scroll, onNavigate }) {
  const menu = document.getElementById('menu')
  const openBtn = document.getElementById('menu-open')
  const closeBtn = document.getElementById('menu-close')
  const links = Array.from(menu?.querySelectorAll('a[data-scroll]') ?? [])

  let open = false
  let lastFocus = null

  function openMenu() {
    if (open || !menu) return
    open = true
    lastFocus = document.activeElement
    document.body.classList.add('is-menu-open')
    menu.setAttribute('aria-hidden', 'false')
    openBtn?.setAttribute('aria-expanded', 'true')
    menu.style.visibility = 'visible'
    scroll.stop()
    gsap.to(menu, { opacity: 1, duration: 0.45, ease: 'power2.out' })
    gsap.fromTo(
      links,
      { y: 26, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.045, ease: 'power3.out', delay: 0.08 },
    )
    setTimeout(() => closeBtn?.focus(), 60)
  }

  function closeMenu({ restoreFocus = true } = {}) {
    if (!open || !menu) return
    open = false
    document.body.classList.remove('is-menu-open')
    menu.setAttribute('aria-hidden', 'true')
    openBtn?.setAttribute('aria-expanded', 'false')
    gsap.to(menu, {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => {
        menu.style.visibility = 'hidden'
      },
    })
    scroll.start()
    if (restoreFocus) setTimeout(() => openBtn?.focus(), 80)
  }

  openBtn?.addEventListener('click', openMenu)
  closeBtn?.addEventListener('click', () => closeMenu())

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) closeMenu()
  })

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const href = link.getAttribute('href')
      closeMenu({ restoreFocus: false })
      onNavigate?.(href)
    })
  })

  return {
    open: openMenu,
    close: closeMenu,
    get isOpen() { return open },
  }
}

/* ------------------------------------------------------------------ *
 * anchors
 * ------------------------------------------------------------------ */

export function initAnchors({ scroll, menu }) {
  const anchors = Array.from(document.querySelectorAll('a[data-scroll]'))

  anchors.forEach((a) => {
    if (a.closest('#menu')) return
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href')
      if (!href || !href.startsWith('#')) return
      e.preventDefault()
      scroll.scrollTo(href, { duration: 1.6 })
      history.replaceState(null, '', href)
    })
  })

  return {
    jump(hash) {
      if (!hash || hash === '#') return false
      const target = document.querySelector(hash)
      if (!target) return false
      scroll.scrollTo(target, { immediate: true, force: true })
      return true
    },
  }
}
