'use client'
import { Inter } from 'next/font/google'
import NavBar from '@/Components/TopBar'
import Header from '@/Components/Header'
import Newsletter from '@/Components/Newsletter'
import './globals.css'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Header />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  )
}
