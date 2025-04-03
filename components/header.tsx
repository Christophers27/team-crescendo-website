"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crescendo-black/80 backdrop-blur-md border-b border-crescendo-purple/20">
      <nav className="px-8 md:px-16 lg:px-32 py-3">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.png"
                  alt="Team Crescendo Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-3 text-xl font-semibold text-crescendo-white group-hover:text-crescendo-purple transition-colors duration-200">
                Team Crescendo
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link
                href="/memoria-wake"
                className="px-3 py-2 rounded-md text-sm font-medium text-crescendo-white hover:text-crescendo-purple hover:bg-crescendo-purple/10 transition-colors duration-200"
              >
                Memoria Wake
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-crescendo-white hover:text-crescendo-purple hover:bg-crescendo-purple/10 transition-colors duration-200"
              >
                About
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-crescendo-white hover:text-crescendo-purple hover:bg-crescendo-purple/10 focus:outline-none transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative h-6 w-6">
                <motion.svg
                  className="absolute inset-0 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Top line - morphs into top-left to bottom-right diagonal */}
                  <motion.path
                    d={isMenuOpen ? "M5 5L19 19" : "M3 6L21 6"}
                    initial={false}
                    animate={{
                      d: isMenuOpen ? "M5 5L19 19" : "M3 6L21 6",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 0.3,
                    }}
                  />

                  {/* Middle line - fades out and shrinks */}
                  <motion.path
                    d="M3 12L21 12"
                    initial={false}
                    animate={{
                      opacity: isMenuOpen ? 0 : 1,
                      pathLength: isMenuOpen ? 0 : 1,
                    }}
                    transition={{
                      opacity: { duration: 0.1 },
                      pathLength: { duration: 0.2 },
                    }}
                  />

                  {/* Bottom line - morphs into bottom-left to top-right diagonal */}
                  <motion.path
                    d={isMenuOpen ? "M5 19L19 5" : "M3 18L21 18"}
                    initial={false}
                    animate={{
                      d: isMenuOpen ? "M5 19L19 5" : "M3 18L21 18",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 0.3,
                    }}
                  />
                </motion.svg>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.1 },
              },
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/memoria-wake"
                className="block px-3 py-2 rounded-md text-base font-medium text-crescendo-white hover:text-crescendo-purple hover:bg-crescendo-purple/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Memoria Wake
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-crescendo-white hover:text-crescendo-purple hover:bg-crescendo-purple/10"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
