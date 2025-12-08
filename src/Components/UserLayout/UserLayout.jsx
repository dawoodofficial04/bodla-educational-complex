import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import Footer from '../Footer'

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
      <Footer />
    </div>
  )
}

export default UserLayout
