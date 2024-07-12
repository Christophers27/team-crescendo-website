"use client";

import { useMenuContext } from "@/context/menuContext";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const text =
  "Noire is our first game, a top-down, story-driven adventure game set in a surreal dream world. You play as a Dreamer, lost in this unfamiliar world, looking to find their way back home. Along the way, they'll meet strange characters, solve puzzles, and uncover the regrets of the past.";

export default function Noire() {
  const { showNav } = useMenuContext();

  return (
    <motion.section
      className={`bg-black py-12 md:py-16 lg:py-24 ${
        showNav ? "opacity-60" : ""
      }`}
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <div className="container mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-8">
        <div className="flex flex-initial items-center justify-center relative w-full h-full">
          <Image
            src="/introImage.JPG"
            alt="Intro section image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="text-white py-16 text-center md:text-right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Noire
          </h2>
          <p className="text-lg md:text-xl">{text}</p>
        </div>
      </div>
    </motion.section>
  );
}
