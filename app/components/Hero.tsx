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
    { src: "/img/1_v3.png", pos: "top-[5%] left-[2%] xl:top-[8%] xl:left-[4%]", rotate: -5, delay: 0 },
    { src: "/img/3_v3.png", pos: "top-[10%] right-[2%] xl:top-[12%] xl:right-[4%]", rotate: 8, delay: 0.5 },
    { src: "/img/4_v3.png", pos: "bottom-[15%] left-[3%] xl:bottom-[20%] xl:left-[6%]", rotate: 12, delay: 1 },
    { src: "/img/11_v3.png", pos: "bottom-[10%] right-[3%] xl:bottom-[15%] xl:right-[6%]", rotate: -10, delay: 1.5 },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white grid-bg pt-20 antialiased subpixel-antialiased">
      {/* Floating Images Container - Positioned to stay in corners */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="relative w-full h-full max-w-[1800px] mx-auto">
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
              className={`absolute ${img.pos} hidden md:block`}
            >
              <div className="relative w-[clamp(8rem,15vw,18rem)] h-[clamp(8rem,15vw,18rem)] group hover:scale-110 transition-transform duration-700 pointer-events-auto cursor-pointer">
                <Image 
                  src={img.src} 
                  alt={`Floating asset ${index + 1}`} 
                  fill
                  className="object-contain filter grayscale brightness-[0.95] drop-shadow-[0_15px_35px_rgba(0,0,0,0.15)] mix-blend-multiply"
                  priority
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content Area - Protected Central Zone */}
      <div className="relative z-30 text-center px-4 sm:px-6 w-full max-w-[90vw] md:max-w-4xl lg:max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-2 md:gap-4"
        >
          <div className="w-full">
            {/* Line 1: Branded Logo Image */}
            <div className="relative h-[clamp(10rem,25vw,25rem)] w-full max-w-[95%] mx-auto mb-2 md:mb-6">
              <Image 
                src="/img/curated_by_fire_clean.png" 
                alt="Curated By Fire" 
                fill 
                className="object-contain mix-blend-multiply select-none"
                priority
              />
            </div>

            {/* Line 2: Elegant Serif Italic */}
            <h1 className="overflow-visible">
              <span className="text-[clamp(3.5rem,14vw,12rem)] font-adabelle font-medium tracking-tighter leading-[0.85] text-black uppercase italic mb-8 md:mb-16 block select-none">
                WORKFOLIO
              </span>
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Decorative center grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-black/[0.04]" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-black/[0.04]" />
      </div>

      {/* Mobile Responsive Floating Elements (Simpler) */}
      <div className="absolute bottom-32 left-8 md:hidden opacity-10 pointer-events-none">
        <div className="w-16 h-16 border border-black/20 rounded-full animate-pulse" />
      </div>
      <div className="absolute top-32 right-8 md:hidden opacity-10 pointer-events-none">
        <div className="w-12 h-12 border border-black/20 rotate-45 animate-bounce" />
      </div>

      {/* Integrated Marquee at the bottom */}
      {mounted && (
        <div className="absolute bottom-0 left-0 w-full bg-black py-3 md:py-5 border-t border-white/10 overflow-hidden whitespace-nowrap z-40">
          <div className="flex animate-marquee">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center px-8 md:px-12 gap-4 md:gap-6">
                  <span className="text-[14px] md:text-[20px] font-kiddos tracking-[0.1em] text-white uppercase">
                    ROOHI STUDIO
                  </span>
                  <span className="text-white/20 text-[10px] md:text-xs">✦</span>
                  <span className="text-[12px] md:text-[16px] font-adabelle tracking-[0.05em] text-white/40 uppercase italic">
                    Minimalism in Motion
                  </span>
                </div>
                <span className="text-xs md:text-sm text-white/20 px-3 md:px-4">✦</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
