"use client";

import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";

interface HeaderProps {
  onContactClick?: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="w-full pt-3 md:pt-4 pb-3 md:pb-5 flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
      {/* Left Column: Logo */}
      <div className="shrink-0 pt-2">
        <Logo />
      </div>

      {/* Center Column: Main Headline (One Studio. -> Endless Possibilities.) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 max-w-5xl md:px-2 lg:px-4"
      >
        {/* Font size is fluid based on viewport screen height (vh), with 135px as the absolute max limit */}
        <div className="font-serif-custom text-[clamp(2.75rem,15.5vh,185px)] leading-[0.86] tracking-tight text-neutral-950 select-none">
          {/* Line 1: One Studio. -> */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span>One Studio.</span>
            {/* Horizontal Arrow -> (Height scales with viewport height, capped at max size) */}
            <svg
              className="h-[clamp(1.75rem,5vh,3.75rem)] w-auto text-neutral-900 stroke-[1.1] inline-block align-middle mt-1"
              viewBox="0 0 100 30"
              fill="none"
              stroke="currentColor"
            >
              <line x1="0" y1="15" x2="86" y2="15" strokeLinecap="round" />
              <polyline
                points="74,5 88,15 74,25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Line 2: Endless */}
          <div>Endless</div>

          {/* Line 3: Possibilities. */}
          <div className="font-bold italic text-neutral-950 font-serif-custom">
            Possibilities.
          </div>
        </div>
      </motion.div>

      {/* Right Column: Work with us Button */}
      <div className="shrink-0 pt-2 self-start">
        <button
          onClick={onContactClick}
          className="rounded-full border border-neutral-900 px-6 py-2.5 text-sm md:text-base font-normal text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 active:scale-95 shadow-xs whitespace-nowrap"
        >
          Work with us
        </button>
      </div>
    </header>
  );
}
