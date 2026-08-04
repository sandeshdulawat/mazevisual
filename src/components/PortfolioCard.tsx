"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface CardItem {
  id: string;
  title: string;
  imageSrc: string;
  subtitle: string;
  description: string;
  tags: string[];
}

interface PortfolioCardProps {
  item: CardItem;
  index: number;
  onSelect: (item: CardItem) => void;
}

export default function PortfolioCard({ item, index, onSelect }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(item)}
      className="group relative w-full h-[320px] sm:h-[400px] md:h-full rounded-sm overflow-hidden cursor-pointer bg-neutral-900 flex flex-col justify-end shadow-md transition-all duration-500 hover:shadow-2xl"
    >
      {/* Background Image with Hover Scale */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 260px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          priority={index < 3}
        />
        {/* Subtle Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/95" />
      </div>

      {/* Interactive Badge on Hover */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-xs">
          Explore
        </span>
      </div>

      {/* Card Category Text Overlay (Mobile Optimized, Desktop Capped at Current Size) */}
      <div className="relative z-10 p-2 sm:p-3 md:p-3 text-center flex flex-col items-center justify-end w-full overflow-hidden">
        <div className="w-full flex items-center justify-center h-9 sm:h-12">
          <h3 className="font-condensed-custom text-2xl sm:text-3xl md:text-[clamp(1.5rem,3.8vh,38px)] leading-none uppercase text-white tracking-tighter select-none whitespace-nowrap transition-transform duration-300 group-hover:scale-105">
            {item.title}
          </h3>
        </div>
        <p className="text-[11px] md:text-xs text-neutral-300 font-sans mt-1 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-8 transition-all duration-300 overflow-hidden line-clamp-1">
          {item.subtitle}
        </p>
      </div>
    </motion.div>
  );
}
