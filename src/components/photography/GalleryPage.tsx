import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { locations } from "@/lib/photos";
import type { Photo } from "@/lib/photos";
import { ArrowLeft, Maximize2 } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { PhotoModal } from "./PhotoModal";
import { motion, AnimatePresence } from "motion/react";

export function FigmaGalleryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = locations.find((l) => l.id === id);

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  if (!location) {
    return (
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <h1 className="mb-4 text-3xl font-medium tracking-tight">Location not found</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleOpenPhoto = (index: number) => setSelectedPhotoIndex(index);
  const handleClosePhoto = () => setSelectedPhotoIndex(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24"
    >
      <header className="mb-10 flex flex-col gap-6">
        <div className="text-left">
          <button
            onClick={() => navigate("/photography")}
            className="group mb-14 flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-mono text-xs">back to collections</span>
          </button>
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            {location.name}
          </h1>
          {location.year && (
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {location.year}
            </p>
          )}
          <p className="mt-2 text-sm text-muted-foreground">
            {location.photos.length} observations
          </p>
        </div>
      </header>
 

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}>
        <Masonry gutter="2rem">
          {location.photos.map((photo: Photo, index: number) => (
            <div
              key={photo.id}
              onClick={() => handleOpenPhoto(index)}
              className="group relative cursor-pointer overflow-hidden bg-muted"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 ease-out" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="rounded-full bg-white/80 p-3 text-zinc-900 backdrop-blur-sm">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <PhotoModal
            photos={location.photos}
            initialIndex={selectedPhotoIndex}
            onClose={handleClosePhoto}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
