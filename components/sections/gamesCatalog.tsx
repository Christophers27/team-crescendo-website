import React from 'react'
import GameCard from '../gamesCard'

const gameData = [
    {
        profileImage: "/defaultProfile.png",
        bannerImage: "/defaultProfile.png",
        title: "Memoria Wake",
        description: "Temporary description paragraph, I'm writing this to be as long as possible to check the behaviour of the text wrapping in the card so that the card doesn't look too ugly with too much text. "
    },
    {
        profileImage: "/defaultProfile.png",
        bannerImage: "/defaultProfile.png",
        title: "Memoria Wake",
        description: "Temp description paragraph"
    },
    {
        profileImage: "/defaultProfile.png",
        bannerImage: "/defaultProfile.png",
        title: "Memoria Wake",
        description: "Temp description paragraph"
    },
    {
        profileImage: "/defaultProfile.png",
        bannerImage: "/defaultProfile.png",
        title: "Memoria Wake",
        description: "Temp description paragraph"
    },
    {
        profileImage: "/defaultProfile.png",
        bannerImage: "/defaultProfile.png",
        title: "Memoria Wake",
        description: "Temp description paragraph"
    }
]

export default function GamesCatalog() {
    return (
        <section className='section bg-black text-white flex flex-col items-center'>
            <h1 className="text-4xl mb-8">Games Catalog</h1>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2'>
                {gameData.map((game, index) => (
                    <GameCard profileImage={game.profileImage} bannerImage={game.bannerImage} title={game.title} description={game.description} key={index} />
                ))}
            </div>
        </section>
    )
}
