import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-white mt-16">
      <div className="max-w-[1300px] mx-auto px-[10px] py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-neutral-800">
          <div>
            <div className="filter invert">
              <Logo />
            </div>
            <p className="text-xs text-neutral-400 mt-2 max-w-sm">
              One Studio. Endless Possibilities. Shaping digital, architectural, and visual landmarks worldwide.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm">
            <Link
              href="/services/branding"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Branding
            </Link>
            <Link
              href="/services/architecture"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Architecture
            </Link>
            <Link
              href="/services/digital"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Digital
            </Link>
            <Link
              href="/services/visualization"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Visualization
            </Link>
            <Link
              href="/services/interior"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Interior
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} MazeVisual Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-300 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-neutral-300 cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <a
              href="mailto:contact@mazevisual.com"
              className="hover:text-white transition-colors flex items-center gap-0.5"
            >
              <span>contact@mazevisual.com</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
