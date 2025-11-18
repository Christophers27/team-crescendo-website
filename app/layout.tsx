import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const goudos = localFont({ src: "./goudos.ttf" });

export const metadata: Metadata = {
  title: "Team Crescendo | Indie Game Studio",
  description:
    "Team Crescendo is an indie game studio crafting immersive, story-driven adventures. Our debut game, Memoria Wake, is coming soon.",
  keywords: [
    "indie game studio",
    "Memoria Wake",
    "story-driven games",
    "Team Crescendo",
  ],
  openGraph: {
    title: "Team Crescendo | Indie Game Studio",
    description:
      "Creating games that inspire. Memoria Wake - a top-down adventure game - coming soon.",
    images: [
      {
        url: "https://www.team-crescendo.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Team Crescendo Logo",
      },
    ],
    type: "website",
    url: "https://www.team-crescendo.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Crescendo | Indie Game Studio",
    description: "Creating games that inspire. Memoria Wake - coming soon.",
    images: ["https://www.team-crescendo.com/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${goudos.className} ${inter.variable} antialiased bg-crescendo-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
