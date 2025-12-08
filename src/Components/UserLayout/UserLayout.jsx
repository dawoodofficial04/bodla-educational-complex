import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'

const UserLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </div>
  )
}

export default UserLayout
