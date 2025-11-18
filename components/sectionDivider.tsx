import React from "react";

interface SectionDividerProps {
    text: string;
}

export default function SectionDivider({ text }: SectionDividerProps) {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <div className="h-0.5 bg-crescendo-purple w-full" />
      <h2 className="text-xl md:text-3xl tracking-wider font-bold text-center whitespace-nowrap">
        {text}
      </h2>
      <div className="h-0.5 bg-crescendo-purple w-full" />
    </div>
  );
}
