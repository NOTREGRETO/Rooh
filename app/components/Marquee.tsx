export default function Marquee() {
  return (
    <div className="relative w-full bg-black py-5 md:py-8 border-y border-white/10 overflow-hidden whitespace-nowrap z-[5] my-10 md:my-16">
      <div className="flex animate-marquee">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex items-center">
            <div className="flex items-center px-8 md:px-12 gap-4 md:gap-6">
              <span className="text-[14px] md:text-[20px] font-kiddos tracking-[0.1em] text-white uppercase">
                ROOHI STUDIO
              </span>
              <span className="text-white/20 text-xs">✦</span>
              <span className="text-[12px] md:text-[16px] font-adabelle tracking-[0.05em] text-white/40 uppercase italic">
                Minimalism in Motion
              </span>
            </div>
            <span className="text-sm text-white/20 px-4">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
