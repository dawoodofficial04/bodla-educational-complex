import React from 'react'
import { Hero } from '../Hero'
import { SocialMedia } from '../SocialMedia'
import { IntroSection } from '../IntroSection'
import { Achievements } from '../Achievements'
import { InstitutesLogos } from '../InstitutesLogos'
import { MessageAccordion } from '../MessageAccordion'
import { CoreValues } from '../CoreValues'
import { ModalWindow } from '../ModalWindow'
import { ProgramGrid } from '../ProgramGrid'
import bsHndImage from '../../assets/BS-HND.jpg'
import bsBiotechnologyImage from '../../assets/BS-Biotechnology.jpg'
import bsAiImage from '../../assets/BS-AI.jpg'
import bsMltImage from '../../assets/BS-MLT.jpg'
import bsBiochemistryImage from '../../assets/BS-Biochemistry.jpg'
import bsBotanyImage from '../../assets/BS-Botany.jpg'
import bsZoologyImage from '../../assets/BS-Zoology.jpg'
import bsChemistryImage from '../../assets/BS-Chemistry.jpg'
import bsEnglishImage from '../../assets/BS-English.jpg'
import bsMathsImage from '../../assets/BS-Maths.jpg'

const bsPrograms = [
    {
      _id: 1,
      name: "BS Human Nutrition and Dietetics",
      duration: "4 Years Program",
      images: [{ img: bsHndImage }],
    },
    {
      _id: 2,
      name: "BS Biotechnology",
      duration: "4 Years Program",
      images: [{ img: bsBiotechnologyImage }],
    },
    {
      _id: 3,
      name: "BS Artificial Intelligence",
      duration: "4 Years Program",
      images: [{ img: bsAiImage }],
    },
    {
      _id: 4,
      name: "BS Medical Laboratory Technology",
      duration: "4 Years Program",
      images: [{ img: bsMltImage }],
    },
    {
      _id: 5,
      name: "BS Biochemistry",
      duration: "4 Years Program",
      images: [{ img: bsBiochemistryImage }],
    },
    {
      _id: 6,
      name: "BS Botany",
      duration: "4 Years Program",
      images: [{ img: bsBotanyImage }],
    },
    {
      _id: 7,
      name: "BS Zoology",
      duration: "4 Years Program",
      images: [{ img: bsZoologyImage }],
    },
    {
      _id: 8,
      name: "BS Chemistry",
      duration: "4 Years Program",
      images: [{ img: bsChemistryImage }],
    },
    {
      _id: 9,
      name: "BS English",
      duration: "4 Years Program",
      images: [{ img: bsEnglishImage }],
    },
    {
      _id: 10,
      name: "BS Mathematics",
      duration: "4 Years Program",
      images: [{ img: bsMathsImage }],
    },
];

const Home = () => {
  return (
    <div>
      <ModalWindow/>
      <Hero />
      <IntroSection />
      <CoreValues />

      <div className="container mx-auto">
        <h2 className="text-4xl text-[#0c2d70] text-center font-bold mb-4">
          Bachelor Programs We Offer
        </h2>
        <ProgramGrid programs={bsPrograms} />
      </div>

      <MessageAccordion/>
      <Achievements />
      <SocialMedia />
      <InstitutesLogos/>
    </div>
  )
}

export default Home
