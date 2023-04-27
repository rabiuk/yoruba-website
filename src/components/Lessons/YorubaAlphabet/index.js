import React from "react";
import {
  Container,
  Bg,
  IntroWrapper,
  IntroBackground,
  IntroContent,
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
        {/* <Bg></Bg> */}
        <IntroBackground>
          <IntroWrapper>
            <IntroH1>Learn The Yoruba Alphabet</IntroH1>
            <IntroP>
              Discover the unique characters and sounds of the Yoruba alphabet,
              an essential part of the Yoruba language. In this interactive
              quiz, you'll be presented with engaging flashcards that display
              the Yoruba alphabet, along with example words that use each
              letter. Test your knowledge by flipping the cards to reveal the
              word's pronunciation and meaning. Easily navigate through the
              flashcards using the "Next" and "Previous" buttons, allowing you
              to learn at your own pace.
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
          </IntroWrapper>
        </IntroBackground>
      </Container>
    </>
  );
};

export default YorubaAlphabet;
