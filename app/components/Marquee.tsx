export default function Marquee() {
  return (
    <div className="bg-black py-5 border-y border-white/10 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex items-center">
            <div className="flex items-center px-12 gap-6">
              <span className="text-[14px] font-black tracking-[0.3em] text-white uppercase">
                ROOHI STUDIO
              </span>
              <span className="text-white/20 text-xs">✦</span>
              <span className="text-[12px] font-bold tracking-[0.2em] text-white/40 uppercase italic font-serif">
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
