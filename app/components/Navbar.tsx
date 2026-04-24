import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top Strip */}
      <div className="w-full bg-soft-pink/30 h-8 flex items-center justify-center border-b border-accent-pink/10">
        <p className="text-[10px] font-bold tracking-widest uppercase text-accent-pink">Join the insiders club!</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 mt-4">
        <nav className="bg-bg-white/95 backdrop-blur-md border border-accent-pink/10 rounded-2xl px-6 h-20 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:scale-105 transition-transform">
            <Image 
              src="/images/logo.png" 
              alt="Pretty Little Marketer" 
              width={180} 
              height={56} 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Links */}
          <div className="hidden lg:flex items-center gap-10">
            {["ABOUT", "COHORTS", "BLOG", "TEMPLATE SHOP", "GET INVOLVED"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[10px] font-bold tracking-widest text-text-dark hover:text-accent-pink transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="bg-accent-pink hover:bg-accent-pink-hover text-white px-8 py-3 rounded-full text-[11px] font-bold shadow-lg shadow-accent-pink/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              Join The Club
            </button>
            <button className="p-2.5 text-text-dark hover:text-accent-pink transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
