/**
 * KTX2 surface maps with a PNG fallback.
 *
 * The textures are produced by `npm run textures` (see scripts/build-textures.mjs)
 * and encoded with the Basis/UASTC transcoder, so the GPU receives a
 * block-compressed texture instead of a decoded 512² RGBA bitmap. If the
 * browser cannot transcode KTX2 (or the file is missing) the PNG twin is used.
 */
import {
  RepeatWrapping,
  TextureLoader,
  type Texture,
  type WebGLRenderer,
} from 'three'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'
import { quality } from './quality'

export type SurfaceMaps = {
  salt?: Texture
  weave?: Texture
}

const NAMES = [
  { key: 'salt', file: 'salt-detail' },
  { key: 'weave', file: 'sack-weave' },
] as const

let cache: Promise<SurfaceMaps> | null = null

async function loadOne(
  ktx2: KTX2Loader | null,
  png: TextureLoader,
  file: string,
): Promise<Texture | undefined> {
  if (ktx2) {
    try {
      const texture = await ktx2.loadAsync(`/textures/${file}.ktx2`)
      texture.wrapS = texture.wrapT = RepeatWrapping
      return texture
    } catch (error) {
      console.warn('[surfaces] KTX2 failed, falling back to PNG:', error)
    }
  }
  try {
    const texture = await png.loadAsync(`/textures/${file}.png`)
    texture.wrapS = texture.wrapT = RepeatWrapping
    return texture
  } catch {
    return undefined
  }
}

/** Loads both maps once per page; repeated calls share the same promise. */
export function loadSurfaceMaps(gl: WebGLRenderer): Promise<SurfaceMaps> {
  if (cache) return cache

  cache = (async () => {
    let ktx2: KTX2Loader | null = null
    if (!quality.low) {
      try {
        /* A stable path works in dev (where the bundler's import.meta.url
         * assets are not served as raw files) and in the build alike. */
        ktx2 = new KTX2Loader().setTranscoderPath('/basis/').detectSupport(gl)
      } catch {
        ktx2 = null
      }
    }

    const png = new TextureLoader()
    const entries = await Promise.all(
      NAMES.map(async ({ key, file }) => [key, await loadOne(ktx2, png, file)] as const),
    )

    const maps: SurfaceMaps = {}
    entries.forEach(([key, texture]) => {
      if (!texture) return
      texture.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy())
      maps[key] = texture
    })
    ktx2?.dispose()
    return maps
  })()

  return cache
}
