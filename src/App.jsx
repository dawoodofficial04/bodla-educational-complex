import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserLayout } from './components/UserLayout'
import { Home } from './components/Home'
import { About } from './components/About Us'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
