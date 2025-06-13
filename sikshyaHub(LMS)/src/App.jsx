import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/layout/Header.jsx'
import HeroSection from './components/marketing/HeroSection'
import CourseCard from './components/courses/CourseCard.js'


function App() {
  

  return (
 <>
  <Header/>
  <HeroSection/>
  <CourseCard/>
 </>
  )
}

export default App
