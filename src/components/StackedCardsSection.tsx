"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CardData {
  id: string;
  number: string;
  titleLight: string;
  titleBold: string;
  tags: string[];
  description: string;
  bgColor: string;
}

const STACKED_CARDS: CardData[] = [
  {
    id: "brand-identities",
    number: "01",
    titleLight: "Brand",
    titleBold: "Identities",
    tags: [
      "Visual Identity",
      "Brand Strategy",
      "Typography",
      "Packaging",
      "Art Direction",
    ],
    description:
      "We define and craft iconic brand identity systems. From core strategic positioning to custom typography, editorial guidelines, and physical luxury packaging, we build brand assets engineered for long-term category leadership.",
    bgColor: "bg-[#141619]",
  },
  {
    id: "smart-development",
    number: "02",
    titleLight: "Smart",
    titleBold: "Development",
    tags: [
      "Web Development",
      "App Development",
      "UI/UX Design",
      "Interactions",
      "CMS",
    ],
    description:
      "Our team will work closely with you, taking the time to understand your vision and feedback in order to bring your ideas to life. We'll provide regular updates and ensure that the final product surpasses your expectations.",
    bgColor: "bg-[#1B1E21]",
  },
  {
    id: "spatial-architecture",
    number: "03",
    titleLight: "Spatial",
    titleBold: "Architecture",
    tags: [
      "Master Planning",
      "Structural Cutaways",
      "3D Modeling",
      "Facade Design",
      "Landscape",
    ],
    description:
      "Conceptualizing bold physical spaces and structural cutaways. We blend raw timber and concrete textures with environment modeling to craft architectural statements that stand out globally.",
    bgColor: "bg-[#212428]",
  },
  {
    id: "3d-visualization",
    number: "04",
    titleLight: "3D",
    titleBold: "Visualization",
    tags: [
      "Architecture",
      "Engineering",
      "Construction",
      "Interior Design",
      "Product Design",
    ],
    description:
      "Our company specializes in envisioning images and animations of architectural and engineering projects. We use the latest software to create stunning visuals that portray astonishing photorealistic end products.",
    bgColor: "bg-[#2A2E33]",
  },
  {
    id: "marketing-campaigns",
    number: "05",
    titleLight: "Marketing",
    titleBold: "Campaigns",
    tags: [
      "Motion Graphics",
      "CGI Art",
      "Content Strategy",
      "Social Systems",
      "Launch Campaigns",
    ],
    description:
      "Cinematic launch campaigns and digital motion art designed to capture global audiences. We combine strategic storytelling with high-impact visuals to elevate brand rollouts.",
    bgColor: "bg-[#16181B]",
  },
];

function CardItem({
  card,
  index,
  total,
  progress,
}: {
  card: CardData;
  index: number;
  total: number;
  progress: any;
}) {
  // Staggered top sticky offset so each of the 5 cards peeks out cleanly in a 3D deck stack
  const stickyTop = 75 + index * 24;

  // Scale calculation: earlier cards scale down as subsequent cards stack over them
  const targetScale = 1 - (total - index - 1) * 0.03;
  const rangeStart = index * (1 / total);

  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);

  return (
    <div
      className="sticky w-full flex items-center justify-center py-2"
      style={{
        top: `${stickyTop}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className={`relative w-full ${card.bgColor} rounded-[28px] sm:rounded-[36px] md:rounded-[44px] p-6 sm:p-10 md:p-12 text-white border border-neutral-700/60 shadow-[0_-10px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300`}
      >
        {/* Top Metallic Highlight Edge */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-500/30 to-transparent" />

        {/* Card Main Body */}
        <div className="flex flex-col justify-between min-h-[300px] sm:min-h-[350px] md:min-h-[390px]">
          {/* Headline */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] sm:text-xs font-mono tracking-widest text-neutral-500 uppercase">
                0{index + 1} / DISCIPLINE
              </span>
            </div>

            <h3 className="font-sans text-5xl sm:text-7xl md:text-8xl lg:text-[90px] leading-[0.92] tracking-tight font-normal select-none">
              <span className="text-white block font-medium">
                {card.titleLight}
              </span>
              <span className="text-neutral-400 block mt-0.5 sm:mt-1 font-normal">
                {card.titleBold}
              </span>
            </h3>
          </div>

          {/* Bottom Area: Sub-services Bullets + Star Description */}
          <div className="mt-6 pt-5 border-t border-neutral-700/50">
            {/* Sub-services Tag Bullets */}
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-300 font-sans mb-5">
              {card.tags.map((tag, tagIdx) => (
                <React.Fragment key={tag}>
                  <span className="hover:text-white transition-colors cursor-pointer opacity-90">
                    {tag}
                  </span>
                  {tagIdx < card.tags.length - 1 && (
                    <span className="text-neutral-500 font-bold">&bull;</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Description Paragraph with Star Icon */}
            <div className="flex items-start gap-3 sm:gap-4 max-w-3xl">
              <div className="pt-0.5 shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-sans leading-relaxed opacity-95">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StackedCardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-[1300px] mx-auto px-[10px] pt-12 pb-24 h-[350vh]"
    >
      {/* Sticky Section Title Header */}
      <div className="sticky top-4 z-0 mb-6 text-center max-w-2xl mx-auto pointer-events-none">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Integrated Capabilities
        </span>
        <h2 className="font-serif-custom text-3xl sm:text-4xl text-neutral-950 font-bold mt-1">
          End-to-End Execution
        </h2>
      </div>

      {/* 5 Cards Scroll Track */}
      <div className="relative w-full flex flex-col items-center">
        {STACKED_CARDS.map((card, index) => (
          <CardItem
            key={card.id}
            card={card}
            index={index}
            total={STACKED_CARDS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
