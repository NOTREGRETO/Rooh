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
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "Blog", href: "#blog" },
            { name: "Portfolio / Case Study's", href: "#portfolio" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-[family-name:var(--font-inter)] font-medium text-[#1a1a1a] hover:text-[#555555] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <Link 
            href="#contact" 
            className="px-6 py-2.5 rounded-full bg-[#1a1a1a] text-white text-[14px] font-[family-name:var(--font-inter)] font-semibold hidden sm:block hover:bg-[#333333] hover:shadow-md transition-all"
          >
            Let's Talk
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
