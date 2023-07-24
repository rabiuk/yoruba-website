// import HeroSection from "@/components/HeroSection/Hero";
// import FunFacts from "@/components/FunFacts/FunFacts";
// import InfoSection from "@/components/InfoSection/Info";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "@/components/InfoSection/Data";
import Carousel from "@/components/Carousel/CarouselSS";
import dynamic from "next/dynamic";
// import { ContentContainer } from "./HomepageElements";

const HeroSection = dynamic(() => import("@/components/HeroSection/Herotw"), {
  ssr: false,
});

const InfoSection = dynamic(() => import("@/components/InfoSection/Info"), {
  ssr: false,
});
const FunFacts = dynamic(() => import("@/components/FunFacts/FunFacts"), {
  ssr: false,
});
const Banner = dynamic(() => import("@/components/Banner.tsx"), {
  ssr: false,
});
// const AboutYoruba = dynamic(
//   () => import("@/components/AboutYoruba/AboutYoruba"),
//   {
//     ssr: false,
//   }
// );

export default function Home() {
  return (
    <>
      <HeroSection>
        <Carousel className="hero-carousel" />
      </HeroSection>
      {/* <Banner /> */}
      {/* <AboutYoruba /> */}
      {/* <ContentContainer> */}
      <InfoSection {...homeObjOne} />
      <FunFacts />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Banner />
      {/* </ContentContainer> */}
    </>
  );
}
