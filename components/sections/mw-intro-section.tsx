"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionDivider from "../sectionDivider";
import AnimatedButton from "../animatedButton";
import Image from "next/image";

export default function MWIntroSection() {
  return (
    <section className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row gap-8 mt-8"
      >
        <motion.div
          className="w-full md:w-2/5 flex flex-col gap-4 md:gap-8"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <SectionDivider text="Memoria Wake" />
          </motion.div>

          <motion.p
            className="md:text-lg max-w-prose text-crescendo-white/80"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Memoria Wake is a combat driven isometric adventure game. The
            protagonist wakes up to find themselves in a fantastical world
            constructed from their memories and dreams, and must navigate
            through the environment to find and repair a long-lost relationship.
          </motion.p>

          <motion.p
            className="md:text-lg max-w-prose text-crescendo-white/80"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.1 } },
            }}
          >
            Nilo is a recent college dropout who has found themselves
            directionless in life. Waking up in a world of surreal and
            exaggerated constructions of past memories, Nilo aims to find a way
            out. As Nilo forces their way through the whimsical yet horrifying
            world, it becomes clear the fantasy presented is much closer to
            reality than Nilo&apos;s willing to admit.
          </motion.p>

          <motion.p
            className="md:text-lg max-w-prose text-crescendo-white/80"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
            }}
          >
            Memoria Wake blends classic isometric gameplay with intense and
            complex combat. Players must hone their reflexes and get creative
            with the palette of tools they&apos;re given to overcome the various
            adversaries they&apos;ll encounter.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  delay: 0.3,
                },
              },
            }}
          >
            <AnimatedButton
              text="Check it out!"
              link="https://store.steampowered.com/app/3240610/Memoria_Wake/"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full md:w-3/5 aspect-[16/9]"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2,
              },
            },
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/memoria-wake-home.png"
              alt="Memoria Wake"
              fill
              className="rounded-2xl object-contain"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
