"use client";

import React, { useEffect } from "react";
import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenuOverlay({ isOpen, onClose }: MobileMenuOverlayProps) {
  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const ease = cubicBezier(0.55, 0, 0.1, 1);

  return (
    <div
      className={`md:hidden fixed inset-0 z-[100] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      } overflow-hidden`}
    >
      {/* --- Diagonal Background Layers --- */}
      {/* Top Background */}
      <div className="absolute w-[300vw] h-[60vh]" style={{ top: "-10vh", left: "-100vw", transform: "rotate(-45deg)", transformOrigin: "center" }}>
        <motion.div
          className="w-full h-full bg-[#111111]"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { y: "-150%", transition: { duration: 0.8, ease, delay: 0.2 } },
            open: { y: "0%", transition: { duration: 0.8, ease } },
          }}
        />
      </div>
      
      {/* Middle Background */}
      <div className="absolute w-[300vw] h-[60vh]" style={{ top: "20vh", left: "-100vw", transform: "rotate(-45deg)", transformOrigin: "center" }}>
        <motion.div
          className="w-full h-full bg-[#111111]"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { scaleY: 0, transition: { duration: 0.8, ease, delay: 0.2 } },
            open: { scaleY: 1.1, transition: { duration: 0.8, ease } },
          }}
        />
      </div>

      {/* Bottom Background */}
      <div className="absolute w-[300vw] h-[60vh]" style={{ top: "60vh", left: "-100vw", transform: "rotate(-45deg)", transformOrigin: "center" }}>
        <motion.div
          className="w-full h-full bg-[#111111]"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { y: "150%", transition: { duration: 0.8, ease, delay: 0.2 } },
            open: { y: "0%", transition: { duration: 0.8, ease } },
          }}
        />
      </div>

      {/* --- Menu Links --- */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.ul
          className="flex flex-col items-center justify-center gap-8 w-full px-8"
          variants={{
            closed: {
              y: 20,
              opacity: 0,
              transition: { duration: 0.4, ease: "easeIn" },
            },
            open: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
            },
          }}
        >
          {["Home", "Services", "Work", "Studio", "Insights"].map((item) => (
            <motion.li key={item} className="overflow-hidden">
              <Link
                href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                onClick={onClose}
                className="text-4xl md:text-5xl font-inter-tight font-medium tracking-tight text-white hover:text-white/60 transition-colors inline-block relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-white group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
