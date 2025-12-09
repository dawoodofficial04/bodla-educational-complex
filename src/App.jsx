import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserLayout } from './Components/UserLayout'
import { Home } from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
