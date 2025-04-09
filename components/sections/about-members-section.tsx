"use client";

import React from "react";
import SectionDivider from "../sectionDivider";
import MemberCard from "../memberCard";
import { motion } from "motion/react";
import { members } from "@/lib/data";

export default function AboutMembersSection() {
  return (
    <section className="section">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionDivider text="Meet the Team" />
        <motion.p
          className="text-xl text-crescendo-purple mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Click on a team member to learn more
        </motion.p>
      </motion.div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
