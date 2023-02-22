import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  root: '.',
  build: {
    outDir: './v0_1'
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: './manifest.json',
          dest: '.'
        }
      ]
    })
  ]
})
