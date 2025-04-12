import React from "react";
import HomeAboutSection from "@/components/sections/home-about-section";
import HomeGameSection from "@/components/sections/home-game-section";
import HomeIntroSection from "@/components/sections/home-intro-section";

export default function Home() {
  return (
    <main className="page">
      <HomeIntroSection />
      <HomeAboutSection />
      <HomeGameSection />
    </main>
  );
}
