import GamesCatalog from '@/components/sections/gamesCatalog'
import GamesIntro from '@/components/sections/gamesIntro'
import React from 'react'

export default function Page() {
  return (
    <main className="bg-black min-h-[100vh]">
      <GamesIntro />
      <GamesCatalog />
    </main>
  )
}
