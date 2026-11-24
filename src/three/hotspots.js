/* the tappable points on the object — DOM markers pinned to 3D anchors */

import * as THREE from 'three'
import { hotspots } from '../data/hotspots.js'

const toArabic = (s) =>
  String(s).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)])

export function createHotspots({ camera, rig, container, isMobile }) {
  /* phones lay the copy over the whole canvas, so a marker could only ever
     land on text — there the specs stay in the chapter copy and the layer is
     skipped entirely (see the responsive fallback notes in the README) */
  if (isMobile) {
    return {
      update() {},
      setChapter() {},
      hideAll() {},
      close() {},
      dispose() {},
      get open() { return null },
    }
  }

  const root =
    container ?? (() => {
      const el = document.createElement('div')
      el.id = 'hotspots'
      el.className = 'hotspots'
      document.body.appendChild(el)
      return el
    })()

  const card = document.createElement('article')
  card.className = 'hs-card'
  card.setAttribute('role', 'dialog')
  card.setAttribute('aria-live', 'polite')
  card.hidden = true
  root.appendChild(card)

  const vec = new THREE.Vector3()
  const camDir = new THREE.Vector3()

  const items = hotspots.map((data, index) => {
    const anchor = new THREE.Object3D()
    anchor.name = `hs-anchor-${data.id}`
    const host = rig.getObjectByName(data.attach)
    if (host) {
      host.add(anchor)
      anchor.position.set(0, 0, 0)
    } else {
      rig.add(anchor)
      console.warn('[SinaiCore] hotspot anchor not found:', data.attach)
    }

    const el = document.createElement('button')
    el.type = 'button'
    el.className = 'hs'
    el.dataset.hotspot = data.id
    el.dataset.chapter = String(data.chapter)
    el.style.setProperty('--hs-i', String(index))
    el.setAttribute('aria-expanded', 'false')
    el.setAttribute('aria-label', `${data.title} — عرض المواصفات`)
    el.innerHTML = `
      <span class="hs__ring" aria-hidden="true"></span>
      <span class="hs__plus" aria-hidden="true"></span>
      <span class="hs__tag">${data.kicker}</span>
      <span class="hs__name">${data.title}</span>`

    el.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      open(data, el)
    })
    el.addEventListener('pointerenter', () => el.classList.add('is-near'))
    el.addEventListener('pointerleave', () => el.classList.remove('is-near'))

    root.appendChild(el)
    return { data, anchor, el, visible: false, x: 0, y: 0 }
  })

  let openId = null
  let chapter = -1

  function open(data, el) {
    if (openId === data.id) {
      close()
      return
    }
    openId = data.id
    for (const it of items) {
      it.el.classList.toggle('is-open', it.data.id === data.id)
      it.el.setAttribute('aria-expanded', String(it.data.id === data.id))
    }
    card.innerHTML = `
      <header class="hs-card__head">
        <span class="hs-card__kicker">${data.kicker}</span>
        <button class="hs-card__close" type="button" aria-label="إغلاق">×</button>
      </header>
      <h3 class="hs-card__title">${data.title}</h3>
      <dl class="hs-card__specs">
        ${data.specs
          .map(([k, v]) => `<div><dt>${k}</dt><dd${/[٠-٩]/.test(v) ? '' : ' dir="ltr"'}>${v}</dd></div>`)
          .join('')}
      </dl>
      <p class="hs-card__note">${data.note}</p>`
    card.hidden = false
    card.classList.add('is-open')
    card.querySelector('.hs-card__close').addEventListener('click', close)

    // keep the card on screen whatever side of the marker it lands on
    const it = items.find((x) => x.data.id === data.id)
    if (it) placeCard(it.x, it.y)
  }

  function close() {
    openId = null
    card.classList.remove('is-open')
    card.hidden = true
    for (const it of items) {
      it.el.classList.remove('is-open')
      it.el.setAttribute('aria-expanded', 'false')
    }
  }

  function placeCard(x, y) {
    const pad = 18
    const gap = 26
    const w = card.offsetWidth || 320
    const h = card.offsetHeight || 220
    const vw = window.innerWidth
    const vh = window.innerHeight
    /* open away from the marker: on the left half of the page the object sits
       against the outer edge, so the card goes left and stays off the story
       column; on the right half it opens to the right */
    const preferLeft = x < vw * 0.45
    const fitsLeft = x - gap - w >= pad
    const fitsRight = x + gap + w <= vw - pad
    const useLeft = preferLeft ? (fitsLeft || !fitsRight) : !fitsRight
    const left = useLeft ? x - gap - w : x + gap
    const top = y > vh * 0.55 ? y - h - gap : y + gap
    card.style.transform = `translate(${Math.round(Math.min(Math.max(pad, left), vw - w - pad))}px, ${Math.round(Math.min(Math.max(pad, top), vh - h - pad))}px)`
  }

  const onKey = (e) => {
    if (e.key === 'Escape') close()
  }
  window.addEventListener('keydown', onKey)

  function hideAll() {
    for (const it of items) {
      it.visible = false
      it.el.classList.remove('is-visible')
    }
    close()
  }

  function setChapter(i) {
    chapter = i
    if (openId) {
      const it = items.find((x) => x.data.id === openId)
      if (!it || it.data.chapter !== i) close()
    }
  }

  function update() {
    const w = window.innerWidth
    const h = window.innerHeight
    camera.getWorldDirection(camDir)

    for (const it of items) {
      const belongs = it.data.chapter === chapter
      it.anchor.getWorldPosition(vec)

      // is the anchor in front of the camera?
      const behind = vec.clone().sub(camera.position).dot(camDir) <= 0
      vec.project(camera)

      const x = (vec.x * 0.5 + 0.5) * w
      const y = (-vec.y * 0.5 + 0.5) * h
      const onScreen = x > -60 && x < w + 60 && y > 60 && y < h - 40

      const show = belongs && !behind && onScreen
      if (show !== it.visible) {
        it.visible = show
        it.el.classList.toggle('is-visible', show)
      }
      if (show) {
        it.x = x
        it.y = y
        it.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`
        // markers shrink as they recede
        const dist = camera.position.distanceTo(it.anchor.getWorldPosition(new THREE.Vector3()))
        it.el.style.setProperty('--hs-scale', String(Math.max(0.55, Math.min(1.15, 6 / Math.max(0.001, dist)))))
      }
    }

    if (openId) {
      const it = items.find((x) => x.data.id === openId)
      if (it) placeCard(it.x, it.y)
    }
  }

  function dispose() {
    window.removeEventListener('keydown', onKey)
    root.remove()
  }

  return { update, setChapter, hideAll, close, dispose, get open() { return openId } }
}

export { toArabic }
