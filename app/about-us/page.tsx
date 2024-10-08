"use client";

import About from "@/components/sections/about";
import Members from "@/components/sections/members";
import React from "react";

export default function Page() {
  return (
    <main className="bg-black min-h-screen">
      <About />
      <Members />
    </main>
  );
}
