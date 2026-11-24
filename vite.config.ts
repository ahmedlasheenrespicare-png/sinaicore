import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
      /* One entry. The four cuts have been merged into a single document;
         keeping the others as build inputs would ship three dead pages. */
      input: {
        main: 'index.html',
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
