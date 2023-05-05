import React from "react";
// import { ReactComponent as Nouns } from "../../../images/Nouns(1).svg";

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
} from "./YorubaAdjectiveElements";
import { ButtonLink, ButtonScroll } from "../../ButtonElements";

const BasicPhrasesII = () => {
  return (
    <>
      <Container>
        <IntroBackground>
          <IntroWrapper>
            <Content1>
              <IntroH1>Basic Phrases III (Adjectives)</IntroH1>
              <IntroP>
                Moving on from Basic Phrases II, this lesson will focus on
                essential Yoruba adjectives for daily communication. You'll
                learn the adjectives and their meanings, further strengthening
                your foundation in the Yoruba language. Click "Learn" to delve
                into the content, and "Start Quiz" to assess your understanding
                of these important adjectives.
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
                    to="quiz"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
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
              <ImgWrap>{/* <Nouns /> */}</ImgWrap>
            </Content2>
          </IntroWrapper>
        </IntroBackground>
        <h1>...</h1>
      </Container>
    </>
  );
};

export default BasicPhrasesII;
