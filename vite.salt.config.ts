import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* The SinaiCore page on the reference's skeleton, served as its own root.
 *
 * Same reason as vite.ref.config.ts: the preview proxy opens an origin, not a
 * path, so this needs a port where it *is* the root document. 5173 stays the
 * site, 5174 the reference rebuild, 5175 this one.
 *
 * The rewrite is dev-server only; the production build keeps salt.html as an
 * ordinary second entry (see vite.config.ts).
 */
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'salt-as-root',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/' || req.url === '/index.html') req.url = '/salt.html'
          next()
        })
      },
    },
  ],
  server: {
    host: '0.0.0.0',
    port: 5175,
    strictPort: true,
    allowedHosts: true,
  },
})
