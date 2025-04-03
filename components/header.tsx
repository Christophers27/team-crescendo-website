import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="sticky top-0 z-999 px-8 md:px-16 lg:px-32 py-4 transition backdrop-blur-lg hover:bg-crescendo-black text-crescendo-white flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
      <Link href="/">
          <div className="flex flex-row items-center gap-4 h-full hover:bg-crescendo-purple transition duration-300 ease-in-out px-4 py-1 rounded-full">
            <div className="relative h-[1.5em] w-auto">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="h-full w-auto object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold">Team Crescendo</h1>
          </div>
      </Link>

      <div className="md:hidden h-0.5 w-full bg-crescendo-white rounded-full" />
      <div className="flex flex-col md:flex-row md:gap-4">
        <Link
          href="memoria-wake"
          className="px-4 py-1 md:py-2 hover:bg-crescendo-purple rounded-full transition duration-300 ease-in-out text-center"
        >
          Memoria Wake
        </Link>
        <Link
          href="about"
          className="px-4 py-1 md:py-2 hover:bg-crescendo-purple rounded-full transition duration-300 ease-in-out text-center"
        >
          About
        </Link>
      </div>
    </nav>
  );
}