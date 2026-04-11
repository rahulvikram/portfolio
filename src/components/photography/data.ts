export interface Photo {
  id: string;
  url: string;
  alt: string;
  camera: string;
  lens: string;
  focalLength: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
}

export interface Location {
  id: string;
  name: string;
  coverImage: string;
  photos: Photo[];
}

export const locations: Location[] = [
  {
    id: "tokyo",
    name: "Tokyo",
    coverImage: "https://images.unsplash.com/photo-1579385759463-0f8ffef9565c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwbWluaW1hbHxlbnwxfHx8fDE3NzU3ODY5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    photos: [
      {
        id: "t1",
        url: "https://images.unsplash.com/photo-1579385759463-0f8ffef9565c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwbWluaW1hbHxlbnwxfHx8fDE3NzU3ODY5Njh8MA&ixlib=rb-4.1.0&q=80&w=2160",
        alt: "Tokyo Street Minimal",
        camera: "Leica Q2",
        lens: "Summilux 28mm f/1.7 ASPH.",
        focalLength: "28mm",
        aperture: "f/1.7",
        shutterSpeed: "1/500s",
        iso: "100"
      },
      {
        id: "t2",
        url: "https://images.unsplash.com/photo-1604912364280-4a5f295cd988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMG1pbmltYWwlMjBuZW9uJTIwbmlnaHR8ZW58MXx8fHwxNzc1Nzg2OTcyfDA&ixlib=rb-4.1.0&q=80&w=2160",
        alt: "Tokyo Neon Night",
        camera: "Sony A7IV",
        lens: "Sony FE 35mm f/1.4 GM",
        focalLength: "35mm",
        aperture: "f/1.4",
        shutterSpeed: "1/100s",
        iso: "800"
      },
      {
        id: "t3",
        url: "https://images.unsplash.com/photo-1585718511794-e7123b415e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMG1pbmltYWwlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc1Nzg2OTcyfDA&ixlib=rb-4.1.0&q=80&w=2160",
        alt: "Tokyo Architecture",
        camera: "Fujifilm X-T5",
        lens: "XF 23mm f/1.4 R LM WR",
        focalLength: "23mm",
        aperture: "f/8",
        shutterSpeed: "1/250s",
        iso: "160"
      },
      {
        id: "t4",
        url: "https://images.unsplash.com/photo-1607754321878-f6815c8997c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMG1pbmltYWwlMjBuYXR1cmV8ZW58MXx8fHwxNzc1Nzg2OTczfDA&ixlib=rb-4.1.0&q=80&w=2160",
        alt: "Tokyo Nature",
        camera: "Canon EOS R5",
        lens: "RF 70-200mm f/2.8 L IS USM",
        focalLength: "200mm",
        aperture: "f/2.8",
        shutterSpeed: "1/1000s",
        iso: "400"
      }
    ]
  },
  {
    id: "seattle",
    name: "Seattle",
    coverImage: "https://images.unsplash.com/photo-1536407825746-05af2cc212e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWF0dGxlJTIwc3BhY2UlMjBuZWVkbGUlMjBtaW5pbWFsfGVufDF8fHx8MTc3NTc4Njk3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    photos: [
      {
        id: "s1",
        url: "https://images.unsplash.com/photo-1536407825746-05af2cc212e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWF0dGxlJTIwc3BhY2UlMjBuZWVkbGUlMjBtaW5pbWFsfGVufDF8fHx8MTc3NTc4Njk3M3ww&ixlib=rb-4.1.0&q=80&w=2160",
        alt: "Seattle Space Needle",
        camera: "Sony A7R V",
        lens: "Sony FE 50mm f/1.2 GM",
        focalLength: "50mm",
        aperture: "f/1.2",
        shutterSpeed: "1/4000s",
        iso: "100"
      },
      {
        id: "s2",
        url: "https://images.unsplash.com/photo-1581895186853-3d4a2c545f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWF0dGxlJTIwbWluaW1hbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzU3ODY5NzR8MA&ixlib=rb-4.1.0&q=80&w=2160",
        alt: "Seattle Architecture",
        camera: "Hasselblad X2D 100C",
        lens: "XCD 4/45P",
        focalLength: "45mm",
        aperture: "f/8",
        shutterSpeed: "1/125s",
        iso: "64"
      },
      {
        id: "s3",
        url: "https://images.unsplash.com/photo-1698504554672-28226c5863d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWF0dGxlJTIwbWluaW1hbCUyMHJhaW58ZW58MXx8fHwxNzc1Nzg2OTc0fDA&ixlib=rb-4.1.0&q=80&w=2160",
        alt: "Seattle Rain",
        camera: "Nikon Z8",
        lens: "NIKKOR Z 24-70mm f/2.8 S",
        focalLength: "70mm",
        aperture: "f/2.8",
        shutterSpeed: "1/200s",
        iso: "800"
      }
    ]
  },
  {
    id: "portland",
    name: "Portland",
    coverImage: "https://images.unsplash.com/photo-1569898655762-1cce65edf629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0bGFuZCUyMGJyaWRnZSUyMG1pbmltYWx8ZW58MXx8fHwxNzc1Nzg2OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    photos: [
      {
        id: "p1",
        url: "https://images.unsplash.com/photo-1569898655762-1cce65edf629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0bGFuZCUyMGJyaWRnZSUyMG1pbmltYWx8ZW58MXx8fHwxNzc1Nzg2OTc0fDA&ixlib=rb-4.1.0&q=80&w=2160",
        alt: "Portland Bridge",
        camera: "Canon EOS R3",
        lens: "RF 15-35mm f/2.8 L IS USM",
        focalLength: "24mm",
        aperture: "f/5.6",
        shutterSpeed: "1/320s",
        iso: "100"
      },
      {
        id: "p2",
        url: "https://images.unsplash.com/photo-1634237069748-dde5d4a5d8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0bGFuZCUyMGZvcmVzdCUyMG1pbmltYWx8ZW58MXx8fHwxNzc1Nzg2OTc0fDA&ixlib=rb-4.1.0&q=80&w=2160",
        alt: "Portland Forest",
        camera: "Panasonic Lumix S5II",
        lens: "Lumix S PRO 50mm f/1.4",
        focalLength: "50mm",
        aperture: "f/1.4",
        shutterSpeed: "1/1000s",
        iso: "200"
      },
      {
        id: "p3",
        url: "https://images.unsplash.com/photo-1583000152317-3cdb00c7b614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0bGFuZCUyMGNvZmZlZSUyMHNob3AlMjBtaW5pbWFsfGVufDF8fHx8MTc3NTc4Njk3NXww&ixlib=rb-4.1.0&q=80&w=2160",
        alt: "Portland Coffee Shop",
        camera: "Fujifilm X100VI",
        lens: "23mm f/2.0",
        focalLength: "23mm",
        aperture: "f/2.8",
        shutterSpeed: "1/60s",
        iso: "400"
      }
    ]
  }
];
