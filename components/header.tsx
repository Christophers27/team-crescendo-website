"use client";

import { useMenuContext } from "@/context/menuContext";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const { showNav, toggleNav } = useMenuContext();

  return (
    <>
      <header className="flex flex-row p-12 relative z-[999]">
        <div className="p-4 rounded-full fixed">
          <button onClick={toggleNav}>
            <AiOutlineMenu className="text-4xl text-white" />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {showNav && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-[998] flex p-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center">
              <a href="/" className="block text-white text-4xl mb-4">
                Home
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
