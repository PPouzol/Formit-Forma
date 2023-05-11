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
    outDir: './build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: './build/assets/*',
          dest: './deploy/v24_0/assets'
        },
        {
          src: './build/index.html',
          dest: './deploy/v24_0'
        },
        {
          src: './build/login.html',
          dest: './deploy/v24_0'
        },
        {
          src: './manifest.json',
          dest: './deploy/v24_0',
          rename: 'manifest.json',
        },
        {
          src: './src/assets',
          dest: '.'
        },
        {
          src: './src/assets',
          dest: './deploy/v24_0'
        },
        {
          src: './plugin_formit.js',
          dest: './deploy/v24_0'
        },
        {
          src: './README.md',
          dest: './deploy'
        },
        {
          src: './src/addins/*',
          dest: './deploy/v24_0'
        },
        {
          src: './src/addins/*',
          dest: '.'
        },
        {
          src: './versions.json',
          dest: './deploy'
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
    host: "local.autodeskforma.eu",
    port: 3001,
    https: {
      key: fs.readFileSync(`${os.homedir()}/.spacemaker-cli/server.pem`),
      cert: fs.readFileSync(`${os.homedir()}/.spacemaker-cli/cert.pem`),
    },
    proxy: {
      "/api": {
        target: "https://app.autodeskforma.eu/",
        changeOrigin: true,
      },
      "/app": {
        target: "https://app.autodeskforma.eu/",
        changeOrigin: true,
      },
      "/texture": {
        target: "https://app.autodeskforma.eu/",
        changeOrigin: true,
      },
      "/web-components": {
        target: "https://app.autodeskforma.eu/",
        changeOrigin: true,
      }
    }
  }
})