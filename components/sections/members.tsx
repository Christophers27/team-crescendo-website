import React from "react";
import { motion } from "framer-motion";
import MemberCard from "../memberCard";

const members = [
  {
    name: "Hank",
    role: "Project: Noire Lead & Engineer",
    image: "/hank.png",
    paragraph:
      "Coming from a graphics engineering background, Hank enjoys many aspects of game development, including gameplay, rendering, visual effects, and animation.",
  },
  {
    name: "Daniel",
    role: "Technical Director",
    image: "/daniel.png",
    paragraph:
      "A graphics engineer and 3D artist from New York, Daniel specializes in physics simulation and environment art.",
  },
  {
    name: "Cole",
    role: "Creative Director & Production",
    image: "/cole.png",
    paragraph:
      "Cole is an multimedia electronics artist from New York. Cole aims to make artistic experimentation more accessible through electronic entertainment such as music and video games.",
  },
  {
    name: "Emma",
    role: "2D Artist & Visual Designer",
    image: "/emma.png",
    paragraph:
      "Emma is an interdisciplinary artist and designer interested in creating playful experiences through visual storytelling and interaction design.",
  },
  {
    name: "Chris",
    role: "Story & Worldbuilding",
    image: "/chris.png",
    paragraph:
      "Chris is a computer scientist who's branching out into writing, modeling and game development to bring great ideas to life.",
  },
  {
    name: "Jingxuan",
    role: "Engineer",
    image: "/jingxuan.png",
    paragraph:
      "Jingxuan is a generalist with a background in software engineering and a hobby for art. They bring a versatile skill set to the team, contributing to both technical development and gameplay design.",
  },
  {
    name: "Xiao",
    role: "Engineer",
    image: "/xiao.png",
    paragraph:
      "Xiao is an interdisciplinary artist with a background in computer science and the visual arts, focused on writing software to enable new kinds of creative experience.",
  },
  {
    name: "Mark",
    role: "Composer",
    image: "/mark.png",
    paragraph:
      "With a background in both computer science and music, Mark is a composer and sound designer who takes inspiration from classical and modern genres to tell the special story from the team's hearts.",
  },
  {
    name: "Leo",
    role: "Composer",
    image: "/defaultProfile.png",
    paragraph:
      "Leo is a digital artist and electronic music composer from California. Aspiring to open themself to more outlets of artistic expression, Leo aspires to reach greater artistic heights and be involved in a story that other people can respect. ",
  },
  {
    name: "Stanley",
    role: "3D Artist",
    image: "/defaultProfile.png",
    paragraph:
      "Stanley is a digital artist skilled artistically and technically, interested in creating immersive interactive worlds with captivating visual storytelling",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default function Members() {
  return (
    <motion.section className="flex flex-col items-center section text-white">
      <h2 className="text-4xl font-bold">Meet the Team</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 mt-8">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            paragraph={member.paragraph}
          />
        ))}
      </div>
    </motion.section>
  );
}
