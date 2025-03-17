import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "../animatedText";
import Logo from "../logo";

const text =
  "Starting small, and snowballing into a large force, the team felt no word better displayed this idea than that of the Crescendo, which also happened to be the name of a team-member's cat (definitely totally a coincidence). The team started in 2023 as a group of students from Carnegie-Mellon University, all passionate about making games. Our 10 members come from 7 countries, and cover fields from visual art and music to rendering and game design.";

export default function About() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center section text-white"
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <Logo />
      <AnimatedText
        text={text}
        className="mt-8 text-center text-lg max-w-screen-md"
      />
    </motion.section>
  );
}
