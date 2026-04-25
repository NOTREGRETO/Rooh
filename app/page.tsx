import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WatchTheVibe from "./components/WatchTheVibe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-white relative">
      <Navbar />
      <Hero />
      <WatchTheVibe />
      <Footer />
    </main>
  );
}
