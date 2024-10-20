import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "../animatedText";

const text =
  "The team first started out in 2023 as a group of students from Carnegie Mellon University, brought together by our shared passion to make inspiring games. Our 10 members strive to create games that leave you with hours of enjoyment, and an impression that lasts.";

export default function About() {
  return (
    <motion.section
      className={`flex flex-col justify-center items-center section text-white`}
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <motion.div
        className="flex flex-initial items-center justify-center relative w-[100px] h-[100px]"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
      </motion.div>
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{  duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        Team Crescendo
      </motion.h1>
      <AnimatedText text={text} className="mt-8 text-center text-lg max-w-screen-md" />
    </motion.section>
  );
}
