import React from "react";
import GameCard from "../gamesCard";

const gameData = [
  {
    profileImage: "/defaultProfile.png",
    bannerImage: "/defaultProfile.png",
    title: "Memoria Wake",
    description: [
      "Memoria Wake is a combat driven isometric adventure game. The protagonist wakes up to find themselves in a fantastical world constructed from their memories and dreams, and must navigate through the environment to find and repair a long-lost relationship. Memoria Wake is a combat driven isometric adventure game. The protagonist wakes up to find themselves in a fantastical world constructed from their memories and dreams, and must navigate through the environment to find and repair a long-lost relationship.",
      "Nilo is a recent college dropout who has found themselves directionless in life. Waking up in a world of surreal and exaggerated constructions of past memories, Nilo aims to find a way out. As Nilo forces their way through the whimsical yet horrifying world, it becomes clear the fantasy presented is much closer to reality than Nilo's willing to admit. ",
      "Memoria Wake blends classic isometric gameplay with intense and complex combat. Players must hone their reflexes and get creative with the palette of tools they're given to overcome the various adversaries they'll encounter.",
    ],
  },
];

export default function GamesCatalog() {
  return (
    <section className="section bg-black text-white flex flex-col items-center">
      <h1 className="text-4xl mb-8">Games Catalog</h1>
      <div className="grid gap-8 md:gap-16 grid-cols-1">
        {gameData.map((game, index) => (
          <GameCard
            profileImage={game.profileImage}
            bannerImage={game.bannerImage}
            title={game.title}
            description={game.description}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
