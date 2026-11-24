/* ------------------------------------------------------------------ *
 * The fixed 3D layer.
 *
 * One canvas for the whole page, painted behind everything and never
 * scrolled: `position: fixed`, full viewport, `z-index: 0`. The document
 * above it scrolls normally. This is the architecture the brief asked
 * for, and it is worth being explicit about what it buys and what it
 * costs:
 *
 *   · bought — the WebGL context is created once, so there is no
 *     re-initialisation when a section scrolls into view, and the compositor
 *     can keep the canvas on its own layer while text moves over it.
 *   · cost — the canvas is always mounted while the page is open, so it has
 *     to be told when to actually render. It stops its loop when the
 *     exploded act is nowhere near the viewport, which is why `active` is
 *     threaded in rather than left to the renderer.
 *
 * The scene draws nothing but the bag: no environment backdrop, alpha true,
 * so the page's own background shows through and the canvas never appears
 * as a coloured rectangle over the content.
 * ------------------------------------------------------------------ */

import { Suspense, lazy, memo, useEffect, useState } from 'react'

const Scene = lazy(() => import('./ExplodedScene'))

function ExplodedCanvas({ active }: { active: boolean }) {
  /* The canvas is mounted a couple of frames after the layer becomes
     active, not with it.

     R3F measures its container on mount. On this fixed layer the container
     is `position: fixed; inset: 0` inside a section whose `opacity` is
     transitioning from 0, and the measurement landed as zero — the scene
     was built against a 1x1 viewport and the drawing buffer stayed at the
     canvas default of 300x150. The canvas was in the DOM, sized by CSS,
     and painting an empty buffer: exactly the failure that looks like
     "the 3D is not rendering" when you inspect the pixels but like "the
     3D is fine" when you inspect the DOM.

     Two frames is enough for the layer to have a box, and it is cheaper
     than reaching into the renderer to force a resize. A real resize event
     fixes it too, which is what confirmed the diagnosis. */
  const [mount, setMount] = useState(false)
  useEffect(() => {
    if (!active) {
      setMount(false)
      return
    }
    let raf2 = 0
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setMount(true))
    })
    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [active])

  return (
    <div className={`ref-xcanvas${active ? ' is-active' : ''}`} aria-hidden="true">
      {mount && (
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      )}
    </div>
  )
}

export default memo(ExplodedCanvas)
