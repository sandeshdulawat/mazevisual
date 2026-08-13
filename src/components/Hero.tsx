"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./Header";
import ProjectModal from "./ProjectModal";
import ContactDrawer from "./ContactDrawer";
import { CardItem } from "./PortfolioCard";

export default function Hero() {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1, 0.9]);
  const rotateX = useTransform(scrollY, [0, 800], [0, 8]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0.3]);

  return (
    <>
      <Header onContactClick={() => setIsContactOpen(true)} />

      <section 
        className="sticky top-0 z-0 w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          style={{ scale, rotateX, opacity }}
          className="relative w-full h-full flex flex-col items-center justify-center text-white origin-center"
        >
          {/* Deep black mesh background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0 overflow-hidden"
          >
          <div className="absolute inset-0 bg-black"></div>

          {/* Subtle white/grey center glow to maintain the glowing effect but in black/white theme */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-white/5 blur-[120px] opacity-60" />

          {/* Surrounding darker grey glows */}
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-white/5 blur-[150px] opacity-30" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[140px] opacity-20" />

          {/* Concentric circles pattern */}
          <div
            className="absolute inset-0 opacity-[0.1] mix-blend-screen pointer-events-none"
            style={{
              backgroundImage: 'repeating-radial-gradient(circle at center, transparent, transparent 150px, #ffffff 150px, #ffffff 151px)'
            }}
          />

          {/* Hands placeholders */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <motion.img 
              src="/hand-left.png" 
              alt="" 
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
              className="absolute top-0 left-[-10%] w-[55%] md:w-[45%] object-contain mix-blend-luminosity blur-[1px]" 
              onError={(e) => e.currentTarget.style.display = 'none'} 
            />
            <motion.img 
              src="/hand-right.png" 
              alt="" 
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
              className="absolute bottom-[-10%] right-[-5%] w-[45%] md:w-[35%] object-contain mix-blend-luminosity blur-[1px]" 
              onError={(e) => e.currentTarget.style.display = 'none'} 
            />
          </div>

          {/* Noise overlay for texture */}
          <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </motion.div>

        {/* Centered Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full mt-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="font-inter-tight text-4xl sm:text-5xl md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] tracking-tight mb-4 text-white font-medium"
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2)' }}
          >
            We Don&apos;t Just Design.<br />
            We Define Experiences.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="text-base md:text-[17px] text-white/90 font-inter-tight tracking-wide mt-2"
          >
            Branding • Digital • Architecture • Interiors • Visualization
          </motion.p>
        </div>

        {/* Bottom Elements */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
          className="absolute bottom-8 left-0 right-0 px-8 md:px-12 flex justify-between items-end z-10 text-[11px] md:text-xs text-white/60 font-inter-tight tracking-[0.05em] uppercase"
        >
          <div>11:10 PM</div>
          <div className="hidden md:block">Scroll to Explore</div>
          <div>PNQ, IND</div>
        </motion.div>
        </motion.div>
      </section>

      {/* Modal & Contact Drawer Popups */}
      <ProjectModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onContactOpen={() => setIsContactOpen(true)}
      />
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}

