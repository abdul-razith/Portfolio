import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from '../../components/Hero/Hero'
import { About } from '../../components/About/About'
import { Projects } from '../../components/Projects/Projects'
import { Contact } from '../../components/Contact/Contact'
import { Footer } from '../../components/Footer/Footer';
import { ScrollIndicator} from '../../components/ScrollIndicator/ScrollIndicator';
import { Skills } from '../../components/Skills/Skills'

export const Home = () => {
  return (
    <>
      <ScrollIndicator />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
