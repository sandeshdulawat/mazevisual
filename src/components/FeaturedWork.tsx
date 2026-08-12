"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const featuredProjects = [
  {
    id: 1,
    title: "Strategic Design & Marketing for ConvertIAS",
    tags: ["Marketing", "Brand Identity", "Product Design"],
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    id: 2,
    title: "MVP Design Sprint for an Ambitious Startup",
    tags: ["Product Design", "Website"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    id: 3,
    title: "Brand Identity Design for a Newly Merged AI Venture",
    tags: ["Brand Strategy", "Merch", "Pitch Decks"],
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800&h=600",
  }
];

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Set up scroll tracking for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Master Choreography

  // 1. Title (Featured work)
  const titleScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.45]);
  const titleY = useTransform(scrollYProgress, [0, 0.4], ["0vh", "-36vh"]);
  
  // 2. Subtitle
  const subtitleOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const subtitleY = useTransform(scrollYProgress, [0.2, 0.5], ["0vh", "-28vh"]);

  // 3. Carousel
  // Scales up and fades in seamlessly as we reach the end of the scroll sequence
  const carouselOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
  const carouselScale = useTransform(scrollYProgress, [0.4, 0.8], [0.9, 1]);
  const carouselY = useTransform(scrollYProgress, [0.4, 0.8], ["20vh", "8vh"]);

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  return (
    <div ref={containerRef} className="w-full h-[200vh] bg-black">
      {/* Sticky container that stays fixed while scrolling */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        
        {/* Title */}
        <motion.h2 
          style={{ scale: titleScale, y: titleY, textShadow: "0 0 40px rgba(255,255,255,0.3)" }}
          className="absolute font-cormorant italic text-[clamp(60px,12vw,160px)] text-[#f4f4f4] font-medium tracking-tight leading-none pointer-events-none z-30"
        >
          Featured work
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          style={{ opacity: subtitleOpacity, y: subtitleY }}
          className="absolute text-white/50 font-inter-tight text-sm md:text-lg tracking-wide max-w-xl text-center pointer-events-none z-20"
        >
          We've transformed bold ideas into tangible realities
        </motion.p>

        {/* Carousel */}
        <motion.div
          style={{ opacity: carouselOpacity, scale: carouselScale, y: carouselY }}
          className="absolute w-full max-w-[100rem] h-[60vh] flex items-center justify-center px-4 overflow-visible z-10"
        >
          <div className="relative w-full h-full flex items-center justify-center overflow-visible">
            {featuredProjects.map((project, index) => {
              let offset = index - currentIndex;
              if (offset < -1) offset += featuredProjects.length;
              if (offset > 1) offset -= featuredProjects.length;
              
              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              if (!isCenter && !isLeft && !isRight) return null;

              // Calculate positions
              const xPos = isCenter ? "0%" : isLeft ? "-105%" : "105%";
              const scale = isCenter ? 1 : 0.75;
              const opacity = isCenter ? 1 : 0.5; // Prevent it from fading out too much
              const zIndex = isCenter ? 30 : 20;

              return (
                <motion.div
                  key={project.id}
                  initial={false}
                  animate={{
                    x: xPos,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute w-[85%] sm:w-[70%] md:w-[50%] lg:w-[45%] flex flex-col items-center justify-center"
                >
                  <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" 
                    />
                    
                    {/* Navigation Buttons on side cards */}
                    {isLeft && (
                      <button onClick={prevSlide} className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-colors z-40 cursor-pointer pointer-events-auto">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-transform hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </div>
                      </button>
                    )}
                    {isRight && (
                      <button onClick={nextSlide} className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-colors z-40 cursor-pointer pointer-events-auto">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-transform hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </div>
                      </button>
                    )}
                  </div>
                  
                  {/* Card Info (Only visible on center) */}
                  <motion.div 
                    animate={{ opacity: isCenter ? 1 : 0, y: isCenter ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: isCenter ? 0.2 : 0, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full mt-6 flex flex-col items-start px-2"
                  >
                    <h3 className="text-xl md:text-2xl text-white font-medium mb-3 font-inter-tight">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/20 text-white/50 text-[11px] md:text-xs uppercase tracking-wider font-inter-tight">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
