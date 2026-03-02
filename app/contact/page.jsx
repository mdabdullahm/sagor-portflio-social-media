import ContactForm from '@/components/contact/ContactForm'
import ContactHeader from '@/components/contact/ContactHeader'
import DirectContact from '@/components/contact/DirectContact'
import FAQ from '@/components/contact/FAQ'
import GoogleMap from '@/components/contact/GoogleMap'
import SocialLinks from '@/components/contact/SocialLinks'
import React from 'react'

export default function page() {
  return (
    <div>
      <ContactHeader/>
      <ContactForm/>
      <DirectContact/>
      <SocialLinks/>
      <FAQ/>
      <GoogleMap/>
    </div>
  )
}
