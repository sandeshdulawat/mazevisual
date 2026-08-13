"use client";

import React from "react";

const clientNames = [
  "Convert", "BURGER BAE", "the moms co.", "unicef", "ISKCON", "designfolio", "Magma",
  "PHOENIX INSTITUTE", "Dino", "Perfios", "Finarkein", "Schbang.", "ASHAR LOCKER", "AA ONE",
  "SLINGSY DIGITAL", "mostli", "serveos", "Flipkart", "Dove Runner", "FINANCE SCHOOL", "duyu",
  "WE SMILE MEDIA", "Good Habits Club", "SUMA", "hiver", "REVED", "BoredGame", "KONNECT",
  "AMPERSAND", "AGE19", "DWARAM", "Dove Runner", "FOSTER CARE", "Lifesight", "SUPERSHE"
];

export default function ClientsGrid() {
  return (
    <section className="w-full bg-black py-24 md:py-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Header Text */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-neutral-400/80 text-base md:text-lg font-medium tracking-wide font-sans">
            Trusted by Revolutionary
          </p>
          <p className="text-neutral-400/80 text-base md:text-lg font-medium tracking-wide font-sans">
            Startups & Global Organizations
          </p>
        </div>

        {/* 7 Columns Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
          {clientNames.map((name, index) => (
            <div
              key={index}
              className="bg-[#101010] border border-neutral-900/40 flex items-center justify-center h-14 md:h-20 px-2 hover:bg-[#111111] transition-colors cursor-default group"
            >
              <span className="text-neutral-500 text-xs font-bold tracking-widest text-center uppercase font-sans group-hover:text-neutral-300 transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
