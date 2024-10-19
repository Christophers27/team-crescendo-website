"use client";

import { useMenuContext } from "@/context/menuContext";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const underline = {
  rest: {
    scaleX: 0,
  },
  hover: {
    scaleX: 1,
  },
};

const showNavVariants = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: -90,
  },
};

export default function Header() {
  const { showNav, toggleNav } = useMenuContext();

  const link = (text: string, href: string) => (
    <motion.div initial="rest" animate="rest" whileHover="hover">
      <a href={href} className="block text-white text-4xl font-bold">
        {text}
      </a>
      <motion.div
        variants={underline}
        className="bg-white w-full h-1 origin-left"
      />
    </motion.div>
  );

  return (
    <div className="relative">
      <header className="flex flex-col items-start section fixed z-[999] gap-8">
        <motion.button
          className="relative inline-flex items-center justify-center p-4"
          onClick={toggleNav}
          variants={showNavVariants}
          animate={showNav ? "visible" : "hidden"}
        >
          <motion.div
            className="absolute"
            animate={showNav ? { opacity: 0 } : { opacity: 1 }}
          >
            <AiOutlineMenu className="text-4xl text-white" />
          </motion.div>

          <motion.div
            className="absolute"
            initial={{ opacity: 0 }}
            animate={showNav ? { opacity: 1 } : { opacity: 0 }}
          >
            <AiOutlineClose className="text-4xl text-white" />
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {showNav && (
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {link("HOME", "/")}
              {link("ABOUT", "/about-us")}
              {link("GAMES", "/games")}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <AnimatePresence>
        {showNav && (
          <motion.div
            className="bg-black bg-opacity-80 inset-0 fixed z-[998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
