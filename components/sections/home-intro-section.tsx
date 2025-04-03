"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HomeIntroSection() {
  return (
    <section className="section">
      <div className="relative items-center md:items-start min-h-[75vh] px-8 md:px-16 py-16 overflow-hidden text-center md:text-left">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 z-0 rounded-4xl bg-slideshow animate-slideshow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-prose">
          <motion.h1
            className="text-4xl md:text-6xl font-semibold mb-8 text-crescendo-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Team Crescendo
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 0.8 }}
          >
            <motion.h2
              className="text-lg md:text-xl italic mb-2 text-crescendo-white/90"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Tell stories that resonate,
            </motion.h2>
            <motion.h2
              className="text-lg md:text-xl italic text-crescendo-white/90"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{}}
            >
              make games that inspire
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
