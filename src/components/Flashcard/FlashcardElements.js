import styled from "styled-components";
import { colors } from "@/components/colors";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: 578px) {
    justify-content: flex-start;
    padding-top: 20px;
  }
`;

export const Card = styled.div`
  margin-bottom: 20px;
  background-color: transparent;
  width: 1000px;
  height: 500px;
  perspective: 1000px;
  cursor: pointer;
  color: #fafafa;
  @media screen and (max-width: 1000px) {
    width: 70vw;
    height: 35vh;
  }
  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 40vh;
  }

  @media screen and (max-width: 578px) {
    width: 90vw;
    height: 70vh;
  }
`;

export const CardInner = styled.div`
  position: relative;
  /* font-size: 48px; */
  /* font-weight: 900; */
  width: 100%;
  height: 100%;
  text-align: center;
  transition: ${({ isFlipped, isWord, isNextClicked }) =>
    isNextClicked
      ? isWord
        ? isFlipped
          ? "transform 0.25s"
          : "transform 0s"
        : "transform 0s"
      : "transform 0.25s"};
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? "rotateX(180deg)" : "")};
`;

export const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00695c;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 15px;
  overflow: hidden;

  div {
    display: flex;
  }
`;

export const CardBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #424242;
  transform: rotateX(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  border-radius: 15px;
`;

export const EmphasizedText = styled.span`
  font-weight: 900;
  color: ${({ isFront }) => (isFront ? "#fafafa" : "#FF7043")};

  font-size: clamp(
    ${parseFloat(35) * 0.8}px,
    ${parseFloat(35) / 100}vw + ${parseFloat(35) * 0.8}px,
    ${35}px
  );
`;

export const CardText = styled.p`
  /* margin-left: 20px; */
  display: flex;
  font-size: clamp(
    ${parseFloat(35) * 0.8}px,
    ${parseFloat(35) / 100}vw + ${parseFloat(35) * 0.8}px,
    ${35}px
  );
`;

export const BtnContainer = styled.div`
  height: fit-content;
  z-index: 0;
  display: flex;
`;
export const BtnWrappper = styled.div`
  align-items: center;
  z-index: 3;
  transform: scale(1.15);
  margin: 0 20px;
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #424242;
  width: 100%;
  padding: 5px 0;
`;
export const IconWrap = styled.div`
  /* color: ${colors.secondaryColor}; */
  color: ${({ isDone }) =>
    isDone ? colors.primaryColor : colors.secondaryColor};
  padding: 10px;
  cursor: ${({ greyOut }) => (greyOut ? "auto" : "pointer")};
  opacity: ${({ greyOut }) => (greyOut ? 0.5 : 1)};
  transition: opacity 0.3s;
`;
