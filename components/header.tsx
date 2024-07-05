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
  const [homeHover, setHomeHover] = useState(false);

  return (
    <>
      <header className="flex flex-row p-8 md:p-12 relative z-[999]">
        <div className="rounded-full fixed">
          <button onClick={toggleNav}>
            <AiOutlineMenu className="text-4xl text-white" />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {showNav && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-[998] flex pt-40 px-8 md:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="space-y-8 w-screen flex flex-col items-center md:items-start">
              <motion.div
                className="-space-y-4"
                initial="rest"
                animate="rest"
                whileHover="hover"
              >
                <a
                  href="/"
                  className="block text-white text-4xl font-bold mb-4"
                >
                  HOME
                </a>
                <motion.div
                  variants={underline}
                  className="w-full h-1 origin-left"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
