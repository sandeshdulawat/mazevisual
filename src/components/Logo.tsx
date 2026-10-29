import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      {/* 3D Isometric Maze Logo Mark */}
      <div className="relative w-8 h-8 md:w-9 md:h-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/mazevisuallogo.png"
          alt="Maze Visual Logo"
          width={36}
          height={36}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Typography */}
      <span className="text-xl md:text-2xl font-inter-tight italic font-medium tracking-tight text-white group-hover:text-white/80 transition-colors">
        Maze visual.
      </span>
    </div>
  );
}
