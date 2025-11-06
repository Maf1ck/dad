import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    { path: '/', label: 'Головна', icon: '🏠' },
    { path: '/gallery', label: 'Галерея', icon: '📸' },
    { path: '/achievements', label: 'Досягнення', icon: '🏆' },
  ]

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[100]"
        aria-label="Меню"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-maroon rounded-full"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-0.5 bg-maroon rounded-full"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-maroon rounded-full"
        />
      </button>

      {/* Overlay і Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Оверлей - FIXEDposition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black/60 backdrop-blur-sm z-[99]"
              style={{ position: 'fixed' }}
            />
            
            {/* Меню */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-beige shadow-2xl z-[99]"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {/* Навігація */}
                <div className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-6 py-4 rounded-xl font-semibold text-lg transition-all ${
                        location.pathname === item.path
                          ? 'bg-maroon text-beige shadow-soft'
                          : 'bg-white text-maroon hover:bg-gold border border-gold/30'
                      }`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Футер */}
                <div className="mt-auto pb-6 pt-6 border-t border-gold/30">
                  <p className="text-sm text-maroon/70 text-center">
                    З любов'ю для найкращого тата ❤️
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}