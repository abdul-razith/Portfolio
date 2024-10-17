import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from '../../components/Hero/Hero'
import { About } from '../../components/About/About'
import { Projects } from '../../components/Projects/Projects'
import { Contact } from '../../components/Contact/Contact'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
