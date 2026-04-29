"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Use a very negative initial position so it doesn't flash on screen before first move
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Velocity tracking for tilt
  const rotationZ = useSpring(0, { stiffness: 150, damping: 20 });

  // Instant primary cursor
  const primaryX = useSpring(mouseX, { stiffness: 1500, damping: 40, mass: 0.1 });
  const primaryY = useSpring(mouseY, { stiffness: 1500, damping: 40, mass: 0.1 });

  // Smooth follower cursor
  const followerX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const followerY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    setMounted(true);
    let lastX = -1000;
    
    // Add global style to hide default cursor completely across the app
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const dx = e.clientX - lastX;
      if (lastX !== -1000) {
        // Tilt cursor based on horizontal velocity (max 20 degrees)
        rotationZ.set(Math.max(-20, Math.min(20, dx * 0.3)));
      }
      lastX = e.clientX;
    };

    const resetTilt = () => {
      rotationZ.set(0);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    // When mouse stops moving, reset tilt
    let timeout: NodeJS.Timeout;
    const handleStop = () => {
      clearTimeout(timeout);
      timeout = setTimeout(resetTilt, 100);
    };
    window.addEventListener("mousemove", handleStop);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousemove", handleStop);
      document.head.removeChild(style);
    };
  }, [mouseX, mouseY, rotationZ]);

  if (!mounted) return null;

  return (
    <>
      {/* Follower Cursor (Blurred, semi-transparent, smooth delay, larger glow) */}
      <motion.div
        style={{
          x: followerX,
          y: followerY,
          rotate: rotationZ,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
      >
        <motion.div
          animate={{
            scale: isHovering ? 2 : 1.2,
            opacity: isHovering ? 0.9 : 0.5,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ originX: 0, originY: 0 }}
        >
          <svg 
            width="40" height="40" viewBox="0 0 28 28" 
            className="blur-[6px] drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] -ml-[3px] -mt-[3px]"
          >
            <path
              d="M3 3 L11.5 25 L15.5 16.5 L24 12.5 Z"
              fill="url(#grad_follower)"
              stroke="url(#grad_follower)"
              strokeWidth="5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="grad_follower" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
                <stop offset="50%" stopColor="#a855f7" /> {/* Purple */}
                <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      {/* Primary Cursor (Sharp, immediate) */}
      <motion.div
        style={{
          x: primaryX,
          y: primaryY,
          rotate: rotationZ,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.1 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ originX: 0, originY: 0 }}
        >
          <svg 
            width="28" height="28" viewBox="0 0 28 28" 
            className="drop-shadow-lg -ml-[3px] -mt-[3px]"
          >
            <path
              d="M3 3 L11.5 25 L15.5 16.5 L24 12.5 Z"
              fill="url(#grad_primary)"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="grad_primary" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
                <stop offset="50%" stopColor="#a855f7" /> {/* Purple */}
                <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
}
