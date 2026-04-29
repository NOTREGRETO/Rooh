"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Aurora from "./Aurora";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Parallax layers
  const x1 = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  const y1 = useTransform(smoothMouseY, [-1, 1], [-20, 20]);
  
  const x2 = useTransform(smoothMouseX, [-1, 1], [35, -35]);
  const y2 = useTransform(smoothMouseY, [-1, 1], [35, -35]);

  const x3 = useTransform(smoothMouseX, [-1, 1], [-45, 45]);
  const y3 = useTransform(smoothMouseY, [-1, 1], [45, -45]);


  if (!mounted) return <section className="w-full min-h-screen bg-[#fdfdfd]" />;

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden py-20 px-4 md:px-8 font-[family-name:var(--font-inter)]"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Aurora
          colorStops={["#7cff67","#B497CF","#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
      


      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center transform translate-y-10 md:translate-y-14">
        
        {/* Main Title Wrapper */}
        <div className="relative inline-block mb-16 md:mb-24 mt-12 md:mt-0">
          
          <h1 className="flex flex-col items-center text-[clamp(2.8rem,6.5vw,8.5rem)] font-black text-[#1a1a1a] leading-[1.15] tracking-[-0.07em]">
            
            <div className="relative whitespace-nowrap">

              
              {/* Element 2: Rectangle above 'Manage' */}
              <div className="absolute md:top-[-65px] top-[-45px] left-[20%] md:left-[24%]">
                <div className="border-[1.5px] border-[#101010] rounded-full bg-emerald-400 px-5 py-2 md:px-7 md:py-3 flex items-center justify-center shadow-md transform rotate-[-2deg]">
                  <span className="text-[11px] md:text-[14px] font-black tracking-widest text-emerald-950 uppercase">Strategy</span>
                </div>
              </div>
              
              {/* Element 3: Rectangle above 'Your' */}
              <div className="absolute md:top-[-65px] top-[-45px] right-[10%] md:right-[15%]">
                <div className="border-[1.5px] border-[#101010] rounded-full bg-fuchsia-400 px-5 py-2 md:px-7 md:py-3 flex items-center justify-center shadow-md transform rotate-[1deg]">
                  <span className="text-[11px] md:text-[14px] font-black tracking-widest text-fuchsia-950 uppercase">Growth</span>
                </div>
              </div>



              {/* Element 5: Magenta Pointer (Looking at I MANAGE YOUR) */}
              <div className="absolute top-[10px] right-[-55px] md:right-[-85px] w-10 h-10 md:w-12 md:h-12 transform rotate-[-45deg]">
                <svg viewBox="0 0 28 28" fill="none" className="drop-shadow-[0_8px_16px_rgba(217,70,239,0.35)]">
                  <path d="M 4 4 L 24 10 L 14 14 L 10 24 Z" fill="url(#grad_magenta)" stroke="url(#grad_magenta)" strokeWidth="3" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="grad_magenta" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d946ef" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              I MANAGE YOUR
            </div>

            <div className="relative mt-2 md:mt-4 whitespace-nowrap">
              {/* Element 4: Rectangle below 'Brand' */}
              <div className="absolute md:bottom-[-65px] bottom-[-45px] left-[8%] md:left-[12%]">
                <div className="border-[1.5px] border-[#101010] rounded-full bg-cyan-400 px-5 py-2 md:px-7 md:py-3 flex items-center justify-center shadow-md transform rotate-[-1deg]">
                  <span className="text-[11px] md:text-[14px] font-black tracking-widest text-cyan-950 uppercase">Analytics</span>
                </div>
              </div>
              

              
              {/* Element 6: Rectangle below 'Media' */}
              <div className="absolute md:bottom-[-65px] bottom-[-45px] right-[8%] md:right-[12%]">
                <div className="border-[1.5px] border-[#101010] rounded-full bg-yellow-400 px-5 py-2 md:px-7 md:py-3 flex items-center justify-center shadow-md transform rotate-[2deg]">
                  <span className="text-[11px] md:text-[14px] font-black tracking-widest text-yellow-950 uppercase">Content</span>
                </div>
              </div>



              {/* Element 7: Orange Pointer (Looking at BRAND'S SOCIAL MEDIA) */}
              <div className="absolute top-[10px] left-[-55px] md:left-[-85px] w-10 h-10 md:w-12 md:h-12 transform rotate-[135deg]">
                <svg viewBox="0 0 28 28" fill="none" className="drop-shadow-[0_8px_16px_rgba(249,115,22,0.35)]">
                  <path d="M 4 4 L 24 10 L 14 14 L 10 24 Z" fill="url(#grad_orange)" stroke="url(#grad_orange)" strokeWidth="3" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="grad_orange" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#e11d48" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              BRAND&apos;S SOCIAL MEDIA
            </div>
          </h1>

        </div>

        {/* Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 md:mt-12"
        >
          <button className="px-8 py-3.5 md:px-10 md:py-4 rounded-full bg-[#101010] text-white font-[family-name:var(--font-inter)] font-bold text-base md:text-lg tracking-wide shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:opacity-90">
            Schedule Meeting
          </button>
        </motion.div>

      </div>
    </section>
  );
}
