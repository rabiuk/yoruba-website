import React from "react";
import AlphabetBlocksSVG from "../../svg/AlphabetBlocksSVG.svg";
import {
  Container,
  Bg,
  IntroWrapper,
  IntroBackground,
  IntroContent,
  Content1,
  Content2,
  ImgWrap,
  IntroH1,
  IntroP,
  BtnWrapper,
  BtnContainer,
} from "./YorubaAlphabetElements";
import { ButtonLink, ButtonScroll } from "../../ButtonElements";

const YorubaAlphabet = () => {
  return (
    <>
      <Container>
        <IntroBackground>
          <IntroWrapper>
            <Content1>
              <IntroH1>Learn The Yoruba Alphabet</IntroH1>
              <IntroP>
                Explore Yoruba's alphabet with engaging flashcards in an
                interactive quiz. Learn letter sounds and example words, flip
                cards to reveal pronunciation and meaning, and use next/previous
                buttons to learn at your pace.
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
                    href="/lessons/yoruba-alphabet/quiz"
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
                <AlphabetBlocksSVG />
              </ImgWrap>
            </Content2>
          </IntroWrapper>
        </IntroBackground>
        <h1>...</h1>
      </Container>
    </>
  );
};

export default YorubaAlphabet;
