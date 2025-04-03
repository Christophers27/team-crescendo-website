"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutInfoSection() {
  const taglineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-6 bg-crescendo-purple p-8 lg:p-12 rounded-4xl shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Who We Are
          </motion.h1>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              We named our studio <i>Crescendo</i> because it perfectly captures
              our journey - starting small and growing louder together. (And
              yes, it was totally coincidental that a team member&apos;s cat
              shares the same name).
            </p>
            <p className="text-lg leading-relaxed">
              Founded in 2023 by Carnegie Mellon students, we&apos;re now a team
              of 11 developers from 7 countries, bringing together our skills in
              visual art, music programming, and game design. United by our
              passion for games, we create experiences that we hope will stay
              with players.
            </p>
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-200 to-blue-200 rounded-4xl">
          <motion.div
            className="text-center space-y-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-light italic text-crescendo-black"
              variants={taglineVariants}
            >
              Tell stories that resonate
            </motion.h2>

            <motion.h2
              className="text-3xl md:text-4xl font-light italic text-crescendo-purple"
              variants={taglineVariants}
            >
              Make games that inspire
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-crescendo-purple mx-auto mt-6"
              variants={taglineVariants}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
