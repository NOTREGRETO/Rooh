"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-20 pb-32 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-10 relative z-10">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-24 border-b border-black/5 pb-12">
          {/* Social Icons */}
          <div className="flex items-center gap-4 order-2 md:order-1">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-black text-white hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-black text-white hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          {/* Logo Center */}
          <div className="text-center order-1 md:order-2">
            <h2 className="text-[32px] md:text-[42px] font-black tracking-[-0.05em] leading-none text-black uppercase">
              CURATED BY FIRE
            </h2>
            <p className="text-[10px] md:text-[12px] font-medium tracking-[0.4em] text-black/40 uppercase mt-2">
              Growth Clarity Aesthetics
            </p>
          </div>

          {/* Menu Icon */}
          <div className="order-3 hidden md:block">
            <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative flex flex-col items-center justify-center text-center">
          {/* World Map Illustration (SVG) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] opacity-[0.08] pointer-events-none -z-10">
            <svg viewBox="0 0 1000 500" fill="currentColor" className="text-black">
              <path d="M150,150 Q200,100 300,150 T500,150 T700,150 T850,150 T850,350 T700,350 T500,350 T300,350 T150,350 Z" opacity="0.2" />
              {/* Simplified world map shapes */}
              <circle cx="250" cy="200" r="40" />
              <circle cx="350" cy="220" r="50" />
              <circle cx="550" cy="180" r="60" />
              <circle cx="750" cy="210" r="45" />
              <circle cx="450" cy="350" r="55" />
              <circle cx="650" cy="380" r="40" />
              <circle cx="200" cy="380" r="30" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif italic text-[36px] md:text-[52px] text-black/80 leading-none mb-2">
              Let's Work
            </h3>
            <h4 className="text-[60px] md:text-[110px] font-black tracking-tighter text-black leading-none uppercase">
              TOGETHER
            </h4>
          </motion.div>
        </div>
      </div>

      {/* Final Copyright */}
      <div className="absolute bottom-10 w-full text-center">
        <p className="text-[10px] font-bold tracking-[0.2em] text-black/20 uppercase">
          © {new Date().getFullYear()} PRETTY LITTLE MARKETER. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
