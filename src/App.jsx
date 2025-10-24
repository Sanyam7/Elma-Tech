import { useEffect, useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

// Route-level code splitting
const Home = lazy(() => import('./pages/HomePage.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 700, once: true })
  }, [])

  return (
    <>
      <Navbar onToggleMenu={() => setMobileOpen(true)} />
      <ScrollToTop />
      {/* Suspense wraps routes to defer loading of page bundles */}
      <Suspense fallback={<div className="page-loading" aria-live="polite">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Suspense>
      <Footer />
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

export default App
