import React from 'react'
import Hero from '../components/hero'
import Features from '../components/features'
import Process from '../components/process'
import Popularfoods from '../components/popularfoods'
import Footer from '../components/footer'
import coverBanner1 from '../assets/assets/cover-banner-1.jpg'
import coverBanner2 from '../assets/assets/cover-banner-2.jpg'
const Home = () => {
  return (<>
  <Hero />
  <Features />
  <Process />
  <Popularfoods />
  <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row gap-7 py-12'>
    <div><img src={coverBanner1} className='md:rounded-e-2xl'/></div>
    <div><img src={coverBanner2} className='md:rounded-s-2xl'/></div>
  </div>
  <Footer />
</>
  )
}

export default Home
