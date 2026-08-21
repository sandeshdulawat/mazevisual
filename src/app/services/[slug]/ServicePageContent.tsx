"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ServiceTeamStats from "@/components/ServiceTeamStats";
import { ServiceData } from "@/data/services";

interface ServicePageContentProps {
  service: ServiceData;
}

export default function ServicePageContent({ service }: ServicePageContentProps) {
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

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Header onContactClick={() => setIsContactOpen(true)} />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.imageSrc}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 pb-16 md:pb-24">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 text-sm font-sans tracking-wide hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-sm font-sans tracking-[0.2em] uppercase font-semibold"
          >
            ({service.id}) — {service.subtitle}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-[90px] font-medium tracking-tight text-white mt-4"
          >
            <span className="font-serif-custom italic">{service.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed font-sans"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

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
