"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeaderProps {
  onContactClick?: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // Check initially
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`w-full flex justify-center px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "pt-6" : "pt-6"
        }`}
    >
      <div
        className={`w-full flex items-center justify-between transition-all duration-500 ease-out bg-black/20 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3 rounded-[14px] ${isScrolled
          ? "max-w-[750px] px-3 bg-white/10"
          : "max-w-7xl px-6 md:px-3"
          }`}
      >
        {/* Left Column: Logo */}
        <div className="flex items-center shrink-0 w-[140px]">
          <Link href="/">
            <span className="text-xl md:text-2xl font-inter-tight italic font-medium text-white tracking-tight select-none whitespace-nowrap pl-4 hover:text-white/80 transition-colors cursor-pointer">
              Maze.
            </span>
          </Link>
        </div>

        {/* Center Column: Links (Hidden on small screens) */}
        <nav className={`hidden md:flex flex-1 items-center justify-center transition-all duration-500 ${isScrolled ? "gap-5" : "gap-5 lg:gap-5"} text-white/80 text-[13px] font-inter-tight tracking-wide`}>
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/#work" className="hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/#studio" className="hover:text-white transition-colors">
            Studio
          </Link>
          <Link href="/#insights" className="hover:text-white transition-colors">
            Insights
          </Link>
        </nav>

        {/* Right Column: CTA Button */}
        <div className="flex items-center justify-end shrink-0 w-[140px]">
          <button
            onClick={onContactClick}
            className="rounded-lg bg-white/95 text-black px-4 py-1.5 text-[13px] font-inter-tight font-medium hover:bg-white transition-all duration-300 active:scale-95 whitespace-nowrap shadow-sm"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </motion.header>
  );
}
