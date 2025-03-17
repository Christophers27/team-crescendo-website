"use client";

import React from 'react'
import Logo from '../logo'
import AnimatedText from '../animatedText'
import { motion } from "framer-motion";


export default function GamesIntro() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center section bg-black text-white"
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <Logo />
    </motion.section>
  );
}
