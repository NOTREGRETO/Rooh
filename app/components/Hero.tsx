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
    { src: "/img/1_v3.png", pos: "top-[15%] left-[2%] xl:top-[18%] xl:left-[4%]", rotate: -5, delay: 0 },
    { src: "/img/3_v3.png", pos: "top-[18%] right-[2%] xl:top-[22%] xl:right-[4%]", rotate: 8, delay: 0.5 },
    { src: "/img/4_v3.png", pos: "bottom-[15%] left-[3%] xl:bottom-[20%] xl:left-[6%]", rotate: 12, delay: 1 },
    { src: "/img/11_v3.png", pos: "bottom-[10%] right-[3%] xl:bottom-[15%] xl:right-[6%]", rotate: -10, delay: 1.5 },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between bg-white pt-20 safari-fix">
      {/* 1. Floating Images Container - z-index: 1 */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
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
              <div className="relative w-[clamp(120px,15vw,280px)] h-[clamp(120px,15vw,280px)] group hover:scale-110 transition-transform duration-700 pointer-events-auto cursor-pointer">
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

      {/* 2. Main Content Area - Center - z-index: 10 */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="hero-content relative z-10 text-center px-4 sm:px-6 w-full max-w-[90vw] md:max-w-4xl lg:max-w-6xl mx-auto py-12 md:py-20">
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
                <span className="text-[clamp(2.5rem,8vw,12rem)] font-adabelle font-medium tracking-tighter leading-[0.85] text-black uppercase italic block select-none">
                  WORKFOLIO
                </span>
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. Marquee Strip - Bottom - z-index: 5 */}
      {mounted && (
        <div className="relative w-full bg-black py-4 md:py-6 border-t border-white/10 overflow-hidden whitespace-nowrap z-[5]">
          <div className="flex animate-marquee">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center px-8 md:px-12 gap-4 md:gap-6">
                  <span className="text-[14px] md:text-[20px] font-kiddos tracking-[0.1em] text-white uppercase">
                    ROOHI STUDIO
                  </span>
                  <span className="text-white/20 text-xs">✦</span>
                  <span className="text-[12px] md:text-[16px] font-adabelle tracking-[0.05em] text-white/40 uppercase italic">
                    Minimalism in Motion
                  </span>
                </div>
                <span className="text-sm text-white/20 px-4">✦</span>
              </div>
            ))}
          </div>
        </div>
      )}



      <style jsx>{`
        .hero-content {
          position: relative;
          z-index: 10;
        }
      `}</style>
    </section>
  );
}
