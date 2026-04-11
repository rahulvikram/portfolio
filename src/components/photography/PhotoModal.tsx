import { useState, useEffect, useCallback } from "react";
import type { Photo } from "@/lib/photos";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PhotoModalProps {
  photos: Photo[];
  initialIndex: number;
  onClose: () => void;
}

export function PhotoModal({ photos, initialIndex, onClose }: PhotoModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentPhoto = photos[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-zinc-400 text-sm tracking-widest font-medium">
          {currentIndex + 1} / {photos.length}
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={onClose}
            aria-label="Close photo viewer"
            className="group items-center justify-center rounded-full !bg-transparent !p-0 !text-white/50 transition-colors focus:outline-none focus-visible:!outline-none"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
        aria-label="Previous photo"
        className="group absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full !p-0 !text-white/50 transition-colors focus:outline-none focus-visible:!outline-none"
      >
        <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform duration-100" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); handleNext(); }}
        aria-label="Next photo"
        className="group absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full !p-0 !text-white/50 transition-colors focus:outline-none focus-visible:!outline-none"
      >
        <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-100" />
      </button>

      <div 
        className="relative max-w-5xl w-full flex flex-col items-center justify-center px-12 md:px-20 mt-8 group"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            src={currentPhoto.url}
            alt={currentPhoto.alt}
            className="max-h-[60vh] w-auto object-contain rounded-xl"
          />
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPhoto.id + "-meta"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="mt-8 text-center text-zinc-400 w-full"
          >
            <h3 className="text-white font-medium text-lg tracking-wide mb-1">
              {currentPhoto.camera}
            </h3>
            <p className="text-sm tracking-wider text-zinc-500 mb-4">
              {currentPhoto.lens}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs uppercase tracking-widest font-medium text-zinc-600">
              <span className="flex flex-col gap-1 items-center"><span className="text-[10px] text-zinc-700">Focal</span> {currentPhoto.focalLength}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800" />
              <span className="flex flex-col gap-1 items-center"><span className="text-[10px] text-zinc-700">Aperture</span> {currentPhoto.aperture}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800" />
              <span className="flex flex-col gap-1 items-center"><span className="text-[10px] text-zinc-700">Shutter</span> {currentPhoto.shutterSpeed}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800" />
              <span className="flex flex-col gap-1 items-center"><span className="text-[10px] text-zinc-700">ISO</span> {currentPhoto.iso}</span>
            </div>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs uppercase tracking-widest font-medium text-zinc-500 mt-12">
            <a
            href={currentPhoto.url}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
