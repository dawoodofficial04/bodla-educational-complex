import React from 'react'
import { Hero } from '../Hero'
import { SocialMedia } from '../SocialMedia'
import { Achievements } from '../Achievements'
import { InstitutesLogos } from '../InstitutesLogos'
import { MessageAccordion } from '../MessageAccordion'

const Home = () => {
  return (
    <div>
      <Hero />
      <MessageAccordion/>
      <Achievements />
      <SocialMedia />
      <InstitutesLogos/>
    </div>
  )
}

export default Home
