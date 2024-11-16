"use client";

import React from 'react'
import Logo from '../logo'
import AnimatedText from '../animatedText'
import { motion } from "framer-motion";

const text = "This is a filler paragraph about the games section. Wow, check out our games! They are so cool and interesting, please play them!";

export default function GamesIntro() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center section bg-black text-white"
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <Logo />
      <AnimatedText text={text} className="mt-8 text-center text-lg max-w-screen-md" />
    </motion.section>
  );
}
