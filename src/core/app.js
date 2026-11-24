/* boot — render, load, preloader, scroll score, chrome */

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LoadingManager } from 'three'
import { renderAll } from './render.js'
import { createScroll } from './scroll.js'
import { createPreloader } from './preloader.js'
import { createNav, createMenu, initAnchors } from './nav.js'
import { createTimeline } from './timeline.js'
import { initReveal } from './reveal.js'
import { initCursor } from './cursor.js'
import { createStage } from '../three/stage.js'
import { frameToTween, initialFrame } from '../data/keyframes.js'
import { chapters } from '../data/chapters.js'
import { debounce, reducedMotion } from './utils.js'

gsap.registerPlugin(ScrollTrigger)

function revealHero() {
  if (reducedMotion()) {
    document.querySelectorAll('[data-hero-line]').forEach((el) => {
      el.style.transform = 'none'
    })
    document.querySelectorAll('.hero [data-reveal]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
  tl.to('[data-hero-line]', { y: 0, duration: 1.55, stagger: 0.14 }, 0.08)
    .fromTo(
      '.hero [data-reveal]',
      { y: 26, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.09, ease: 'power3.out' },
      0.35,
    )
    .fromTo('.chrome', { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.95, ease: 'power3.out' }, 0.15)
}

function initQuoteForm() {
  const form = document.getElementById('quote-form')
  const note = document.getElementById('quote-note')
  if (!form || !note) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const grade = String(data.get('grade') || '')
    const pack = String(data.get('pack') || '')
    const port = String(data.get('port') || '')
    const qty = String(data.get('qty') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('note') || '')

    note.classList.remove('is-error')

    if (!grade || !pack || !port) {
      note.textContent = 'اختر الدرجة والتعبئة والميناء أولاً.'
      note.classList.add('is-error')
      return
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      note.textContent = 'البريد الإلكتروني غير صحيح.'
      note.classList.add('is-error')
      return
    }

    const gradeLabel = form.querySelector('#q-grade option:checked')?.textContent ?? grade
    const packLabel = form.querySelector('#q-pack option:checked')?.textContent ?? pack
    const portLabel = form.querySelector('#q-port option:checked')?.textContent ?? port

    const body = [
      'طلب عرض سعر — SinaiCore',
      '',
      `الدرجة: ${gradeLabel}`,
      `التعبئة: ${packLabel}`,
      `الميناء: ${portLabel}`,
      `الكمية: ${qty || '—'} طن`,
      `البريد: ${email || '—'}`,
      '',
      message ? `ملاحظة: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:info@sinaicore.com?subject=${encodeURIComponent(
      'طلب عرض سعر — SinaiCore',
    )}&body=${encodeURIComponent(body)}`

    note.textContent = 'جهّزنا الطلب في تطبيق البريد. أرسله لتصلك المواصفة والسعر.'
  })
}

export async function boot() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

  const sections = renderAll()
  initCursor()

  const scroll = createScroll()
  const manager = new LoadingManager()
  const preloader = createPreloader(manager)

  const state = { ...frameToTween(initialFrame), specimen: 'none' }

  const stagePromise = createStage({ manager, state })
  const fontsPromise = document.fonts?.ready ?? Promise.resolve()

  const [stageResult] = await Promise.allSettled([stagePromise, fontsPromise])
  const stage = stageResult.status === 'fulfilled' ? stageResult.value : null
  if (stageResult.status === 'rejected') {
    console.warn('[SinaiCore] stage failed — falling back to the still.', stageResult.reason)
    document.body.classList.add('no-webgl')
  }
  await preloader.finish()

  document.body.classList.remove('is-booting')
  document.body.classList.add('is-ready')
  scroll.start()
  stage?.resize()
  stage?.start()

  const nav = createNav({ chapters, scroll })
  const menu = createMenu({
    scroll,
    onNavigate: (href) => {
      setTimeout(() => scroll.scrollTo(href, { duration: 1.6 }), 160)
    },
  })

  const timeline = createTimeline({
    state,
    sections,
    onChapter: (i) => nav.setActive(i),
    onSpecimen: (name) => stage?.setSpecimen(name),
  })
  timeline.build()

  const anchors = initAnchors({ scroll, menu })
  initReveal()
  initQuoteForm()

  ScrollTrigger.refresh()

  const jumped = anchors.jump(location.hash)
  if (!jumped) {
    requestAnimationFrame(() => {
      scroll.scrollTo(0, { immediate: true, force: true })
      revealHero()
    })
  } else {
    setTimeout(() => ScrollTrigger.refresh(), 120)
  }

  // stop drawing once the opaque quote band and footer cover the stage
  ScrollTrigger.create({
    trigger: '#quote',
    start: 'top 85%',
    onEnter: () => stage?.pause(),
    onLeaveBack: () => stage?.resume(),
  })

  const onResize = debounce(() => {
    stage?.resize()
    timeline.rebuild()
  }, 260)
  window.addEventListener('resize', onResize)

  // keep the rail in sync when the reader deep-links into a chapter
  setTimeout(() => ScrollTrigger.refresh(), 450)
}
