"use client";
import { useState } from "react";
import {
  HeroContainer,
  Overlay,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroH22,
  HeroP,
  HeroBtnWrapper,
  ArrowDropDown,
  ArrowDownward,
} from "./HeroElements";

import { ButtonScroll } from "@/components/ButtonElements";
const HeroSection = ({ children }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <Overlay />
        {children}
      </HeroBg>
      <HeroContent>
        <HeroH1>Let&#39;s Learn Yoruba</HeroH1>
        <HeroH2>Ẹkú dédé àsikoyí</HeroH2>
        <HeroH22>&#40;Welcome&#41;</HeroH22>
        <HeroP>
          Welcome to [insert website name here] , here we celebrate the beauty
          and richness of Yoruba culture and language. Our goal is to provide a
          comprehensive resource for those who want to learn more about the
          vibrant culture and deepen their connection to it.
        </HeroP>
        <HeroBtnWrapper>
          <ButtonScroll
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Start Learning {hover ? <ArrowDownward /> : <ArrowDropDown />}
          </ButtonScroll>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
