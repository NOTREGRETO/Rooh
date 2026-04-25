"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-24 md:py-32 overflow-hidden">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          {/* Logo & Intro */}
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8">ROOHI</h2>
            <p className="text-black/60 max-w-sm font-medium leading-relaxed text-lg">
              A design-forward laboratory for digital aesthetics and curated brand experiences. Strictly minimal. Strictly high-contrast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-black/30">NAVIGATION</h3>
            <ul className="space-y-5">
              {["ABOUT", "WORKS", "BLOG", "CONTACT"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-[11px] font-bold tracking-[0.2em] hover:opacity-50 transition-opacity uppercase">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-black/30">LOCATION</h3>
            <div className="text-[13px] font-bold leading-relaxed space-y-2 uppercase tracking-wide">
              <p>LONDON, UK</p>
              <p>AVAILABLE WORLDWIDE</p>
              <div className="pt-6">
                <p className="text-black/40 font-medium text-[11px] tracking-widest">
                  TIMEZONE: GMT (UTC +0)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/20 order-2 md:order-1">
            © {new Date().getFullYear()} ROOHI STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 order-1 md:order-2">
            {["INSTAGRAM", "TWITTER", "LINKEDIN"].map((social) => (
              <Link key={social} href="#" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-50 transition-opacity">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-[0.03]">
        <div className="w-full h-full border-l border-black" />
      </div>
    </footer>
  );
}
