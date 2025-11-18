import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps {
  text: string;
  link: string;
}

export default function AnimatedButton({ text, link }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="relative overflow-hidden px-6 py-3 rounded-full border-2 border-crescendo-purple w-fit font-inter"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
      animate={{}}
      transition={{ duration: 0.5 }}
    >
      <Link href={link}>
        <motion.div
          className="absolute inset-0 h-full w-full bg-crescendo-purple rounded-full z-5"
          initial={false}
          animate={{
            y: isHovered ? 0 : 60,
          }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-crescendo-white rounded-full" />
        <motion.span
          className="block relative z-10 text-crescendo-purple"
          initial={false}
          animate={{
            y: isHovered ? -60 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={false}
          animate={{
            y: isHovered ? 0 : 60,
          }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.span>
      </Link>
    </motion.button>
  );
}
