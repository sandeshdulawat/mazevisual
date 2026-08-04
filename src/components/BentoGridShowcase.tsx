"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface BentoGridShowcaseProps {
  onLearnMore?: () => void;
}

// Helper image component with fallback to prevent any broken image icons
function ImageTile({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center p-2 text-center">
        <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 opacity-60">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      onError={() => setFailed(true)}
      className={`object-cover ${className || ""}`}
    />
  );
}

export default function BentoGridShowcase({ onLearnMore }: BentoGridShowcaseProps) {
  // Reliable Unsplash URLs for editorial studio photography
  const IMAGES = {
    modernHouse: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    engineers: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    openOffice: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    spatialLounge: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    framesWall: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    brandPortrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    teamLaptop: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    digitalProductHead: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    houseNight: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    officeCorridor: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    imacDesktop: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop",
    womanBlazer: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  };

  return (
    <section className="w-full max-w-[1300px] mx-auto px-[10px] py-10 md:py-16">
      {/* Outer Metallic Silver Frame Container */}
      <div className="w-full bg-[#F8F8EA] p-3 sm:p-4 md:p-5 rounded-3xl border border-neutral-300/80 shadow-md">

        {/* 7-Column Bento Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-2.5 md:gap-3 auto-rows-[120px] sm:auto-rows-[135px] md:auto-rows-[150px]">

          {/* ================= ROW 1 ================= */}
          {/* 1. Modern Architectural House */}
          <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.modernHouse} alt="Modern Architecture" />
          </div>

          {/* 2. Engineers / Designers Working */}
          <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.engineers} alt="Engineers at Work" />
          </div>

          {/* 3. Open Studio Workspace */}
          <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.openOffice} alt="Studio Workspace" />
          </div>

          {/* 4. Spatial Architecture Interior + Tag */}
          <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.spatialLounge} alt="Spatial Architecture" />
            <div className="absolute top-2 right-2 z-10">
              <span className="bg-neutral-900/80 backdrop-blur-md text-white text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-white/20 font-sans">
                Spatial Architecture
              </span>
            </div>
          </div>

          {/* 5. Transparent Pricing White Card */}
          <div className="relative col-span-1 row-span-1 rounded-2xl bg-white p-3 sm:p-4 flex flex-col justify-between shadow-2xs border border-neutral-200/80">
            <div>
              <h3 className="font-sans text-sm sm:text-base md:text-lg font-bold text-neutral-900 leading-tight">
                Transparent Pricing
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-500 font-sans mt-1 leading-snug">
                Our studio project commissions start at $5,000.
              </p>
            </div>
            <button
              onClick={onLearnMore}
              className="text-[11px] sm:text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors inline-flex items-center gap-0.5 self-start mt-1"
            >
              <span>Explore Packages</span>
              <span>&gt;</span>
            </button>
          </div>

          {/* 6. Office Corridor / Interior Photo (Replaced broken image) */}
          <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.officeCorridor} alt="Architectural Office" />
          </div>

          {/* 7. Woman in Blazer (Tall 2-Row Tile on Far Right) */}
          <div className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.womanBlazer} alt="Creative Director" />
          </div>


          {/* ================= ROW 2 ================= */}
          {/* 8. Art Frames Wall */}
          <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.framesWall} alt="Gallery Wall" />
          </div>

          {/* 9. Brand Portrait + Brand Identities Tag (Spans 2 Rows) */}
          <div className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.brandPortrait} alt="Brand Model" />
            <div className="absolute bottom-2 right-2 z-10">
              <span className="bg-neutral-900/80 backdrop-blur-md text-white text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-white/20 font-sans">
                Brand Identities
              </span>
            </div>
          </div>

          {/* 10. Art Frames Wall / Team Desk */}
          <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.framesWall} alt="Creative Frames" />
          </div>

          {/* 11. Digital Product Head + Digital Product UI Tag (Spans 2 Rows) */}
          <div className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.digitalProductHead} alt="Product UI Lead" />
            <div className="absolute top-2 left-2 z-10">
              <span className="bg-neutral-900/80 backdrop-blur-md text-white text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-white/20 font-sans">
                Digital Product UI
              </span>
            </div>
          </div>

          {/* 12. Solid Black Block */}
          <div className="relative col-span-1 row-span-1 rounded-2xl bg-black shadow-2xs" />

          {/* 13. Architectural Night House */}
          <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.houseNight} alt="Architectural Night View" />
          </div>


          {/* ================= ROW 3 ================= */}
          {/* 14. Over 250+ Black Stat Card */}
          <div className="relative col-span-1 row-span-1 rounded-2xl bg-black p-3 sm:p-4 flex flex-col justify-between text-white shadow-md">
            <div>
              <h3 className="font-sans text-sm sm:text-base md:text-lg font-bold tracking-tight text-white leading-tight">
                Over 250+
              </h3>
              <p className="text-[10px] sm:text-[11px] text-neutral-400 font-sans mt-1 leading-snug">
                Global architecture, digital & branding projects delivered.
              </p>
            </div>
            <button
              onClick={onLearnMore}
              className="text-[10px] sm:text-[11px] font-semibold text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-0.5 self-start mt-1"
            >
              <span>View Case Studies</span>
              <span>&gt;</span>
            </button>
          </div>

          {/* 15. Team Laptops Workshop */}
          <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.teamLaptop} alt="Team Workflow" />
          </div>

          {/* 16. Minimalist Office Corridor */}
          <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.officeCorridor} alt="Minimal Interior" />
          </div>

          {/* 17. iMac Desktop Studio Setup */}
          <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-800 shadow-2xs">
            <ImageTile src={IMAGES.imacDesktop} alt="iMac Desktop" />
          </div>

          {/* 18. Solid Deep Blue Accent Tile */}
          <div className="relative col-span-1 row-span-1 rounded-2xl bg-[#1D4ED8] shadow-2xs" />

        </div>

        {/* Bottom Information & Guarantee Bar */}
        <div className="mt-4 pt-4 border-t border-neutral-300/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs sm:text-sm text-neutral-700 font-sans">
          {/* Left Text */}
          <p className="max-w-2xl leading-normal">
            From initial concept to full-scale execution, MazeVisual is the all-in-one multi-disciplinary creative studio your vision can count on.
          </p>

          {/* Right Checkmark Bullet List */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap shrink-0">
            <div className="flex items-center gap-1.5 font-medium text-neutral-800">
              <Check className="w-4 h-4 text-neutral-900 stroke-[2.5]" />
              <span>Guaranteed Timelines</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-neutral-800">
              <Check className="w-4 h-4 text-neutral-900 stroke-[2.5]" />
              <span>Multi-Disciplinary Experts</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
