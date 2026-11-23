import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/cairo'
import '@fontsource-variable/inter'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import '../styles/base.css'
import './ref.css'
import RefApp from './RefApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RefApp />
  </StrictMode>,
)
