"use client";

import React from "react";
import Image from "next/image";
import { useMenuContext } from "@/context/menuContext";
import { motion } from "framer-motion";

const text =
  "We are a team of indie game developers, brought together by our love for games with meaningful stories. Our goal is to make games that are fun to play, and leave a lasting impact on the player.";

export default function AboutHome() {
  const { showNav } = useMenuContext();

  return (
    <motion.section
      className={`bg-[#000310] section ${showNav ? "opacity-60" : ""}`}
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <div className="container mx-auto grid md:grid-cols-2 justify-between gap-8 md:gap-16">
        <div className="text-white text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-8">
            Who Are We?
          </h2>
          <p className="text-lg md:text-xl">{text}</p>
          <button className="bg-white text-black px-4 py-2 mt-8 rounded-full hover:scale-110 active:scale-105 transition-all">
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
            className="rounded-xl"
          />
        </div>
      </div>
    </motion.section>
  );
}
