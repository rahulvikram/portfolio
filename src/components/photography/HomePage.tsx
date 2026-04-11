import { Link } from "react-router-dom";
import { locations } from "./data";
import { motion } from "motion/react";

export function FigmaHomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
    >
      <header className="mb-12 text-center md:text-left">
        <h1 className="photo-header text-5xl font-light tracking-tight text-black-900 mb-4">
          Photography Gallery
        </h1>
        <p className="text-lg text-zinc-500 font-light max-w-xl">
          Places I've been, things I've captured, people I love, moments to remember.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <Link
            key={loc.id}
            to={`/photography/location/${loc.id}`}
            className="group block relative overflow-hidden bg-zinc-100 aspect-[4/5] hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 ease-out"
          >
            <img
              src={loc.coverImage}
              alt={loc.name}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="absolute bottom-0 left-0 p-8 flex flex-col justify-end">
              <h2 className="text-white text-2xl font-medium tracking-wide">
                {loc.name}
              </h2>
              <p className="text-white/80 text-sm mt-1 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                {loc.photos.length} photos
              </p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
