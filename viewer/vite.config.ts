import { defineConfig } from 'vite'
import path from 'node:path'

/**
 * Private model study: a single page that loads only the 50 kg sack GLB.
 * Its own dev server (port 5174) so the scrollytelling site on 5173 stays
 * untouched. The public/ folder of the main app is reused so /models, /artwork
 * and /draco resolve exactly as they do in the story.
 */
export default defineConfig({
  root: __dirname,
  publicDir: path.resolve(__dirname, '..', 'public'),
  server: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: true,
    allowedHosts: true,
    headers: {
      // The study page must always show the freshly exported texture.
      'Cache-Control': 'no-store',
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: true,
  },
  build: {
    outDir: path.resolve(__dirname, '..', 'dist-viewer'),
    emptyOutDir: true,
    target: 'es2022',
  },
})
