"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MemberCardProps {
  member: { name: string; roles: string[]; description: string; image: string };
}

export default function MemberCard({ member }: MemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-80 w-40 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl shadow-md transition-all duration-300 border-2 border-crescendo-purple"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="absolute w-full h-full backface-hidden bg-crescendo-white/10 rounded-xl p-4 flex flex-col items-center justify-between group"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-crescendo-purple mb-3">
            <Image
              src={member.image}
              alt={`Portrait of ${member.name}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 144px"
              quality={90}
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-bold text-crescendo-white mb-1">
              {member.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-1">
              {member.roles.map((role, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-crescendo-purple/20 text-crescendo-white text-xs font-medium rounded-full"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
          
          <div className="w-8 h-1 bg-crescendo-purple/40 group-hover:bg-crescendo-purple rounded-full mt-2 transition" />
        </motion.div>
        <motion.div
          className="absolute w-full h-full backface-hidden bg-crescendo-purple text-white rounded-xl p-4 rotate-y-180"
          style={{ backfaceVisibility: "hidden" }}
          initial={{ rotateY: 180 }}
        >
          <div className="h-full flex flex-col justify-center">
            <p className="text-sm text-center">{member.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}