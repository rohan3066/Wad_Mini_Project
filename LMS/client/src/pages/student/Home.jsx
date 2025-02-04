import React from 'react'
import Hero from '../../components/students/Hero'
import SearchBar from '../../components/students/SearchBar'
import Companies from '../../components/students/Companies'
import CoursesSection from '../../components/students/CoursesSection'
import TestimonialSection from '../../components/students/TestimonialSection'

function Home() {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
        <Hero/>
        <Companies/>
        <CoursesSection/>
        <TestimonialSection/>
    </div>
  )
}

export default Home
