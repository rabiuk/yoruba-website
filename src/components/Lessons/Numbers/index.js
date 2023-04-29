import React from "react";
import { ReactComponent as Chalkboard } from "../../../images/blackboard-with-chalk-texture(2).svg";

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
} from "./NumbersElements";
import { ButtonLink, ButtonScroll } from "../../../components/ButtonElements";

const Numbers = () => {
  return (
    <>
      <Container>
        <IntroBackground>
          <IntroWrapper>
            <Content1>
              <IntroH1>Numbers & Counting</IntroH1>
              <IntroP>
                In this lesson, you'll master essential numbers and counting
                techniques for everyday communication. Here, you'll learn the
                numbers and what they mean, building your foundation for
                speaking Yoruba. Click "Learn" to explore the content and "Start
                Quiz" to test your skills.
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
              <ImgWrap>
                <Chalkboard />
              </ImgWrap>
            </Content2>
          </IntroWrapper>
        </IntroBackground>
        <h1>...</h1>
      </Container>
    </>
  );
};

export default Numbers;
