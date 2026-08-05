"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const LeftBranch = () => (
  <svg width="24" height="48" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500">
    <path d="M 22 44 C 5 35 2 18 8 4" />
    <path d="M 6 30 L 14 26 L 8 36 Z" fill="currentColor" />
    <path d="M 4 20 L 12 16 L 7 24 Z" fill="currentColor" />
    <path d="M 5 10 L 13 6 L 9 14 Z" fill="currentColor" />
  </svg>
);

const RightBranch = () => (
  <svg width="24" height="48" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500">
    <path d="M 2 44 C 19 35 22 18 16 4" />
    <path d="M 18 30 L 10 26 L 16 36 Z" fill="currentColor" />
    <path d="M 20 20 L 12 16 L 17 24 Z" fill="currentColor" />
    <path d="M 19 10 L 11 6 L 15 14 Z" fill="currentColor" />
  </svg>
);

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        end: "+=150%",
        scrub: 1,
      }
    });

    tl.to(".reveal-word", {
      color: "#e5e5e5",
      stagger: 0.1,
    })
      // This empty tween adds a "hold" at the end of the animation
      // so the text stays fully highlighted for a moment before unpinning!
      .to({}, { duration: 0.5 });

  }, { scope: containerRef });

  const brandLogos = [
    <div key="1" className="flex items-center text-xl font-bold tracking-widest text-white/70">
      SUGAR BAE
    </div>,
    <div key="2" className="flex flex-col text-white/70">
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-white/70 rounded-br-full rounded-tl-full" />
        <span className="font-bold text-lg leading-none">Flipkart</span>
      </div>
      <span className="text-sm font-semibold tracking-wide">Commerce Cloud</span>
      <span className="text-[9px] text-white/40 tracking-wider">A Walmart Company</span>
    </div>,
    <div key="3" className="flex items-center text-2xl font-black tracking-tight text-white/80">
      #Schbang.
    </div>,
    <div key="4" className="flex flex-col items-center text-white/70">
      <svg width="24" height="16" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 14c-4-4-8-2-10-6 2-2 6 0 10 6z" />
        <path d="M12 14c4-4 8-2 10-6-2-2-6 0-10 6z" />
        <path d="M12 14V4" />
      </svg>
      <span className="text-sm tracking-[0.2em] font-serif uppercase mt-1">Iskcon</span>
    </div>,
    <div key="5" className="flex items-center text-xl font-serif italic text-white/70 tracking-wide">
      the moms co.
    </div>
  ];

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-black py-24 md:py-32 flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Main Text */}
      <div className="relative z-10 max-w-7xl text-center mb-32">
        <p className="font-cormorant text-3xl md:text-5xl lg:text-6xl text-[#444] leading-[1.1] font-normal">
          <span className="reveal-word">We</span> <span className="reveal-word">craft</span> <span className="reveal-word">brand</span> <span className="reveal-word">identities,</span> <span className="reveal-word">narratives,</span> <span className="reveal-word">and</span> <span className="reveal-word">digital</span><br className="hidden md:block" />
          <span className="reveal-word">experiences</span> <span className="reveal-word">that</span> <span className="reveal-word">keep</span> <span className="reveal-word">up</span> <span className="reveal-word">with</span> <span className="reveal-word">your</span> <span className="reveal-word">ambition.</span><br className="hidden md:block" />
          <span className="reveal-word">So</span> <span className="reveal-word">you</span> <span className="reveal-word">can</span> <span className="reveal-word">focus</span> <span className="reveal-word">on</span> <span className="reveal-word">building</span> <span className="reveal-word">what</span> <span className="reveal-word">matters,</span><br className="hidden md:block" />
          <span className="reveal-word">while</span> <span className="reveal-word">we</span> <span className="reveal-word">shape</span> <span className="reveal-word">how</span> <span className="reveal-word">the</span>{" "}
          <span className="reveal-word">world</span>{" "}
          <span className="reveal-word">sees</span>{" "}
          <span className="reveal-word">it.</span>
        </p>
      </div>

      {/* Bottom Marquee Area */}
      <div className="absolute bottom-12 left-0 w-full flex items-center z-10 max-w-screen-2xl mx-auto px-4 md:px-12">

        {/* Static Left Part: Trusted By */}
        <div className="flex items-center gap-4 pr-8 border-r border-neutral-800 shrink-0 bg-black/80 backdrop-blur-sm z-20">
          <LeftBranch />
          <div className="flex flex-col text-neutral-400 text-sm font-sans leading-tight font-medium text-center">
            <span>Trusted by 60+</span>
            <span>Organizations</span>
          </div>
          <RightBranch />
        </div>

        {/* Marquee Right Part */}
        <div className="flex-1 overflow-hidden relative flex items-center ml-8" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
          <div className="animate-marquee-left flex items-center gap-24 py-4 pr-24 mix-blend-screen opacity-80">
            {/* Render 3 identical sets to ensure infinite seamless scrolling */}
            {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 grayscale">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
