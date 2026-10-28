"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";


const testimonials = [
  {
    id: 1,
    quote: "\"Maze Visual brought a fresh perspective to our digital presence. Their focus on visual quality, thoughtful design, and the finer details helped create a more polished and engaging experience. Their creative approach and commitment to quality made the collaboration worthwhile.\"",
    name: "Kabir Malhotra",
    title: "Business Owner",
    image: "https://tse1.mm.bing.net/th/id/OIP.Dfib3JjY1S34wDXu4wZwxwHaHj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    logo: "Kabir Malhotra"
  },
  {
    id: 2,
    quote: "\"Working with Maze Visual was a valuable creative experience. Their dedication, attention to detail, and ability to translate ideas into meaningful brand experiences made the collaboration stand out. The team brought a thoughtful, committed approach to every stage of the project.\"",
    name: "Riya Kapoor",
    title: "Founder & Creative Director",
    image: "https://nitcriya.pro/assets/img/profile/riyyyyaaa.png",
    logo: "Riya Kapoor"
  },
  {
    id: 3,
    quote: "\"Maze Visual brought a fresh and strategic perspective to our project. Their ability to understand our goals and turn ideas into thoughtful, visually compelling solutions made the collaboration a positive experience. Their attention to detail truly stood out.\"",
    name: "Aarav Mehta",
    title: "Founder & Business Partner",
    image: "https://properchoice.ae/wp-content/uploads/2026/05/Aarav-Mehta-Teacher-Properchoice.webp",
    logo: "Creative Partner"
  },
  {
    id: 4,
    quote: "\"What impressed us most about Maze Visual was their balance of creativity and functionality. They approached our requirements with care, maintained a clear design direction, and focused on delivering work that felt both purposeful and polished.\"",
    name: "Ananya Sharma",
    title: "Brand & Marketing Director",
    image: "https://tse1.mm.bing.net/th/id/OIP.Qs0Tpb67j9Hy8xJRegL6YQHaKU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    logo: "Brand Partner"
  },
  {
    id: 5,
    quote: "\"Collaborating with Maze Visual was an inspiring experience. Their thoughtful communication, creative problem-solving, and commitment to quality helped bring our ideas together into a cohesive visual direction. We appreciated their collaborative mindset throughout the project.\"",
    name: "Rohan Kapoor",
    title: "Creative Director",
    image: "https://tse3.mm.bing.net/th/id/OIP.q0rcAYI66qSWhmrwwQB6qQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    logo: "Design Partner"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="relative w-full max-w-[100vw] h-[360px] sm:h-[340px] md:h-[320px] flex items-center justify-center">
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
                className="absolute w-[92%] md:w-[750px] h-full p-5 md:p-6 rounded-2xl bg-[#101010] border border-white/[0.05] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 shadow-2xl overflow-hidden"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              >
                {/* Author Avatar / Desktop Column */}
                <div className="w-full md:w-[30%] flex md:block items-center gap-3.5 md:h-full shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-full md:h-full md:aspect-[3/4] rounded-full md:rounded-xl overflow-hidden shrink-0 border border-white/10 md:border-none">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  {/* Author info shown inline on mobile for clean hierarchy */}
                  <div className="flex flex-col md:hidden">
                    <span className="text-white font-bold text-sm">{t.name}</span>
                    <span className="text-neutral-400 text-xs">{t.title}</span>
                    <span className="text-white/80 font-bold text-xs mt-0.5">{t.logo}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-[70%] flex flex-col justify-between flex-1 py-1 md:py-2 relative">
                  <p className="text-neutral-300 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] font-sans font-normal">
                    {t.quote}
                  </p>

                  {/* Desktop Author Footer */}
                  <div className="hidden md:flex items-end justify-between mt-auto pt-4">
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm md:text-[15px]">{t.name}</span>
                      <span className="text-neutral-500 text-xs mt-1">{t.title}</span>
                    </div>

                    <div className="flex items-center text-white/90 font-sans font-bold tracking-wide text-sm">
                      {t.logo}
                    </div>
                  </div>
                </div>

                {/* Overlays for Previous/Next clicking (desktop) */}
                {isPrev && (
                  <div
                    className="hidden md:flex absolute inset-0 z-20 cursor-pointer items-center justify-end pr-8 md:pr-12"
                    onClick={handlePrev}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#2a2a2a] transition-all border border-white/5 shadow-xl">
                      <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                )}

                {isNext && (
                  <div
                    className="hidden md:flex absolute inset-0 z-20 cursor-pointer items-center justify-start pl-8 md:pl-12"
                    onClick={handleNext}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#2a2a2a] transition-all border border-white/5 shadow-xl">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                )}

                {isActive && (
                  <div className="absolute inset-0 z-0 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Pagination & Mobile Arrows */}
        <div className="mt-8 md:mt-12 flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="md:hidden w-8 h-8 rounded-full bg-[#1c1c1c] flex items-center justify-center text-white hover:bg-neutral-800 transition-all border border-white/10 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="bg-[#222] rounded-full px-3 py-1.5 flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? "bg-white scale-125" : "bg-[#555] hover:bg-neutral-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="md:hidden w-8 h-8 rounded-full bg-[#1c1c1c] flex items-center justify-center text-white hover:bg-neutral-800 transition-all border border-white/10 active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
