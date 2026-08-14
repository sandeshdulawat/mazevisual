"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const baseTestimonials = [
  {
    id: 1,
    quote: "\"An excellent job bringing our vision to life. Their thorough research and insightful approach provided clarity and understand what we truly need. I highly recommend his team for your branding needs.\"",
    name: "SupaStellar",
    title: "Client",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    logo: "SupaStellar"
  },
  {
    id: 2,
    quote: "\"I can't express enough gratitude to Bhini and Preet, the force behind Redo. They've played a pivotal role in organically growing our brands, bringing a level of dedication and expertise that feels like family.\"",
    name: "Manen C.",
    title: "Founder, Creative Director @ Typezero",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    logo: "Typezero"
  },
  {
    id: 3,
    quote: "\"Working with them was a game changer for our digital presence. The attention to detail and design quality exceeded our expectations. We couldn't be happier with the results.\"",
    name: "Monk",
    title: "Spiritual Leader",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
    logo: "ISKCON"
  }
];

// Duplicate to have enough items to show a nice dot pagination like the screenshot
const testimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials, baseTestimonials[0]];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-black py-32 md:py32 overflow-hidden relative">
      <div className="w-full mx-auto px-4 flex flex-col items-center">

        {/* Header */}
        {/* Header - Hidden to match exact screenshot which only shows the carousel itself, but I'll leave it in case it's just scrolled down. Wait, the screenshot doesn't show the header, just the carousel and pagination. I'll keep the header. */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-medium tracking-tight text-white mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Hear <span className="font-serif-custom italic text-white/90">from</span> our partners
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm font-sans tracking-wide">
            With over 60 clients served, here's what they have to say
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[100vw] h-[450px] md:h-[320px] flex items-center justify-center">
          {testimonials.map((t, index) => {
            const length = testimonials.length;
            let position = "hidden";

            if (index === currentIndex) position = "active";
            else if (index === (currentIndex - 1 + length) % length) position = "prev";
            else if (index === (currentIndex + 1) % length) position = "next";
            else if (index === (currentIndex - 2 + length) % length) position = "prev2";
            else if (index === (currentIndex + 2) % length) position = "next2";

            const isActive = position === "active";
            const isPrev = position === "prev";
            const isNext = position === "next";
            const isPrev2 = position === "prev2";
            const isNext2 = position === "next2";
            const isHidden = position === "hidden";

            let x = "0%";
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;

            if (isPrev) {
              x = "-105%";
              scale = 0.9;
              opacity = 0.3;
              zIndex = 5;
            } else if (isNext) {
              x = "105%";
              scale = 0.9;
              opacity = 0.3;
              zIndex = 5;
            } else if (isPrev2) {
              x = "-210%";
              scale = 0.8;
              opacity = 0.1;
              zIndex = 0;
            } else if (isNext2) {
              x = "210%";
              scale = 0.8;
              opacity = 0.1;
              zIndex = 0;
            } else if (isHidden) {
              opacity = 0;
              scale = 0.8;
              zIndex = -1;
            }

            return (
              <motion.div
                key={`${t.id}-${index}`}
                initial={false}
                animate={{ x, scale, opacity, zIndex }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[92%] md:w-[750px] h-full p-5 md:p-6 rounded-2xl bg-[#101010] border border-white/[0.05] flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-2xl"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              >
                {/* Image */}
                <div className="w-full md:w-[30%] aspect-[4/5] md:aspect-[3/4] md:h-full rounded-xl overflow-hidden shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale" />
                </div>

                {/* Content */}
                <div className="w-full md:w-[70%] flex flex-col h-full justify-between py-1 md:py-2 relative">
                  <p className="text-neutral-300 text-[14px] md:text-[15px] leading-[1.6] font-sans font-normal">
                    {t.quote}
                  </p>

                  <div className="flex items-end justify-between mt-6 md:mt-auto">
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm md:text-[15px]">{t.name}</span>
                      <span className="text-neutral-500 text-xs mt-1">{t.title}</span>
                    </div>

                    <div className="flex items-center text-white/90 font-sans font-bold tracking-wide text-sm">
                      {t.logo}
                    </div>
                  </div>
                </div>

                {/* Overlays for Previous/Next clicking */}
                {isPrev && (
                  <div
                    className="absolute inset-0 z-20 cursor-pointer flex items-center justify-end pr-8 md:pr-12"
                    onClick={handlePrev}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#2a2a2a] transition-all border border-white/5 shadow-xl">
                      <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                )}

                {isNext && (
                  <div
                    className="absolute inset-0 z-20 cursor-pointer flex items-center justify-start pl-8 md:pl-12"
                    onClick={handleNext}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#2a2a2a] transition-all border border-white/5 shadow-xl">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                )}

                {/* Fallback invisible click area if it's the active one (maybe to pause auto-play later) */}
                {isActive && (
                  <div className="absolute inset-0 z-0 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex items-center justify-center">
          <div className="bg-[#222] rounded-full px-2 py-1 flex items-center gap-2.5">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-1 h-1 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-[#555]"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
