import Services from '@/components/home/Services'
import Packages from '@/components/services/Packages'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServicesHero from '@/components/services/ServicesHero'
import StrongCTA from '@/components/services/StrongCTA'
import WhyChooseServices from '@/components/services/WhyChooseServices'
import React from 'react'

export default function page() {
  return (
    <div>
      <ServicesHero/>
      <Services/>
      <ServiceProcess/>
      <Packages/>
      <WhyChooseServices/>
      <StrongCTA/>
    </div>
  )
}
