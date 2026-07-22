'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true)
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-dark-primary z-50 flex items-center justify-center"
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      onAnimationComplete={() => {
        if (isComplete) {
          // Remove from DOM
        }
      }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Barber Pole */}
        <motion.div
          className="relative w-20 h-48 bg-white rounded-full overflow-hidden shadow-2xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-white to-blue-600" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
        </motion.div>

        {/* Logo Text */}
        <motion.div
          className="text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <h1 className="font-bebas text-4xl text-gold tracking-widest">RL BARBER</h1>
          <p className="text-sm text-gray-400 mt-2">PREMIUM GROOMING</p>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          className="w-32 h-1 bg-dark-tertiary rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-gold to-yellow-400"
            animate={{ width: ['0%', '100%'] }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
