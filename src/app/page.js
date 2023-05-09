import "./globals.css";
import FunFacts from "@/components/FunFacts/FunFacts";
import HeroSection from "@/components/HeroSection/Hero";
import InfoSection from "@/components/InfoSection/Info";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "@/components/InfoSection/Data";
export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <FunFacts />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}
