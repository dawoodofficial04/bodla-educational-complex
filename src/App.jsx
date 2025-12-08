import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserLayout } from './Components/UserLayout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLayout />}></Route>
      </Routes>
    </div>
  )
}

export default App
