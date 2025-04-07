import MWIntroSection from "@/components/sections/mw-intro-section";
import MWNewsSection from "@/components/sections/mw-news-section";
import React from "react";

export default function MWPage() {
  return (
    <main className="page">
      <MWIntroSection />
      <MWNewsSection />
    </main>
  );
}
