import React from 'react'
import { ChevronRight } from 'lucide-react'

function HeroSection() {
  return (
    <div>
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Unlock Your Potential with{' '}
            <span className="text-teal-600">LMS Ace</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover a world of knowledge with our expertly crafted courses. Start your learning 
            journey today and achieve your goals.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200 flex items-center space-x-2">
              <span>Get Started Free</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            
            <button className="text-gray-600 px-8 py-3 rounded-lg font-medium hover:text-teal-600 transition-colors duration-200">
              Explore Courses
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroSection
