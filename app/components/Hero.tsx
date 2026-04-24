"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-4 overflow-hidden bg-bg-white grid-bg min-h-[600px]">
      <div className="max-w-[1400px] mx-auto px-6 text-center relative">
        {/* Floating Icons & Decor */}
        
        <div className="absolute top-[40px] right-[8%] md:right-[12%] transform translate-x-1/2 z-20 pointer-events-none animate-float">
          <span className="text-6xl select-none opacity-90 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)]">💬</span>
        </div>
        
        <div className="absolute bottom-[15%] right-[12%] md:right-[18%] z-20 pointer-events-none transform rotate-12 animate-float-reverse">
           <span className="text-7xl select-none filter brightness-110 drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)]">🪩</span>
        </div>

        {/* Extra Sparkles for 'Cool' Factor */}
        <div className="absolute top-[20%] left-[10%] animate-pulse duration-1000">
          <span className="text-3xl text-accent-pink/40">✨</span>
        </div>
        <div className="absolute bottom-[30%] left-[15%] animate-pulse duration-700 delay-300">
          <span className="text-2xl text-accent-pink/30">⭐</span>
        </div>
        <div className="absolute top-[40%] right-[15%] animate-pulse duration-1000 delay-500">
          <span className="text-2xl text-accent-pink/20">✨</span>
        </div>

        {/* Headline Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block mb-10 cursor-default"
        >
          <h1 className="flex flex-col items-center group">
            {/* Line 1: Bold Sans-serif with Highlight */}
            <span className="relative inline-block px-6 py-2 mb-4 transform group-hover:scale-105 transition-transform duration-500 ease-out">
               <span className="absolute inset-0 bg-gradient-to-r from-soft-pink/40 to-accent-pink/10 rounded-3xl -z-10 blur-sm" />
               <span className="absolute inset-0 bg-soft-pink/50 rounded-2xl -z-10" />
               <span className="text-[78px] md:text-[105px] font-sans font-[900] tracking-tighter leading-[0.85] text-text-dark whitespace-nowrap uppercase">
                 CURATED BY FIRE
               </span>
            </span>

            {/* Line 2: Small Subtle Text */}
            <span className="text-[12px] md:text-[15px] font-sans font-bold tracking-[0.5em] uppercase text-accent-pink/60 mb-8 transform group-hover:translate-y-[-4px] transition-transform duration-700">
              Growth • Clarity • Aesthetics
            </span>

            {/* Line 3: Elegant Serif */}
            <span className="text-[85px] md:text-[120px] font-serif font-medium tracking-tight leading-[0.95] text-text-dark uppercase italic transform group-hover:scale-[1.02] transition-transform duration-500">
              WORKFOLIO
            </span>

            {/* Line 4: Small Minimal Subtext */}
            <span className="text-[18px] md:text-[22px] font-serif italic font-medium text-text-body/70 mt-3">
              by Rooh
            </span>
          </h1>

          {/* Label Box */}
          <div className="absolute top-[60%] left-[-180px] bg-bg-light-pink px-5 py-3 border border-accent-pink/10 shadow-lg shadow-accent-pink/5 rounded-xl max-w-[220px] text-left transform -rotate-2 z-30">
             <p className="text-[10px] font-bold tracking-[0.1em] leading-tight uppercase text-accent-pink">
               WHERE SOCIALS GET SIMPLE<br />
               AND MARKETERS GET CONNECTED
             </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="flex justify-center mt-2">
          <button className="bg-accent-pink hover:bg-accent-pink-hover text-white px-10 py-5 rounded-full text-[15px] font-bold shadow-xl shadow-accent-pink/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
            Join The Club
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
