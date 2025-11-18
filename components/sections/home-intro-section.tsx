"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import ParticleField from "../particleField";
import BackgroundSlideshow from "../backgroundSlideshow";

export default function HomeIntroSection() {
  const ref = useRef<HTMLDivElement>(null);

  // track mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth the motion
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  // parallax transforms
  const translateX = useTransform(springX, [-1, 1], ["-10px", "10px"]);
  const translateY = useTransform(springY, [-1, 1], ["-10px", "10px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const offsetX = (e.clientX - left) / width;
    const offsetY = (e.clientY - top) / height;
    x.set(offsetX * 2 - 1);
    y.set(offsetY * 2 - 1);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="section relative min-h-screen overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ x: translateX, y: translateY }}
      >
        <BackgroundSlideshow
          slides={[
            "/images/slide1.png",
            "/images/slide2.png",
            "/images/slide3.jpg",
          ]}
        />
      </motion.div>

      <div className="absolute inset-0 z-10">
        <ParticleField />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black z-10" />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(161,67,242,0.25), transparent 60%)",
          x: translateX,
          y: translateY,
          z: 0,
        }}
      />

      <div className="relative z-10 max-w-prose py-32">
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-wider">
          Team Crescendo
        </h1>
        <h2 className="text-xl md:text-3xl italic text-crescendo-white/90 ">
          Tell stories that resonate, make games that inspire
        </h2>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
