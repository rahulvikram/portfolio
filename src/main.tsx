import { StrictMode, Suspense, lazy, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'

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

// v1 keeps its own component tree, so none of it loads until someone visits /v1.
const V1App = lazy(() => import('./v1/App.tsx'))
const V1SmoothCursor = lazy(() =>
  import('./v1/components/ui/smooth-cursor.tsx').then((m) => ({ default: m.SmoothCursor })),
)
const V1ShowcaseLayout = lazy(() =>
  import('./v1/components/photography/Layout.tsx').then((m) => ({ default: m.FigmaShowcaseLayout })),
)
const V1HomePage = lazy(() =>
  import('./v1/components/photography/HomePage.tsx').then((m) => ({ default: m.FigmaHomePage })),
)
const V1GalleryPage = lazy(() =>
  import('./v1/components/photography/GalleryPage.tsx').then((m) => ({ default: m.FigmaGalleryPage })),
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
  const isPhotographyRoute = location.pathname.replace(/^\/v1/, '').startsWith('/photography')
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(pointer: coarse)')
    const update = () => setIsCoarsePointer(mql.matches)
    update()
    mql.addEventListener?.('change', update)
    return () => mql.removeEventListener?.('change', update)
  }, [])

  useLenis(!isPhotographyRoute && !isCoarsePointer)

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/photography" element={<FigmaShowcaseLayout />}>
          <Route index element={<FigmaHomePage />} />
          <Route path="location/:id" element={<FigmaGalleryPage />} />
        </Route>
        <Route
          path="/v1"
          element={
            <div className="site-v1">
              {!isPhotographyRoute && !isCoarsePointer && <V1SmoothCursor />}
              <Outlet />
            </div>
          }
        >
          <Route index element={<V1App />} />
          <Route path="photography" element={<V1ShowcaseLayout />}>
            <Route index element={<V1HomePage />} />
            <Route path="location/:id" element={<V1GalleryPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
