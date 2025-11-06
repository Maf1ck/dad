import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'

function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })
  useEffect(() => {
    const onResize = () => setSize({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return size
}

export default function Home() {
  const { width, height } = useWindowSize()
  const [randomGreeting, setRandomGreeting] = useState('')
  const [showGreeting, setShowGreeting] = useState(false)
  const [randomWord, setRandomWord] = useState(null)
  const [showWord, setShowWord] = useState(false)

  const greetings = [
    '🎉 З Днем народження, найкращий тато у світі!',
    '❤️ Дякую що ти завжди поруч!',
    '🌟 Ти найкращий приклад для нас усіх!',
    '🎂 Нехай кожен день приносить тобі щастя!',
    '💝 Дякую за все, що ти робиш для нас!',
    '🏆 Ти справжній герой нашої родини!',
    '🎁 Бажаю багато приємних сюрпризів!',
    '⭐ Ти найкращий тато, якого можна уявити!',
    '🌈 Нехай життя буде сповнене кольорів та радості!',
    '🚀 Бажаю нових висот та досягнень!',
    '🎈 Сьогодні твій особливий день - святкуй на повну!',
    '💪 Ти завжди поруч, коли потрібна допомога!',
  ]

  const a1Words = [
    { word: 'Hello', translation: 'Привіт', example: 'Hello, how are you?' },
    { word: 'Goodbye', translation: 'До побачення', example: 'Goodbye, see you later!' },
    { word: 'Thank you', translation: 'Дякую', example: 'Thank you very much!' },
    { word: 'Please', translation: 'Будь ласка', example: 'Please, help me.' },
    { word: 'Yes', translation: 'Так', example: 'Yes, I understand.' },
    { word: 'No', translation: 'Ні', example: 'No, thank you.' },
    { word: 'Water', translation: 'Вода', example: 'I need some water.' },
    { word: 'Food', translation: 'Їжа', example: 'The food is delicious.' },
    { word: 'House', translation: 'Дім', example: 'This is my house.' },
    { word: 'Family', translation: 'Родина', example: 'I love my family.' },
    { word: 'Friend', translation: 'Друг', example: 'He is my best friend.' },
    { word: 'Happy', translation: 'Щасливий', example: 'I am very happy today.' },
    { word: 'Sad', translation: 'Сумний', example: 'Don\'t be sad.' },
    { word: 'Big', translation: 'Великий', example: 'This is a big house.' },
    { word: 'Small', translation: 'Малий', example: 'It\'s a small car.' },
    { word: 'Good', translation: 'Добре', example: 'Have a good day!' },
    { word: 'Bad', translation: 'Погано', example: 'That\'s a bad idea.' },
    { word: 'Hot', translation: 'Гарячий', example: 'The coffee is hot.' },
    { word: 'Cold', translation: 'Холодний', example: 'It\'s cold outside.' },
    { word: 'New', translation: 'Новий', example: 'This is a new book.' },
    { word: 'Old', translation: 'Старий', example: 'This is an old car.' },
    { word: 'Beautiful', translation: 'Красивий', example: 'You look beautiful!' },
    { word: 'Love', translation: 'Любов', example: 'I love you.' },
    { word: 'Time', translation: 'Час', example: 'What time is it?' },
    { word: 'Day', translation: 'День', example: 'Have a nice day!' },
    { word: 'Night', translation: 'Ніч', example: 'Good night!' },
    { word: 'Morning', translation: 'Ранок', example: 'Good morning!' },
    { word: 'Evening', translation: 'Вечір', example: 'Good evening!' },
    { word: 'Book', translation: 'Книга', example: 'I like reading books.' },
    { word: 'School', translation: 'Школа', example: 'I go to school every day.' },
  ]

  const showRandomGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length)
    setRandomGreeting(greetings[randomIndex])
    setShowGreeting(true)
    
    // Автоматично приховати через 10 секунд
    setTimeout(() => {
      setShowGreeting(false)
    }, 10000)
  }

  const showRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * a1Words.length)
    setRandomWord(a1Words[randomIndex])
    setShowWord(true)
    
    // Автоматично приховати через 10 секунд
    setTimeout(() => {
      setShowWord(false)
    }, 10000)
  }

  const features = [
    { icon: '🎂', title: 'Особливий день', desc: 'Святкуємо разом' },
    { icon: '❤️', title: 'З любов\'ю', desc: 'Від всієї родини' },
    { icon: '🎁', title: 'Подарунки', desc: 'Багато сюрпризів' },
    { icon: '🎉', title: 'Веселощі', desc: 'Незабутні моменти' },
  ]

  return (
    <div className="relative overflow-hidden">
      <Confetti width={width} height={height} numberOfPieces={200} recycle={false} gravity={0.2} />

      <section className="text-center py-8 sm:py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-maroon drop-shadow px-2"
        >
          🎉 З Днем народження, тату!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-maroon/80 px-4"
        >
          Нехай кожен день буде сповнений радості, тепла і любові.
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center flex-wrap"
        >
          <Link to="/gallery" className="btn-primary inline-block text-sm sm:text-base">
            Почати святкування 🎁
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={showRandomGreeting}
            className="bg-gold text-maroon px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-soft hover:bg-maroon hover:text-beige transition-colors duration-200 text-sm sm:text-base font-semibold"
          >
            Випадкове привітання 🎲
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={showRandomWord}
            className="bg-maroon text-beige px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-soft hover:bg-gold hover:text-maroon transition-colors duration-200 text-sm sm:text-base font-semibold"
          >
            Випадкове English word 📚
          </motion.button>
        </motion.div>

        {/* Random Greeting Display */}
        <AnimatePresence>
          {showGreeting && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="mt-6 mx-auto max-w-md"
            >
              <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gold shadow-soft text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg sm:text-xl font-bold text-maroon"
                >
                  {randomGreeting}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Random Word A1 Display */}
        <AnimatePresence>
          {showWord && randomWord && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="mt-6 mx-auto max-w-lg"
            >
              <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-maroon shadow-soft">
                <div className="text-center mb-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-block bg-maroon text-beige px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3"
                  >
                    A1 Level
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-4xl font-bold text-maroon mb-2"
                  >
                    {randomWord.word}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-2xl text-maroon/80 font-semibold"
                  >
                    {randomWord.translation}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 pt-4 border-t border-gold/30"
                >
                  <p className="text-sm text-maroon/70 mb-1">Приклад:</p>
                  <p className="text-base sm:text-lg text-maroon italic">
                    "{randomWord.example}"
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Features Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl p-4 sm:p-6 border border-gold/30 shadow-soft text-center"
          >
            <div className="text-3xl sm:text-4xl mb-2">{feature.icon}</div>
            <h3 className="text-sm sm:text-base font-bold text-maroon mb-1">{feature.title}</h3>
            <p className="text-xs sm:text-sm text-maroon/70">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Additional Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="mt-12 sm:mt-16 bg-white rounded-xl p-6 sm:p-8 border border-gold/30 shadow-soft"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-maroon mb-4 text-center">
          Сьогодні особливий день! 🌟
        </h2>
        <p className="text-maroon/80 text-sm sm:text-base text-center leading-relaxed">
          Ця сторінка створена з любов'ю, щоб вшанувати найкращого тата у світі. 
          Тут ти знайдеш наші спільні спогади, досягнення та моменти радості.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/gallery" className="btn-primary text-sm sm:text-base">
            Переглянути галерею 📸
          </Link>
          <Link to="/achievements" className="btn-primary text-sm sm:text-base">
            Подивитися досягнення 🏆
          </Link>
        </div>
      </motion.section>
    </div>
  )
}



