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
    { src: "/img/1_v3.png", pos: "top-[10%] left-[4%]", rotate: -5, delay: 0 },
    { src: "/img/3_v3.png", pos: "top-[14%] right-[4%]", rotate: 8, delay: 0.5 },
    { src: "/img/4_v3.png", pos: "bottom-[14%] left-[6%]", rotate: 12, delay: 1 },
    { src: "/img/11_v3.png", pos: "bottom-[10%] right-[6%]", rotate: -10, delay: 1.5 },
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
            <div className="relative w-56 h-56 md:w-72 md:h-72 group hover:scale-110 transition-transform duration-700 pointer-events-auto cursor-pointer">
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

      {/* Main Content Area */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="flex flex-col items-center">
            {/* Line 1: Branded Logo Image */}
            <div className="relative h-48 md:h-80 lg:h-[450px] w-full max-w-[90vw] mx-auto mb-2">
              <Image 
                src="/img/curated_by_fire_clean.png" 
                alt="Curated By Fire" 
                fill 
                className="object-contain mix-blend-multiply"
                priority
              />
            </div>

            {/* Line 2: Elegant Serif Italic */}
            <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[185px] font-adabelle font-medium tracking-tight leading-[0.8] text-black uppercase italic mb-12">
              WORKFOLIO
            </span>
          </h1>
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
                  <span className="text-[16px] md:text-[20px] font-kiddos tracking-[0.1em] text-white uppercase">
                    ROOHI STUDIO
                  </span>
                  <span className="text-white/20 text-xs">✦</span>
                  <span className="text-[14px] md:text-[16px] font-adabelle tracking-[0.05em] text-white/40 uppercase italic">
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
