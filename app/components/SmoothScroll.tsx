"use client";
 
import { useEffect } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
 
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
 
    lenis.on('scroll', ScrollTrigger.update);
 
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
 
    requestAnimationFrame(raf);
 
    return () => {
      lenis.destroy();
    };
  }, [pathname]);
 
  return <>{children}</>;
}
