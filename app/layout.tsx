import type { Metadata } from "next";
import { Outfit, DM_Serif_Display, Inter, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "plm. | The Community for Social Media Marketers",
  description: "Where socials get simple and marketers get connected.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSerif.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#f7f4ef] text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  );
}
