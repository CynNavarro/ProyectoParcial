import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage     from './pages/HomePage'
import TermsPage    from './pages/TermsPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutMePage       from './pages/AboutMePage'
import ShowcasePortfolio from './pages/ShowcasePortfolio'
import ContactPage       from './pages/ContactPage'

// Al cambiar de ruta, volver siempre arriba del todo
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/about"     element={<AboutMePage />} />
        <Route path="/terms"     element={<TermsPage />} />
        <Route path="/services"  element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/showcase"  element={<ShowcasePortfolio />} />
        <Route path="/contact"   element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
