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
        <h1 className="text-3xl font-light text-zinc-900 mb-4">Location not found</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-zinc-500 hover:text-zinc-900 transition-colors border-0 bg-transparent"
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
      <header className="mb-10   flex flex-col gap-6">
        <div className="text-left">
          <button
            onClick={() => navigate("/photography")}
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors group mb-6 border-0 bg-transparent p-0"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm uppercase tracking-widest font-medium">Back to collections</span>
          </button>
          <h1 className="text-4xl mt-14 md:text-5xl font-light tracking-tight text-zinc-900 text-left">
            {location.name}
          </h1>
          <p className="text-zinc-500 mt-2 font-light text-left">
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
              className="group relative overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 ease-out"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 ease-out" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-zinc-800">
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
