"use client";

import React from "react";
import AnimatedButton from "./animatedButton";

export default function HomeAboutSection() {
  return (
    <section className="section items-center gap-8">
      <h1 className="text-2xl md:text-4xl font-semibold">Who are We?</h1>
      <p className="md:text-lg text-center max-w-prose">
        We are a team of indie game developers, brought together by our love for
        games with meaningful stories. Our goal is to make games that are fun to
        play, and leave a lasting impact on the player.
      </p>
      <AnimatedButton text="Learn More" link="/about" />
    </section>
  );
}
