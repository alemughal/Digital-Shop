import Image from 'next/image'
import './globals.css'
import Hero from '@/Components/Hero'
import BestSellerProducts from '@/Components/BestSellerProducts'
import NewArrival from '@/Components/NewArrival'
import Posts from '@/Components/Posts'
import Qualities from '@/Components/Qualities'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <BestSellerProducts />
      <NewArrival />
      <Posts />
      <Qualities />
    </>
  )
}
