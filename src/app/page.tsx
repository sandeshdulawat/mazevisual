"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import AboutSection from "@/components/AboutSection";
import ServicesList from "@/components/ServicesList";
import ContactDrawer from "@/components/ContactDrawer";
import Footer from "@/components/Footer";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black block">
      {/* Device Height Hero Section */}
      <Hero />

      <div className="relative z-10 bg-black">
        {/* Studio Overview */}
        <AboutSection />

        {/* What We Do (Services List) */}
        <section className="w-full bg-black">
          <ServicesList />
        </section>

        {/* Scroll-driven Featured Work */}
        <FeaturedWork />

        {/* Studio Footer */}
        <Footer />
      </div>

      {/* Global Contact Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
