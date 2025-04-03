"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { AiOutlineCopyright, AiOutlineX } from "react-icons/ai";
import { BsSteam, BsYoutube, BsDiscord } from "react-icons/bs";
import Link from "next/link";

const underline = {
  rest: {
    scaleX: 0,
  },
  hover: {
    scaleX: 1,
  },
};

export default function Footer() {
  function linkButton(link: string, icon: JSX.Element) {
    return (
      <Link href={link} target="_blank">
        <motion.div
          whileHover={{ scale: 1.1, color: "#5f43b2" }}
          whileTap={{ scale: 0.9 }}
        >
          {icon}
        </motion.div>
      </Link>
    );
  }

  return (
    <footer className="flex flex-col mx-8 md:mx-16 lg:mx-32 py-4 md:py-8 text-crescendo-white items-center gap-4 border-t-2 border-crescendo-purple">
      <div className="flex flex-row items-center justify-center gap-4">
        {linkButton(
          "https://x.com/TeamCrescendo_",
          <AiOutlineX className="text-3xl" />
        )}
        {linkButton(
          "https://discord.gg/VvEbKqNKmf",
          <BsDiscord className="text-3xl" />
        )}
        {linkButton(
          "https://www.youtube.com/@TeamCrescendo-Games",
          <BsYoutube className="text-3xl" />
        )}
        {linkButton(
          "https://store.steampowered.com/app/3240610/Memoria_Wake/",
          <BsSteam className="text-3xl" />
        )}
      </div>
      <div className="flex flex-row gap-8">
        <motion.div
          className="flex flex-col w-fit items-center"
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <Link href="mailto:contact@teamcrescendo.net" className="font-thin">
            Email Us!
          </Link>
          <motion.div
            variants={underline}
            className="bg-crescendo-purple w-full h-px origin-left"
          />
        </motion.div>
      </div>
      <div className="flex items-center justify-center font-thin">
        <AiOutlineCopyright className="text-xl h-full mr-1" />{" "}
        <p className="">2025 Team Crescendo LLC</p>
      </div>
    </footer>
  );
}
