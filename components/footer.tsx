"use client";

import React from "react";
import {
  AiOutlineCopyright,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { motion } from "framer-motion";

const underline = {
  rest: {
    scaleX: 0,
  },
  hover: {
    scaleX: 1,
  },
};

export default function Footer() {
  function socialButton(href: string, icon: JSX.Element) {
    return (
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a href={href} target="_blank">
          {icon}
        </a>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col bg-[#0c101f] text-white pt-16 pb-4 gap-2 justify-center items-center">
      <div className="flex">
        {socialButton(
          "https://youtu.be/dQw4w9WgXcQ?si=8b-MuQPSq7vQj4jy",
          <AiOutlineTwitter className="text-4xl h-full mr-1" />
        )}
        {socialButton(
          "https://youtu.be/dQw4w9WgXcQ?si=8b-MuQPSq7vQj4jy",
          <AiOutlineInstagram className="text-4xl h-full mr-1" />
        )}
        {socialButton(
          "https://youtu.be/dQw4w9WgXcQ?si=8b-MuQPSq7vQj4jy",
          <AiFillYoutube className="text-4xl h-full mr-1" />
        )}
      </div>
      <motion.div initial="rest" animate="rest" whileHover="hover">
        <a
          href="mailto:christophersetiabudi@gmail.com"
          className="font-thin text-xl"
        >
          Email Us!
        </a>
        <motion.div
          variants={underline}
          className="bg-white w-full h-px origin-left"
        />
      </motion.div>
      <div className="flex items-center justify-center font-thin">
        <AiOutlineCopyright className="text-xl h-full mr-1" />{" "}
        <p className="text-xl">2024 Team Crescendo LLC</p>
      </div>
    </div>
  );
}
