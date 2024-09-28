import Intro from "@/components/intro";
import GamesSection from "@/components/gamesSection";
import Title from "@/components/title";
import ImageDivider from "@/components/imageDivider";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="">
      <Title />
      <Intro />
      <ImageDivider />
      <GamesSection />
      <Footer />
    </main>
  );
}
