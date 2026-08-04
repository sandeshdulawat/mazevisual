"use client";

import React, { useState } from "react";
import Header from "./Header";
import PortfolioGrid from "./PortfolioGrid";
import ProjectModal from "./ProjectModal";
import ContactDrawer from "./ContactDrawer";
import { CardItem } from "./PortfolioCard";

export default function Hero() {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="w-full max-w-[1300px] mx-auto px-[10px] min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between py-2 sm:py-4">
      {/* Header with Logo, Editorial Headline, and CTA */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      {/* Interactive 5-Card Portfolio Grid */}
      <PortfolioGrid onSelect={(item) => setSelectedItem(item)} />

      {/* Modal & Contact Drawer Popups */}
      <ProjectModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onContactOpen={() => setIsContactOpen(true)}
      />
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  );
}
