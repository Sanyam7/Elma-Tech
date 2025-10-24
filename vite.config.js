import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Generate Brotli and Gzip compressed assets for faster delivery
    viteCompression({ algorithm: 'brotliCompress', ext: '.br', deleteOriginFile: false }),
    viteCompression({ algorithm: 'gzip', ext: '.gz', deleteOriginFile: false }),
    // Compress images at build time
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 5 },
      mozjpeg: { quality: 78 },
      svgo: { plugins: [ { name: 'removeViewBox', active: false }, { name: 'removeDimensions', active: true } ] }
    }),
    // Add a service worker for caching static assets
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'ELMA',
        short_name: 'ELMA',
        start_url: '/',
        display: 'standalone',
        theme_color: '#0b0c12',
        background_color: '#0b0c12',
        icons: []
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,webp,avif}'],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024
      }
    })
  ],
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    target: 'es2018',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          aos: ['aos']
        }
      }
    }
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
})
