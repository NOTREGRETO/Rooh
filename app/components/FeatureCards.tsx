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
    video: "/videos/package.mp4",
    title: "Service Packages",
    caption: "The perfect balance of creativity. 🎨",
  },
  {
    id: 6,
    video: "/videos/creativity.mp4",
    title: "Creativity & Chaos",
    caption: "What's on my mind lately... 🧠",
  },
  {
    id: 7,
    video: "/videos/just-post.mp4",
    title: "Reality Check",
    caption: "If only they knew the hustle! 😭",
  },
];

export default function FeatureCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!containerRef.current || !triggerRef.current) return;

      const items = containerRef.current;
      
      const getScrollAmount = () => {
        let itemsWidth = items.scrollWidth;
        return -(itemsWidth - window.innerWidth + (window.innerWidth * 0.05));
      };

      if (window.innerWidth >= 1024) {
        gsap.to(items, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${items.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }
    }, triggerRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimer);
    };
  }, []);

  return (
    <div ref={triggerRef} className="bg-white w-full overflow-hidden border-y border-accent-pink/5">
      <section className="h-screen flex flex-col justify-center py-0 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto w-full mb-4 md:mb-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-accent-pink/10 flex items-center justify-center border border-accent-pink/20">
                <svg className="w-4 h-4 text-accent-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 2v20M8 2v20M2 12h20M2 7h20M2 17h20" />
                </svg>
              </div>
              <span className="text-accent-pink font-black tracking-[0.3em] uppercase text-[10px]">IG REELS FEED</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1A1A1A] mb-4 leading-tight">
              Watch the <span className="text-accent-pink italic underline decoration-accent-pink/30 underline-offset-8">Vibe.</span>
            </h2>
            <p className="text-[#555] max-w-xl text-sm md:text-base font-medium opacity-80">
              Stop scrolling and start scaling. Here's a peek into the strategies that drive millions of views.
            </p>
          </motion.div>
        </div>

        {/* Animation Content */}
        <div className="relative w-full z-10 flex items-center">
          <div 
            ref={containerRef}
            className="flex flex-nowrap gap-6 md:gap-8 w-max px-[5vw] lg:px-[10vw] items-stretch"
          >
            {reels.map((reel, index) => (
              <ReelBox key={reel.id} reel={reel} index={index} />
            ))}
          </div>
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-pink/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-pink/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />
      </section>
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
    videoRef.current?.play();
  };

  return (
    <div
      className="relative shrink-0 w-[80vw] md:w-[280px] lg:w-[320px] aspect-[9/16] rounded-[24px] overflow-hidden group cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-700 hover:shadow-[0_25px_60px_rgba(255,77,141,0.15)] border border-black/5 hover:border-accent-pink/20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={reel.video}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:brightness-110 group-hover:scale-105"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/10 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/30 z-20">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-pink animate-pulse" />
        <span className="text-[9px] font-black text-white tracking-[0.2em] uppercase">REEL</span>
      </div>

      <div className="absolute bottom-8 left-6 right-6 z-20 transition-all duration-500 group-hover:-translate-y-1">
        <h3 className="text-white text-lg font-bold mb-1 tracking-tight drop-shadow-md">{reel.title}</h3>
        <p className="text-white/70 text-[11px] line-clamp-1 mb-4 font-medium">{reel.caption}</p>
        <div className="relative h-[3px] w-full bg-white/20 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-accent-pink shadow-[0_0_10px_#FF4D8D]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
          >
            <div className="w-16 h-16 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-xl">
              <svg className="w-8 h-8 text-white fill-white" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 border-[1.5px] border-accent-pink/0 group-hover:border-accent-pink/30 rounded-[24px] transition-all duration-700 pointer-events-none z-40" />
    </div>
  );
}
