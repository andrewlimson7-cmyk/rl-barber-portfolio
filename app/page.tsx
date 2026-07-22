'use client'

import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Expertise } from './sections/Expertise'
import { Portfolio } from './sections/Portfolio'
import { Services } from './sections/Services'
import { Achievements } from './sections/Achievements'
import { Testimonials } from './sections/Testimonials'
import { FAQ } from './sections/FAQ'
import { Booking } from './sections/Booking'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Expertise />
        <Portfolio />
        <Services />
        <Achievements />
        <Testimonials />
        <FAQ />
        <Booking />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
