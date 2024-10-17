import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from '../../components/Hero/Hero'
import { About } from '../../components/About/About'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}
