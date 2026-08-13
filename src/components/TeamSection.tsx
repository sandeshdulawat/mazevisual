"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section className="w-full bg-black py-24 md:py-32 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 md:mb-24 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          <span className="font-serif-custom italic">Get</span> <span className="font-serif-custom">in touch with us</span>
        </h2>
        <p className="text-neutral-400 text-sm md:text-base font-sans tracking-wide">
          We're always up for a good coffee chat
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 relative w-full max-w-4xl px-4 mt-8">

        {/* Card 1: Sandesh */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -6 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[260px] h-[340px] bg-[#141414] rounded-[20px] p-6 flex flex-col items-center border border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 hover:rotate-0 hover:-translate-y-4 hover:z-30 transition-all duration-500"
        >
          {/* Image Container with Red Circle */}
          <div className="w-24 h-24 rounded-full bg-[#E53935] mb-5 overflow-hidden flex items-center justify-center shrink-0">
            <img 
              src="https://sandeshdulawat.netlify.app/avatar.webp"
              alt="Sandesh Dulawat"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="font-serif-custom italic text-[26px] md:text-[30px] text-white text-center leading-[1.05] mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Sandesh<br />Dulawat
          </h3>

          <p className="text-[#888888] text-[12px] md:text-[13px] font-sans font-medium text-center mb-6">
            Co-Founder, Full stack Developer
          </p>

          <div className="flex items-center justify-center w-full gap-5 text-[#777777] font-sans text-[12px] mt-auto pb-1">
            <a href="https://www.linkedin.com/in/sandeshdulawat/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] group-hover:text-[#0A66C2] transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>
            <div className="w-px h-3.5 bg-white/[0.15]"></div>
            <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] group-hover:text-[#E1306C] transition-colors">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </motion.div>

        {/* Card 2: Kritesh */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 6 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full max-w-[260px] h-[340px] bg-[#141414] rounded-[20px] p-6 flex flex-col items-center border border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-20 hover:rotate-0 hover:-translate-y-4 transition-all duration-500"
        >
          {/* Image Container with Red Circle */}
          <div className="w-24 h-24 rounded-full bg-[#E53935] mb-5 overflow-hidden flex items-center justify-center shrink-0">
            <img 
              src="/images/kritesh.jpg" 
              alt="Kritesh Dulawat"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="font-serif-custom italic text-[26px] md:text-[30px] text-white text-center leading-[1.05] mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Kritesh<br />Dulawat
          </h3>

          <p className="text-[#888888] text-[12px] md:text-[13px] font-sans font-medium text-center mb-6">
            Co-Founder, Architect
          </p>

          <div className="flex items-center justify-center w-full gap-5 text-[#777777] font-sans text-[12px] mt-auto pb-1">
            <a href="https://www.linkedin.com/in/kritesh-dulawat/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] group-hover:text-[#0A66C2] transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>
            <div className="w-px h-3.5 bg-white/[0.15]"></div>
            <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] group-hover:text-[#E1306C] transition-colors">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
