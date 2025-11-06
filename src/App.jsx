import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Achievements from './pages/Achievements.jsx'
import BurgerMenu from './components/BurgerMenu.jsx'
import BackgroundMusic from './components/BackgroundMusic.jsx'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-beige">
      <header className="sticky top-0 z-10 bg-beige/80 backdrop-blur border-b border-gold/30">
        <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-maroon">🎂 Dad Day</Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3">
            <Link className="btn-primary text-sm sm:text-base" to="/">Головна</Link>
            <Link className="btn-primary text-sm sm:text-base" to="/gallery">Галерея</Link>
            <Link className="btn-primary text-sm sm:text-base" to="/achievements">Досягнення</Link>
          </div>
          {/* Mobile Burger Menu */}
          <BurgerMenu />
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/achievements" element={<Achievements />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <BackgroundMusic />
    </div>
  )
}

export default App
