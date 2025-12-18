import React from 'react'
import { Hero } from '../Hero'
import { SocialMedia } from '../SocialMedia'
import { IntroSection } from '../IntroSection'
import { Achievements } from '../Achievements'
import { InstitutesLogos } from '../InstitutesLogos'
import { MessageAccordion } from '../MessageAccordion'
import { CoreValues } from '../CoreValues'
import { ModalWindow } from '../ModalWindow'

const Home = () => {
  return (
    <div>
      <ModalWindow/>
      <Hero />
      <IntroSection />
      <CoreValues />
      <MessageAccordion/>
      <Achievements />
      <SocialMedia />
      <InstitutesLogos/>
    </div>
  )
}

export default Home
