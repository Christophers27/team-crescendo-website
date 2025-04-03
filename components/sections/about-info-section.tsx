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
        {/* Main Content Card */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-6 bg-crescendo-purple p-8 lg:p-12 rounded-3xl shadow-lg"
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
            Starting small, and snowballing into a large force, the team felt no word better displayed this idea than that of the Crescendo, which also happened to be the name of a team-member&apos;s cat (definitely totally a coincidence). The team started in 2023 as a group of students from Carnegie-Mellon University, all passionate about making games. Our 10 members come from 7 countries, and cover fields from visual art and music to rendering and game design.
            </p>
          </div>
        </motion.div>

        {/* Tagline Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl">
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
