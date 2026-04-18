import { StrictMode, Suspense, lazy, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { SmoothCursor } from './components/ui/smooth-cursor.tsx'

import App from './App.tsx'
import './index.css'

const FigmaShowcaseLayout = lazy(() =>
  import('./components/photography/Layout.tsx').then((m) => ({ default: m.FigmaShowcaseLayout })),
)
const FigmaHomePage = lazy(() =>
  import('./components/photography/HomePage.tsx').then((m) => ({ default: m.FigmaHomePage })),
)
const FigmaGalleryPage = lazy(() =>
  import('./components/photography/GalleryPage.tsx').then((m) => ({ default: m.FigmaGalleryPage })),
)

function useLenis(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return
    let cancelled = false
    let lenis: { destroy: () => void } | null = null
    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return
      lenis = new Lenis({
        duration: 0.9,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        autoRaf: true,
      })
    })
    return () => {
      cancelled = true
      lenis?.destroy()
    }
  }, [enabled])
}

function AppRoutes() {
  const location = useLocation()
  const isPhotographyRoute = location.pathname.startsWith('/photography')
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(pointer: coarse)')
    const update = () => setIsCoarsePointer(mql.matches)
    update()
    mql.addEventListener?.('change', update)
    return () => mql.removeEventListener?.('change', update)
  }, [])

  useLenis(!isPhotographyRoute && !isCoarsePointer)

  const showCursor = !isPhotographyRoute && !isCoarsePointer

  return (
    <>
      {showCursor && <SmoothCursor />}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/photography" element={<FigmaShowcaseLayout />}>
            <Route index element={<FigmaHomePage />} />
            <Route path="location/:id" element={<FigmaGalleryPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
