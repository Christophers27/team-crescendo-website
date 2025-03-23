import React from "react";

export default function HomeIntroSection() {
  return (
    <section className="relative flex flex-col items-center md:items-start min-h-[75vh] px-8 md:px-16 py-16 rounded-4xl overflow-hidden text-center md:text-left">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-slideshow animate-slideshow"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-prose">
        <h1 className="text-4xl md:text-6xl font-semibold mb-8">
          Team Crescendo
        </h1>
        <h2 className="text-lg md:text-xl italic mb-2">
          Tell stories that resonate,
        </h2>
        <h2 className="text-lg md:text-xl italic">
          make games that inspire
        </h2>
      </div>
    </section>
  );
}