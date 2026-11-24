/* scroll reveals and figure parallax */

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reducedMotion } from './utils.js'

gsap.registerPlugin(ScrollTrigger)

export function initReveal() {
  if (reducedMotion()) {
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const generic = gsap.utils
    .toArray('[data-reveal]')
    .filter(
      (el) =>
        !el.closest('.hero') &&
        !el.classList.contains('grade') &&
        !el.classList.contains('rows'),
    )

  for (const el of generic) {
    gsap.fromTo(
      el,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      },
    )
  }

  gsap.utils.toArray('[data-fig]').forEach((fig) => {
    const frame = fig.querySelector('.fig__frame')
    const img = fig.querySelector('.fig__img')
    if (!frame) return

    gsap.fromTo(
      frame,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1.25,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: fig, start: 'top 82%', toggleActions: 'play none none reverse' },
      },
    )

    if (img) {
      gsap.fromTo(
        img,
        { scale: 1.12 },
        {
          scale: 1.035,
          duration: 1.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: fig, start: 'top 82%', toggleActions: 'play none none reverse' },
        },
      )
      gsap.to(img, {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }
  })

  gsap.utils.toArray('.rows').forEach((rows) => {
    const rowEls = rows.querySelectorAll('.rows__row')
    if (rowEls.length) {
      gsap.fromTo(
        rowEls,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.055,
          ease: 'power2.out',
          scrollTrigger: { trigger: rows, start: 'top 88%', toggleActions: 'play none none reverse' },
        },
      )
    }
  })

  const grades = gsap.utils.toArray('.grade')
  if (grades.length) {
    gsap.fromTo(
      grades,
      { y: 26, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.07,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.grades', start: 'top 86%', toggleActions: 'play none none reverse' },
      },
    )
  }
}
