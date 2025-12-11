import React from 'react'
import { Hero } from '../Hero'
import { SocialMedia } from '../SocialMedia'
import { IntroSection } from '../IntroSection'
import { Achievements } from '../Achievements'

const Home = () => {
  return (
    <div>
      <Hero />
      <IntroSection />
      <Achievements />
      <SocialMedia />
    </div>
  )
}

export default Home
