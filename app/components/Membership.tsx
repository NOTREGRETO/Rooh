"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Membership() {
  return (
    <section className="py-12 bg-bg-white overflow-hidden border-y border-accent-pink/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Small Label */}
            <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-accent-pink block mb-6">
              MEMBERSHIP
            </span>

            {/* Main Heading with Floating Disco Ball */}
            <div className="relative inline-block mb-10">
              <h2 className="text-[48px] md:text-[64px] leading-[1.05] font-serif text-text-dark lowercase tracking-tight">
                join the plm<br />
                insiders club
              </h2>
              {/* Floating Disco Ball Decor */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20px] right-[-40px] md:right-[-60px] w-14 h-14 md:w-16 md:h-16 z-20 pointer-events-none"
              >
                <span className="text-5xl md:text-6xl filter drop-shadow-md">🪩</span>
              </motion.div>
            </div>

            {/* Subheading (Bold Paragraph) */}
            <p className="text-[18px] md:text-[20px] font-bold leading-relaxed text-text-dark mb-8 max-w-[500px]">
              This Is Where The Overwhelmed Become Confident, The Strategy-Confused Get Clarity, And The Community-Obsessed Find Their People.
            </p>

            {/* Description Text */}
            <div className="text-[14px] md:text-[16px] leading-relaxed text-text-body mb-12 max-w-[520px] space-y-6">
              <p>
                A space where you can ask questions without judgement, connect with people who actually understand your struggles and learn from experts who keep it real.
              </p>
              <p className="font-medium text-accent-pink">Ready to stop doing social media alone?</p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent-pink hover:bg-accent-pink-hover text-white px-10 py-5 rounded-full text-[14px] font-bold shadow-xl shadow-accent-pink/20 transition-all flex items-center gap-3 group"
            >
              Join The Waitlist - Doors Open Quarterly!
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative z-10 rounded-[20px] overflow-hidden shadow-[0_30px_60px_rgba(255,77,141,0.15)]">
              <Image
                src="/images/membership_gathering.png"
                alt="PLM Insiders Club Gathering"
                width={600}
                height={750}
                className="object-cover aspect-[4/5] w-full"
              />
            </div>
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-soft-pink/20 blur-[100px] -z-10 transform translate-x-10 translate-y-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
