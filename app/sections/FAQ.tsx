'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment through our website booking form or call us directly. We recommend booking in advance for preferred time slots.',
    category: 'Appointments',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require 24 hours notice for cancellations. Cancellations with less notice may incur a small fee.',
    category: 'Appointments',
  },
  {
    question: 'Do you accept walk-ins?',
    answer: 'We prefer appointments, but we do accept walk-ins based on availability. Call ahead to check waiting times.',
    category: 'Appointments',
  },
  {
    question: 'How long does a haircut take?',
    answer: 'Most haircuts take 30-45 minutes depending on the style complexity and cutting technique required.',
    category: 'Haircuts',
  },
  {
    question: 'How often should I get a haircut?',
    answer: 'We recommend haircuts every 4-6 weeks to maintain your style and keep edges sharp.',
    category: 'Haircuts',
  },
  {
    question: 'What is your pricing?',
    answer: 'Our services range from $25 to $150 depending on the service. Check our Services section for detailed pricing.',
    category: 'Pricing',
  },
  {
    question: 'Do you offer package deals?',
    answer: 'Yes, we offer several package options including our Premium Package that includes multiple services at a discounted rate.',
    category: 'Pricing',
  },
  {
    question: 'How should I care for my hair after a cut?',
    answer: 'Keep your hair moisturized, use quality shampoo and conditioner, and get regular trims to maintain your style.',
    category: 'Hair Care',
  },
]

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="min-h-screen bg-dark-secondary py-20 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-bebas text-5xl lg:text-6xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Frequently Asked <span className="text-gold">Questions</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="card cursor-pointer"
              onClick={() => toggleAccordion(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bebas text-lg text-gold mb-2">{faq.question}</h3>
                  <p className="text-xs text-gray-500">{faq.category}</p>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gold text-2xl flex-shrink-0 ml-4"
                >
                  ▼
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gold/20"
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
