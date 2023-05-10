import React from "react";
import TallShortSVG from "../../svg/TallShortSVG.svg";
import {
  Container,
  IntroWrapper,
  IntroBackground,
  Content1,
  Content2,
  ImgWrap,
  IntroH1,
  IntroP,
  BtnWrapper,
  BtnContainer,
} from "./AdjectivesElements";
import { ButtonLink, ButtonScroll } from "@/components/ButtonElements";

const Adjectives = () => {
  return (
    <>
      <Container>
        <IntroBackground>
          <IntroWrapper>
            <Content1>
              <IntroH1>Adjectives</IntroH1>
              <IntroP>
                Moving on from Nouns, this lesson will focus on essential Yoruba
                adjectives for daily communication. You'll learn the adjectives
                and their meanings, further strengthening your foundation in the
                Yoruba language. Click "Learn" to delve into the content, and
                "Start Quiz" to assess your understanding of these important
                adjectives.
              </IntroP>
              <BtnContainer>
                <BtnWrapper>
                  <ButtonScroll
                    to="#"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={true ? 1 : 0}
                    dark={true ? 1 : 0}
                    dark2={true ? 1 : 0}
                  >
                    Learn
                  </ButtonScroll>
                </BtnWrapper>
                <BtnWrapper>
                  <ButtonLink
                    href="/lessons/adjectives/quiz"
                    primary={true ? 1 : 0}
                    dark={true ? 1 : 0}
                    dark2={true ? 1 : 0}
                  >
                    Start Quiz
                  </ButtonLink>
                </BtnWrapper>
              </BtnContainer>
            </Content1>
            <Content2>
              <ImgWrap>
                <TallShortSVG />
              </ImgWrap>
            </Content2>
          </IntroWrapper>
        </IntroBackground>
        <h1>...</h1>
      </Container>
    </>
  );
};

export default Adjectives;