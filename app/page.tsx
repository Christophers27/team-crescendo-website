import HomeAboutSection from "@/components/home-about-section";
import HomeIntroSection from "@/components/home-intro-section";
import React from "react";

export default function Home() {
  return (
    <main className="page">
      <HomeIntroSection />
      <HomeAboutSection />
    </main>
  );
}
