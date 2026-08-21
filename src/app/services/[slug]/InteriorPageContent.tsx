"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { ArrowLeft, ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ServiceTeamStats from "@/components/ServiceTeamStats";
import { ServiceData } from "@/data/services";

interface InteriorPageContentProps {
  service: ServiceData;
}

// Glowing dot component for grid intersections
const GridDot = ({ top, left }: { top: string; left: string }) => (
  <div
    className="absolute w-[3px] h-[3px] bg-white rounded-full z-20"
    style={{
      top,
      left,
      transform: "translate(-50%, -50%)",
      boxShadow: "0 0 8px 2px rgba(255,255,255,0.8)",
    }}
  />
);

export default function InteriorPageContent({ service }: InteriorPageContentProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const whatWeDoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".what-we-do-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: ".what-we-do-title",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".what-we-do-desc",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".what-we-do-desc",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".what-we-do-cap",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".what-we-do-grid",
            start: "top 85%",
          },
        }
      );
    }, whatWeDoRef);

    return () => ctx.revert();
  }, []);

  // Grid line positions
  const vLines = ["25%", "50%", "75%"];
  const hLines = ["20%", "50%", "80%"];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Header onContactClick={() => setIsContactOpen(true)} />
      
      {/* Custom Bento Grid Hero */}
      <section className="relative w-full h-screen overflow-hidden bg-black font-sans">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.imageSrc}
            alt={service.title}
            className="w-full h-full object-cover opacity-60"
          />
          {/* A gradient overlay to ensure text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Vertical Lines */}
          {vLines.map((left, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-[1px] bg-white/20"
              style={{ left }}
            />
          ))}
          {/* Horizontal Lines */}
          {hLines.map((top, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-[1px] bg-white/20"
              style={{ top }}
            />
          ))}

          {/* Intersections (Glowing Dots) */}
          {hLines.map((top) =>
            vLines.map((left) => (
              <GridDot key={`dot-${top}-${left}`} top={top} left={left} />
            ))
          )}
        </div>

        {/* Huge Center Typography */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center gap-4"
            >
              <h1 className="text-7xl md:text-[120px] font-sans font-light tracking-tight leading-none">
                Rewriting
              </h1>
              <span className="text-xl md:text-3xl font-serif-custom italic font-light tracking-wide mt-4 md:mt-8">
                Your
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-end justify-center gap-4 -mt-2 md:-mt-6 ml-12 md:ml-24"
            >
              <span className="text-xl md:text-3xl font-serif-custom italic font-light tracking-wide mb-4 md:mb-8 text-white/80">
                Home
              </span>
              <h1 className="text-7xl md:text-[130px] font-sans font-light tracking-tight leading-none">
                Stories
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Bottom Left Description */}
        <div className="absolute bottom-[10%] left-[5%] w-1/4 pr-4 z-30">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-[280px]"
          >
            Creating balanced interiors with smart layouts, textures and lasting impressions
          </motion.p>
        </div>

        {/* Bottom Right Website Link */}
        <div className="absolute bottom-[10%] right-[5%] w-1/4 pl-4 flex justify-end items-end z-30">
           <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/70 text-[11px] tracking-wider hover:text-white transition-colors"
          >
            www.mazevisual.com
          </motion.a>
        </div>
        
        {/* Scroll indicator connecting to rest of page */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
           <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* --- Rest of the standard Service Page Content --- */}

      {/* Long Description Section — WHAT WE DO? design matching reference */}
      <section ref={whatWeDoRef} className="w-full bg-black pt-20 md:pt-32 pb-8 md:pb-12 px-6 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="what-we-do-title w-full whitespace-nowrap text-[clamp(40px,14.5vw,210px)] font-black tracking-tight text-[#F7F6F2] text-center uppercase font-klein leading-none mb-8 md:mb-14">
            WHAT WE DO?
          </h2>

          <div className="what-we-do-desc max-w-[1060px] mx-auto bg-[#9C9C9C] rounded-[32px] sm:rounded-[40px] md:rounded-[48px] p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl">
            <p className="text-center text-black text-xs sm:text-sm md:text-base lg:text-lg leading-[1.7] md:leading-[1.75] font-sans max-w-4xl mx-auto font-normal">
              {service.longDescription || "A brand is more than a logo — it's the sum of every touchpoint a customer experiences. We work at the intersection of strategy and design to build brands that people remember, trust, and advocate for. From early-stage startups seeking their first identity to established enterprises navigating a rebrand, we bring the same level of strategic rigor and creative ambition to every engagement."}
            </p>
          </div>

          <div className="what-we-do-grid mt-[10px] max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            {service.capabilities.map((cap, index) => (
              <div
                key={cap.title}
                className="what-we-do-cap group p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <h3 className="text-white text-lg font-medium font-sans mb-3 group-hover:text-white/90 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Stats Section */}
      <ServiceTeamStats />

      {/* Process Section */}
      <section className="w-full bg-black py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
              <span className="font-serif-custom italic">Our</span>{" "}
              <span className="font-serif-custom">process</span>
            </h2>
            <p className="text-neutral-500 text-sm font-sans tracking-wide">
              A proven approach refined across hundreds of projects
            </p>
          </motion.div>

          <div className="flex flex-col">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-start gap-6 md:gap-12 py-10 border-t border-white/[0.08] first:border-t-0"
              >
                {/* Step Number */}
                <div className="shrink-0 w-16">
                  <span className="text-neutral-600 text-4xl md:text-5xl font-serif-custom italic font-light">
                    {step.step}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex-1 max-w-2xl">
                  <h3 className="text-white text-xl md:text-2xl font-medium font-sans tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-[15px] leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-black py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
              <span className="font-serif-custom italic">Ready</span>{" "}
              <span className="font-serif-custom">to start?</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-lg mx-auto mb-10 font-sans">
              Let&apos;s discuss how our {service.title.toLowerCase()} expertise can
              elevate your next project.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-sm font-sans font-semibold hover:bg-white/90 transition-all active:scale-95 group"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contact Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
