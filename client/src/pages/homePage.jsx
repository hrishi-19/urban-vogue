import React from 'react'
import Catergories from '../components/Catergories'
import Flash from '../components/Flash'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const HomePage = () => {
  return (
    <>
      <Flash />
      <Navbar />
      <Slider />
      <Catergories />
      <Products/>
      <NewsLetter />

    </>
  )
}

export default HomePage
