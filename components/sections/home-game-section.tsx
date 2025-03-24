"use client";

import React from "react";
import Image from "next/image";
import AnimatedButton from "../animatedButton";

export default function HomeGameSection() {
  return (
    <section className="section">
      {/* Divider with Title */}
      <div className="flex items-center gap-4 md:gap-8">
        <div className="h-0.5 bg-crescendo-purple w-full" />
        <h2 className="text-2xl font-bold text-center whitespace-nowrap">
          Our Games
        </h2>
        <div className="h-0.5 bg-crescendo-purple w-full" />
      </div>

      {/* Content: Image and Text */}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Image Container (Half Width on Medium Screens and Above) */}
        <div className="w-full md:w-1/2 aspect-[16/9]">
          <div className="relative w-full h-full">
            <Image
              src="/images/memoria-wake-home.png"
              alt="Memoria Wake"
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>

        {/* Text Container (Half Width on Medium Screens and Above) */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8">
          <h3 className="text-2xl font-bold">Memoria Wake</h3>
          <p className="md:text-lg max-w-prose">
            Memoria Wake is our first game, a top-down, story-driven adventure
            game set in a surreal dream world. You play as a Dreamer, lost in
            this unfamiliar world, looking to find their way back home. Along
            the way, they&apos;ll meet strange characters, solve puzzles, and
            uncover the regrets of the past.
          </p>
          <div className="flex justify-center md:justify-start">
            <AnimatedButton text="Explore" link="/memoria-wake" />
          </div>
        </div>
      </div>
    </section>
  );
}
