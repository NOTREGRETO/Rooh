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

  if (!mounted) return <div className="h-screen bg-white" />;

  return (
    <div ref={triggerRef} className="bg-white w-full overflow-hidden border-y border-black/5">
      <section className="h-screen flex flex-col justify-center py-0 px-6 md:px-12 relative overflow-hidden">
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
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-black/40">EXPERIENCE THE FLOW</span>
              </div>
              <h2 className="text-[50px] md:text-[100px] font-black leading-[0.85] uppercase tracking-tighter mb-8 text-black">
                WATCH THE <br />
                <span className="text-outline italic">VIBE.</span>
              </h2>
              <p className="text-xl md:text-2xl text-black/50 font-medium max-w-xl leading-relaxed">
                Where high-contrast motion meets minimalist strategy. A curated sensory experience by Roohi.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Animation Content */}
        <div className="relative w-full z-10 flex items-center">
          <div 
            ref={containerRef}
            className="flex flex-nowrap gap-8 md:gap-12 w-max px-[5vw] lg:px-[10vw] items-stretch"
          >
            {reels.map((reel, index) => (
              <ReelBox key={reel.id} reel={reel} index={index} />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
      </section>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.4);
          color: transparent;
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
    videoRef.current?.play();
  };

  return (
    <div
      className="relative shrink-0 w-[80vw] md:w-[320px] lg:w-[380px] aspect-[9/16] rounded-none overflow-hidden group cursor-pointer border border-white/5"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="absolute bottom-12 left-10 right-10 z-20 transition-all duration-500 group-hover:-translate-y-2">
        <h3 className="text-white text-2xl font-black mb-3 tracking-tighter uppercase leading-none italic">{reel.title}</h3>
        <p className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-8">{reel.caption}</p>
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
