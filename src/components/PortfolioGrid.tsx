"use client";

import React from "react";
import PortfolioCard, { CardItem } from "./PortfolioCard";

export const PORTFOLIO_ITEMS: CardItem[] = [
  {
    id: "branding",
    title: "BRANDING",
    imageSrc: "/images/branding.png",
    subtitle: "Brand Systems & Luxury Packaging",
    description:
      "We craft cohesive brand identities, typography systems, and tactile packaging designs that resonate with elegance and distinct positioning.",
    tags: ["Visual Identity", "Typography", "Packaging", "Art Direction"],
  },
  {
    id: "architecture",
    title: "ARCHITECTURE",
    imageSrc: "/images/architecture.png",
    subtitle: "Spatial Concepts & Structures",
    description:
      "Designing avant-garde architectural structures with modern timber and concrete cutaways, seamlessly blending form, function, and raw material texture.",
    tags: ["Conceptual Architecture", "Facade Design", "Urban Planning"],
  },
  {
    id: "digital",
    title: "DIGITAL",
    imageSrc: "/images/digital.png",
    subtitle: "Cyber Interfaces & Interactive Web",
    description:
      "Engineered digital experiences, high-performance web applications, 3D data grids, and futuristic user interfaces tailored for high-growth tech platforms.",
    tags: ["Web Architecture", "Interactive 3D", "UI/UX Systems"],
  },
  {
    id: "visualization",
    title: "VISUALIZATION",
    imageSrc: "/images/visualization.png",
    subtitle: "Architectural Renders & Blueprints",
    description:
      "Photorealistic 3D visualization combining precise architectural blueprint schematics with organic landscape renderings and atmospheric lighting.",
    tags: ["3D Rendering", "Blueprint Art", "Environment Art"],
  },
  {
    id: "interior",
    title: "INTERIOR",
    imageSrc: "/images/interior.png",
    subtitle: "Luxury Organic Living Spaces",
    description:
      "Bespoke interior design focusing on curved organic lounge elements, warm ambient lighting, natural travertine textures, and serene minimalist aesthetics.",
    tags: ["Interior Architecture", "Furniture Curation", "Lighting Design"],
  },
];

interface PortfolioGridProps {
  onSelect: (item: CardItem) => void;
}

export default function PortfolioGrid({ onSelect }: PortfolioGridProps) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-3 md:gap-3.5 flex-1 min-h-0 py-2">
      {PORTFOLIO_ITEMS.map((item, index) => (
        <PortfolioCard key={item.id} item={item} index={index} onSelect={onSelect} />
      ))}
    </div>
  );
}
