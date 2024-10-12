import React, { useState } from "react";
import { motion } from "framer-motion";

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
}

export default function MemberCard({ name, role, image }: MemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="bg-neutral-950 px-2 py-8 rounded-lg w-48 flex flex-col items-center gap-4 border-2 border-neutral-800"
      whileHover={{ scale: 1.1 }}
    >
      <img src={image} alt={name} className="rounded-full w-32 h-32" />
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-center text-lg font-semibold">{name}</h3>
        <p className="text-center text-sm text-gray-300">{role}</p>
      </div>
    </motion.div>
  );
}
