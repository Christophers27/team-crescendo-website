"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BsX } from "react-icons/bs";
import SectionDivider from "../sectionDivider";
import { newsMW } from "@/lib/data";

type NewsItem = (typeof newsMW)[number];

export default function MWNewsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const firstRowItems = newsMW.slice(0, Math.ceil(newsMW.length / 2));
  const secondRowItems = newsMW.slice(Math.ceil(newsMW.length / 2));

  const handleCardClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <section className="section relative">
      <SectionDivider text="Updates" />

      {/* News Cards Grid */}
      <div className="flex flex-col gap-4 overflow-x-auto snap-x snap-mandatory py-4">
        <div className="flex gap-4 flex-nowrap">
          {firstRowItems.map((item, index) => (
            <NewsCard
              key={index}
              item={item}
              id={index}
              isSelected={selectedId === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        <div className="flex gap-4 flex-nowrap">
          {secondRowItems.map((item, index) => {
            const cardId = index + Math.ceil(newsMW.length / 2);
            return (
              <NewsCard
                key={cardId}
                item={item}
                id={cardId}
                isSelected={selectedId === cardId}
                onClick={() => handleCardClick(cardId)}
              />
            );
          })}
        </div>
      </div>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {selectedId !== null && (
          <NewsModal
            item={newsMW[selectedId]}
            onClose={() => setSelectedId(null)}
            selectedId={selectedId}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

type NewsCardProps = {
  item: NewsItem;
  id: number;
  isSelected: boolean;
  onClick: () => void;
};

function NewsCard({ item, id, isSelected, onClick }: NewsCardProps) {
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      className="snap-start flex-shrink-0 w-xs md:w-md bg-crescendo-black rounded-lg border border-crescendo-purple cursor-pointer group"
      layoutId={`card-${id}`}
      onClick={onClick}
      whileHover={{ y: -5 }}
      initial={{ scale: 1 }}
      animate={{ scale: isSelected ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
          <div>
            <h3 className="text-xl font-bold line-clamp-2 text-crescendo-white">
              {item.title}
            </h3>
            <p className="text-crescendo-white/60 text-sm font-light">
              {formattedDate}
            </p>
            <p className="text-crescendo-white/80 line-clamp-3 mt-2">
              {item.description}
            </p>
          </div>

          <div className="mt-4 w-fit">
            <span className="relative text-crescendo-purple">
              Read More
              <span className="absolute left-0 bottom-0 w-0 h-px bg-crescendo-purple transition-all duration-300 group-hover:w-full" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

type NewsModalProps = {
  item: NewsItem;
  onClose: () => void;
  selectedId: number;
};

function NewsModal({ item, onClose, selectedId }: NewsModalProps) {
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-crescendo-black rounded-xl border-2 border-crescendo-purple"
        layoutId={`card-${selectedId}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <button
          className="absolute top-4 right-4 z-10 p-1 text-crescendo-white hover:text-crescendo-purple transition duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          <BsX size={36} />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/2 aspect-[16/9] relative">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col p-6 w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl max-w-5/6 font-bold text-crescendo-white">
              {item.title}
            </h3>
            <p className="text-crescendo-white/60 text-sm font-light">
              {formattedDate}
            </p>
            <p className="text-crescendo-white/80">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-crescendo-purple text-crescendo-white rounded-lg hover:bg-crescendo-purple/80 transition-colors text-center"
            >
              Read full article
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
