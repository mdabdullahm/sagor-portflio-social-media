import CTA from '@/components/home/CTA'
import AdCreativeShowcase from '@/components/portfolio/AdCreativeShowcase'
import BeforeAfter from '@/components/portfolio/BeforeAfter'
import CampaignScreenshots from '@/components/portfolio/CampaignScreenshots'
import FeaturedCaseStudies from '@/components/portfolio/FeaturedCaseStudies'
import PortfolioHeader from '@/components/portfolio/PortfolioHeader'
import React from 'react'

export default function page() {
  return (
    <div>
      <PortfolioHeader/>
      <FeaturedCaseStudies/>
      <AdCreativeShowcase/>
      <BeforeAfter/>
      <CampaignScreenshots/>
      <CTA/>
    </div>
  )
}
