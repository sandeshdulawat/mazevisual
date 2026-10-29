"use client";

import React from "react";
import { motion } from "framer-motion";

const LeftBranch = () => (
  <svg width="24" height="48" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500">
    <path d="M 22 44 C 5 35 2 18 8 4" />
    <path d="M 6 30 L 14 26 L 8 36 Z" fill="currentColor" />
    <path d="M 4 20 L 12 16 L 7 24 Z" fill="currentColor" />
    <path d="M 5 10 L 13 6 L 9 14 Z" fill="currentColor" />
  </svg>
);

const RightBranch = () => (
  <svg width="24" height="48" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500">
    <path d="M 2 44 C 19 35 22 18 16 4" />
    <path d="M 18 30 L 10 26 L 16 36 Z" fill="currentColor" />
    <path d="M 20 20 L 12 16 L 17 24 Z" fill="currentColor" />
    <path d="M 19 10 L 11 6 L 15 14 Z" fill="currentColor" />
  </svg>
);

export default function AboutSection() {
  const brandLogos = [
    <div key="1" className="flex items-center text-xl font-bold tracking-widest text-white/70">
      SUGAR BAE
    </div>,
    <div key="2" className="flex flex-col text-white/70">
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-white/70 rounded-br-full rounded-tl-full" />
        <span className="font-bold text-lg leading-none">Flipkart</span>
      </div>
      <span className="text-sm font-semibold tracking-wide">Commerce Cloud</span>
      <span className="text-[9px] text-white/40 tracking-wider">A Walmart Company</span>
    </div>,
    <div key="3" className="flex items-center text-2xl font-black tracking-tight text-white/80">
      #Schbang.
    </div>,
    <div key="4" className="flex flex-col items-center text-white/70">
      <svg width="24" height="16" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 14c-4-4-8-2-10-6 2-2 6 0 10 6z" />
        <path d="M12 14c4-4 8-2 10-6-2-2-6 0-10 6z" />
        <path d="M12 14V4" />
      </svg>
      <span className="text-sm tracking-[0.2em] font-serif uppercase mt-1">Iskcon</span>
    </div>,
    <div key="5" className="flex items-center text-xl font-serif italic text-white/70 tracking-wide">
      the moms co.
    </div>
  ];

  return (
    <section className="relative w-full bg-black py-12 sm:py-16 md:py-28 flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Main Text with simple fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center mb-10 sm:mb-14 md:mb-20 px-2"
      >
        <p className="font-cormorant text-2xl sm:text-3xl md:text-5xl lg:text-[54px] text-neutral-200 leading-[1.25] md:leading-[1.18] font-normal tracking-tight">
          We craft <span className="text-white italic">brand identities</span>, narratives, and <span className="text-white italic">digital experiences</span> that keep up with your ambition.<br className="hidden sm:block" />{" "}
          So you can focus on building what matters, while we shape how the world sees it.
        </p>
      </motion.div>

      {/* Marquee Area */}
      <div className="w-full flex flex-col md:flex-row items-center z-10 max-w-screen-2xl mx-auto px-4 md:px-12 gap-3 md:gap-0">
        {/* Static Left Part: Trusted By */}
        <div className="flex items-center gap-3 md:gap-4 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-neutral-800/80 pb-2 md:pb-0 shrink-0 bg-black/80 backdrop-blur-sm z-20">
          <LeftBranch />
          <div className="flex flex-col text-neutral-400 text-xs md:text-sm font-sans leading-tight font-medium text-center">
            <span>Trusted by 60+</span>
            <span>Organizations</span>
          </div>
          <RightBranch />
        </div>

        {/* Marquee Right Part */}
        <div className="w-full flex-1 overflow-hidden relative flex items-center md:ml-8" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
          <div className="animate-marquee-left flex items-center gap-16 md:gap-24 py-2 md:py-4 pr-16 md:pr-24 mix-blend-screen opacity-80">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 grayscale scale-90 md:scale-100">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
