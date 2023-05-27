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
  padding: 2.5rem 10vw 2.5rem 10vw;
  z-index: 1;
  min-height: 400px;
  max-height: 400px;
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
    // eremove max-height property
    max-height: 100%;
    /* min-height: 100%; */
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
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ImgWrap = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.alphabet-blocks {
    width: 75%;
  }
  &.verbs-img {
    /* width: 32%; */
    max-width: 32%;
  }
  &.numbers-img {
    max-width: 80%;
  }
  @media screen and (min-width: 1440px) {
    &.alphabet-blocks {
      width: 50%;
    }
    /* &.verbs-img {
      width: 40%;
    } */
  }
  @media screen and (min-width: 768px) and (max-width: 1440px) {
    &.verbs-img {
      max-width: 45%;
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
  @media screen and (max-width: 1000px) {
    font-size: 42px;
  }
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
  @media screen and (max-width: 1000px) {
    font-size: 16.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16.5px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
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
