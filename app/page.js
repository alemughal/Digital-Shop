import Image from 'next/image'
import './globals.css'
import Hero from '@/Components/Hero'
import BestSellerProducts from '@/Components/BestSellerProducts'
import NewArrival from '@/Components/NewArrival'
import HomePosts from '@/Components/HomePosts'
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
      <HomePosts />
      <Qualities />
    </>
  )
}
