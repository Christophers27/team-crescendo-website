"use client";

import { useMenuContext } from "@/context/menuContext";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const underline = {
  rest: {
    backgroundColor: "transparent",
    scaleX: 0,
  },
  hover: {
    backgroundColor: "white",
    scaleX: 1,
  },
};

export default function Header() {
  const { showNav, toggleNav } = useMenuContext();

  const link = (text: string, href: string) => (
    <motion.div
      className="-space-y-4"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <a href={href} className="block text-white text-4xl font-bold mb-4">
        {text}
      </a>
      <motion.div variants={underline} className="w-full h-1 origin-left" />
    </motion.div>
  );

  return (
    <div className="absolute top-0 w-full">
      <header className="flex flex-row section relative z-[999]">
        <div className="fixed backdrop-blur-sm items-center justify-center">
          <button onClick={toggleNav}>
            <AiOutlineMenu className="text-4xl text-white" />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {showNav && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-[998] flex pt-40 px-8 md:px-16 lg:px-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="space-y-8 w-screen flex flex-col items-center md:items-start">
              {link("HOME", "/")}
              {link("ABOUT", "/about-us")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
