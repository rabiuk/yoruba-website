import styled from "styled-components";

const Brown = "#6f3f2c";
export const Container = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  position: relative;
  z-index: 1;
  overflow: auto;
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

export const IntroBackground = styled.div`
  /* background-color: rgba(0, 105, 92, 1); */
  background-color: ${Brown};
  /* background-image: linear-gradient(to right, #424242, #424242); */
  height: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroWrapper = styled.div`
  padding: 2.5rem 10vw 10vw 10vw;
  z-index: 1;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${Brown};
    /* height: 430px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -1;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Content1 = styled.div`
  /* display: flex; */
  width: 50%;
  @media screen and (max-width: 768px) {
    /* height: 50%; */
    width: 100%;
  }
`;
export const Content2 = styled.div`
  /* display: flex; */
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    /* height: 50%; */
    width: 100%;
  }
`;
export const ImgWrap = styled.div`
  /* margin-top: 40px; */
  max-width: 555px;
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
  .verbs-svg {
    width: 50%;
    height: 50%;
  }
  .nouns-svg {
    width: 70%;
    height: 70%;
  }
  .adjectives-svg {
    transform: scale(1.25);
  }

  @media screen and (max-width: 768px) {
    .verbs-svg {
      width: 75%;
      height: 75%;
    }
    .nouns-svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const IntroH1 = styled.h1`
  /* margin-top: 20px; */
  /* grid-column: 1 / 9; */
  color: #fafafa;
  font-size: 48px;
  font-weight: 900;
  z-index: 1;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const IntroP = styled.p`
  font-size: 18px;
  color: #fafafa;
  z-index: 1;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16.5px;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* justify-content: space-evenly; */
`;
export const BtnWrapper = styled.div`
  align-items: center;
  margin: 32px 10px 10px;
`;
