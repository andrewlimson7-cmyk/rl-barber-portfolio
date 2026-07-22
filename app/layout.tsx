import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Bebas_Neue } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: 'RL Barber - Premium Luxury Barber Salon',
  description: 'Experience precision, passion, and professionalism. Elite barber services with award-winning craftsmanship.',
  keywords: 'barber, haircut, fade, grooming, salon, luxury barber',
  openGraph: {
    title: 'RL Barber - Premium Luxury Barber Salon',
    description: 'Experience precision, passion, and professionalism',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${bebasNeue.variable}`}>
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-primary text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
