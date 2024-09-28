"use client";

import { useMenuContext } from "@/context/menuContext";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const text =
  "Noire is our first game, a top-down, story-driven adventure game set in a surreal dream world. You play as a Dreamer, lost in this unfamiliar world, looking to find their way back home. Along the way, they'll meet strange characters, solve puzzles, and uncover the regrets of the past.";

export default function GamesSection() {
  const { showNav } = useMenuContext();

  return (
    <motion.section
      className={`bg-[#938d5d] py-12 md:py-16 lg:py-24 ${
        showNav ? "opacity-60" : ""
      }`}
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <div className="container mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-8">
        <div className="flex flex-initial items-center justify-center relative w-full">
          <Image
            src="/AdvisorBossArena.jpg"
            alt="Intro section image"
            layout="responsive"
            width={100}
            height={100}
            objectFit="contain"
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8">
            Our Games
          </h2>
          <p className="text-lg md:text-xl md:mr-8">{text}</p>
          <button className="bg-[#8b6b53] text-black border-black border-2 px-4 py-2 mt-8 mr-4 md:mr-8 rounded-full hover:scale-110 active:scale-105 transition-all">
            <a href="/noire">Browse Games</a>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
