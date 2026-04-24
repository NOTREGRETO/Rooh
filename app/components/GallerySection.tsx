"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const showcasePosters = [
  { id: 1, src: "/images/posters/poster1.webp" },
  { id: 2, src: "/images/posters/poster2.webp" },
  { id: 3, src: "/images/posters/poster3.webp" },
  { id: 4, src: "/images/posters/poster4.webp" },
  { id: 5, src: "/images/posters/poster5.webp" },
  { id: 6, src: "/images/posters/poster6.webp" },
  { id: 7, src: "/images/posters/poster7.webp" },
  { id: 8, src: "/images/posters/107630232404915.689b8d4f83a6e.webp" },
  { id: 9, src: "/images/posters/1511b4232404915.689b8d4f818f4.webp" },
  { id: 10, src: "/images/posters/3219fc232404915.689b8d4f84c04.webp" },
  { id: 11, src: "/images/posters/46c769232404915.689b8d4dd2161.webp" },
  { id: 12, src: "/images/posters/8eec15232404915.689b8d4f84640.webp" },
];

export default function GallerySection() {
  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-12 flex justify-center">
      {/* Outer Framed Box */}
      <div className="w-full max-w-[1200px] border-[2px] border-black rounded-[24px] overflow-hidden bg-white shadow-[12px_12px_0px_rgba(0,0,0,0.05)]">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-8 md:px-12 py-8 border-b-[2px] border-black bg-white">
          <h2 className="text-[32px] md:text-[42px] font-serif font-black text-black leading-tight">
            Curated Youtube Thumbnails
          </h2>
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase text-black/40 mt-4 md:mt-0">
            CURATED BY FIRE – Social Media Manager
          </span>
        </div>

        {/* Content Section with Grid Background */}
        <div className="relative p-8 md:p-12 lg:p-16 grid-bg">
          <div className="absolute inset-0 bg-white/40 pointer-events-none" />
          
          {/* 2x2 Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {showcasePosters.map((poster, index) => (
              <motion.div
                key={poster.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-2 md:p-3 border-[2px] border-black rounded-[12px] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-[8px]">
                  <Image
                    src={poster.src}
                    alt={`Showcase poster ${poster.id}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar (Optional aesthetic) */}
        <div className="h-4 border-t-[2px] border-black bg-white" />
      </div>
    </section>
  );
}

