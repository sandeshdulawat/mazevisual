"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  onContactClick?: () => void;
}

export default function MobileMenu({ onContactClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // Initial state setup
    gsap.set(`.${styles.closeTrigger}`, { zIndex: 5 });
    gsap.set(`.${styles.menu}`, { y: 30, opacity: 0, visibility: 'hidden' });
    
    tl.current = gsap.timeline({ paused: true })
      // OPEN TIMELINE
      .to(`.${styles.menuTriggerBar}.${styles.top}`, {
        x: 80, y: -80, duration: 0.4, delay: 0.1, ease: "power4.in"
      }, "preOpen")
      .to(`.${styles.menuTriggerBar}.${styles.middle}`, {
        x: 80, y: -80, duration: 0.4, ease: "power4.in"
      }, "preOpen")
      .to(`.${styles.menuTriggerBar}.${styles.bottom}`, {
        x: 80, y: -80, duration: 0.4, delay: 0.2, ease: "power4.in"
      }, "preOpen")
      
      // Toggle trigger visibility
      .to(`.${styles.closeTrigger}`, { zIndex: 25, duration: 0.1 }, "preOpen+=0.3")
      .to(`.${styles.menuTrigger}`, { autoAlpha: 0, duration: 0.1 }, "preOpen+=0.4")
      
      .add("open", "-=0.4")
      .to(`.${styles.menuBg}.${styles.top}`, {
        y: "13%", duration: 0.8, ease: "power4.inOut"
      }, "open")
      .to(`.${styles.menuBg}.${styles.middle}`, {
        scaleY: 1, duration: 0.8, ease: "power4.inOut"
      }, "open")
      .to(`.${styles.menuBg}.${styles.bottom}`, {
        y: "-114%", duration: 0.8, ease: "power4.inOut"
      }, "open")
      .to(`.${styles.menu}`, {
        y: 0, opacity: 1, visibility: 'visible', duration: 0.6, ease: "power4.out"
      }, "-=0.2")
      .add("preClose", "-=0.8")
      .to(`.${styles.closeTriggerBar}.${styles.left}`, {
        x: -100, y: 100, duration: 0.8, ease: "power4.out"
      }, "preClose")
      .to(`.${styles.closeTriggerBar}.${styles.right}`, {
        x: 100, y: 100, duration: 0.8, delay: 0.2, ease: "power4.out"
      }, "preClose");

  }, { scope: container });

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      tl.current?.play();
    } else {
      setIsOpen(false);
      tl.current?.reverse();
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    tl.current?.reverse();
  };

  return (
    <div className={styles.wrapper} ref={container}>
      {/* Trigger Button */}
      <span className={styles.menuTrigger} onClick={toggleMenu}>
        <i className={`${styles.menuTriggerBar} ${styles.top}`}></i>
        <i className={`${styles.menuTriggerBar} ${styles.middle}`}></i>
        <i className={`${styles.menuTriggerBar} ${styles.bottom}`}></i>
      </span>
      
      {/* Close Button */}
      <span className={styles.closeTrigger} onClick={toggleMenu}>
        <i className={`${styles.closeTriggerBar} ${styles.left}`}></i>
        <i className={`${styles.closeTriggerBar} ${styles.right}`}></i>
      </span>

      {/* Overlay */}
      <div className={`${styles.overlay} ${isOpen ? styles.isOpen : ''}`}>
        <div className={styles.innerContainer}>
          <i className={`${styles.menuBg} ${styles.top}`}></i>
          <i className={`${styles.menuBg} ${styles.middle}`}></i>
          <i className={`${styles.menuBg} ${styles.bottom}`}></i>
          
          <div className={styles.menuContainer}>
            <ul className={styles.menu}>
              <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
              <li><Link href="/#services" onClick={handleLinkClick}>Services</Link></li>
              <li><Link href="/#work" onClick={handleLinkClick}>Work</Link></li>
              <li><Link href="/#studio" onClick={handleLinkClick}>Studio</Link></li>
              <li><Link href="/#insights" onClick={handleLinkClick}>Insights</Link></li>
              <li>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick();
                  if (onContactClick) onContactClick();
                }}>
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
