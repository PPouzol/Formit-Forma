import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
const { resolve } = require('path')

export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: './v0_1',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'login.html')
      }
    }
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: './manifest.json',
          dest: '.'
        },
        {
          src: './plugin_formit.js',
          dest: '.'
        }
      ]
    })
  ]
})
