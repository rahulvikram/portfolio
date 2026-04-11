import locationData from 'virtual:photo-data'

export interface Photo {
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

export interface Location {
  id: string
  name: string
  coverImage: string
  photos: Photo[]
}

export const locations: Location[] = locationData
