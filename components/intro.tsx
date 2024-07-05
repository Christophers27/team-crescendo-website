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
      <div className="container mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-8">
        <div className="text-white py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl">{text}</p>
        </div>
        <div className="flex flex-initial items-center justify-center relative w-full h-full">
          <Image
            src="/introImage.JPG"
            alt="Intro section image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </motion.section>
  );
}
