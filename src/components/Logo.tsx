import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      {/* Maze Icon in square box */}
      <div className="w-8 h-8 md:w-9 md:h-9 border border-neutral-900 p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          className="w-full h-full text-neutral-900"
        >
          <path d="M 3 3 H 21 V 21 H 3 Z" strokeWidth="1" />
          <path d="M 7 3 V 13 H 13 V 7 H 17 V 17 H 7" />
          <path d="M 13 17 V 21" />
          <path d="M 17 7 H 21" />
          <path d="M 3 17 H 5" />
        </svg>
      </div>

      {/* Brand Name */}
      <span className="text-xl md:text-2xl font-normal tracking-tight text-neutral-900 font-serif-custom">
        Maze Visual
      </span>
    </div>
  );
}
