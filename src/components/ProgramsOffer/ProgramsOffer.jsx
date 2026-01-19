import React from 'react'
import { IntermediatePrograms } from '../IntermediatePrograms'
import { GraduationPrograms } from '../GraduationPrograms'
import { NexskillPrograms } from '../NexskillPrograms'

const ProgramsOffer = () => {
  return (
    <div>
      <IntermediatePrograms />
      <GraduationPrograms />
      <NexskillPrograms />
    </div>
  )
}

export default ProgramsOffer
