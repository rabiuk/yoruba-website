import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection/HeroSection";

const InfoSection = dynamic(() => import("../components/InfoSection/InfoSection"), {
  ssr: false,
});
const FunFacts = dynamic(() => import("../components/FunFacts/FunFacts"), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <>
      <HeroSection/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <FunFacts />
    </>
  );
};

export default Home;
