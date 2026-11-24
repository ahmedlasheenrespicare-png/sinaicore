/* A tiny shared bus between the DOM thread and the render loop.
 *
 * Written by a GSAP ScrollTrigger timeline in the page, read in useFrame by
 * the 3D scene. Deliberately a mutable object and not React state: setting
 * state on every scroll frame would re-render the scene graph sixty times a
 * second, which is exactly what makes a scroll-linked 3D section stutter.
 * One number in, one number out. */
export const explode = { v: 0 }
