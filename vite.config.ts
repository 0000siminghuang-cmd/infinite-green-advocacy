import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = '/Users/siminghuang/.gemini/antigravity/brain/f7e4c6c5-ad34-483a-99ff-95c0ccfa41cf'
const destDir = path.resolve(__dirname, 'src/assets')
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })
try {
  fs.copyFileSync(`${srcDir}/media__1778700152478.png`, `${destDir}/logo-loop.png`)
  fs.copyFileSync(`${srcDir}/media__1778700161358.png`, `${destDir}/logo-text.png`)
} catch (e) {}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
  },
})
