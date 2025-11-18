"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../animatedButton";

export default function HomeAboutSection() {
  return (
    <section className="section items-center gap-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-col items-center gap-8"
      >
        <motion.h1
          className="text-2xl md:text-4xl font-semibold text-crescendo-white tracking-wider"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Who are We ?
        </motion.h1>

        <motion.p
          className="text-center max-w-prose text-crescendo-white/80 text-lg md:text-xl tracking-wider"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        >
          We are a team of indie game developers, brought together by our love
          for games with meaningful stories. Our goal is to make games that are
          fun to play, and leave a lasting impact on the player.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
        >
          <AnimatedButton text="Learn More" link="/about" />
        </motion.div>
      </motion.div>
    </section>
  );
}
