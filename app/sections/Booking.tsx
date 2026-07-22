'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: '',
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      service: '',
      message: '',
    })
  }

  return (
    <section id="booking" className="min-h-screen bg-dark-primary py-20 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-bebas text-5xl lg:text-6xl mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Book Your <span className="text-gold">Appointment</span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-12 text-lg">
          Schedule your premium grooming experience with us today
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-dark-tertiary border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-dark-tertiary border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-dark-tertiary border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-dark-tertiary border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full bg-dark-tertiary border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-dark-tertiary border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              >
                <option value="">Select a service</option>
                <option value="haircut">Haircut</option>
                <option value="hair-beard">Hair + Beard</option>
                <option value="hair-color">Hair Color</option>
                <option value="perm">Perm</option>
                <option value="vip-grooming">VIP Grooming</option>
                <option value="premium-package">Premium Package</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Additional Notes</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-dark-tertiary border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder="Tell us about your preferences..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="btn-gold w-full py-3 text-lg font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Appointment
          </motion.button>
        </motion.form>

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            className="mt-6 bg-green-500/20 border border-green-500 rounded-lg p-4 text-center text-green-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            ✓ Booking request received! We'll contact you soon to confirm.
          </motion.div>
        )}
      </div>
    </section>
  )
}
