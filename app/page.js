import Image from 'next/image'
import './globals.css'
import Hero from '@/Components/Hero'
import BestSellerProducts from '@/Components/BestSellerProducts'

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellerProducts />
    </>
  )
}
