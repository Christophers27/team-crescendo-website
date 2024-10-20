import React, { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const defaultAnimation = {
  hidden: { opacity: 0, scale: 2 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.1 } },
};

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div className={`${className}`}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        aria-hidden="true"
        variants={{
          visible: { transition: { staggerChildren: 0.01, delayChildren: 1 } },
          hidden: {},
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {text.split("").map((char, index) => (
          <motion.span
            variants={defaultAnimation}
            key={`${char}-${index}`}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
