"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { CardItem } from "./PortfolioCard";

interface ProjectModalProps {
  item: CardItem | null;
  onClose: () => void;
  onContactOpen: () => void;
}

export default function ProjectModal({ item, onClose, onContactOpen }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/70 backdrop-blur-md"
          />

          {/* Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-neutral-900/80 hover:bg-neutral-900 text-white flex items-center justify-center transition-transform hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Showcase */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[280px] bg-neutral-900">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                  Discipline Showcase
                </span>
                <h3 className="font-condensed-custom text-4xl uppercase mt-2">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Right Details Panel */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-xs font-semibold text-neutral-400 tracking-wider uppercase">
                  MazeVisual Studio
                </span>
                <h2 className="font-serif-custom text-3xl sm:text-4xl text-neutral-900 mt-1 font-bold">
                  {item.subtitle}
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed mt-4">
                  {item.description}
                </p>

                {/* Capabilities & Features */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-3">
                    Core Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between gap-4">
                <button
                  onClick={onClose}
                  className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  Close Preview
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onContactOpen();
                  }}
                  className="rounded-full bg-neutral-900 text-white px-6 py-2.5 text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-all flex items-center gap-2 group"
                >
                  <span>Commission Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
