import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Crescendo",
  description: "An indie game dev team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Image
          src="/background.png"
          alt="Background image"
          fill={true}
          objectFit="cover"
          className="-z-10"
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
