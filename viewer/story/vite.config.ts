import { defineConfig } from 'vite'
import path from 'node:path'

/**
 * The scroll-driven product story: one page, one 50 kg sack, one tablet.
 * Its own dev server (port 5175) so the interactive sheet on 5174 keeps
 * working untouched. The public/ folder of the main app is reused so /models,
 * /artwork and /textures resolve exactly as they do everywhere else.
 */
export default defineConfig({
  root: __dirname,
  // Local dev serves from '/', the published copy from '/sinaicore/'.
  base: process.env.PAGES_BASE ?? '/',
  publicDir: path.resolve(__dirname, '..', '..', 'public'),
  server: {
    host: '0.0.0.0',
    port: 5175,
    strictPort: true,
    allowedHosts: true,
    headers: {
      // The story must always show the freshly exported sack texture.
      'Cache-Control': 'no-store',
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 5175,
    allowedHosts: true,
  },
  build: {
    outDir: path.resolve(__dirname, '..', '..', 'dist-story'),
    emptyOutDir: true,
    target: 'es2022',
  },
})
