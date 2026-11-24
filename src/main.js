/* SinaiCore — entry point */

import '@fontsource/amiri/400.css'
import '@fontsource/amiri/700.css'
import '@fontsource-variable/eb-garamond'
import '@fontsource-variable/cairo'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'

import './styles/tokens.css'
import './styles/base.css'
import './styles/preloader.css'
import './styles/chrome.css'
import './styles/story.css'
import './styles/responsive.css'

import { boot } from './core/app.js'

boot()
