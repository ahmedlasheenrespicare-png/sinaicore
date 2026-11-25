import { createContext, useContext } from 'react'
import type { SurfaceMaps } from './surfaces'

/** Filled by the canvas once the KTX2 maps are transcoded. */
export const SurfaceMapsContext = createContext<SurfaceMaps>({})

export const useSurfaceMaps = () => useContext(SurfaceMapsContext)
