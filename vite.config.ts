import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  /* Two servers on two ports, because there are two things to look at and
     one preview pane that shows one page per port.

     5173 — the real site, at `/`.
     5174 — the reference rebuild, at `/`. It is the *root* page on purpose:
     the preview proxy opens the origin, not a path, so a rebuild reachable
     only at `/ref-field.html` is a rebuild nobody sees. */
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // Allow the Arena preview proxy host (*-<sandbox>.e2b.app) and any tunnel.
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    allowedHosts: true,
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      /* Two entries, both live. `index.html` is the real site. `ref-field`
         is the separate preview: a study of another site's motion and 3D,
         served from its own URL so it cannot be confused with our page or
         inherit its styles. It is listed here so `npm run build` proves it
         compiles, not only the dev server. */
      input: {
        main: 'index.html',
        'ref-field': 'ref-field.html',
        salt: 'salt.html',
      },
      output: {
        /* three.js and its r3f/drei bindings are bigger than everything
           else combined. Left alone, rollup hoists them into the main entry
           and the first paint waits on a megabyte of WebGL runtime that only
           the lazy plates need. Pinned to their own chunks so the document
           renders immediately and the models stream in behind it. */
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return
          if (/[\\/](three|@react-three|three-stdlib|troika)[\\/]/.test(id)) return 'vendor-three'
          if (/[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'vendor-react'
          return
        },
      },
    },
    assetsInlineLimit: 2048,
    chunkSizeWarningLimit: 1200,
  },
})
