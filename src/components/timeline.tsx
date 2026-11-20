import { useEffect, useId, useRef, useState, type CSSProperties } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "motion/react"
import { ArrowRight, ChevronLeft, ChevronRight, ImageIcon, Images, X } from "lucide-react"
import { Section } from "./section"
import odot from "../assets/company-logos/odot.png"
import osu from "../assets/company-logos/osu.png"
import osucoe from "../assets/company-logos/osucoe.png"
import viasat from "../assets/company-logos/viasat.jpg"
import dubhacks from "../assets/timeline/dubhacks.jpeg"
import capstone from "../assets/timeline/capstone.jpg"
import peak from "../assets/timeline/peak.jpeg"

// brand gradients: Viasat blue/green (brand guide), OSU Beaver Orange, ODOT orange
// University of Washington purple + metallic gold
const uwGradient = "linear-gradient(135deg, #4B2E83, #B7A57A)"
const osuGradient = "linear-gradient(135deg, #D73F09, #F58B4C, #D73F09)"
const companies = {
    viasat: { name: "Viasat", logo: viasat, gradient: "linear-gradient(135deg, #009FE3, #BED733)" },
    cass: { name: "CASS", logo: osu, gradient: osuGradient },
    odot: { name: "ODOT", logo: odot, gradient: "linear-gradient(135deg, #F2981C, #FCD08C, #F2981C)" },
    star: { name: "STAR Lab", logo: osucoe, gradient: osuGradient },
} as const

type Entry = Readonly<{
    date: string
    kind: "milestone" | "photo"
    title: string // milestone heading, or photo caption
    subtitle?: string
    company?: keyof typeof companies // adds logo + brand gradient outline
    link?: string // makes a photo card clickable (opens in a new tab)
    gradient?: string // custom outline gradient for entries without a company
    image?: string // photo src; placeholder shown when missing
    gallery?: (string | null)[] // set on any entry to render it as a clickable photo stack; null = placeholder
}>

const placeholders = (n: number) => Array<null>(n).fill(null)
// every image in a folder, sorted by filename; drop new photos in and they appear
const photosIn = (files: Record<string, string>) => Object.values(files)
const viasatPhotos = photosIn(
    import.meta.glob<string>("../assets/timeline/viasat/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" }),
)
const cassFiles = photosIn(
    import.meta.glob<string>("../assets/timeline/cass/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" }),
)
const cassPhotos = cassFiles.length ? cassFiles : placeholders(6) // placeholders until photos are added to timeline/cass/

// newest first: scrolling right goes back in time
const entries: Entry[] = [
    { date: "March 2027", kind: "milestone", company: "viasat", title: "Started at Viasat", subtitle: "Full-Stack Software Engineer" },
    { date: "October 2026", kind: "photo", gradient: uwGradient, image: dubhacks, link: "https://github.com/Jakhangir18/Dubhacks2026", title: "Won 1st place in the Gemini track @ DubHacks 2026!" },
    { date: "June 2026 - September 2026", kind: "photo", company: "viasat", title: "Summer in San Diego ☀️ 🏖️ 🌴", gallery: viasatPhotos },
    { date: "June 2026", kind: "milestone", company: "viasat", title: "Joined Viasat", subtitle: "Full-Stack Software Engineer Intern" },
    { date: "June 2026", kind: "milestone", company: "cass", title: "Left CASS", subtitle: "Software Engineering Student Mentor" },
    { date: "June 2026", kind: "photo", gradient: osuGradient, image: capstone, title: "Presenting our senior capstone project @ Engineering Expo!" },
    { date: "March 2026", kind: "photo", gradient: osuGradient, image: peak, title: "Hike at Mary's Peak in Corvallis..." },
    { date: "May 2025", kind: "milestone", company: "star", title: "Left STAR Lab", subtitle: "Applied AI Research Intern" },
    { date: "January 2025", kind: "photo", company: "cass", title: "Interning at the Center for Applied Systems and Software.", gallery: cassPhotos },
    { date: "January 2025", kind: "milestone", company: "cass", title: "Joined CASS", subtitle: "Software Engineering Intern" },
    { date: "October 2024", kind: "milestone", company: "star", title: "Joined STAR Lab", subtitle: "Applied AI Research Intern" },
]

/** Outline classes + style: brand gradient for company entries, plain border otherwise. */
function outline(entry: Entry): { className: string; style?: CSSProperties } {
    const gradient = entry.gradient ?? (entry.company && companies[entry.company].gradient)
    if (!gradient) return { className: "border border-border" }
    return { className: "brand-outline", style: { "--brand-gradient": gradient } as CSSProperties }
}

