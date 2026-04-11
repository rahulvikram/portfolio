import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { SmoothCursor } from './components/ui/smooth-cursor.tsx'
import Lenis from 'lenis'

import App from './App.tsx'
import { FigmaShowcaseLayout } from './components/photography/Layout.tsx'
import { FigmaHomePage } from './components/photography/HomePage.tsx'
import { FigmaGalleryPage } from './components/photography/GalleryPage.tsx'
import './index.css'

// Initialize smooth scroll
const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  autoRaf: true,
});

function AppRoutes() {
  const location = useLocation()
  const isFigmaShowcaseRoute = location.pathname.startsWith('/photography')

  return (
    <>
      {!isFigmaShowcaseRoute && <SmoothCursor />}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/photography" element={<FigmaShowcaseLayout />}>
          <Route index element={<FigmaHomePage />} />
          <Route path="location/:id" element={<FigmaGalleryPage />} />
        </Route>
      </Routes>
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
