import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserLayout } from './components/UserLayout'
import { Home } from './components/Home'
import { Contact } from './components/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
