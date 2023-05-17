import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel';
const { resolve } = require('path')
import fs from "fs"
import os from "os"

const configurations = {
  main: {
    entry: resolve(__dirname, 'index.html'),
    fileName: "formit-plugin",
    formats: ["es"]
  },
}

const libConfig = configurations[process.env.LIB_NAME]

export default defineConfig({
  root: '.',
  base: './',
  build: {
    lib: {
      ...libConfig,
    },
    sourcemap: true,
    emptyOutDir: true,
    outDir: './build'
  },
  plugins: [
    react(),
    babel({
      babelConfig: {
          babelrc: false,
          configFile: false,
          targets: {
            "chrome": "58",
            "ie": "11"
          },
          presets: [
            [
              "@babel/preset-env",
              {
                "loose": true,
                "modules": false
              }
            ]
          ]
      }
    }),
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