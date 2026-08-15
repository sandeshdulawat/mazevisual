"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedMenuTriggerProps {
  isOpen: boolean;
  onClick: () => void;
  /** Color of the hamburger menu bars. Default is white. */
  menuColor?: string;
  /** Color of the close (X) bars. Default is dark grey. */
  closeColor?: string;
}

export default function AnimatedMenuTrigger({
  isOpen,
  onClick,
  menuColor = "bg-white",
  closeColor = "bg-[#222222]",
}: AnimatedMenuTriggerProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Menu"
      className="relative w-[34px] h-[34px] cursor-pointer group focus:outline-none z-[333]"
    >
      {/* --- MENU TRIGGER (Tilted Hamburger) --- */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        // Move slightly to match original positioning aesthetic
        style={{ top: "-3px" }}
      >
        {/* Top Bar (50% width) */}
        <motion.span
          className={`block w-[50%] h-[3px] mb-[5px] relative overflow-hidden ${menuColor}`}
          style={{ originX: 0.5, originY: 0.5, rotate: -45 }}
          variants={{
            closed: {
              x: 0,
              y: 0,
              opacity: 1,
              transition: { type: "tween", duration: 0.4, ease: "easeOut" },
            },
            open: {
              x: 64,
              y: -64,
              opacity: 0,
              transition: {
                type: "tween",
                duration: 0.4,
                ease: "easeIn",
                delay: 0.1,
              },
            },
          }}
        >
          <span className="absolute top-0 left-0 w-0 h-full bg-black/20 group-hover:w-full transition-all duration-300 ease-[cubic-bezier(.55,0,.1,1)]" />
        </motion.span>

        {/* Middle Bar (100% width) */}
        <motion.span
          className={`block w-full h-[3px] mb-[5px] relative overflow-hidden ${menuColor}`}
          style={{ originX: 0.5, originY: 0.5, rotate: -45 }}
          variants={{
            closed: {
              x: 0,
              y: 0,
              opacity: 1,
              transition: { type: "tween", duration: 0.4, ease: "easeOut" },
            },
            open: {
              x: 64,
              y: -64,
              opacity: 0,
              transition: { type: "tween", duration: 0.4, ease: "easeIn" },
            },
          }}
        >
          {/* Hover fills from right to left to match original `.middle:before { left: auto; right: 0; }` */}
          <span className="absolute top-0 right-0 w-0 h-full bg-black/20 group-hover:w-full transition-all duration-300 ease-[cubic-bezier(.55,0,.1,1)]" />
        </motion.span>

        {/* Bottom Bar (50% width, pushed right) */}
        <motion.span
          className={`block w-[50%] h-[3px] ml-[50%] relative overflow-hidden ${menuColor}`}
          style={{ originX: 0.5, originY: 0.5, rotate: -45 }}
          variants={{
            closed: {
              x: 0,
              y: 0,
              opacity: 1,
              transition: { type: "tween", duration: 0.4, ease: "easeOut" },
            },
            open: {
              x: 64,
              y: -64,
              opacity: 0,
              transition: {
                type: "tween",
                duration: 0.4,
                ease: "easeIn",
                delay: 0.2,
              },
            },
          }}
        >
          <span className="absolute top-0 left-0 w-0 h-full bg-black/20 group-hover:w-full transition-all duration-300 ease-[cubic-bezier(.55,0,.1,1)]" />
        </motion.span>
      </motion.div>

      {/* --- CLOSE TRIGGER (X) --- */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center pointer-events-none"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        style={{ zIndex: isOpen ? 5 : -1 }}
      >
        {/* Left-to-Right diagonal line of the 'X' */}
        <motion.span
          className={`absolute top-1/2 left-0 -mt-[1.5px] w-full h-[3px] overflow-hidden ${closeColor}`}
          style={{ rotate: -45 }}
          variants={{
            closed: {
              x: 80,
              y: -80,
              opacity: 0,
              transition: { type: "tween", duration: 0.2, ease: "easeIn" },
            },
            open: {
              x: 0,
              y: 0,
              opacity: 1,
              transition: { type: "tween", duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <span className="absolute top-0 left-0 w-0 h-full bg-white/20 group-hover:w-full transition-all duration-300 ease-[cubic-bezier(.55,0,.1,1)]" />
        </motion.span>

        {/* Right-to-Left diagonal line of the 'X' */}
        <motion.span
          className={`absolute top-1/2 left-0 -mt-[1.5px] w-full h-[3px] overflow-hidden ${closeColor}`}
          style={{ rotate: 45 }}
          variants={{
            closed: {
              x: -80,
              y: -80,
              opacity: 0,
              transition: {
                type: "tween",
                duration: 0.2,
                ease: "easeIn",
                delay: 0.1,
              },
            },
            open: {
              x: 0,
              y: 0,
              opacity: 1,
              transition: {
                type: "tween",
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              },
            },
          }}
        >
          <span className="absolute top-0 left-0 w-0 h-full bg-white/20 group-hover:w-full transition-all duration-300 ease-[cubic-bezier(.55,0,.1,1)]" />
        </motion.span>
      </motion.div>
    </button>
  );
}
