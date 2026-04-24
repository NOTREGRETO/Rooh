import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FeatureCards from "./components/FeatureCards";
import GallerySection from "./components/GallerySection";
import Members from "./components/Members";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <FeatureCards />
      <GallerySection />
      <Members />

    </main>
  );
}
