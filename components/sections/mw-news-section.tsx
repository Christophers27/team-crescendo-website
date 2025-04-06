"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "../sectionDivider";
import { news } from "@/lib/data";

export default function MWNewsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="section relative">
      <SectionDivider text="Updates" />

      {/* News Cards Grid */}
      <div className="flex flex-col gap-4 overflow-x-auto pb-4">
        {/* First row */}
        <div className="flex gap-4 flex-nowrap">
          {news.slice(0, Math.ceil(news.length / 2)).map((item, index) => (
            <NewsCard
              key={index}
              item={item}
              id={index}
              isSelected={selectedId === index}
              onClick={() => setSelectedId(selectedId === index ? null : index)}
            />
          ))}
        </div>

        {/* Second row */}
        <div className="flex gap-4 flex-nowrap">
          {news.slice(Math.ceil(news.length / 2)).map((item, index) => (
            <NewsCard
              key={index + Math.ceil(news.length / 2)}
              item={item}
              id={index + Math.ceil(news.length / 2)}
              isSelected={selectedId === index + Math.ceil(news.length / 2)}
              onClick={() =>
                setSelectedId(
                  selectedId === index + Math.ceil(news.length / 2)
                    ? null
                    : index + Math.ceil(news.length / 2)
                )
              }
            />
          ))}
        </div>
      </div>

      {/* Expanded Card Overlay */}
      <AnimatePresence>
        {selectedId !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-crescendo-black rounded-xl border-2 border-crescendo-purple"
              layoutId={`card-${selectedId}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 text-crescendo-white hover:text-crescendo-purple"
                onClick={() => setSelectedId(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 aspect-[16/9] relative">
                  <Image
                    src={news[selectedId].image}
                    alt={news[selectedId].title}
                    fill
                    className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col p-6 w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-crescendo-white">
                    {news[selectedId].title}
                  </h3>
                  <p className="text-crescendo-white/80">
                    {news[selectedId].description}
                  </p>
                  <a
                    href={news[selectedId].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 bg-crescendo-purple text-crescendo-white rounded-lg hover:bg-crescendo-purple/80 transition-colors text-center"
                  >
                    Read full article
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

type NewsCardProps = {
  item: {
    image: string;
    title: string;
    description: string;
    link: string;
  };
  id: number;
  isSelected: boolean;
  onClick: () => void;
};

function NewsCard({ item, id, isSelected, onClick }: NewsCardProps) {
  return (
    <motion.div
      className="snap-start flex-shrink-0 w-[300px] md:w-[400px] bg-crescendo-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-crescendo-purple cursor-pointer"
      layoutId={`card-${id}`}
      onClick={onClick}
      whileHover={{ y: -5 }}
      initial={{ scale: 1 }}
      animate={{ scale: isSelected ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/3 aspect-[16/9] relative">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col justify-between p-4 w-full md:w-2/3">
          <h3 className="text-xl font-bold line-clamp-2 text-crescendo-white">
            {item.title}
          </h3>
          <p className="text-crescendo-white/80 line-clamp-3 mt-2">
            {item.description}
          </p>
          <button className="mt-4 text-crescendo-purple hover:text-crescendo-purple/80 hover:underline self-start text-left">
            Read more
          </button>
        </div>
      </div>
    </motion.div>
  );
}
