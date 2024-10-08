"use client";

import React from "react";
import Image from "next/image";
import { useMenuContext } from "@/context/menuContext";
import { motion } from "framer-motion";

export default function Title() {
  const { showNav } = useMenuContext();

  return (
    <motion.section
      className={`flex flex-col justify-center items-center pt-[40vh] pb-[30vh] bg-gradient-to-b from-70% from-transparent to-[#000310] space-y-4 ${
        showNav ? "opacity-60" : ""
      }`}
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <motion.div
        className="flex flex-initial items-center justify-center relative w-[100px] h-[100px]"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
      </motion.div>
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        Team Crescendo
      </motion.h1>
    </motion.section>
  );
}
