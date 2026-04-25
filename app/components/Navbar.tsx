import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-bg-white/80 backdrop-blur-xl border-b border-border-main">
      <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-70 transition-opacity">
          <div className="relative h-16 w-48">
            <Image 
              src="/img/logo_clean.png" 
              alt="Roohi Logo" 
              fill 
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-12">
          {["ABOUT", "BLOG", "WORKS"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[14px] font-chalkboard tracking-[0.1em] text-text-dark hover:opacity-50 transition-opacity"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-8">
          <Link 
            href="#contact" 
            className="text-[14px] font-chalkboard tracking-[0.1em] hidden sm:block hover:opacity-50 transition-opacity"
          >
            LET'S TALK
          </Link>
          <button className="p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
