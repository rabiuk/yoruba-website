import React from "react";
import NounsSVG from "../../svg/NounsSVG.svg";

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
} from "./NounsElements";
import { ButtonLink, ButtonScroll } from "../../ButtonElements";

const Nouns = () => {
  return (
    <>
      <Container>
        <IntroBackground>
          <IntroWrapper>
            <Content1>
              <IntroH1>Nouns</IntroH1>
              <IntroP>
                Following up on the essential verbs learned in Verbs, this
                lesson will help you master essential nouns for everyday
                communication. Here, you'll learn the words and what they mean,
                continuing to build your foundation for speaking Yoruba. Click
                "Learn" to explore the content and "Start Quiz" to test your
                skills.
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
                    href="/lessons/nouns/quiz"
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
                <NounsSVG />
              </ImgWrap>
            </Content2>
          </IntroWrapper>
        </IntroBackground>
        <h1>...</h1>
      </Container>
    </>
  );
};

export default Nouns;