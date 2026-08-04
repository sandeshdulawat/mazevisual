"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesAccordion from "@/components/ServicesAccordion";
import BentoGridShowcase from "@/components/BentoGridShowcase";
import ContactDrawer from "@/components/ContactDrawer";
import Footer from "@/components/Footer";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col justify-between selection:bg-neutral-900 selection:text-white">
      {/* Device Height Hero Section */}
      <Hero />

      {/* Studio Overview & Pillars */}
      <AboutSection />

      {/* Services Accordion List */}
      <ServicesAccordion onStartProject={() => setIsContactOpen(true)} />

      {/* Bento Grid Showcase Section */}
      <BentoGridShowcase onLearnMore={() => setIsContactOpen(true)} />

      {/* Studio Footer */}
      <Footer />

      {/* Global Contact Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
