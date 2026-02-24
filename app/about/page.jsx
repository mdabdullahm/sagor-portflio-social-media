import AboutHeader from '@/components/about/AboutHeader'
import AchievementsStats from '@/components/about/AchievementsStats'
import MyStory from '@/components/about/MyStory'
import ProfessionalIntro from '@/components/about/ProfessionalIntro'
import SkillsExpertise from '@/components/about/SkillsExpertise'
import WhyWorkWithMe from '@/components/about/WhyWorkWithMe'
import WorkProcess from '@/components/about/WorkProcess'
import React from 'react'

export default function page() {
  return (
    <div>
      <AboutHeader/>
      <ProfessionalIntro/>
      <MyStory/>
      <SkillsExpertise/>
      <WorkProcess/>
      <AchievementsStats/>
      <WhyWorkWithMe/>
    </div>
  )
}
