import React from 'react'
import { Hero } from '../Hero'
import { SocialMedia } from '../SocialMedia'
import { IntroSection } from '../IntroSection'
import { Achievements } from '../Achievements'
import { InstitutesLogos } from '../InstitutesLogos'
import { MessageAccordion } from '../MessageAccordion'

const Home = () => {
  return (
    <div>
      <Hero />
      <IntroSection />
      <MessageAccordion/>
      <Achievements />
      <SocialMedia />
      <InstitutesLogos/>
    </div>
  )
}

export default Home
