'use client'

import React from 'react'
import { motion } from 'framer-motion'

const services = [
  { name: 'Haircut', price: '$35', description: 'Professional precision haircut' },
  { name: 'Kids Cut', price: '$25', description: 'Friendly haircut for children' },
  { name: 'Hair + Beard', price: '$50', description: 'Haircut and beard grooming' },
  { name: 'Hair Color', price: '$60', description: 'Professional hair coloring' },
  { name: 'Perm', price: '$80', description: 'Professional perm treatment' },
  { name: 'Treatment', price: '$45', description: 'Premium hair treatment' },
  { name: 'VIP Grooming', price: '$100', description: 'Complete grooming experience' },
  { name: 'Premium Package', price: '$150', description: 'Ultimate grooming package' },
]

export const Services: React.FC = () => {
  return (
    <section id="services" className="min-h-screen bg-dark-primary py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-bebas text-5xl lg:text-6xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-gold">Services</span>
        </motion.h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <h3 className="font-bebas text-2xl text-gold mb-2">{service.name}</h3>
                <p className="text-3xl font-bold text-white">{service.price}</p>
              </div>
              <p className="text-sm text-gray-400 mb-6">{service.description}</p>

              <motion.button
                className="btn-outline w-full text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.button>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
