import React from "react";
import {
  BasicPhrasesIContainer,
  BasicPhrasesIBg,
  BasicPhrasesIIntroContent,
  BasicPhrasesIIntroH1,
  BasicPhrasesIIntroP,
  BasicPhrasesIntroContainer,
  BasicPhrasesIBtnWrapper,
  BasicPhrasesIBtnContainer,
} from "./BasicPhrasesIElements";
import { ButtonLink, ButtonScroll } from "../../../ButtonElements";

const BasicPhrasesI = () => {
  return (
    <>
      <BasicPhrasesIContainer>
        <BasicPhrasesIBg></BasicPhrasesIBg>
        <BasicPhrasesIntroContainer>
          <BasicPhrasesIIntroContent>
            <BasicPhrasesIIntroH1>Basic Phrases I: Verbs</BasicPhrasesIIntroH1>
            <BasicPhrasesIIntroP>
              Welcome to Basic Phrases I: Verbs, the third lesson in our
              comprehensive Yoruba language curriculum. In this lesson, you'll
              learn essential Yoruba verbs that form the building blocks of
              everyday communication. By the end of this lesson, you'll be able
              to use these verbs in various contexts and have a solid foundation
              for constructing simple sentences in Yoruba. Refer to the Lesson
              section below (or click "Learn") to view the lesson content. Once
              you have familiarized yourself with the material, you may click on
              "Start Quiz".
            </BasicPhrasesIIntroP>
            <BasicPhrasesIBtnContainer>
              <BasicPhrasesIBtnWrapper>
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
              </BasicPhrasesIBtnWrapper>
              <BasicPhrasesIBtnWrapper>
                <ButtonLink
                  to="quiz"
                  // lesson-three-learn-basic-phrases-i-quiz-page
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
              </BasicPhrasesIBtnWrapper>
            </BasicPhrasesIBtnContainer>
          </BasicPhrasesIIntroContent>
        </BasicPhrasesIntroContainer>
      </BasicPhrasesIContainer>
    </>
  );
};

export default BasicPhrasesI;
