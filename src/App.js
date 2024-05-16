import React from 'react'
import HeroSection from './component/HeroSection'
import TopNavigation from './component/TopNav'
import SideNavigation from './component/SideNav'

const App = () => {
  return (
    <div className="app-container">
    <TopNavigation />
    <div className="main-content">
      <SideNavigation />
      <HeroSection />
    </div>
  </div>
  )
}

export default App
