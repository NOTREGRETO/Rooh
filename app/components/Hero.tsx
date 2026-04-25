"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatingImages = [
    { src: "/img/1.jpeg", pos: "top-[10%] left-[4%]", rotate: -5, delay: 0 },
    { src: "/img/3.jpeg", pos: "top-[14%] right-[4%]", rotate: 8, delay: 0.5 },
    { src: "/img/4.jpeg", pos: "bottom-[14%] left-[6%]", rotate: 12, delay: 1 },
    { src: "/img/11.jpeg", pos: "bottom-[10%] right-[6%]", rotate: -10, delay: 1.5 },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white grid-bg pt-20">
      {/* Floating Images Container */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {floatingImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0],
              rotate: [img.rotate, img.rotate + 2, img.rotate]
            }}
            transition={{ 
              opacity: { duration: 1, delay: img.delay },
              scale: { duration: 1, delay: img.delay },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: img.delay },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: img.delay }
            }}
            className={`absolute ${img.pos} hidden lg:block`}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 p-2 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-500 pointer-events-auto cursor-pointer">
              <Image 
                src={img.src} 
                alt={`Floating asset ${index + 1}`} 
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] md:text-[12px] font-sans font-bold tracking-[0.8em] uppercase text-black"
          >
            GROWTH • CLARITY • AESTHETICS
          </motion.p>

          <h1 className="flex flex-col items-center">
            {/* Line 1: Ultra Bold Black */}
            <span className="text-[55px] sm:text-[80px] md:text-[120px] font-sans font-[900] tracking-tighter leading-[0.8] text-black uppercase mb-4">
              CURATED BY FIRE
            </span>

            {/* Line 2: Elegant Serif Italic */}
            <span className="text-[60px] sm:text-[90px] md:text-[140px] font-serif font-medium tracking-tight leading-[0.9] text-black uppercase italic mb-8">
              WORKFOLIO
            </span>
          </h1>

          {/* Caption */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
            className="text-[14px] md:text-[18px] font-serif italic font-medium text-black max-w-md mx-auto"
          >
            A minimalist vision by Rooh
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="pt-10"
          >
            <button className="bg-black hover:bg-black/80 text-white px-14 py-5 rounded-full text-[12px] font-bold tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/20">
              EXPLORE WORKS
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative center grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-black/[0.03]" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-black/[0.03]" />
      </div>

      {/* Mobile Responsive Floating Elements (Simpler) */}
      <div className="absolute bottom-10 left-10 lg:hidden opacity-20 pointer-events-none">
        <div className="w-20 h-20 border border-black/10 rounded-full animate-pulse" />
      </div>
      <div className="absolute top-40 right-10 lg:hidden opacity-20 pointer-events-none">
        <div className="w-12 h-12 border border-black/10 rotate-45 animate-bounce" />
      </div>

      {/* Integrated Marquee at the bottom */}
      {mounted && (
        <div className="absolute bottom-0 left-0 w-full bg-black py-4 border-t border-white/10 overflow-hidden whitespace-nowrap z-20">
          <div className="flex animate-marquee">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center px-12 gap-6">
                  <span className="text-[12px] md:text-[14px] font-black tracking-[0.3em] text-white uppercase">
                    ROOHI STUDIO
                  </span>
                  <span className="text-white/20 text-xs">✦</span>
                  <span className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-white/40 uppercase italic font-serif">
                    Minimalism in Motion
                  </span>
                </div>
                <span className="text-sm text-white/20 px-4">✦</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
