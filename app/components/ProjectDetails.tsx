"use client";

import { motion } from "framer-motion";

export default function ProjectDetails() {
  const stats = [
    { label: "Appreciations", value: "33", icon: "❤️" },
    { label: "Comments", value: "0", icon: "💬" },
    { label: "Views/Projects", value: "2", icon: "👁️" },
  ];

  const creativeFields = ["Branding", "Graphic Design", "Logo Design"];
  const tags = [
    "socialmediamanager", "SMM", "SocialMediaManagement", 
    "Social media post", "Graphic Designer", "branding", 
    "visual identity", "design"
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#FFF5F8] via-[#FDE7EE] to-[#FFF5F8] overflow-hidden border-y border-[#F8D7E1]/40">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-accent-pink/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="flex flex-col gap-6">
            <span className="text-[13px] font-black tracking-[0.5em] uppercase text-accent-pink/80 flex items-center gap-3">
              <span className="w-12 h-[1px] bg-accent-pink/30" />
              Case Study
            </span>
            
            <h1 className="text-[58px] md:text-[92px] font-serif font-black text-[#1A1A1A] leading-[0.9] tracking-tight">
              Workfolio: <span className="bg-gradient-to-r from-accent-pink to-[#FF85B1] bg-clip-text text-transparent italic">CuratedByFire</span>
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-[15px] mt-6">
              <div className="flex items-center gap-3 px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-full border border-white/60 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-pink animate-pulse shadow-[0_0_12px_rgba(255,77,141,0.5)]" />
                <span className="font-bold text-[#1A1A1A]">Rooh Sidhu</span>
              </div>
              <span className="text-[#1A1A1A]/40 font-bold tracking-wide">Jaipur, India</span>
              <div className="h-4 w-[1px] bg-[#1A1A1A]/10 hidden sm:block" />
              <span className="text-accent-pink/70 uppercase tracking-[0.25em] text-[11px] font-black">
                Published: Aug 13, 2025
              </span>
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Main Content Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex"
          >
            <div className="bg-white/50 backdrop-blur-2xl p-12 md:p-20 rounded-[48px] border border-white shadow-[0_30px_60px_rgba(255,77,141,0.08)] relative overflow-hidden group w-full flex flex-col justify-between">
              {/* Decorative Quote Mark */}
              <div className="absolute -top-10 -left-6 text-[240px] font-serif text-accent-pink opacity-[0.04] select-none pointer-events-none">"</div>
              
              <div className="relative">
                <div className="flex gap-8 mb-12">
                  <div className="w-2 bg-gradient-to-b from-accent-pink via-accent-pink/50 to-transparent rounded-full self-stretch" />
                  <p className="text-[28px] md:text-[36px] leading-[1.4] text-[#1A1A1A] font-serif italic tracking-tight font-medium">
                    "A comprehensive branding and social media management project focused on visual identity and creative strategy. This workfolio showcases a blend of modern aesthetics."
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mt-12">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-5 px-8 py-5 bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-sm hover:shadow-2xl transition-all duration-500 group/pill"
                  >
                    <span className="text-3xl group-hover/pill:scale-110 transition-transform duration-500">{stat.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-[24px] font-black text-[#1A1A1A] leading-none">{stat.value}</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-pink/60 mt-1.5">{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Tools Card */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="bg-white/60 backdrop-blur-xl p-10 rounded-[40px] border border-white shadow-[0_20px_45px_rgba(255,77,141,0.06)] hover:shadow-[0_30px_60px_rgba(255,77,141,0.12)] transition-all duration-500 group flex-1 flex flex-col"
            >
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]/40 mb-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-pink/30" />
                Tools Used
              </h4>
              <div className="flex flex-col items-center justify-center flex-1 gap-5">
                <div className="w-24 h-24 bg-gradient-to-br from-white to-[#FFF5F8] rounded-[32px] shadow-xl border border-white flex items-center justify-center text-accent-pink group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-[28px] font-black text-[#1A1A1A] tracking-tight">Canva</span>
              </div>
            </motion.div>

            {/* Creative Fields Card */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="bg-white/60 backdrop-blur-xl p-10 rounded-[40px] border border-white shadow-[0_20px_45px_rgba(255,77,141,0.06)] hover:shadow-[0_30px_60px_rgba(255,77,141,0.12)] transition-all duration-500 flex-1"
            >
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]/40 mb-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-pink/30" />
                Creative Fields
              </h4>
              <div className="flex flex-wrap gap-4">
                {creativeFields.map((field, i) => (
                  <span 
                    key={i} 
                    className="px-8 py-3 bg-white/80 border border-white rounded-full text-[14px] font-bold text-accent-pink shadow-sm hover:bg-accent-pink hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tags Card */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="bg-white/60 backdrop-blur-xl p-10 rounded-[40px] border border-white shadow-[0_20px_45px_rgba(255,77,141,0.06)] hover:shadow-[0_30px_60px_rgba(255,77,141,0.12)] transition-all duration-500 flex-1"
            >
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]/40 mb-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-pink/30" />
                Project Tags
              </h4>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-5 py-2.5 bg-white/50 border border-white/50 rounded-2xl text-[13px] font-bold text-[#1A1A1A]/60 hover:bg-white hover:text-accent-pink hover:scale-110 hover:shadow-lg transition-all duration-500 cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
