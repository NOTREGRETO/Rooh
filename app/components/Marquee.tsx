export default function Marquee() {
  return (
    <div className="bg-bg-light-pink py-4 border-y border-accent-pink/10 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="flex items-center">
            <div className="flex items-center px-10 gap-4">
              <span className="text-[13px] font-black tracking-[0.2em] text-accent-pink uppercase">
                CURATED BY FIRE
              </span>
              <span className="text-accent-pink/30 text-xs">✦</span>
              <span className="text-[11px] font-bold tracking-[0.1em] text-accent-pink/60 uppercase">
                Growth • Clarity • Aesthetics
              </span>
            </div>
            <span className="text-sm text-accent-pink/30 px-2">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
