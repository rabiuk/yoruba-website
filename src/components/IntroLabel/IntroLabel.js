import React from "react";
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
} from "./IntroLabelElements";
import { ButtonLink, ButtonScroll } from "@/components/ButtonElements";

const InrtoLabel = ({ title, description, scrollToID, quizPath, svg }) => {
  return (
    <>
      <Container>
        {/* <IntroBackground> */}
          <IntroWrapper>
            <Content1>
              <IntroH1>{title}</IntroH1>
              <IntroP>{description}</IntroP>
              <BtnContainer>
                <BtnWrapper>
                  <ButtonScroll
                    to={scrollToID}
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
                    href={quizPath}
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
              <ImgWrap>{svg}</ImgWrap>
            </Content2>
          </IntroWrapper>
        {/* </IntroBackground> */}
        <h1>...</h1>
      </Container>
    </>
  );
};

export default InrtoLabel;
