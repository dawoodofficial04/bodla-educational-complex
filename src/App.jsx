import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserLayout } from './components/UserLayout'
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import { About } from './components/About Us'
import { IntermediatePrograms } from './components/IntermediatePrograms'
import { GraduationPrograms } from './components/GraduationPrograms'
import { NexskillPrograms } from './components/NexskillPrograms'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='intermediate-programs' element={<IntermediatePrograms />} />
          <Route path='graduation-programs' element={<GraduationPrograms />} />
          <Route path='nexskill-programs' element={<NexskillPrograms />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
