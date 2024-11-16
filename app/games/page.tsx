import GamesCatalog from '@/components/sections/gamesCatalog'
import GamesIntro from '@/components/sections/gamesIntro'
import React from 'react'

export default function Page() {
  return (
    <main className="">
      <GamesIntro />
      <GamesCatalog />
    </main>
  )
}
