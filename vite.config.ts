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
      input: {
        main: 'index.html',
        alt: 'alt.html',
        ref: 'ref.html',
      },
    },
    assetsInlineLimit: 2048,
    chunkSizeWarningLimit: 1200,
  },
})
