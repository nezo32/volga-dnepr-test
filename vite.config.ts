import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// Connecting environment variables to the configuration file
process.env = { ...process.env, ...loadEnv('app', process.cwd()) };

// https://vitejs.dev/config/
export default defineConfig({
  // Adding Vuetify plugin
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // Setting up CORS
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})
