'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'James Mitchell',
    role: 'Business Professional',
    text: 'RL Barber transformed my look completely. The precision and attention to detail is unmatched. Every visit feels like a luxury experience.',
    rating: 5,
    image: '/16.jpg',
  },
  {
    name: 'Marcus Johnson',
    role: 'Creative Director',
    text: 'The best barber experience I\'ve had. Professional, clean, and they really understand modern styling. Highly recommended!',
    rating: 5,
    image: '/17.jpg',
  },
  {
    name: 'David Chen',
    role: 'Executive',
    text: 'Premium quality service at reasonable prices. RL Barber deserves all the recognition. You won\'t find better craftsmanship anywhere.',
    rating: 5,
    image: '/18.jpg',
  },
  {
    name: 'Alex Rodriguez',
    role: 'Fashion Model',
    text: 'As someone who needs perfect cuts frequently, RL Barber is my go-to. Consistency and excellence every single time.',
    rating: 5,
    image: '/19.jpg',
  },
]

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="min-h-screen bg-dark-primary py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-bebas text-5xl lg:text-6xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Client <span className="text-gold">Testimonials</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Image */}
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden flex-shrink-0">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${testimonials[currentIndex].image})`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <span key={i} className="text-gold text-2xl">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="font-bebas text-xl text-gold mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <motion.button
              onClick={prev}
              className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-dark-primary hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            <motion.button
              onClick={next}
              className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-dark-primary hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-gray-600 w-2'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
