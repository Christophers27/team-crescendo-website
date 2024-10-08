import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "../animatedText";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla tempor augue, vel consequat nibh rutrum a. Duis id tristique odio, eget ultricies nisi. Quisque egestas consequat ex vitae bibendum. Aenean lacinia nunc dui, in consequat urna aliquet et. Vestibulum eu sollicitudin quam. Mauris metus ipsum, ornare eget justo eu, aliquam dignissim odio. Aenean luctus, metus nec maximus posuere, lectus ex pharetra metus, et iaculis nulla mauris at mauris. Donec blandit neque ac lorem aliquam aliquet. In congue ac nisi et bibendum. Duis a tellus mollis, feugiat ipsum sit amet, dictum ante. Proin nulla lorem, condimentum eu ante ac, elementum imperdiet risus.";

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
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
      </motion.div>
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Team Crescendo
      </motion.h1>
      <AnimatedText text={text} className="mt-8 text-center text-lg max-w-screen-md" />
    </motion.section>
  );
}
