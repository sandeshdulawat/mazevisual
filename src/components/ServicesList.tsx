"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServicesList() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-20 text-white font-sans relative z-20">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-3 md:mb-4">
          <span className="font-serif-custom italic text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">With</span>{" "}
          <span className="font-serif-custom text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">our services</span>
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-sm mx-auto">
          We help you achieve more at every stage of business growth
        </p>
      </div>

      {/* Services Rows / Mobile Glass Cards */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-0">
        {servicesData.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={service.id}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group flex flex-col md:flex-row items-start 
                bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 sm:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                active:scale-[0.99] transition-all duration-300
                md:bg-transparent md:backdrop-blur-none md:border-0 md:border-t md:border-white/10 md:rounded-none md:p-0 md:shadow-none md:active:scale-100
                md:py-10 md:gap-8"
            >
              {/* Left Column: Number, Title & Mobile Header */}
              <div className="w-full md:w-[28%] lg:w-[30%] flex flex-col gap-1.5 md:gap-2 shrink-0">
                <div className="flex items-center justify-between w-full">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/10 text-neutral-300 text-xs font-mono md:bg-transparent md:border-none md:p-0 md:text-neutral-500 md:text-sm md:font-medium md:tracking-wide">
                    ({service.id})
                  </span>
                  {/* Arrow Icon on Mobile */}
                  <div className="md:hidden w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/90 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3
                  className="w-full text-center md:text-left text-2xl sm:text-3xl font-medium tracking-tight text-white/95 transition-colors duration-500 group-hover:text-white mt-2 mb-5 md:my-0 font-serif-custom md:font-sans"
                  style={{ textShadow: '0 0 20px rgba(255,255,255,0.2)' }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Middle Column: Items List */}
              <div className="w-full md:w-[30%] lg:w-[25%] shrink-0 my-3 md:my-0 order-3 md:order-2">
                {/* Mobile: Glass Pill Tags */}
                <div className="flex flex-wrap gap-1.5 md:hidden">
                  {service.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-neutral-300 text-xs font-sans tracking-wide"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Desktop: Original clean list */}
                <ul className="hidden md:flex flex-col gap-1">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-neutral-400 text-sm md:text-[15px] tracking-wide group-hover:text-neutral-300 transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Image/Visual */}
              <div className="w-full md:flex-1 flex justify-end shrink-0 order-2 md:order-3">
                <div className="w-full md:w-[380px] lg:w-[420px] aspect-video rounded-xl overflow-hidden shadow-2xl relative bg-neutral-900 border border-white/5 transition-transform duration-700 ease-out group-hover:scale-105">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle inner glass shine on mobile */}
                  <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Mobile Card Footer Action */}
              <div className="w-full md:hidden flex items-center justify-between pt-3 mt-1 border-t border-white/[0.06] text-xs text-neutral-400 order-4">
                <span className="font-medium text-white/80">Explore {service.title}</span>
                <span className="text-[11px] text-neutral-400 font-mono">View details &rarr;</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
