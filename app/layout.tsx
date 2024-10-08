import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Image from "next/image";
import MenuContextProvider from "@/context/menuContext";
import Footer from "@/components/footer";

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
        <MenuContextProvider>
          <Header />
          {children}
          <Footer />
        </MenuContextProvider>
      </body>
    </html>
  );
}
