"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Header from "./Header";
import ProjectModal from "./ProjectModal";
import ContactDrawer from "./ContactDrawer";
import { CardItem } from "./PortfolioCard";

export default function Hero() {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        setTimeStr(now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" }));
      } catch {
        setTimeStr("11:30 PM");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

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
          <div className="absolute inset-0 z-0 overflow-hidden hero-bg-fade">
            <div className="absolute inset-0 bg-black"></div>

            {/* Subtle white/grey center glow */}
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

            {/* Noise overlay for texture */}
            <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          </div>

        {/* Centered Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full mt-2 md:mt-4 max-w-5xl mx-auto">
          <h1
            className="font-inter-tight text-3xl sm:text-5xl md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] tracking-tight mb-4 text-white font-medium hero-title"
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2)' }}
          >
            We Don&apos;t Just Design.<br />
            We Define Experiences.
          </h1>
          <p className="text-sm sm:text-base md:text-[17px] text-white/90 font-inter-tight tracking-wide mt-1 md:mt-2 hero-subtitle max-w-xl">
            Branding • Digital • Architecture • Interiors • Visualization
          </p>

          {/* Action CTAs */}
          <div className="mt-7 md:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none">
            <button
              onClick={() => setIsContactOpen(true)}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black font-inter-tight font-medium text-sm hover:bg-neutral-200 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.35)] cursor-pointer"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#services"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-white/90 font-inter-tight font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Bottom Elements */}
        <div className="absolute bottom-6 md:bottom-8 left-0 right-0 px-6 sm:px-8 md:px-12 flex justify-between items-end z-10 text-[11px] md:text-xs text-white/60 font-inter-tight tracking-[0.05em] uppercase hero-bottom">
          <div>{timeStr || "PNQ, IND"}</div>
          <div className="hidden md:block">Scroll to Explore</div>
          <div>PNQ, IND</div>
        </div>
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
