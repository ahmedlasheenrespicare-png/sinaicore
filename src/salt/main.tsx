import '@fontsource-variable/cairo'
import '@fontsource/amiri/700.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import { createRoot } from 'react-dom/client'
import SaltSite from './site/SaltSite'
import './site/salt.css'

createRoot(document.getElementById('root')!).render(<SaltSite />)
