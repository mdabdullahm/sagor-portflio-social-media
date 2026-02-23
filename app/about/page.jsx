import AboutHeader from '@/components/about/AboutHeader'
import MyStory from '@/components/about/MyStory'
import ProfessionalIntro from '@/components/about/ProfessionalIntro'
import React from 'react'

export default function page() {
  return (
    <div>
      <AboutHeader/>
      <ProfessionalIntro/>
      <MyStory/>
    </div>
  )
}
