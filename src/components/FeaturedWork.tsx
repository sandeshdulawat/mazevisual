"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const featuredProjects = [
  {
    id: 1,
    title: "Strategic Design & Marketing for ConvertIAS",
    tags: ["Marketing", "Brand Identity", "Product Design"],
    image: "https://images.unsplash.com/photo-1716471330463-f475b00f0506?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "MVP Design Sprint for an Ambitious Startup",
    tags: ["Product Design", "Website"],
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Brand Identity Design for a Newly Merged AI Venture",
    tags: ["Brand Strategy", "Merch", "Pitch Decks"],
    image: "https://images.unsplash.com/photo-1763705857736-2b4f16a33758?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Digital Experience for a Premium Lifestyle Brand",
    tags: ["E-Commerce", "UX/UI", "Development"],
    image: "https://images.unsplash.com/photo-1759563874668-507c0fd04931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Rebranding a Legacy Financial Institution",
    tags: ["Brand Strategy", "Print", "Digital"],
    image: "https://images.unsplash.com/photo-1769952948855-da716b176109?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  useGSAP(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    const header = headerRef.current;

    if (!track || !container || !header) return;

    const cards = gsap.utils.toArray(".project-card") as HTMLElement[];
    const images = gsap.utils.toArray(".project-image-inner") as HTMLElement[];

    const getScrollAmount = () => {
      // Calculate how far the track needs to translate
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      return Math.max(0, trackWidth - viewportWidth);
    };

    const tween = gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${getScrollAmount()}`,
      pin: true,
      animation: tween,
      scrub: 1, // Smooth scrub
      invalidateOnRefresh: true, // Recalculates on resize
    });

    // Fade out and translate the header as the first card comes into view
    if (cards.length > 0) {
      gsap.to(header, {
        opacity: 0,
        x: -150, // Move left slightly as it fades
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: cards[0], // Trigger based on the first card
          containerAnimation: tween,
          start: "left 90%", // Start fading when first card is 10% into the screen from the right
          end: "left 20%", // Fully faded out when the first card approaches the center/left
          scrub: true,
        }
      });
    }

    // Sub-animations using containerAnimation
    cards.forEach((card, i) => {
      const image = images[i];

      // Parallax effect on the image
      if (image) {
        gsap.fromTo(
          image,
          { x: "-10%" },
          {
            x: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left right", // Card enters viewport from right
              end: "right left", // Card leaves viewport from left
              scrub: true,
            },
          }
        );
      }

      // Emphasis effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          containerAnimation: tween,
          start: "left right",
          end: "right left",
          scrub: true,
        }
      });

      tl.fromTo(card,
        { opacity: 0.75, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power1.inOut" }
      )
        .to(card,
          { opacity: 0.75, scale: 0.96, duration: 0.4, ease: "power1.inOut" },
          ">0.2"
        );
    });

    return () => {
      // Clean up all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="featured-work relative h-screen bg-black text-[#f4f4f4] overflow-hidden"
    >
      <div className="featured-work-sticky absolute inset-0 w-full h-full flex flex-col justify-center">

        <header ref={headerRef} className="featured-work-header absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
          <p className="font-cormorant italic text-[clamp(60px,12vw,150px)] font-medium leading-[1.05] text-center"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
            Featured work
          </p>
        </header>

        <div className="featured-work-viewport absolute inset-0 w-full h-full flex items-center z-20">
          <div
            ref={trackRef}
            className="featured-work-track flex items-center h-full pl-[100vw] pr-[10vw]"
            style={{ gap: 'clamp(32px, 4vw, 80px)' }}
          >
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card relative flex-shrink-0 flex flex-col justify-center h-full max-h-[70vh]"
                style={{ width: 'clamp(320px, 55vw, 850px)' }}
              >
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl md:rounded-2xl bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 left-[-10%] w-[120%] h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image-inner w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>
                </div>

                <div className="w-full mt-5 md:mt-8 flex flex-col items-start px-1 md:px-2">
                  <h3 className="text-xl md:text-3xl text-white font-medium mb-3 md:mb-4 font-inter-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-white/70 text-[10px] md:text-xs uppercase tracking-wider font-inter-tight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
