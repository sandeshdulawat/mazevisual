"use client";

import React from "react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    id: 1,
    title: "Strategic Design & Marketing for ConvertIAS",
    tags: ["Marketing", "Product Design"],
    image: "https://images.unsplash.com/photo-1716471330463-f475b00f0506?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "MVP Design Sprint for an Ambitious Startup",
    tags: ["Product Design", "Website"],
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Brand Identity Design for a Newly Merged AI Venture",
    tags: ["Brand Strategy", "Merch", "Pitch Decks"],
    image: "https://images.unsplash.com/photo-1763705857736-2b4f16a33758?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Digital Experience for a Premium Lifestyle Brand",
    tags: ["E-Commerce", "UX/UI", "Development"],
    image: "https://images.unsplash.com/photo-1759563874668-507c0fd04931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Rebranding a Legacy Financial Institution",
    tags: ["Brand Strategy", "Print", "Digital"],
    image: "https://images.unsplash.com/photo-1769952948855-da716b176109?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

// Duplicate the array for a seamless infinite loop
const marqueeProjects = [...featuredProjects, ...featuredProjects];

export default function FeaturedWork() {
  return (
    <section className="w-full bg-black text-[#f4f4f4] py-20 md:py-32 overflow-hidden flex flex-col items-center">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Header Container */}
      <div className="w-full max-w-[1200px] px-4 md:px-8 mx-auto mb-16 md:mb-20">

        {/* Main Title & Description */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tight text-white mb-6">
            <span className="font-serif-custom italic">Featured</span> <span className="font-serif-custom">work</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed font-sans font-medium">
            A curated selection of digital experiences, products and identities crafted for ambitious brands.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full md:max-w-2xl h-px bg-white/20 mb-6"></div>

        {/* Meta Row */}
        <div className="w-full md:max-w-2xl flex items-center justify-between text-[10px] md:text-xs text-neutral-300 tracking-[0.2em] uppercase font-sans font-semibold">
          <span>SELECTED PROJECTS &bull; 2024 &mdash; 2026</span>
          <span>{featuredProjects.length < 10 ? `0${featuredProjects.length}` : featuredProjects.length} PROJECTS</span>
        </div>
      </div>

      {/* Marquee Carousel Container */}
      <div className="w-full relative max-w-[100vw]">

        {/* Fade Mask Overlays */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex w-fit animate-marquee hover:pause cursor-pointer" style={{ gap: '2rem' }}>
          {marqueeProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex flex-col w-[210px] md:w-[315px] shrink-0 group pl-4 md:pl-0"
            >
              {/* Card Image */}
              <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden mb-4 bg-[#1a1a1a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-[13px] md:text-[15px] font-medium mb-3 font-sans tracking-wide px-1">
                {project.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 px-1 mt-auto">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full border border-white/20 text-neutral-400 text-[9px] md:text-[10px] uppercase tracking-widest font-sans font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
