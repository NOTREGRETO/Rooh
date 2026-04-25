import type { Metadata } from "next";
import { Outfit, DM_Serif_Display, Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

const adabelle = localFont({
  src: "../public/fonts/AdabelleHandwriting-Regular.ttf",
  variable: "--font-adabelle",
});

const chalkboard = localFont({
  src: "../public/fonts/Chalkboard-Regular.ttf",
  variable: "--font-chalkboard",
});

const kiddos = localFont({
  src: "../public/fonts/KIdDOS-Regular.ttf",
  variable: "--font-kiddos",
});

const littleBean = localFont({
  src: "../public/fonts/LittleBean-Regular.ttf",
  variable: "--font-little-bean",
});

export const metadata: Metadata = {
  title: "plm. | The Community for Social Media Marketers",
  description: "Where socials get simple and marketers get connected.",
};

import SmoothScroll from "./components/SmoothScroll";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSerif.variable} ${inter.variable} ${playfair.variable} ${adabelle.variable} ${chalkboard.variable} ${kiddos.variable} ${littleBean.variable}`}>
      <body className="bg-[#f7f4ef] text-[#1a1a1a] antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
