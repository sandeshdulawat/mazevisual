"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

interface ServiceItem {
  number: string;
  id: string;
  title: string;
  services: string[];
  description: string;
  icon: React.ReactNode;
}

interface ServicesAccordionProps {
  onStartProject?: () => void;
}

export default function ServicesAccordion({ onStartProject }: ServicesAccordionProps) {
  // Default open item is '02' (Digital) matching reference screenshot
  const [openId, setOpenId] = useState<string>("02");

  const serviceData: ServiceItem[] = [
    {
      number: "01",
      id: "01",
      title: "Branding",
      services: ["Identity", "Strategy", "Graphic Design", "Packaging"],
      description:
        "We build iconic brand systems that command attention. From core strategic positioning to custom typography, graphic guidelines, and physical luxury packaging, we establish distinct visual identities.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="w-6 h-6 text-neutral-900"
        >
          {/* Monogram emblem icon matching reference screenshot */}
          <path d="M12 3L4 9v12l8-4 8 4V9l-8-6z" />
          <path d="M12 3v14" />
          <path d="M8 6l8 6" />
        </svg>
      ),
    },
    {
      number: "02",
      id: "02",
      title: "Digital",
      services: ["UI/UX", "Websites", "App Development", "Digital Products"],
      description:
        "We create digital experiences that are intuitive, scalable, and visually engaging. Whether it's a website, mobile application, or digital platform, we combine design and technology to deliver meaningful products.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-neutral-900 translate-x-0.5 translate-y-0.5"
        >
          {/* Mouse Cursor / Pointer Icon matching reference screenshot */}
          <path d="M4 3l15 9-6.5 2.2L16 21l-3.5 1.5-3.6-6.8L4 18V3z" />
        </svg>
      ),
    },
    {
      number: "03",
      id: "03",
      title: "Architecture",
      services: ["Architecture", "Planning", "Master Planning", "Landscape"],
      description:
        "Architectural design centered around bold structural forms, materiality, and environmental harmony. We handle site master planning, structural concepts, and landscape integration.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="w-6 h-6 text-neutral-900"
        >
          {/* Skyscraper / Building outlines icon matching reference screenshot */}
          <path d="M4 21V9l6-4v16M10 21V3l10 4v14M4 21h16" />
          <path d="M14 8h2M14 12h2M14 16h2M7 12h1M7 16h1" />
        </svg>
      ),
    },
    {
      number: "04",
      id: "04",
      title: "Interiors",
      services: ["Residential", "Commercial", "Hospitality", "Space Planning"],
      description:
        "Creating serene, tactile interior environments. We curate organic curved furniture, custom lighting fixtures, ambient wall niches, and space layouts for high-end residential and commercial spaces.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="w-6 h-6 text-neutral-900"
        >
          {/* Chair and lamp interior icon matching reference screenshot */}
          <path d="M6 19v2M18 19v2M5 14h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2z" />
          <path d="M8 7V4a2 2 0 012-2h4a2 2 0 012 2v3" />
          <path d="M12 2v2" />
        </svg>
      ),
    },
    {
      number: "05",
      id: "05",
      title: "Visualization",
      services: [
        "3D Visualization",
        "Photorealistic Renders",
        "Walkthroughs",
        "CGI & Virtual Experiences",
      ],
      description:
        "High-fidelity 3D renderings and cinematic virtual walkthroughs. We bring unbuilt architecture and products to life with realistic lighting, material physics, and environment art.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="w-6 h-6 text-neutral-900"
        >
          {/* 3D Cube inside bracket corners icon matching reference screenshot */}
          <path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3" />
          <path d="M12 8l5 3v6l-5 3-5-3v-6l5-3z" />
          <path d="M12 8v12M17 11l-5 3M7 11l5 3" />
        </svg>
      ),
    },
  ];

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section className="w-full max-w-[1300px] mx-auto px-[10px] py-12 md:py-20">
      <div className="w-full border-t border-neutral-200 divide-y divide-neutral-200">
        {serviceData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={false}
              animate={{
                backgroundColor: isOpen ? "#F8F8EA" : "#FFFFFF",
              }}
              transition={{ duration: 0.3 }}
              className="w-full transition-colors duration-300 overflow-hidden"
            >
              {/* Accordion Row Header */}
              <div
                onClick={() => toggleItem(item.id)}
                className="w-full px-4 sm:px-8 py-7 sm:py-9 flex items-start justify-between cursor-pointer select-none group"
              >
                {/* Left Side: Number, Icon, Vertical Line, Title & Bullets */}
                <div className="flex items-start gap-6 sm:gap-10 md:gap-14 flex-1">
                  {/* Number */}
                  <span className="font-sans text-base sm:text-lg text-neutral-800 font-normal pt-2 min-w-[28px]">
                    {item.number}
                  </span>

                  {/* Icon with highlighted circle badge ONLY when open */}
                  <div className="pt-0.5 shrink-0">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#E2EAA3] scale-100 shadow-2xs"
                          : "bg-transparent scale-95"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Vertical Divider Line */}
                  <div className="hidden sm:block w-[1px] h-12 bg-neutral-300/80 self-center shrink-0" />

                  {/* Title & Bullet Sub-services */}
                  <div className="flex flex-col justify-center">
                    <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-950 tracking-tight">
                      {item.title}
                    </h3>
                    <div className="text-xs sm:text-sm text-neutral-500 font-sans mt-1.5 flex flex-wrap items-center gap-2">
                      {item.services.map((srv, idx) => (
                        <React.Fragment key={srv}>
                          <span>{srv}</span>
                          {idx < item.services.length - 1 && (
                            <span className="text-neutral-400 font-bold">&bull;</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Toggle Button (+ / -) */}
                <div className="pt-2 pl-4 shrink-0">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-900 transition-transform duration-300 group-hover:scale-110">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[1.8]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[1.8]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Accordion Expanded Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 sm:pl-[144px] md:pl-[196px] pr-6 sm:pr-12 pb-8 pt-1">
                      {/* Description Text */}
                      <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed max-w-2xl">
                        {item.description}
                      </p>

                      {/* Pill Button: START YOUR PROJECT ↗ */}
                      <div className="mt-6">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onStartProject) onStartProject();
                          }}
                          className="rounded-full border border-neutral-900 bg-transparent hover:bg-neutral-900 hover:text-white text-neutral-900 px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 group/btn shadow-2xs"
                        >
                          <span>START YOUR PROJECT</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
