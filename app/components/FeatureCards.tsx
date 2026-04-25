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

      gsap.to(items, {
        x: () => getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${items.scrollWidth}`,
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });
 
      // Staggered entrance for cards
      gsap.from(items.children, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
        }
      });
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
    <div ref={triggerRef} className="bg-white w-full overflow-hidden border-y border-black/5">
      <section className="h-screen flex flex-col justify-center py-0 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto w-full mb-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="text-black font-black tracking-[0.4em] uppercase text-[10px] border-b border-black pb-1">MOTION SERIES</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-little-bean text-black mb-6 leading-[0.8] uppercase tracking-tighter">
              BEYOND THE <br />
              <span className="italic text-outline">SCROLL.</span>
            </h2>
            <p className="text-black/60 max-w-xl text-xl md:text-2xl font-adabelle leading-relaxed">
              High-impact visual narratives curated for the digital age. Minimal movement, maximum influence.
            </p>
          </motion.div>
        </div>

        {/* Animation Content */}
        <div className="relative w-full z-10 flex items-center">
          <div 
            ref={containerRef}
            className="flex flex-nowrap gap-6 md:gap-10 w-max px-[5vw] lg:px-[10vw] items-stretch"
          >
            {reels.map((reel, index) => (
              <ReelBox key={reel.id} reel={reel} index={index} />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
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
      className="relative shrink-0 w-[80vw] md:w-[280px] lg:w-[320px] aspect-[9/16] rounded-none overflow-hidden group cursor-pointer shadow-2xl transition-all duration-700 border border-black/10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={reel.video}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="absolute bottom-10 left-8 right-8 z-20 transition-all duration-500 group-hover:-translate-y-2">
        <h3 className="text-white text-2xl font-chalkboard mb-2 tracking-tight uppercase leading-none">{reel.title}</h3>
        <p className="text-white/60 text-[14px] font-adabelle tracking-wide uppercase mb-6">{reel.caption}</p>
        <div className="relative h-px w-full bg-white/20">
          <div 
            className="absolute top-0 left-0 h-full bg-white"
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
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none bg-black/20 backdrop-blur-[2px]"
          >
            <div className="w-16 h-16 border border-white/40 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-bold tracking-widest uppercase">PAUSE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
