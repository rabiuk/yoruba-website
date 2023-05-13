import "./globals.css";
import FunFacts from "@/components/FunFacts/FunFacts";
import HeroSection from "@/components/HeroSection/Hero";
import InfoSection from "@/components/InfoSection/Info";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "@/components/InfoSection/Data";
import Carousel from "@/components/Carousel/CarouselSS";
export default function Home() {
  return (
    <>
      {/* <HeroSection BackgroundComponent={<Carousel />} /> */}
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <FunFacts />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}
