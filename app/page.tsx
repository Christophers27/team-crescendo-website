import Image from "next/image";
import AboutHome from "@/components/sections/aboutHome";
import GamesIntro from "@/components/sections/gamesHome";
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
      <AboutHome />
      <ImageDivider />
      <GamesIntro />
    </main>
  );
}
