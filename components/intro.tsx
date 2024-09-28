"use client";

import React from "react";
import Image from "next/image";
import { useMenuContext } from "@/context/menuContext";
import { motion } from "framer-motion";

const text =
  "We're a team of indie game developers, brought together by our passion for well-made, thought-provoking games. We started out in Fall 2023 with nothing but an idea, and now we're more than a dozen developers, working on our first game.";

export default function Intro() {
  const { showNav } = useMenuContext();

  return (
    <motion.section
      className={`bg-black py-12 md:py-16 lg:py-24 ${
        showNav ? "opacity-60" : ""
      }`}
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <div className="container mx-auto px-8 md:px-12 grid md:grid-cols-2 justify-between gap-8 space">
        <div className="text-white text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8">
            Who Are We?
          </h2>
          <p className="text-lg md:text-xl md:ml-8">{text}</p>
          <button className="bg-white text-black px-4 py-2 mt-8 ml-4 md:ml-8 rounded-full hover:scale-110 active:scale-105 transition-all">
            <a href="/about-us">Learn More</a>
          </button>
        </div>
        <div className="flex flex-initial items-center justify-center relative w-full">
          <Image
            src="/introImage.JPG"
            alt="Intro section image"
            layout="responsive"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
      </div>
    </motion.section>
  );
}
