import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Головна' },
    { path: '/gallery', label: 'Галерея' },
    { path: '/achievements', label: 'Досягнення' },
  ]

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
        aria-label="Меню"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-7 h-0.5 bg-maroon rounded transition-all"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-7 h-0.5 bg-maroon rounded transition-all"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-7 h-0.5 bg-maroon rounded transition-all"
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-beige border-l border-gold/30 shadow-soft z-40 md:hidden"
            >
              <div className="flex flex-col p-6 pt-20 gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-center font-semibold transition-all ${
                      location.pathname === item.path
                        ? 'bg-maroon text-beige'
                        : 'bg-white text-maroon hover:bg-gold hover:text-maroon border border-gold/30'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

