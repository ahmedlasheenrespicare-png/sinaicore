import * as THREE from 'three'
import { useMemo } from 'react'
import { useKTX2 } from '@react-three/drei'

/* the KTX2 transcoder is served from public/basis — nothing comes from a CDN */
export const BASIS = '/basis/'

/**
 * PBR woven fabric for the FIBC / 50 kg sacks.
 *
 * The albedo and the normal come from Basis-compressed KTX2 maps built offline
 * (`scripts/build-textures.mjs`), so the GPU gets them already compressed; the
 * roughness is read from the albedo's luminance through a tiny onBeforeCompile
 * patch — one extra map for free, no third texture to download.
 */
export function useWovenPBR(repeat: [number, number] = [4.5, 7], scale = 1.5) {
  const albedo = useKTX2('/tex/woven.ktx2', BASIS)
  const normal = useKTX2('/tex/woven_n.ktx2', BASIS)
  return useMemo(() => {
    const a = albedo.clone()
    a.colorSpace = THREE.SRGBColorSpace
    a.wrapS = a.wrapT = THREE.RepeatWrapping
    a.repeat.set(...repeat)
    a.anisotropy = 8
    a.needsUpdate = true
    const n = normal.clone()
    n.wrapS = n.wrapT = THREE.RepeatWrapping
    n.repeat.set(...repeat)
    n.anisotropy = 8
    n.needsUpdate = true
    return { albedo: a, normal: n, normalScale: new THREE.Vector2(scale, scale) }
  }, [albedo, normal, repeat, scale])
}

/** shared parameters that turn a plain material into woven PP fabric */
export function fabricProps(
  woven: ReturnType<typeof useWovenPBR>,
  tint = '#ffffff',
): THREE.MeshPhysicalMaterialParameters {
  return {
    map: woven.albedo,
    normalMap: woven.normal,
    normalScale: woven.normalScale,
    color: tint,
    roughness: 0.78,
    sheen: 0.35,
    sheenRoughness: 0.7,
    sheenColor: new THREE.Color('#dfeef6'),
    side: THREE.DoubleSide,
    envMapIntensity: 1,
  }
}
