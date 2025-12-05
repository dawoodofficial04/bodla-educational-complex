import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      {/* Header */}
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </div>
  )
}

export default UserLayout
