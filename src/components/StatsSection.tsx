"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "07+",
    title: "Years of Experience",
    description: "We've spent years solving complex product, design, and marketing challenges. From startups to global teams, our experience lets us move fast and build what truly matters."
  },
  {
    number: "95+",
    title: "Projects Delivered",
    description: "We've shaped products that perform and scale, delivering everything from MVPs to enterprise platforms with clarity, speed, and intent."
  },
  {
    number: "18+",
    title: "Industries Impacted",
    description: "Working across industries like AI, finance, fintech, fashion, gaming, education, and manufacturing, we bring fresh thinking by cross-pollinating ideas in every project."
  }
];

export default function StatsSection() {
  return (
    <section className="w-full bg-black flex justify-center">
      <div className="w-full max-w-5xl px-6 md:px-8 flex flex-col">
        {stats.map((stat, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={index}
            className={`flex flex-col md:flex-row items-start md:items-center py-12 md:py-16 ${index !== stats.length - 1 ? "border-b border-white/[0.08]" : ""
              }`}
          >
            {/* Number Column */}
            <div className="w-full md:w-[45%] flex justify-start md:justify-end md:pr-16 shrink-0 mb-6 md:mb-0">
              <span className="text-[64px] md:text-[85px] lg:text-[95px] font-serif-custom text-[#e0e0e0] leading-none tracking-tight">
                {stat.number}
              </span>
            </div>

            {/* Text Column */}
            <div className="w-full md:w-[55%] flex flex-col gap-2.5 md:pl-4">
              <h3 className="text-white text-lg md:text-xl font-medium tracking-wide">
                {stat.title}
              </h3>
              <p className="text-[#888888] text-[15px] md:text-base leading-[1.6] max-w-md font-sans">
                {stat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
