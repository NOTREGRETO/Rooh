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
 
    let ctx = gsap.context(() => {
      if (!containerRef.current || !triggerRef.current) return;

      const items = containerRef.current;
      
      const getScrollAmount = () => {
        let itemsWidth = items.scrollWidth;
        return -(itemsWidth - window.innerWidth + (window.innerWidth * 0.05));
      };

      const scrollAmount = items.scrollWidth - window.innerWidth;
      
      gsap.to(items, {
        x: () => -(items.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top+=80", 
          end: () => `+=${items.scrollWidth - window.innerWidth}`, 
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
 
      // Staggered entrance for cards
      gsap.from(items.children, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 85%",
        }
      });
    }, triggerRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    
    const timers = [500, 1500, 3000].map(ms => setTimeout(refresh, ms));

    return () => {
      ctx.revert();
      window.removeEventListener('load', refresh);
      timers.forEach(clearTimeout);
    };
  }, []);


  return (
    <div 
      ref={triggerRef} 
      className={`watch-section relative w-full overflow-hidden border-y border-black/5 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'} z-[5]`}
    >
      <section className="reel-section min-h-screen flex flex-col justify-center py-12 relative overflow-hidden safari-fix">
        <div className="w-full mb-12 relative z-20">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-black/30" />
                <span className="text-[14px] font-chalkboard tracking-[0.2em] uppercase text-black/40">EXPERIENCE THE FLOW</span>
              </div>
              <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-little-bean leading-[0.85] uppercase tracking-tighter mb-8 text-black">
                WATCH THE <br />
                <span className="text-outline italic">VIBE.</span>
              </h2>
              <p className="text-xl md:text-3xl text-black/60 font-adabelle leading-relaxed max-w-xl">
                Where high-contrast motion meets minimalist strategy. A curated sensory experience by Roohi.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative w-full z-10 flex items-center overflow-visible">
          <div 
            ref={containerRef}
            className="flex flex-nowrap gap-6 md:gap-8 w-max items-stretch reel-container snap-x snap-mandatory will-change-transform"
          >
            {reels.map((reel, index) => (
              <ReelBox key={reel.id} reel={reel} index={index} />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
      </section>

      <style jsx>{`
          position: relative;
          z-index: 5;
        }
        .reel-section {
          padding-left: max(24px, calc((100vw - 1200px) / 2));
          padding-right: max(24px, calc((100vw - 1200px) / 2));
        }
        .reel-container {
          padding-left: 0;
          padding-right: 40px;
          scroll-padding-left: 40px;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
        }
        .text-outline {
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.4);
          color: transparent;
        }
        @media (max-width: 768px) {
          .reel-container {
            padding-right: 20px;
            scroll-padding-left: 16px;
          }
          .reel-section {
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
      className="relative flex-none w-[85vw] md:w-[clamp(280px,30vw,360px)] max-w-[90vw] aspect-[9/16] rounded-none overflow-hidden group cursor-pointer border border-white/5 h-full will-change-transform snap-start"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={reel.video}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
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
