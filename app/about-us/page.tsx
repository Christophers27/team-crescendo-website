"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et tellus sit amet massa posuere accumsan at non elit. Vivamus lobortis, mauris ac rutrum hendrerit, urna elit aliquet lacus, vitae elementum sem justo id eros. Ut vitae nulla dui. Donec ac justo sit amet mi vehicula sodales vel non est. Etiam vel rhoncus diam. Etiam elementum nulla vel libero dapibus mattis. In tincidunt tristique turpis id lacinia.";

const memberData = [
  { name: "Chris", role: ["Writer"] },
  { name: "Cole", role: ["Manager", "Writer"] },
  { name: "Daniel", role: ["Manager", "Engineer"] },
  { name: "Emma", role: ["Artist"] },
  { name: "Felix", role: ["Composer", "Engineer"] },
  { name: "Hank", role: ["Director", "Engineer"] },
  { name: "JingXuan", role: ["Engineer"] },
  { name: "Leslie", role: ["Artist"] },
  { name: "Mark", role: ["Composer"] },
  { name: "Miguel", role: ["Marketing"] },
  { name: "Nia", role: ["Artist"] },
  { name: "Pheht", role: ["Artist"] },
  { name: "Xiao", role: ["Engineer"] },
];

export default function Page() {
  return (
    <main className="bg-slate-950 flex flex-col items-center text-white min-h-screen px-4 md:px-16 lg:px-32">
      <section className="flex flex-col items-center mt-32">
        <motion.div
          className="flex flex-initial items-center justify-center relative w-[100px] h-[100px]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Team Crescendo
        </motion.h1>
        <motion.p
          className="text-lg mt-4 max-w-2xl text-center"
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          {text}
        </motion.p>
      </section>
      <section className="flex flex-col items-center mt-16">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: "easeOut",
          }}
        >
          Our Members
        </motion.h2>
        <div className="overflow-hidden max-w-[90vw] md:max-w-2xl lg:max-w-4xl">
          <div className="flex overflow-x-auto w-auto py-4 px-2 text-black">
            {memberData.map((member, index) => (
              <div
                key={index}
                className="flex-none w-60 h-40 m-2 bg-gray-200 rounded-lg shadow p-4"
              >
                <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                {
                  <ul className="list-none space-y-2">
                    {member.role.map((role, index) => (
                      <li
                        key={index}
                        className="bg-slate-400 rounded-full px-2 w-fit"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                }
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
