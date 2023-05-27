import HeroSection from "@/components/HeroSection/Hero";
// import FunFacts from "@/components/FunFacts/FunFacts";
// import InfoSection from "@/components/InfoSection/Info";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "@/components/InfoSection/Data";
import Carousel from "@/components/Carousel/CarouselSS";
import dynamic from "next/dynamic";

const InfoSection = dynamic(() => import("@/components/InfoSection/Info"), {
  ssr: false,
});
const FunFacts = dynamic(() => import("@/components/FunFacts/FunFacts"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <HeroSection>
        <Carousel className="hero-carousel" />
      </HeroSection>
      <InfoSection {...homeObjOne} />
      <FunFacts />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}
