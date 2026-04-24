"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const members = [
  { 
    name: "Ornella", 
    desc: "A community of marketing nerds, daily newsletter filled with value-driven updates, and amazing webinars!", 
    img: "/images/ornella.png" 
  },
  { 
    name: "Gabriela", 
    desc: "I love PLM because it's the one place where marketers genuinely help each other grow without ego, noise, or judgment.", 
    img: "/images/ornella.png" 
  },
  { 
    name: "Faye", 
    desc: "Being in a one-woman marketing team isn't so lonely anymore, all thanks to the community here.", 
    img: "/images/ornella.png" 
  },
  { 
    name: "Nat", 
    desc: "It's the support, the non-judgmental space, and the feeling of being part of this space that makes PLM special.", 
    img: "/images/ornella.png" 
  },
];

export default function Members() {
  return (
    <section className="py-10 bg-bg-light-pink relative overflow-hidden border-y border-accent-pink/5">
      {/* Premium Soft Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-accent-pink) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-accent-pink) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-accent-pink block mb-4">
            COMMUNITY
          </span>
          <h2 className="text-[36px] md:text-[52px] font-serif font-bold text-text-dark tracking-tight leading-tight">
            Meet our members
          </h2>
        </div>

        {/* Grid Layout Fix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255,77,141,0.08)" }}
              className="bg-white rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-accent-pink/5 transition-all duration-300 h-full"
            >
              {/* Profile Image Fix */}
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-8 ring-8 ring-accent-pink/5 relative shrink-0">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-[20px] font-bold text-text-dark mb-4">{member.name}</h3>
              <p className="text-[14px] leading-relaxed text-text-body italic">
                "{member.desc}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
