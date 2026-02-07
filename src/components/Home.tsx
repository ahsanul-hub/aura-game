'use client'

import BannerComponent from './Banner/Banner'
import GamesByShow from './Home/GamesByShow'

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <BannerComponent />
      {/* Game Show  */}
      <GamesByShow />
    </div>
  )
}
