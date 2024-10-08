import Image from "next/image";
import Intro from "@/components/sections/intro";
import Games from "@/components/sections/games";
import Title from "@/components/sections/title";
import ImageDivider from "@/components/imageDivider";

export default function Home() {
  return (
    <main className="">
      <div className="fixed top-0 left-0 w-full h-full -z-[998] bg-[#433d60]">
        <Image
          src="/background.png"
          alt="Background image"
          fill={true}
          objectFit="cover"
          className="-z-[999]"
        />
      </div>
      <Title />
      <Intro />
      <ImageDivider />
      <Games />
    </main>
  );
}
