'use client'

import React from 'react'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'hello@rlbarber.com',
    link: 'mailto:hello@rlbarber.com',
  },
  {
    icon: '📍',
    label: 'Address',
    value: '123 Luxury Lane, Premium City, PC 12345',
    link: '#',
  },
  {
    icon: '⏰',
    label: 'Hours',
    value: 'Mon - Sat: 10am - 8pm | Sun: 12pm - 6pm',
    link: '#',
  },
]

const socialLinks = [
  { name: 'Instagram', icon: '📷', link: '#' },
  { name: 'Facebook', icon: '👥', link: '#' },
  { name: 'TikTok', icon: '🎵', link: '#' },
  { name: 'Messenger', icon: '💬', link: '#' },
]

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-dark-secondary py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-bebas text-5xl lg:text-6xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-gold">Touch</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="font-bebas text-xl text-gold mb-2">{info.label}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gold transition-colors">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bebas text-3xl mb-8">Follow Us</h3>
            <div className="grid grid-cols-2 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="card flex flex-col items-center justify-center py-12 hover:bg-gold/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-5xl mb-4">{social.icon}</div>
                  <p className="text-sm font-medium text-gold">{social.name}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="card h-96 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full bg-dark-tertiary flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-gray-400">Google Maps Integration</p>
              <p className="text-sm text-gray-500 mt-2">123 Luxury Lane, Premium City</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
