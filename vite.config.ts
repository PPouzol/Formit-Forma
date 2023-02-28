import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
const { resolve } = require('path')
import fs from "fs"
import os from "os"

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
  ],
  define: {
    __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
    'process.env': {},
  },
  server: process.env.DEV_SERVER && {
    open: true,
    host: "local.spacemaker.ai",
    port: 3001,
    https: {
      key: fs.readFileSync(`${os.homedir()}/.spacemaker-cli/server.pem`),
      cert: fs.readFileSync(`${os.homedir()}/.spacemaker-cli/cert.pem`),
    },
    proxy: {
      "/api": {
        target: "https://app.spacemaker.ai/",
        changeOrigin: true,
      },
      "/app": {
        target: "https://app.spacemaker.ai/",
        changeOrigin: true,
      }
    }
  }
})
