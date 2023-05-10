import styled from "styled-components";

export const QuizContainer = styled.div`
  /* background: #f5f5dc; */
  margin-top: 80px;
  background: brown;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  height: 85vh;
  position: relative;
  z-index: 1;

  /* Add :before stlyes */
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0% rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;

export const QuizBg = styled.div`
  background-color: #f5f5dc;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;
export const QuestionContainer = styled.div`
  /* background: #010606; */
  /* margin: 40px 40px; */
  margin-top: 75px;
  /* height: 430px; */
  width: 60%;
  z-index: 3;
  max-width: width;
  justify-content: center;
  z-index: 2;
`;

export const QuestionH1 = styled.h1`
  color: #424242;
  font-size: 48px;
  text-align: center;
  z-index: 3;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const H1 = styled.h1`
  color: #424242;
  font-size: 48px;
  text-align: center;
  z-index: 3;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const ChoicesContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  /* height: 430px; */
  width: 40%;
  max-width: width;
  justify-content: center;
  z-index: 2;

  @media screen and (max-width: 768px) {
    transform: scale(1.25);
  }
  @media screen and (max-width: 480px) {
    transform: scale(1.25);
  }
`;

export const ChoiceWrapper = styled.div`
  background-color: ${({
    selected,
    isButtonClicked,
    isCorrect,
    isCurrentChoiceCorrect,
  }) =>
    isButtonClicked
      ? isCorrect
        ? "green"
        : selected
        ? "red"
        : isCurrentChoiceCorrect
        ? "green"
        : "#607d8b"
      : selected
      ? "#A98181"
      : "#607d8b"};
  margin-top: 10px;
  border-radius: 5px;
  z-index: 3;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(0, 0, 0, 0.5);
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }
`;

export const Choice = styled.p`
  color: #fafafa;
  font-size: 30px;
  text-align: center;
  max-width: 100%;
  margin-bottom: 10px;
  /* z-index: 3; */
  @media screen and (max-width: 768px) {
    font-size: 25;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
export const SubmitBtnContainer = styled.div`
  height: fit-content;
  z-index: 0;
`;
export const NextBtnContainer = styled.div`
  height: fit-content;
  z-index: 0;
`;
export const ButtonContainer = styled.div`
  height: fit-content;
  z-index: 0;
`;

export const BtnWrappper = styled.div`
  align-items: center;
  z-index: 3;
  transform: scale(1.15);
`;
export const SelectAChoiceContainer = styled.div`
  align-items: center;
  z-index: 3;
`;
export const SelectAChoicePromptH2 = styled.h2`
  margin-top: 12px;
  color: #424242;
  font-size: 28px;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const FinalResultContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
export const FinalResultH2 = styled.h2`
  margin-top: 12px;
  color: #424242;
  font-size: 28px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
