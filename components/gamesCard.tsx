"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GameCardProps {
  profileImage: string;
  bannerImage: string;
  title: string;
  description: string[];
}

export default function GameCard({
  profileImage,
  bannerImage,
  title,
  description,
}: GameCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={`flex flex-col bg-neutral-950 rounded-lg border-2 border-neutral-800 overflow-hidden cursor-pointer ${
        isExpanded
          ? "fixed inset-0 m-auto max-w-[75%] max-h-[75%] w-full h-full z-[999]"
          : "max-w-prose"
      }`}
    >
      {/* Step 1: Fade out the old content */}
      <AnimatePresence mode="wait">
        {!isExpanded && (
          <motion.div
            key="unexpanded-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: 0.4, duration: 0.3} }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="flex flex-col items-center p-4"
          >
            <motion.img
              src={profileImage}
              alt={title}
              className="w-24 h-24 rounded-full"
            />
            <motion.h1 className="font-semibold text-lg text-center mt-4">
              {title}
            </motion.h1>
            <motion.p className="font-light text-sm text-center line-clamp-2 mt-2">
              {description[0]}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 2: Resize the card (handled by Framer Motion's layout property) */}

      {/* Step 3: Fade in the new content */}
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            key="expanded-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: 0.4, duration: 0.3} }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="flex flex-col items-center h-full"
          >
            <motion.img
              src={bannerImage}
              alt={title}
              className="w-full h-48 object-cover"
            />
            <motion.h1 className="font-semibold text-2xl text-center mt-8 px-4">
              {title}
            </motion.h1>
            <motion.div className="flex flex-col px-4 pb-4 overflow-y-auto max-w-prose">
              {description.map((desc, index) => (
                <motion.p
                  key={index}
                  className="font-light text-sm mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }} // Delay to wait for the card to resize
                >
                  {desc}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
