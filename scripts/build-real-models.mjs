/**
 * SinaiCore — real scanned assets into web-ready GLB.
 *
 * The models in `public/models` are authored geometry: clean product shapes
 * with flat colours and no maps. These are the other thing — photographic
 * scans published by Poly Haven under CC0, mirrored on GitHub as glTF + 1k
 * textures.
 *
 * Three passes, in this order:
 *   1. weld + prune, which removes the duplicate vertices a scan carries
 *      (they are the main cost in the file);
 *   2. simplify to a triangle budget — a 36 MB scan is a 200k-triangle mesh
 *      with more detail than a 500px-wide product plate can resolve;
 *   3. resize the three maps to 1024 and re-encode as JPEG.
 *
 *   node scripts/build-real-models.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { NodeIO } from '@gltf-transform/core'
import { KHRONOS_EXTENSIONS } from '@gltf-transform/extensions'
import { dedup, prune, weld, simplify, textureCompress, resample } from '@gltf-transform/functions'
import { MeshoptSimplifier } from 'meshoptimizer'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const SRC = '/tmp/ph/raw'
const OUT = path.join(ROOT, 'public', 'models', 'real')
fs.mkdirSync(OUT, { recursive: true })

const io = new NodeIO().registerExtensions(KHRONOS_EXTENSIONS)

/* The catalogue: what each scan becomes, and how hard to simplify it. The
   boulder keeps more detail because it is the hero of the analysis act; the
   wide coast pieces are background and can lose a lot. */
const JOBS = [
  /* ground: photographic coastline scans, large, simplified hard */
  { src: 'boulder_01', out: 'rock-boulder', tris: 0.28 },
  { src: 'coast_rocks_01', out: 'rock-coast', tris: 0.10 },
  { src: 'coast_land_rocks_02', out: 'rock-land', tris: 0.08 },
  { src: 'coast_line_01', out: 'rock-shore', tris: 0.08 },

  /* props: real objects from a real place. The barrel, the jerrycan-like
     container, the steel jug, the spade and the crate are the industrial
     vocabulary a salt exporter actually uses — photographed, not modelled,
     so their albedo carries rust, chipped paint and work marks. */
  { src: 'Barrel_01', out: 'prop-barrel', tris: 1 },
  { src: 'industrial_pastic_container', out: 'prop-container', tris: 1 },
  { src: 'metal_jug', out: 'prop-jug', tris: 1 },
  { src: 'rusted_spade_01', out: 'prop-spade', tris: 1 },
  { src: 'wooden_crate_01', out: 'prop-crate', tris: 1 },
  { src: 'cement_bag', out: 'prop-sack', tris: 1 },
  { src: 'wooden_bucket_01', out: 'prop-bucket', tris: 1 },
  { src: 'plastic_container', out: 'prop-tub', tris: 1 },
]

for (const job of JOBS) {
  const gltfPath = path.join(SRC, job.src, '1k', `${job.src}_1k.gltf`)
  if (!fs.existsSync(gltfPath)) {
    console.log('skip (missing):', job.src)
    continue
  }
  const doc = await io.read(gltfPath)
  const before = doc.getRoot().listMeshes().reduce(
    (n, m) => n + m.listPrimitives().reduce((k, p) => k + (p.getIndices()?.getCount() ?? 0) / 3, 0),
    0,
  )
  await doc.transform(
    weld(),
    dedup(),
    ...(job.tris < 1
      ? [simplify({ simplifier: MeshoptSimplifier, ratio: job.tris, error: 0.002 })]
      : []),
    prune(),
    resample(),
    textureCompress({ encoder: sharp, targetFormat: 'jpeg', resize: [1024, 1024] }),
  )
  const after = doc.getRoot().listMeshes().reduce(
    (n, m) => n + m.listPrimitives().reduce((k, p) => k + (p.getIndices()?.getCount() ?? 0) / 3, 0),
    0,
  )
  /* Embedded, not referenced: one file per model means one request, and no
     chance of a texture path breaking on a case-sensitive host. */
  const glb = await io.writeBinary(doc)
  const file = path.join(OUT, `${job.out}.glb`)
  fs.writeFileSync(file, glb)
  console.log(
    `${job.out.padEnd(14)} ${(before / 1000).toFixed(0).padStart(5)}k → ${(after / 1000)
      .toFixed(0)
      .padStart(4)}k tris   ${(glb.byteLength / 1048576).toFixed(2)} MB`,
  )
}
