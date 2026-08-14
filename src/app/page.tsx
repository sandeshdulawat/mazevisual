"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Dynamically import below-the-fold sections to reduce initial JS bundle.
// Only Hero + Header are needed for the first paint.
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const ServicesList = dynamic(() => import("@/components/ServicesList"));
const FeaturedWork = dynamic(() => import("@/components/FeaturedWork"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
const TeamSection = dynamic(() => import("@/components/TeamSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
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

        {/* Testimonials */}
        <Testimonials />

        {/* Stats / Metrics */}
        <StatsSection />

        {/* Meet the Team */}
        <TeamSection />

        {/* Studio Footer */}
        <Footer />
      </div>
    </main>
  );
}
