"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import ContactDrawer from "./ContactDrawer";
import { CardItem } from "./PortfolioCard";

const servicesData = [
  {
    id: "01",
    title: "Branding",
    subtitle: "Identity & Strategy",
    description: "We build enduring brands through strategic positioning, compelling visual identities, and cohesive design systems that resonate with your target audience.",
    items: [
      "Visual Identity",
      "Typography",
      "Packaging",
      "Art Direction",
    ],
    imageSrc: "/images/branding.png",
  },
  {
    id: "02",
    title: "Architecture",
    subtitle: "Spatial Design",
    description: "We create immersive spatial experiences by blending functional architecture with breathtaking aesthetics, ensuring every structure tells a compelling story.",
    items: [
      "Conceptual Architecture",
      "Facade Design",
      "Urban Planning",
    ],
    imageSrc: "/images/architecture.png",
  },
  {
    id: "03",
    title: "Digital",
    subtitle: "Interactive Experiences",
    description: "We craft cutting-edge digital experiences, seamless user interfaces, and interactive 3D web environments that captivate and convert users.",
    items: [
      "Web Architecture",
      "Interactive 3D",
      "UI/UX Systems",
    ],
    imageSrc: "/images/digital.png",
  },
  {
    id: "04",
    title: "Interior",
    subtitle: "Interior Styling",
    description: "Our interior design services focus on curating spaces that balance luxury, comfort, and purpose, with meticulous attention to furniture and lighting.",
    items: [
      "Interior Architecture",
      "Furniture Curation",
      "Lighting Design",
    ],
    imageSrc: "/images/interior.png",
  },
  {
    id: "05",
    title: "Visualization",
    subtitle: "3D Art & Rendering",
    description: "We bring concepts to life with hyper-realistic 3D rendering and environmental art, giving you a crystal-clear vision of the final product before it's built.",
    items: [
      "3D Rendering",
      "Blueprint Art",
      "Environment Art",
    ],
    imageSrc: "/images/visualization.png",
  },
];

export default function ServicesList() {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 text-white font-sans relative z-20">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
          <span className="font-serif-custom italic text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">With</span>{" "}
          <span className="font-serif-custom text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">our services</span>
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-sm mx-auto">
          We help you achieve more at every stage of business growth
        </p>
      </div>

      {/* Services Rows */}
      <div className="flex flex-col">
        {servicesData.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={service.id}
            onClick={() => setSelectedItem({
              id: service.id,
              title: service.title,
              subtitle: service.subtitle,
              description: service.description,
              imageSrc: service.imageSrc,
              tags: service.items
            })}
            className="group flex flex-col md:flex-row items-start py-12 md:py-16 border-t border-white/10 gap-8 cursor-pointer"
          >
            {/* Left Column: Number & Title */}
            <div className="w-full md:w-[28%] lg:w-[30%] flex flex-col gap-2 shrink-0">
              <span className="text-neutral-500 text-sm font-medium tracking-wide">
                ({service.id})
              </span>
              <h3
                className="text-2xl md:text-3xl font-medium tracking-tight text-white/95 transition-colors duration-500 group-hover:text-white"
                style={{ textShadow: '0 0 20px rgba(255,255,255,0.2)' }}
              >
                {service.title}
              </h3>
            </div>

            {/* Middle Column: Items List */}
            <div className="w-full md:w-[30%] lg:w-[25%] shrink-0">
              <ul className="flex flex-col gap-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-neutral-400 text-sm md:text-[15px] tracking-wide hover:text-white transition-colors cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Image/Visual */}
            <div className="w-full md:flex-1 flex justify-end shrink-0">
              <div className="w-full md:w-[380px] lg:w-[420px] aspect-video rounded-xl overflow-hidden shadow-2xl relative bg-neutral-900 border border-white/5 transition-transform duration-700 ease-out group-hover:scale-105">
                <img 
                  src={service.imageSrc} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

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
    </div>
  );
}
