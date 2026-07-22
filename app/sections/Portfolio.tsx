'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const portfolioItems = [
  { id: 1, image: '/3.jpg', category: 'Fade', title: 'Classic Low Fade' },
  { id: 2, image: '/4.jpg', category: 'Modern', title: 'Modern Textured Style' },
  { id: 3, image: '/5.jpg', category: 'Fade', title: 'Skin Fade' },
  { id: 4, image: '/6.jpg', category: 'Classic', title: 'Timeless Cut' },
  { id: 5, image: '/7.jpg', category: 'Modern', title: 'Contemporary Look' },
  { id: 6, image: '/8.jpg', category: 'Fade', title: 'High Fade Precision' },
  { id: 7, image: '/9.jpg', category: 'Beard', title: 'Beard Grooming' },
  { id: 8, image: '/10.jpg', category: 'Perm', title: 'Wave Perm' },
  { id: 9, image: '/11.jpg', category: 'Modern', title: 'Modern Mullet' },
  { id: 10, image: '/12.jpg', category: 'Fade', title: 'Burst Fade' },
  { id: 11, image: '/13.jpg', category: 'Transformation', title: 'Complete Transformation' },
  { id: 12, image: '/14.jpg', category: 'Hair Color', title: 'Color Treatment' },
]

const categories = ['All', 'Fade', 'Classic', 'Modern', 'Perm', 'Transformation', 'Hair Color', 'Beard']

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="portfolio" className="min-h-screen bg-dark-secondary py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-bebas text-5xl lg:text-6xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-gold">Portfolio</span>
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gold text-dark-primary'
                  : 'bg-dark-tertiary text-gray-300 hover:border-gold border border-transparent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden cursor-pointer group ${
                  (index + 1) % 5 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-110 duration-500"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-bebas text-2xl text-gold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.category}</p>
                  </motion.div>
                </div>

                {/* Gold Border on Hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-gold rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl h-96 lg:h-full max-h-[90vh] rounded-2xl overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${selectedImage.image})`,
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dark-primary hover:scale-110 transition-transform"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
