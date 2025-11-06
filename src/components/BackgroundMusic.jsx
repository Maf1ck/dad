import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const audioRef = useRef(null)

  // Шлях до музики - користувач додасть файл пізніше
  const musicPath = '/music/background.mp3' // Змініть на свій шлях

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Якщо файл не знайдено, просто не граємо
          console.log('Музичний файл не знайдено')
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-beige/90 backdrop-blur-sm border border-gold/30 rounded-full p-2 shadow-soft flex items-center gap-2"
      >
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-maroon text-beige flex items-center justify-center hover:bg-gold hover:text-maroon transition-colors"
          aria-label={isPlaying ? 'Пауза' : 'Відтворити'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-20 h-1 bg-gold/30 rounded-lg appearance-none cursor-pointer accent-maroon"
        />
      </motion.div>
      <audio ref={audioRef} src={musicPath} loop />
    </div>
  )
}

