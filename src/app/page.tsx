import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("../components/Carousel/Carousel"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("@/components/HeroSection/Herotw"), {
  ssr: false,
});
const InfoSection = dynamic(() => import("@/components/InfoSection/Info"), {
  ssr: false,
});
const FunFacts = dynamic(() => import("@/components/FunFacts/FunFacts"), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Carousel />
      </HeroSection>
      <InfoSection {...homeObjOne} />
      <FunFacts />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
