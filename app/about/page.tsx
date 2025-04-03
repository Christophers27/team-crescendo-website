import AboutInfoSection from "@/components/sections/about-info-section";
import AboutMembersSection from "@/components/sections/about-members-section";
import React from "react";

export default function AboutPage() {
  return (
    <main className="page">
      <AboutInfoSection />
      <AboutMembersSection />
    </main>
  );
}
