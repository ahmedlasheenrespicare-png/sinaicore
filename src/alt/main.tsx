import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/cairo'
import '@fontsource-variable/inter'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import '@fontsource/amiri/arabic-400.css'
import '@fontsource/amiri/arabic-700.css'
import '@fontsource-variable/eb-garamond/wght.css'
import '../styles/base.css'
import './alt.css'
import '../styles/craft.css'
import AltApp from './AltApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AltApp />
  </StrictMode>,
)
