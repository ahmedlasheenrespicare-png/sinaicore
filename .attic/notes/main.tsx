import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/amiri/arabic-400.css'
import '@fontsource/amiri/arabic-700.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import '@fontsource-variable/eb-garamond/wght.css'
import './notes.css'
import NotesApp from './NotesApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotesApp />
  </StrictMode>,
)
