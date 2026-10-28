"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedMenuTrigger from "./AnimatedMenuTrigger";
import MobileMenuOverlay from "./MobileMenuOverlay";

interface HeaderProps {
  onContactClick?: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // Check initially
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      return;
    }
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };
  return (
    <>
      <MobileMenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onContactClick={onContactClick}
      />
      <motion.header
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`w-full flex justify-center px-3 sm:px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "pt-4 md:pt-6" : "pt-4 md:pt-6"
          }`}
      >
        <div
          className={`w-full flex items-center justify-between transition-all duration-500 ease-out bg-black/20 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2.5 md:py-3 rounded-[14px] ${isScrolled
            ? "max-w-[750px] px-3 bg-white/10"
            : "max-w-7xl px-3 sm:px-4 md:px-3"
            }`}
        >
          {/* Left Column: Logo */}
          <div className="flex items-center shrink-0 w-auto md:w-[140px]">
            <Link href="/" onClick={(e) => handleNavClick(e, "/")}>
              <span className="text-xl md:text-2xl font-inter-tight italic font-medium text-white tracking-tight select-none whitespace-nowrap pl-2 md:pl-4 hover:text-white/80 transition-colors cursor-pointer">
                Maze visual.
              </span>
            </Link>
          </div>

          {/* Center Column: Links (Hidden on small screens) */}
          <nav className={`hidden md:flex flex-1 items-center justify-center transition-all duration-500 ${isScrolled ? "gap-5" : "gap-5 lg:gap-5"} text-white/80 text-[13px] font-inter-tight tracking-wide`}>
            <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/#services" onClick={(e) => handleNavClick(e, "/#services")} className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/#work" onClick={(e) => handleNavClick(e, "/#work")} className="hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/#studio" onClick={(e) => handleNavClick(e, "/#studio")} className="hover:text-white transition-colors">
              Studio
            </Link>
            <Link href="/#insights" onClick={(e) => handleNavClick(e, "/#insights")} className="hover:text-white transition-colors">
              Insights
            </Link>
          </nav>

          {/* Right Column: CTA Button / Mobile Menu */}
          <div className="flex items-center justify-end shrink-0 w-auto md:w-[140px]">
            <button
              onClick={onContactClick}
              className="hidden md:block rounded-lg bg-white/95 text-black px-4 py-1.5 text-[13px] font-inter-tight font-medium hover:bg-white transition-all duration-300 active:scale-95 whitespace-nowrap shadow-sm cursor-pointer"
            >
              Get In Touch
            </button>

            <div className="block md:hidden">
              <AnimatedMenuTrigger
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
