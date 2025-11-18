"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "../animatedButton";
import SectionDivider from "../sectionDivider";

export default function HomeGameSection() {
  return (
    <section className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <SectionDivider text="Our Games" />

        <motion.div
          className="flex flex-col md:flex-row gap-8 mt-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <motion.div
            className="w-full md:w-1/2 aspect-[16/9]"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 300 },
              },
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/memoria-wake-home.png"
                alt="Memoria Wake"
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 300, delay: 0.2 },
              },
            }}
          >
            <motion.h3
              className="text-lg md:text-2xl tracking-wide font-bold text-crescendo-white"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Memoria Wake
            </motion.h3>

            <motion.p
              className="md:text-lg max-w-prose text-crescendo-white/80"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.1 } },
              }}
            >
              Memoria Wake is our first game, a top-down, story-driven adventure
              game set in a surreal dream world. You play as a Dreamer, lost in
              this unfamiliar world, looking to find their way back home. Along
              the way, they&apos;ll meet strange characters, solve puzzles, and
              uncover the regrets of the past.
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 300, delay: 0.3 },
                },
              }}
            >
              <AnimatedButton text="Explore" link="/memoria-wake" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
