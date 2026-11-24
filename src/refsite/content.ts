/* Content and tokens for the reference rebuild.
 *
 * Everything here is transcribed from the saved copy of
 * brocksbushes.moonshiners.co.uk: the words, the accent per bottle, the
 * section lengths. It is deliberately a separate module from src/ref —
 * this build is a study of someone else's site, not a variant of ours, and
 * the two must not be able to share state by accident.
 */

export const tokens = {
  bg: '#f7e1dd',
  ink: '#2b1d14',
  cream: '#fbf3ee',
  display: "'DM Serif Display', 'Times New Roman', serif",
  body: "'Inter', system-ui, sans-serif",
}

export type Spirit = {
  id: string
  kicker: string
  title: string
  meta: string
  body: string
  notes: string[]
  accent: string
  pill: { label: string; color: string } | null
  /* the 3D side reads these: each bottle gets its own liquid depth and tone */
  liquid: { color: string; depth: number }
}

export const spirits: Spirit[] = [
  {
    id: 'gin',
    kicker: 'Coming this Christmas',
    title: 'Strawberry Gin',
    meta: '40 % vol · 50cl',
    body: 'Over 25 Brocksbushes strawberries squashed into every bottle, alongside a botanical bill of juniper, coriander, peppercorns and citrus. No artificial flavours, no added sugar.',
    notes: ['Fresh Strawberry', 'Juniper', 'Peppercorn', 'Citrus'],
    accent: '#D7263D',
    pill: null,
    liquid: { color: '#c4162f', depth: 0.72 },
  },
  {
    id: 'liquer',
    kicker: 'Coming this Christmas',
    title: 'Strawberry Liqueur',
    meta: '20 % vol · 50cl',
    body: 'Over 30 strawberries in every bottle: fresh-pressed juice blended with jammy boiled fruit. Pour it into a glass of fizz, or over ice with a strawberry on the side.',
    notes: ['Pressed Strawberry', 'Strawberry Jam', 'Sweet Finish'],
    accent: '#C2185B',
    pill: null,
    liquid: { color: '#a3154d', depth: 0.6 },
  },
  {
    id: 'rum',
    kicker: 'Autumn at Brocksbushes',
    title: 'Pumpkin Spiced Rum',
    meta: '40 % vol · 50cl',
    body: 'Distilled in small batches with Brocksbushes pumpkin and a warming blend of cinnamon, ginger, nutmeg, clove, vanilla and allspice. Gently sweetened. Over ice, with ginger ale, or in your favourite autumn cocktail.',
    notes: ['Pumpkin', 'Cinnamon', 'Ginger', 'Clove', 'Vanilla'],
    accent: '#E8742A',
    pill: { label: 'Available now', color: '#E8742A' },
    liquid: { color: '#c25a14', depth: 0.52 },
  },
]

/* The botanical bill act is its own stop between the gin and the liqueur. */
export const botanicals = {
  kicker: 'The botanical bill',
  title: 'Alongside the strawberries',
  body: 'Juniper, coriander, peppercorns and citrus.',
}

/* Section heights, from the original's inline styles. The scroll track is
 * the design: the ratios are what make the pacing feel like theirs. */
export const track = [300, 150, 300, 200, 200, 150]
