import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Image from "next/image";
import MenuContextProvider from "@/context/menuContext";

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
        <div className="fixed top-0 left-0 w-full h-full -z-[998] bg-indigo-950">
          <Image
            src="/background.png"
            alt="Background image"
            fill={true}
            objectFit="cover"
            className="-z-[999]"
          />
        </div>

        <MenuContextProvider>
          <Header />
          {children}
        </MenuContextProvider>
      </body>
    </html>
  );
}
