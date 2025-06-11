import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero'
import CourseCard from './components/Student/CourseCard'
import Feedback from './components/Feedback'

function App() {
  

  return (
  <>
  <Header/>
  <Hero/>
  <CourseCard/>
  <Feedback/>
  <Footer />
  </>
  )
}

export default App
