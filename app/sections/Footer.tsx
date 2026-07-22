'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-primary border-t border-gold/20 py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="font-bebas text-dark-primary text-xl font-bold">R</span>
              </div>
              <div>
                <h1 className="font-bebas text-xl text-gold tracking-wider">RL BARBER</h1>
                <p className="text-xs text-gray-400">PREMIUM GROOMING</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium luxury barber salon dedicated to precision, passion, and professionalism.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bebas text-lg text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-gray-400 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bebas text-lg text-gold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Haircut', 'Hair + Beard', 'Hair Color', 'Perm', 'VIP Grooming'].map((service, i) => (
                <li key={i}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-gold transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Follow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bebas text-lg text-gold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {['📷', '👥', '🎵', '💬'].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-dark-tertiary rounded-full flex items-center justify-center hover:bg-gold hover:text-dark-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} RL Barber. All rights reserved. Luxury grooming since 2019.
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gold hover:text-yellow-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm">Back to Top</span>
              <span className="text-lg">↑</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
