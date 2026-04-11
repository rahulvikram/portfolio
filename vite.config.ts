import { defineConfig } from 'vite'
import type { Plugin, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

function capitalize(str: string): string {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function filenameToAlt(filename: string): string {
  return path.parse(filename).name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function formatShutterSpeed(seconds: number): string {
  if (seconds >= 1) return `${seconds}s`
  return `1/${Math.round(1 / seconds)}s`
}

async function buildPhotoData(photosDir: string): Promise<string> {
  let exifr: typeof import('exifr') | null = null
  try {
    exifr = await import('exifr')
  } catch {
    // exifr unavailable — metadata will fall back to "Unknown"
  }

  if (!fs.existsSync(photosDir)) {
    return 'export default []'
  }

  const folders = fs.readdirSync(photosDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()

  const locations: unknown[] = []

  for (const folder of folders) {
    const folderPath = path.join(photosDir, folder)
    const files = fs.readdirSync(folderPath)
      .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
      .sort()

    if (files.length === 0) continue

    const photos: unknown[] = []

    for (const file of files) {
      const filePath = path.join(folderPath, file)
      const id = path.parse(file).name

      let camera = 'Unknown'
      let lens = 'Unknown'
      let focalLength = 'Unknown'
      let aperture = 'Unknown'
      let shutterSpeed = 'Unknown'
      let iso = 'Unknown'

      if (exifr) {
        try {
          const parsed = await exifr.parse(filePath, {
            pick: ['Make', 'Model', 'LensModel', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO'],
          })
          if (parsed) {
            camera = [parsed.Make, parsed.Model].filter(Boolean).join(' ') || 'Unknown'
            lens = parsed.LensModel || 'Unknown'
            focalLength = parsed.FocalLength ? `${parsed.FocalLength}mm` : 'Unknown'
            aperture = parsed.FNumber ? `f/${parsed.FNumber}` : 'Unknown'
            shutterSpeed = parsed.ExposureTime ? formatShutterSpeed(parsed.ExposureTime) : 'Unknown'
            iso = parsed.ISO ? String(parsed.ISO) : 'Unknown'
          }
        } catch {
          // EXIF extraction failed for this file — defaults remain
        }
      }

      photos.push({
        id,
        url: `/photos/${folder}/${file}`,
        alt: filenameToAlt(file),
        camera,
        lens,
        focalLength,
        aperture,
        shutterSpeed,
        iso,
      })
    }

    locations.push({
      id: folder,
      name: capitalize(folder),
      coverImage: `/photos/${folder}/${files[0]}`,
      photos,
    })
  }

  return `export default ${JSON.stringify(locations, null, 2)}`
}

function photoDataPlugin(): Plugin {
  const virtualModuleId = 'virtual:photo-data'
  const resolvedId = '\0' + virtualModuleId
  const photosDir = path.resolve(__dirname, 'public/photos')

  return {
    name: 'photo-data',

    resolveId(id: string) {
      if (id === virtualModuleId) return resolvedId
    },

    async load(id: string) {
      if (id !== resolvedId) return
      return buildPhotoData(photosDir)
    },

    configureServer(server: ViteDevServer) {
      if (!fs.existsSync(photosDir)) {
        fs.mkdirSync(photosDir, { recursive: true })
      }

      server.watcher.add(photosDir)
      server.watcher.on('all', (_event: string, filePath: string) => {
        if (!filePath.startsWith(photosDir)) return
        const mod = server.moduleGraph.getModuleById(resolvedId)
        if (mod) {
          server.moduleGraph.invalidateModule(mod)
          server.ws.send({ type: 'full-reload' })
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    photoDataPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
