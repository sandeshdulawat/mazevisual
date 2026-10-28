"use client";

import React, { useEffect } from "react";
import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick?: () => void;
}

export default function MobileMenuOverlay({ isOpen, onClose, onContactClick }: MobileMenuOverlayProps) {
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    document.body.style.overflow = "unset";
    onClose();

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
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 120);
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <div
      className={`md:hidden fixed inset-0 z-[100] ${isOpen ? "pointer-events-auto" : "pointer-events-none"
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

      {/* --- Menu Links & Action --- */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-between pt-6 pb-12 px-6 z-10"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: {
            opacity: 0,
            pointerEvents: "none",
            transition: { duration: 0.3 },
          },
          open: {
            opacity: 1,
            pointerEvents: "auto",
            transition: { duration: 0.4, delay: 0.2 },
          },
        }}
      >
        {/* Top Header Bar with Cross (X) Close Button */}
        <div className="w-full flex items-center justify-end z-20">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 flex items-center justify-center text-white transition-all cursor-pointer border border-white/10 shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="w-full flex-1 flex flex-col items-center justify-center py-6">
          <motion.ul
            className="flex flex-col items-center justify-center gap-6 w-full"
            variants={{
              closed: {
                y: 20,
                opacity: 0,
                transition: { duration: 0.4, ease: "easeIn" },
              },
              open: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
              },
            }}
          >
            {["Home", "Services", "Work", "Studio", "Insights"].map((item) => {
              const href = item === "Home" ? "/" : `/#${item.toLowerCase()}`;
              return (
                <motion.li key={item} className="overflow-hidden">
                  <Link
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="text-3xl sm:text-4xl font-inter-tight font-medium tracking-tight text-white hover:text-white/60 transition-colors inline-block relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 ease-out" />
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        {/* Mobile Drawer Bottom CTA Section */}
        <motion.div
          variants={{
            closed: {
              y: 20,
              opacity: 0,
              transition: { duration: 0.3, ease: "easeIn" },
            },
            open: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut", delay: 0.45 },
            },
          }}
          className="w-full max-w-xs flex flex-col items-center gap-4 pt-6 border-t border-white/10 shrink-0"
        >
          <button
            onClick={() => {
              onClose();
              if (onContactClick) onContactClick();
            }}
            className="w-full py-3.5 px-6 rounded-full bg-white text-black font-inter-tight font-semibold text-sm hover:bg-neutral-200 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.25)] cursor-pointer"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex flex-col items-center text-xs text-neutral-400 gap-1 text-center">
            <a href="mailto:sdulawat.work@gmail.com" className="hover:text-white transition-colors">
              sdulawat.work@gmail.com
            </a>
            <span className="text-neutral-500 text-[11px]">PNQ, IND &bull; Global Studio</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
