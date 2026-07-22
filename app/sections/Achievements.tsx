'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const achievements = [
  { number: 1000, suffix: '+', label: 'Satisfied Clients' },
  { number: 500, suffix: '+', label: 'Hair Transformations' },
  { number: 5, suffix: '+', label: 'Years Experience' },
  { number: 100, suffix: '%', label: 'Client Satisfaction' },
]

export const Achievements: React.FC = () => {
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)

            achievements.forEach((achievement, index) => {
              const ref = numberRefs.current[index]
              if (ref) {
                gsap.to(ref, {
                  textContent: achievement.number,
                  duration: 2,
                  ease: 'power2.out',
                  snap: { textContent: 1 },
                })
              }
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    const section = document.querySelector('#achievements')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section
      id="achievements"
      className="min-h-screen bg-dark-secondary py-20 px-4 lg:px-8"
      style={{
        backgroundImage: 'url(/15.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="font-bebas text-5xl lg:text-6xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          By The <span className="text-gold">Numbers</span>
        </motion.h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <h3 className="font-bebas text-6xl lg:text-7xl text-gold mb-2">
                  <span ref={(el) => {numberRefs.current[index] = el;}}>0</span>
                  {achievement.suffix}
                </h3>
              </div>
              <p className="text-gray-300 text-lg font-medium">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
