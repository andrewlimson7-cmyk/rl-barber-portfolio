'use client'

import React from 'react'
import { motion } from 'framer-motion'

const expertiseItems = [
  { icon: '✂️', name: 'Scissor Techniques', description: 'Precision scissor work for perfect fades and details' },
  { icon: '⚡', name: 'Fade Specialist', description: 'Expert fade techniques and variations' },
  { icon: '🔥', name: 'Burst Fade', description: 'Modern burst fade with sharp edges' },
  { icon: '📐', name: 'Low Fade', description: 'Classic low fade with clean lines' },
  { icon: '📍', name: 'Mid Fade', description: 'Versatile mid-fade styling' },
  { icon: '⬆️', name: 'High Fade', description: 'Bold high fade for modern looks' },
  { icon: '✨', name: 'Skin Fade', description: 'Ultra clean skin fade effects' },
  { icon: '📏', name: 'Taper Fade', description: 'Smooth taper transitions' },
  { icon: '🌊', name: 'Modern Mullet', description: 'Contemporary mullet designs' },
  { icon: '🧑', name: 'French Crop', description: 'Trendy French crop style' },
  { icon: '🎯', name: 'Textured Crop', description: 'Textured crop with volume' },
  { icon: '👑', name: 'Pompadour', description: 'Classic pompadour styling' },
  { icon: '〰️', name: 'Perm & Wave', description: 'Professional perm services' },
  { icon: '💆', name: 'Hair Treatment', description: 'Premium hair care treatments' },
  { icon: '🎨', name: 'Hair Coloring', description: 'Professional hair color services' },
  { icon: '🏷️', name: 'Hair Tattoo', description: 'Scalp micropigmentation services' },
  { icon: '👦', name: 'Kids Haircut', description: 'Friendly cuts for children' },
  { icon: '🧔', name: 'Beard Grooming', description: 'Expert beard shaping and care' },
]

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="min-h-screen bg-dark-primary py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-bebas text-5xl lg:text-6xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-gold">Expertise</span>
        </motion.h2>

        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto text-lg">
          Master-level techniques covering every style and grooming need
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              className="card group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4 text-5xl transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="font-bebas text-xl mb-2 text-gold">{item.name}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
