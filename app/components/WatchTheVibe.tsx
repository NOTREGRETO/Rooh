"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reels = [
  {
    id: 1,
    video: "/videos/content-strategy.mp4",
    title: "Content Strategy",
    caption: "How I create strategy for clients 👩🏻‍💻",
  },
  {
    id: 2,
    video: "/videos/hired-smm.mp4",
    title: "SMM Life",
    caption: "POV: You just hired me! ✨",
  },
  {
    id: 3,
    video: "/videos/community.mp4",
    title: "Community Building",
    caption: "Stop chasing virality, start curating. 🤝",
  },
  {
    id: 4,
    video: "/videos/tools.mp4",
    title: "Expert Tools",
    caption: "The tech behind the business. ⚙️",
  },
  {
    id: 5,
    video: "/videos/desk.mp4",
    title: "Desk Essentials",
    caption: "What keeps a manager functioning ☕",
  },
  {
    id: 6,
    video: "/videos/package.mp4",
    title: "Service Packages",
    caption: "The perfect balance of creativity. 🎨",
  },
  {
    id: 7,
    video: "/videos/creativity.mp4",
    title: "Creativity & Chaos",
    caption: "What's on my mind lately... 🧠",
  },
  {
    id: 8,
    video: "/videos/just-post.mp4",
    title: "Reality Check",
    caption: "If only they knew the hustle! 😭",
  },
];

export default function WatchTheVibe() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Refresh ScrollTrigger to ensure correct snapping heights
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const timer = setTimeout(refresh, 1000);

    return () => {
      window.removeEventListener('load', refresh);
      clearTimeout(timer);
    };
  }, []);


  return (
    <div 
      className={`watch-section relative w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'} z-[5] bg-white overflow-x-hidden`}
    >
      {/* 1. Header Snap Point */}
      <section className="h-screen w-full flex flex-col justify-center px-6 md:px-12 snap-start relative overflow-visible bg-white">
        <div className="w-full max-w-7xl mx-auto relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-4"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-black/30" />
              <span className="text-[14px] font-chalkboard tracking-[0.2em] uppercase text-black/40">EXPERIENCE THE FLOW</span>
            </div>
            <h2 className="text-[clamp(3rem,10vw,8rem)] font-little-bean leading-[0.8] uppercase tracking-tighter mb-6 text-black">
              WATCH THE <br />
              <span className="text-outline italic">VIBE.</span>
            </h2>
            <p className="text-xl md:text-4xl text-black/60 font-adabelle leading-relaxed max-w-2xl">
              Where high-contrast motion meets minimalist strategy. Scroll down to experience the curation.
            </p>
            <div className="mt-12 animate-bounce">
              <svg className="w-8 h-8 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
      </section>

      {/* 2. Reels Snap Points */}
      {reels.map((reel, index) => (
        <section 
          key={reel.id} 
          className="h-screen w-full flex items-center justify-center snap-start relative bg-white border-b border-black/[0.03] overflow-visible"
        >
          <ReelBox reel={reel} index={index} />
        </section>
      ))}

      <style jsx>{`
        .watch-section {
          position: relative;
          z-index: 5;
        }
        .reel-container {
          padding-left: max(20px, calc((100vw - 1200px) / 2));
          padding-right: max(20px, calc((100vw - 1200px) / 2));
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
        }
        .text-outline {
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.4);
          color: transparent;
        }
        @media (max-width: 768px) {
          .reel-container {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </div>
  );
}

function ReelBox({ reel, index }: { reel: typeof reels[0], index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const p = (video.currentTime / video.duration) * 100;
      setProgress(p);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.pause();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const playPromise = videoRef.current?.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  return (
    <div
      className="relative w-[90vw] md:w-[450px] h-[85vh] max-h-[850px] rounded-2xl overflow-hidden group cursor-pointer border border-black/5 bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={reel.video}
        className="absolute inset-0 w-full h-full object-contain transition-all duration-1000 group-hover:scale-105"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="absolute bottom-12 left-10 right-10 z-20 transition-all duration-500 group-hover:-translate-y-2">
        <h3 className="text-white text-3xl font-chalkboard mb-3 tracking-tight uppercase leading-none italic">{reel.title}</h3>
        <p className="text-white/60 text-[14px] font-adabelle tracking-wide uppercase mb-8">{reel.caption}</p>
        <div className="relative h-px w-full bg-white/10">
          <div 
            className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none bg-black/40 backdrop-blur-[2px]"
          >
            <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-bold tracking-[0.4em] uppercase">PAUSE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
