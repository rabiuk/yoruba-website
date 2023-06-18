"use client";
import { useState } from "react";
import {
  HeroContainer,
  Overlay,
  HeroBg,
  HeroContent,
  LeftContainer,
  RightContainer,
  Card,
  HeroH1,
  HeroH2,
  HeroH22,
  HeroP,
  HeroBtnWrapper,
  ArrowDropDown,
  ArrowDownward,
} from "./HeroElements";
import CardStack from "../CardStack/CardStack";
import { H1, P, Span } from "@/components/Typography/Typography";

import { ButtonScroll } from "@/components/ButtonElements";
const HeroSection = ({ children }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      {/* <HeroBg> */}
      {/* <Overlay /> */}
      {/* {children} */}
      {/* </HeroBg> */}
      <HeroContent>
        <LeftContainer>
          <H1 textColor fontSize="60">
            Experience Yoruba{" "}
            <Span primary fontSize="60" fontWeight={800}>
              Redifined
            </Span>
          </H1>
          {/* <HeroH2>Ẹkú dédé àsikoyí</HeroH2>
        <HeroH22>&#40;Welcome&#41;</HeroH22> */}
          <P fontSize="18">
            Discover the richness of Yoruba. Your ultimate guide to learning the
            language and connecting with the culture. Experience the beauty,
            dive into the vibrancy, and enrich your understanding of Yoruba
            today.
          </P>
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
            >
              Get Started {hover ? <ArrowDownward /> : <ArrowDropDown />}
            </ButtonScroll>
          </HeroBtnWrapper>
        </LeftContainer>
        <RightContainer>
          <Card>
            <CardStack />
          </Card>
        </RightContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
