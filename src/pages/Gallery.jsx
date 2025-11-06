import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const photos = [
  { src: '/photos/gal_mountain.jpg', caption: 'Гори Греції' },
  { src: '/photos/gal_odessa.jpg', caption: 'Нарешті Одеса' },
  { src: '/photos/gal_samurai.jpg', caption: 'Зустріч Самураїв' },
  { src: '/photos/gal_bikes.jpg', caption: 'Щоденна їзда на велосипедах' },
  { src: '/photos/gal_build.jpg', caption: 'Започаткування новї ери Кошманів' },
  { src: '/photos/gal_car.jpg', caption: 'Нарешті обновочка' },
  { src: '/photos/gal_hellowen.jpg', caption: 'Тато в тренді нових свят' },
  { src: '/photos/gal_history.jpg', caption: 'Вивчення цікавої історії' },
  { src: '/photos/gal_sea.jpg', caption: 'Відкриття нового моря' },
  { src: '/photos/gal_sport.jpg', caption: 'Повернення в спорт тут як тут!' },
]

// Custom Arrow Components
function CustomPrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-maroon/80 hover:bg-maroon text-beige w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-soft transition-all hover:scale-110"
      aria-label="Попереднє фото"
    >
      <span className="text-xl sm:text-2xl">‹</span>
    </button>
  )
}

function CustomNextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-maroon/80 hover:bg-maroon text-beige w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-soft transition-all hover:scale-110"
      aria-label="Наступне фото"
    >
      <span className="text-xl sm:text-2xl">›</span>
    </button>
  )
}

export default function Gallery() {
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: true,
        }
      }
    ]
  }

  const memories = [
    { icon: '🏔️', text: 'Гори та природа' },
    { icon: '🌊', text: 'Морські пригоди' },
    { icon: '🎣', text: 'Риболовля' },
    { icon: '👨‍👩‍👧‍👦', text: 'Родинні моменти' },
  ]

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-bold text-maroon mb-4 sm:mb-6 text-center sm:text-left"
      >
        Наші спогади 🖼
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-maroon/80 text-sm sm:text-base mb-6 text-center sm:text-left"
      >
        Найкращі моменти, які ми пережили разом
      </motion.p>

      <div className="rounded-xl overflow-hidden shadow-soft border border-gold/30 bg-white mb-8 relative">
        <Slider ref={sliderRef} {...settings}>
          {photos.map((p, i) => (
            <div key={i} className="relative bg-beige/30 flex items-center justify-center" style={{ minHeight: '300px' }}>
              <img 
                src={p.src} 
                className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-contain" 
                alt={p.caption} 
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-beige bg-maroon/70 text-sm sm:text-base">
                {p.caption}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Memories Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
      >
        {memories.map((memory, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl p-4 sm:p-6 border border-gold/30 shadow-soft text-center"
          >
            <div className="text-3xl sm:text-4xl mb-2">{memory.icon}</div>
            <p className="text-xs sm:text-sm font-semibold text-maroon">{memory.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl p-6 sm:p-8 border border-gold/30 shadow-soft mb-8"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-maroon mb-3 text-center">
          Кожна фотографія — це історія 📖
        </h3>
        <p className="text-maroon/80 text-sm sm:text-base text-center">
          Тут зібрані найяскравіші моменти нашого життя разом. 
          Кожна фотографія нагадує про щасливі дні та незабутні пригоди.
        </p>
      </motion.div>

      <div className="mt-6 sm:mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/achievements" className="btn-primary inline-block text-sm sm:text-base">
          Перейти до досягнень 💪
        </Link>
        <Link to="/" className="btn-primary inline-block text-sm sm:text-base">
          На головну 🏠
        </Link>
      </div>
    </div>
  )
}



