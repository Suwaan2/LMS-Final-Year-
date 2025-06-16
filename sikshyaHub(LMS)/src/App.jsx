import { useState } from 'react'

import Header from './components/layout/Header.jsx'
import HeroSection from './components/marketing/HeroSection.jsx'
import Features from './components/layout/Features.jsx'
import Courses from './components/layout/Courses.jsx'
import About from './components/layout/About.jsx'
import Testimonials from './components/layout/Testimonials.jsx'
import Contact from './components/layout/Contact.jsx'
import Footer from './components/layout/Footer.jsx'





function App() {
  

  return (
    <>
  <Header/>
  <HeroSection/>
  <Features/>
  <Courses/>
  <Testimonials/>
  <About/>
  <Contact/>
  <Footer/>

  
  </>
  )
}

export default App
