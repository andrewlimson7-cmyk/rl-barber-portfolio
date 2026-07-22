'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const About: React.FC = () => {
  const milestones = [
    { year: '2019', title: 'Started Journey', description: 'Began professional barber career' },
    { year: '2020', title: 'First Studio', description: 'Opened premium salon' },
    { year: '2022', title: 'Certified Master', description: 'Advanced certification achieved' },
    { year: '2024', title: 'Elite Status', description: 'Award-winning barber recognition' },
  ]

  return (
    <section id="about" className="min-h-screen bg-dark-secondary py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-bebas text-5xl lg:text-6xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About <span className="text-gold">RL Barber</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: 'url(/2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bebas text-3xl lg:text-4xl mb-6">
              Precision <span className="text-gold">Craftsmanship</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              RL Barber is passionate about delivering precision haircuts, confidence, and exceptional grooming experiences. Every client receives professional service with meticulous attention to detail.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              With years of dedication to the craft, we combine traditional barbering techniques with modern trends to create timeless, sophisticated looks that enhance our clients' confidence and style.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="card">
                <h4 className="text-3xl font-bold text-gold mb-2">500+</h4>
                <p className="text-sm text-gray-400">Satisfied Clients</p>
              </div>
              <div className="card">
                <h4 className="text-3xl font-bold text-gold mb-2">5+</h4>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bebas text-3xl mb-12 text-center">Career <span className="text-gold">Milestones</span></h3>
          <div className="grid lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="card relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-dark-primary rounded-full" />
                  </div>
                </div>
                <h4 className="font-bebas text-2xl text-gold mt-4 mb-2">{milestone.year}</h4>
                <h5 className="font-semibold mb-2">{milestone.title}</h5>
                <p className="text-sm text-gray-400">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
