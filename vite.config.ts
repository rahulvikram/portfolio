import { defineConfig } from 'vite'
import type { Plugin, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import { execSync } from 'child_process'

const WEB_IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.cr2', '.jfif'])
const RAW_EXTENSIONS = new Set(['.heic', '.dng'])
const ALL_IMAGE_EXTENSIONS = new Set([...WEB_IMAGE_EXTENSIONS, ...RAW_EXTENSIONS])

function isVisibleImageFile(name: string): boolean {
  if (name.startsWith('.')) return false
  return ALL_IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase())
}

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

function convertToJpeg(srcPath: string): string {
  const destPath = srcPath.replace(/\.[^.]+$/, '.jpg')
  const needsConvert =
    !fs.existsSync(destPath) ||
    fs.statSync(srcPath).mtimeMs > fs.statSync(destPath).mtimeMs

  if (needsConvert) {
    execSync(
      `sips -s format jpeg -s formatOptions 90 ${JSON.stringify(srcPath)} --out ${JSON.stringify(destPath)}`,
      { stdio: 'ignore' },
    )
  }

  return destPath
}

async function buildPhotoData(photosDir: string): Promise<string> {
  let exifr: { parse: (typeof import('exifr'))['parse'] } | null = null
  try {
    const mod = await import('exifr')
    exifr = mod.default || mod
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
    const allFiles = fs.readdirSync(folderPath, { withFileTypes: true })
      .filter((entry) => entry.isFile() && isVisibleImageFile(entry.name))
      .map((entry) => entry.name)
      .sort()

    const rawBaseNames = new Set(
      allFiles
        .filter((f) => RAW_EXTENSIONS.has(path.extname(f).toLowerCase()))
        .map((f) => path.parse(f).name),
    )

    const files = allFiles.filter((f) => {
      if (RAW_EXTENSIONS.has(path.extname(f).toLowerCase())) return true
      return !rawBaseNames.has(path.parse(f).name)
    })

    if (files.length === 0) continue

    const photos: Array<{
      id: string
      url: string
      alt: string
      camera: string
      lens: string
      focalLength: string
      aperture: string
      shutterSpeed: string
      iso: string
    }> = []

    for (const file of files) {
      const filePath = path.join(folderPath, file)
      const ext = path.extname(file).toLowerCase()
      const isRaw = RAW_EXTENSIONS.has(ext)
      const id = path.parse(file).name

      let servablePath = filePath
      let servableFile = file
      if (isRaw) {
        servablePath = convertToJpeg(filePath)
        servableFile = path.basename(servablePath)
      }

      let camera = 'Unknown'
      let lens = 'Unknown'
      let focalLength = 'Unknown'
      let aperture = 'Unknown'
      let shutterSpeed = 'Unknown'
      let iso = 'Unknown'

      if (exifr) {
        const exifFields = ['Make', 'Model', 'LensModel', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO'] as const
        let parsed = null
        try {
          parsed = await exifr.parse(filePath, { pick: [...exifFields] })
        } catch {
          // Original unreadable (e.g. HEIC) — try the converted JPEG
          if (isRaw) {
            try { parsed = await exifr.parse(servablePath, { pick: [...exifFields] }) } catch {}
          }
        }
        if (parsed) {
          camera = [parsed.Make, parsed.Model].filter(Boolean).join(' ') || 'Unknown'
          lens = parsed.LensModel || 'Unknown'
          focalLength = parsed.FocalLength ? `${parsed.FocalLength}mm` : 'Unknown'
          aperture = parsed.FNumber ? `f/${parsed.FNumber}` : 'Unknown'
          shutterSpeed = parsed.ExposureTime ? formatShutterSpeed(parsed.ExposureTime) : 'Unknown'
          iso = parsed.ISO ? String(parsed.ISO) : 'Unknown'
        }
      }

      photos.push({
        id,
        url: `/photos/${folder}/${servableFile}`,
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
      coverImage: photos[0].url,
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