function Photo({ src, className = "" }: Readonly<{ src?: string | null; className?: string }>) {
    return src ? (
        <img src={src} alt="" loading="lazy" decoding="async" className={`h-full w-full object-cover ${className}`} />
    ) : (
        <div className={`flex h-full w-full items-center justify-center bg-muted text-muted-foreground/50 ${className}`}>
            <ImageIcon className="size-8" aria-hidden />
        </div>
    )
}

function Logo({ entry, className }: Readonly<{ entry: Entry; className: string }>) {
    if (!entry.company) return null
    const { name, logo } = companies[entry.company]
    return <img src={logo} alt={`${name} logo`} loading="lazy" decoding="async" className={`object-contain ${className}`} />
}

function Caption({ children }: Readonly<{ children: string }>) {
    return (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 text-xs leading-relaxed text-white">
            {children}
        </figcaption>
    )
}

function GalleryViewer({ entry, photos, onClose }: Readonly<{ entry: Entry; photos: (string | null)[]; onClose: () => void }>) {
    const titleId = useId()
    const closeButton = useRef<HTMLButtonElement>(null)
    const track = useRef<HTMLDivElement>(null)

    const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.6, behavior: "smooth" })

    useEffect(() => {
        const opener = document.activeElement as HTMLElement | null
        closeButton.current?.focus()
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
            if (e.key === "ArrowRight") scroll(1)
            if (e.key === "ArrowLeft") scroll(-1)
        }
        const overflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        window.addEventListener("keydown", onKey)
        return () => {
            window.removeEventListener("keydown", onKey)
            document.body.style.overflow = overflow
            opener?.focus()
        }
    }, [onClose])

    const sideButton = "absolute top-1/2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center text-white/60 transition-colors hover:text-white sm:flex"

    // portal: escape the timeline scroller's overflow/mask; data-lenis-prevent: let the track scroll natively
    return createPortal(
        <motion.div
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col bg-black/90 text-white backdrop-blur-md"
            onClick={onClose}
        >
            <header className="flex items-start justify-between gap-4 p-6" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-3">
                    <Logo entry={entry} className="size-8 rounded-sm bg-white p-px" />
                    <div>
                        <time className="font-mono text-xs text-white/60">{entry.date}</time>
                        <h3 id={titleId} className="text-sm font-medium">{entry.title}</h3>
                    </div>
                </div>
                <button ref={closeButton} type="button" aria-label="Close gallery" onClick={onClose} className="text-white/60 transition-colors hover:text-white">
                    <X className="size-5" />
                </button>
            </header>

            <button type="button" aria-label="Previous photos" className={`${sideButton} left-2`} onClick={(e) => { e.stopPropagation(); scroll(-1) }}>
                <ChevronLeft className="size-7" />
            </button>
            <button type="button" aria-label="Next photos" className={`${sideButton} right-2`} onClick={(e) => { e.stopPropagation(); scroll(1) }}>
                <ChevronRight className="size-7" />
            </button>

            {/* vertical wheel scrolls sideways so mouse users can browse without a trackpad */}
            <div
                ref={track}
                onWheel={(e) => { if (track.current && Math.abs(e.deltaY) > Math.abs(e.deltaX)) track.current.scrollLeft += e.deltaY }}
                className="flex flex-1 snap-x snap-proximity items-center gap-4 overflow-x-auto px-[10vw] pb-12 [scrollbar-width:none]"
            >
                {photos.map((src, i) => (
                    <motion.div
                        key={src ?? i}
                        initial={{ opacity: 0, x: 120, scale: 0.85 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 26, delay: Math.min(i, 6) * 0.05 }}
                        className="h-[70dvh] shrink-0 snap-center overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {src ? (
                            <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-auto max-w-[85vw] object-contain" />
                        ) : (
                            <div className="flex aspect-[3/4] h-full max-w-[85vw] items-center justify-center bg-white/5 text-white/30">
                                <ImageIcon className="size-10" aria-hidden />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>,
        document.body,
    )
}

// back layers of the stack: resting tilt, then fan out on hover/focus
const stackLayers = [
    "rotate-[-5deg] group-hover:-translate-x-3 group-hover:rotate-[-9deg] group-focus-visible:-translate-x-3 group-focus-visible:rotate-[-9deg]",
    "rotate-[4deg] group-hover:translate-x-3 group-hover:rotate-[8deg] group-focus-visible:translate-x-3 group-focus-visible:rotate-[8deg]",
]

function PhotoStack({ entry, photos }: Readonly<{ entry: Entry; photos: (string | null)[] }>) {
    const [open, setOpen] = useState(false)
    const { className: outlineClass, style } = outline(entry)
    return (
        <>
            <button
                type="button"
                aria-haspopup="dialog"
                aria-label={`Open gallery: ${entry.title} (${photos.length} photos)`}
                onClick={() => setOpen(true)}
                className="group relative block aspect-[3/4] w-full text-left outline-none"
            >
                {stackLayers.map((layer, i) => (
                    <span key={layer} aria-hidden style={style} className={`rounded-lg absolute inset-0 overflow-hidden bg-card shadow-sm transition-transform duration-300 ${outlineClass} ${layer}`}>
                        <Photo src={photos[i + 1]} className="opacity-80" />
                    </span>
                ))}
                <figure style={style} className={`rounded-lg relative h-full overflow-hidden bg-muted shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-ring ${outlineClass}`}>
                    <Photo src={photos[0]} />
                    <Logo entry={entry} className="absolute top-2 left-2 size-6 rounded-sm bg-white p-px" />
                    <span className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 px-1.5 py-0.5 font-mono text-[10px] text-white">
                        <Images className="size-3" aria-hidden /> {photos.length}
                    </span>
                    <Caption>{entry.title}</Caption>
                </figure>
            </button>
            <AnimatePresence>
                {open && <GalleryViewer entry={entry} photos={photos} onClose={() => setOpen(false)} />}
            </AnimatePresence>
        </>
    )
}

function Card({ entry }: Readonly<{ entry: Entry }>) {
    if (entry.gallery) return <PhotoStack entry={entry} photos={entry.gallery} />
    const { className, style } = outline(entry)
    if (entry.kind === "milestone") {
        return (
            <div style={style} className={`rounded-lg relative flex flex-col items-center bg-card px-4 py-6 text-center ${className}`}>
                <Logo entry={entry} className="mb-3 size-8 rounded-sm" />
                <h3 className="text-sm font-medium">{entry.title}</h3>
                {entry.subtitle && <p className="mt-1 text-xs text-muted-foreground">{entry.subtitle}</p>}
            </div>
        )
    }
    const photo = (
        <figure style={style} className={`rounded-lg relative aspect-[3/4] overflow-hidden bg-muted ${className}`}>
            <Photo src={entry.image} />
            <Logo entry={entry} className="absolute top-2 left-2 size-6 rounded-sm bg-white p-px" />
            <Caption>{entry.title}</Caption>
        </figure>
    )
    return entry.link ? (
        <a href={entry.link} target="_blank" rel="noopener noreferrer" className="block rounded-lg transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2">
            {photo}
        </a>
    ) : photo
}

// first card lines up with the site's content column (max-w-3xl minus px-6 = 45rem); % resolves against the scroller width
const alignPad = "px-[max(1.5rem,calc((100%-45rem)/2))]"
const alignScrollPad = "scroll-px-[max(1.5rem,calc((100%-45rem)/2))]"

export function Timeline() {
    const scroller = useRef<HTMLDivElement>(null)
    const [atStart, setAtStart] = useState(true)
    const [atEnd, setAtEnd] = useState(false)

    const updateEdges = () => {
        const el = scroller.current
        if (!el) return
        setAtStart(el.scrollLeft <= 1)
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
    }

    const scroll = (dir: 1 | -1) =>
        scroller.current?.scrollBy({ left: dir * scroller.current.clientWidth * 0.8, behavior: "smooth" })

    const navButton = "flex size-7 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-40"

    return (
        <Section id="timeline" title="Timeline">
            <div className="mb-4 flex items-center justify-between">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                🌀 scroll to time travel<ArrowRight className="size-3" aria-hidden />
                </p>
                <div className="flex gap-2">
                    <button type="button" aria-label="Newer" className={navButton} disabled={atStart} onClick={() => scroll(-1)}>
                        <ChevronLeft className="size-4" />
                    </button>
                    <button type="button" aria-label="Older" className={navButton} disabled={atEnd} onClick={() => scroll(1)}>
                        <ChevronRight className="size-4" />
                    </button>
                </div>
            </div>

            {/* break out of the narrow content column */}
            <div className="relative left-1/2 w-[calc(100vw-2rem)] -translate-x-1/2">
                <div
                    ref={scroller}
                    onScroll={updateEdges}
                    tabIndex={0}
                    aria-label="Career timeline"
                    className={`snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] focus-visible:outline-2 [mask-image:linear-gradient(to_right,transparent,black_64px,black_calc(100%-64px),transparent)] ${alignScrollPad}`}
                >
                    <ol className={`relative flex w-max gap-6 pt-1 pb-6 ${alignPad}`}>
                        <span aria-hidden className="absolute inset-x-0 top-[8px] h-px bg-border" />
                        {entries.map((entry) => (
                            <li key={`${entry.date}-${entry.title}`} className="relative flex w-52 shrink-0 snap-start flex-col items-center">
                                <span aria-hidden className="z-10 size-2.5 rounded-full border border-muted-foreground bg-background" />
                                <span aria-hidden className="h-4 w-px bg-border" />
                                <time className="mb-3 font-mono text-xs text-muted-foreground">{entry.date}</time>
                                <div className="w-full">
                                    <Card entry={entry} />
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </Section>
    )
}
