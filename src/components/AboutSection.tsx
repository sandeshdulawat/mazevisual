"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Compass, Cpu, Palette } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { number: "120+", label: "International Projects" },
    { number: "15", label: "Design Awards Won" },
    { number: "5", label: "Core Creative Disciplines" },
    { number: "99.4%", label: "Client Satisfaction" },
  ];

  const pillars = [
    {
      icon: Palette,
      title: "Branding & Identity",
      desc: "Tactile identity design, typography hierarchy, and luxury brand systems.",
    },
    {
      icon: Compass,
      title: "Architectural Vision",
      desc: "Bold spatial design, structural section analysis, and modern materiality.",
    },
    {
      icon: Cpu,
      title: "Digital Ecosystems",
      desc: "Immersive 3D web interfaces, high-tech matrix systems, and cyber UX.",
    },
    {
      icon: Layers,
      title: "3D Visualization",
      desc: "Photorealistic rendering blended seamlessly with raw schematic blueprints.",
    },
  ];

  return (
    <section className="w-full max-w-[1300px] mx-auto px-[10px] py-16 md:py-24 border-t border-neutral-100">
      {/* Editorial Studio Manifesto */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
            <Sparkles className="w-4 h-4 text-neutral-900" />
            <span>Studio Philosophy</span>
          </div>
          <h2 className="font-serif-custom text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-[1.05] font-bold">
            Merging space, art, & technology.
          </h2>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans">
            MazeVisual operates as a multi-disciplinary design studio. We reject rigid boundaries between physical architecture, brand identity, digital environments, and 3D visualization. We synthesize all creative fields into one singular, cohesive vision.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-8 border-t border-neutral-100">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="font-condensed-custom text-4xl sm:text-5xl text-neutral-900">
                  {stat.number}
                </div>
                <div className="text-xs text-neutral-500 font-sans mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Creative Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 transition-all duration-300 hover:border-neutral-300 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif-custom text-2xl font-bold text-neutral-900 mb-2">
                {p.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
