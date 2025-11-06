import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const items = [
  { 
    icon: '🥇', 
    title: 'Найкращий спортсмен',
    description: 'Найбільша витривалість та швидкість',
    image: '/photos/ach_sport.jpg'
  },
  { 
    icon: '🛠', 
    title: 'Майстер на всі руки',
    description: 'Може виправити все що завгодно',
    image: '/photos/ach_work.jpg'
  },
  { 
    icon: '💪', 
    title: 'Супергерой 24/7',
    description: 'Завжди готовий допомогти',
    image: '/photos/ach_help.jpg'
  },
  { 
    icon: '🚗', 
    title: 'Король дороги',
    description: 'Найкращий водій',
    image: '/photos/ach_road.jpg'
  },
  { 
    icon: '🎣', 
    title: 'Майстер риболовлі',
    description: 'Завжди з уловом',
    image: '/photos/ach_fish.jpg'
  },
  { 
    icon: '❤️', 
    title: 'Тато, який завжди поруч',
    description: 'Підтримка та любов',
    image: '/photos/ach_near.jpg'
  },
  {
    icon: '🎓',
    title: 'Витривалий учень ',
    description: 'Вчить англійську понад усе',
    image: '/photos/ach_study.jpg'
  },
  {
    icon:'💡',
    title: 'Найкращий генератор ідей',
    description: 'Допоможе і дасть ідеї для всього',
    image: '/photos/ach_idea.jpg'
  },
  {
    icon: '❤️',
    title: 'Опора попри все  ',
    description: 'Завжди підтримка та любов',
    image: '/photos/ach_last.jpg'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
}

export default function Achievements() {
  return (
    <div>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-bold text-maroon mb-4 sm:mb-6 text-center"
      >
        Досягнення нашого героя 🦸‍♂️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-maroon/80 text-sm sm:text-base mb-6 sm:mb-8 text-center"
      >
        Всі великі та малі перемоги, які роблять тебе особливим
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="rounded-xl bg-white border border-gold/30 shadow-soft p-4 sm:p-6 overflow-hidden group"
          >
            {/* Photo Section - додайте фото пізніше */}
            {it.image && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 rounded-lg overflow-hidden bg-beige/30 flex items-center justify-center"
                style={{ minHeight: '200px' }}
              >
                <img 
                  src={it.image} 
                  alt={it.title}
                  className="w-full h-auto max-h-64 sm:max-h-80 object-contain"
                />
              </motion.div>
            )}
            
            <div className="flex items-start gap-3 sm:gap-4">
              <motion.div 
                className="text-3xl sm:text-4xl flex-shrink-0"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: idx * 0.3
                }}
              >
                {it.icon}
              </motion.div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-maroon mb-1 sm:mb-2">
                  {it.title}
                </h3>
                <p className="text-xs sm:text-sm text-maroon/70">
                  {it.description}
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <motion.div
              className="mt-4 h-1 bg-gradient-to-r from-gold via-maroon to-gold rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 sm:mt-12 bg-white rounded-xl p-6 sm:p-8 border border-gold/30 shadow-soft"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-maroon mb-4 text-center">
          Статистика героя 📊
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-maroon mb-1">100%</div>
            <div className="text-xs sm:text-sm text-maroon/70">Допомоги</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-maroon mb-1">∞</div>
            <div className="text-xs sm:text-sm text-maroon/70">Любові</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-maroon mb-1">24/7</div>
            <div className="text-xs sm:text-sm text-maroon/70">Підтримки</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-maroon mb-1">⭐</div>
            <div className="text-xs sm:text-sm text-maroon/70">Рейтинг</div>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 sm:mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="btn-primary inline-block text-sm sm:text-base">
          Повернутися на головну 🏠
        </Link>
        <Link to="/gallery" className="btn-primary inline-block text-sm sm:text-base">
          Переглянути галерею 📸
        </Link>
      </div>
    </div>
  )
}



