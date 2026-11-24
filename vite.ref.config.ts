import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* The reference rebuild, served as its own root.
 *
 * It is a study of another site's motion and 3D, not a page of ours, and the
 * preview proxy opens `https://<port>-<sandbox>.e2b.app/` — the origin, not a
 * path. So the rebuild needs a port of its own where it *is* the root
 * document; a second entry point behind `/ref-field.html` is unreachable from
 * the preview unless the address is edited by hand.
 *
 * The plugin rewrites `/` to `ref-field.html` for the dev server only. The
 * build stays a normal second entry (see vite.config.ts), so the deployed
 * artefact is unchanged.
 */
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'ref-field-as-root',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/' || req.url === '/index.html') req.url = '/ref-field.html'
          next()
        })
      },
    },
  ],
  server: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: true,
    allowedHosts: true,
  },
})
