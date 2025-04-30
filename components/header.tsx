"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Memoria Wake", path: "/memoria-wake" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 z-50 w-full bg-crescendo-black/80 backdrop-blur-md border-b border-crescendo-purple/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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
            <span className="ml-3 text-xl font-semibold text-crescendo-white group-hover:text-crescendo-purple transition-colors">
              Team Crescendo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-crescendo-white hover:text-crescendo-purple hover:bg-crescendo-purple/10 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-crescendo-white hover:text-crescendo-purple hover:bg-crescendo-purple/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col px-2 pt-2 pb-3 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="px-3 py-2 rounded-md text-base font-medium text-crescendo-white hover:text-crescendo-purple hover:bg-crescendo-purple/10"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  const top = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6, x: 0 },
  };

  const center = {
    closed: { scaleX: 1 },
    open: { scaleX: 0 },
  };

  const bottom = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6, x: 0 },
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <motion.path
        d="M3 6H21"
        variants={top}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.2 }}
      />
      <motion.path
        d="M3 12H21"
        variants={center}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.1 }}
      />
      <motion.path
        d="M3 18H21"
        variants={bottom}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.2 }}
      />
    </svg>
  );
}
