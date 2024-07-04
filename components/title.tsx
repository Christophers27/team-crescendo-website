import React from "react";
import Image from "next/image";

export default function Title() {
  return (
    <section className="flex flex-col justify-center items-center pt-12 md:pt-40 lg:pt-80 pb-8 bg-gradient-to-b from-transparent to-black space-y-4">
      <div className="flex flex-initial items-center justify-center relative w-[100px] h-[100px]">
        <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Team Crescendo</h1>
    </section>
  );
}
