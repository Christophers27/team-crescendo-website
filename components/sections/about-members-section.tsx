"use client";

import React from "react";
import SectionDivider from "../sectionDivider";
import MemberCard from "../memberCard";
import { motion } from "motion/react";

const members = [
  {
    name: "Chris",
    roles: ["Game Designer"],
    description:
      "Chris is a computer scientist who's branching out into writing, modeling and game development to bring great ideas to life.",
    image: "/profiles/chris.png",
  },
  {
    name: "Cole",
    roles: ["Creative Director"],
    description:
      "Cole is an multimedia electronics artist from New York. Cole aims to make artistic experimentation more accessible through electronic entertainment such as music and video games.",
    image: "/profiles/cole.png",
  },
  {
    name: "Daniel",
    roles: ["Co-Founder", "Graphics Engineer", "3D Artist"],
    description:
      "A graphics engineer and 3D artist from New York, Daniel specializes in physics simulation and environment art.",
    image: "/profiles/daniel.png",
  },
  {
    name: "Emma",
    roles: ["2D Concept Artist"],
    description:
      "Emma is an interdisciplinary artist and designer interested in creating playful experiences through visual storytelling and interaction design.",
    image: "/profiles/emma.png",
  },
  {
    name: "Hank",
    roles: ["Co-Founder", "Studio Director"],
    description:
      "Coming from a graphics engineering background, Hank enjoys many aspects of game development, including gameplay, rendering, visual effects, and animation.",
    image: "/profiles/hank.png",
  },
  {
    name: "Jingxuan",
    roles: ["Game Designer", "Gameplay Engineer"],
    description:
      "Jingxuan is a generalist with a background in software engineering and a hobby for art. They bring a versatile skill set to the team, contributing to both technical development and gameplay design.",
    image: "/profiles/jingxuan.png",
  },
  {
    name: "Leo",
    roles: ["Composer"],
    description:
      "Leo is a digital artist and electronic music composer from California. Aspiring to open themself to more outlets of artistic expression, Leo aspires to reach greater artistic heights and be involved in a story that other people can respect.",
    image: "/profiles/leo.png",
  },
  {
    name: "Mark",
    roles: ["Audio Engineer", "Composer"],
    description:
      "With a background in both computer science and music, Mark is a composer and sound designer who takes inspiration from classical and modern genres to tell the special story from the team's hearts.",
    image: "/profiles/mark.png",
  },
  {
    name: "Stanley",
    roles: ["3D Artist"],
    description:
      "Stanley is a digital artist skilled artistically and technically, interested in creating immersive interactive worlds with captivating visual storytelling.",
    image: "/profiles/stanley.png",
  },
  {
    name: "Xiao",
    roles: ["Gameplay Engineer"],
    description:
      "Xiao is an interdisciplinary artist with a background in computer science and the visual arts, focused on writing software to enable new kinds of creative experience.",
    image: "/profiles/xiao.png",
  },
];

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

      <div className="flex justify-center px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
