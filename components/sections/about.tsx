import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "../animatedText";
import Logo from "../logo";

const text =
  "The team first started out in 2023 as a group of students from Carnegie Mellon University, brought together by our shared passion to make inspiring games. Our 10 members strive to create games that leave you with hours of enjoyment, and an impression that lasts.";

export default function About() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center section text-white"
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <Logo />
      <AnimatedText text={text} className="mt-8 text-center text-lg max-w-screen-md" />
    </motion.section>
  );
}
