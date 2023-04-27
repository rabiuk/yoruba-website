import React from "react";
import {
  Container,
  IntroBackground,
  IntroWrapper,
  IntroH1,
  IntroP,
  BtnContainer,
  BtnWrapper,
} from "./BasicPhrasesIElements";
import { ButtonLink, ButtonScroll } from "../../../ButtonElements";

const BasicPhrasesI = () => {
  return (
    <>
      <Container>
        {/* <Bg></Bg> */}
        <IntroBackground>
          <IntroWrapper>
            <IntroH1>Basic Phrases I: Verbs</IntroH1>
            <IntroP>
              In this lesson, you'll master essential verbs for everyday
              communication. Here, you'll learn the words and what they mean,
              building your foundation for speaking Yoruba. Click "Learn" to
              explore the content and "Start Quiz" to test your skills.
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

export default BasicPhrasesI;
