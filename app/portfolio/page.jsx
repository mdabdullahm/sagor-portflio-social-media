import AdCreativeShowcase from '@/components/portfolio/AdCreativeShowcase'
import FeaturedCaseStudies from '@/components/portfolio/FeaturedCaseStudies'
import PortfolioHeader from '@/components/portfolio/PortfolioHeader'
import React from 'react'

export default function page() {
  return (
    <div>
      <PortfolioHeader/>
      <FeaturedCaseStudies/>
      <AdCreativeShowcase/>
    </div>
  )
}
