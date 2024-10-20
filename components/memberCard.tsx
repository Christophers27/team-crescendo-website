import React, { useState } from "react";
import { motion } from "framer-motion";

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  paragraph?: string;
}

export default function MemberCard({ name, role, image, paragraph }: MemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const flipCard = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <motion.div className="flip-card cursor-pointer" onClick={flipCard}>
      <motion.div
        className="bg-neutral-950 flip-card-inner w-48 h-72 relative rounded-lg border-2 border-neutral-800 flex flex-col items-center"
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 360,
          transition: { duration: 0.6 },
        }}
        transition={{ animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", bounce: 0.5 },
        }}
      >
        <div className="flip-card-front flex flex-col items-center w-full gap-4 px-2 py-8">
          <img src={image} alt={name} className="rounded-full w-32 h-32" />
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-center text-lg font-semibold">{name}</h3>
            <p className="text-center text-sm text-gray-300">{role}</p>
          </div>
        </div>
        <div className="flip-card-back px-2 py-8">
          <p className="text-center text-sm text-gray-300">
            {paragraph || "No additional information."}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
