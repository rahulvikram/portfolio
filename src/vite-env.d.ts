/// <reference types="vite/client" />

declare module 'virtual:photo-data' {
  interface Photo {
    id: string
    url: string
    alt: string
    camera: string
    lens: string
    focalLength: string
    aperture: string
    shutterSpeed: string
    iso: string
  }

  interface Location {
    id: string
    name: string
    coverImage: string
    photos: Photo[]
  }

  const locations: Location[]
  export default locations
}
