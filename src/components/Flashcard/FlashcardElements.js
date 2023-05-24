import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
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
    /* z-index: 2; */
  }
`;

export const Card = styled.div`
  /* margin-top: 120px;*/
  margin-bottom: 20px;
  background-color: transparent;
  max-width: 700px;
  max-height: 600px;
  width: 45vw;
  height: 45vh;
  min-width: 600px;
  perspective: 1000px;
  /* border-radius: 75px; */
  cursor: pointer;
  color: #fafafa;
  @media screen and (max-width: 768px) {
    width: 50vw;
    height: 45vh;
    min-width: 80vw;
    min-height: 100px;
  }
  @media screen and (max-width: 480px) {
    /* width: 90vw; */
    height: 70vh;
  }
`;

export const CardInner = styled.div`
  position: relative;
  font-size: 48px;
  font-weight: 900;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.75s;
  transition: ${({ isFlipped, isWord, isNextClicked }) =>
    isNextClicked
      ? isWord
        ? isFlipped
          ? "transform 0.75s"
          : "transform 0s"
        : "transform 0s"
      : "transform 0.75s"};
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "")};
  /* transform: ${({ isFlipped, isWord }) =>
    !isWord ? (isFlipped ? "rotateY(180deg)" : "") : ""}; */

  @media screen and (max-width: 480px) {
    /* border-radius: 25px; */
    font-size: 32px;
  }
`;

export const CardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00695c;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  /* box-shadow: 0 0.4rem 2rem 0 rgba(0, 0, 0, 0.5); */
  box-shadow: 11px 11px 74px #d0d0bb, -11px -11px 74px #fffffd;
  border-radius: 35px;

  @media screen and (max-width: 480px) {
    border-radius: 25px;
  }
`;

export const CardBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #424242;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  /* box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25); */
  /* box-shadow: 0 0.4rem 2rem 0 rgba(0, 0, 0, 0.5); */
  box-shadow: 11px 11px 74px #d0d0bb, -11px -11px 74px #fffffd;

  border-radius: 35px;

  @media screen and (max-width: 480px) {
    border-radius: 25px;
  }
`;


export const EmphasizedText = styled.span`
  font-weight: 900;
  color: ${({ isFront }) => (isFront ? "#fafafa" : "#FF7043")};
`;

export const CardText = styled.p`
  margin-left: 20px;
  font-weight: 600;
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
