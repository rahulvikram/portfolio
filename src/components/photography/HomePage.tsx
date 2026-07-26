import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";
import { locations } from "@/lib/photos";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";

/**
 * Controls how the "N photos" line on each album card behaves pre-hover vs on-hover.
 *
 * 1 = Collapse & animate in: no space is reserved for the line pre-hover; it
 *     animates open (max-height + opacity) on hover.
 * 2 = Slide up on hover: the line takes up zero layout space and is
 *     absolutely positioned, sliding/fading into place via a transform on hover.
 * 3 = Always reserve space, just dim: the line's space is always reserved in
 *     the flow, only its opacity toggles on hover.
 */
const CARD_TYPOGRAPHY: 1 | 2 | 3 = 1;

export function FigmaHomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
    >
      <header className="mb-12 flex items-start justify-between gap-6 text-left">
        <div>
          <h1 className="mb-2 text-3xl font-medium tracking-tight sm:text-4xl">
            photography gallery
          </h1>
          <p className="max-w-xl text-sm text-muted-foreground">
            aka my diary — shot on <a href="https://www.usa.canon.com/support/p/eos-rebel-t3i?srsltid=AfmBOoqLJF8nXBPo-cjcAl7g6ZsSfOgR2ydYKpBe9Z9hVebCp0BNLIN2" className="text-link underline decoration-link/40 underline-offset-2 transition-colors hover:decoration-link" target="_blank" rel="noopener noreferrer">eos</a>
          </p>
        </div>

        <div className="flex shrink-0 items-center pt-4 gap-4">
          <Link
            to="/"
            aria-label="Home"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <HomeIcon className="h-4 w-4" />
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <Link
            key={loc.id}
            to={`/photography/location/${loc.id}`}
            className="group relative block aspect-[4/5] overflow-hidden bg-muted"
          >
            <img
              src={loc.coverImage}
              alt={loc.name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="absolute bottom-0 left-0 p-8 flex flex-col justify-end">
              <h2 className="text-white text-2xl font-medium tracking-wide">
                {loc.name}
              </h2>
              {loc.year && (
                <p className="text-white/70 text-sm mt-1 tracking-wide">
                  {loc.year}
                </p>
              )}
              {CARD_TYPOGRAPHY === 1 && (
                <div className="max-h-0 overflow-hidden group-hover:max-h-6 transition-all duration-500 ease-out">
                  <p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out delay-100">
                    {loc.photos.length} photos
                  </p>
                </div>
              )}

              {CARD_TYPOGRAPHY === 2 && (
                <div className="relative h-0">
                  <p className="absolute left-0 top-1 whitespace-nowrap text-white/80 text-sm opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                    {loc.photos.length} photos
                  </p>
                </div>
              )}

              {CARD_TYPOGRAPHY === 3 && (
                <p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-75">
                  {loc.photos.length} photos
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
