import styled from "styled-components";
import { colors } from "@/components/colors";
const Brown = "#6f3f2c";

export const IntroWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${colors.lightTextColor};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    bottom: 0;
    background-color: ${Brown};
    width: 100vw;
    height: 100%;
    z-index: -1;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 80%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    max-height: 100%;
  }
`;

export const Content1 = styled.div`
  /* display: flex; */
  width: 50%;
  height: 100%;
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
    width: 50%;
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
  /* color: #fafafa; */
  font-size: clamp(
    ${parseFloat(42) * 0.8}px,
    ${parseFloat(42) / 100}vw + ${parseFloat(42) * 0.8}px,
    ${42}px
  );
  margin-bottom: 16px;
  font-weight: 900;
  text-align: center;
`;

export const IntroP = styled.p`
  font-size: clamp(
    ${parseFloat(16) * 0.8}px,
    ${parseFloat(16) / 100}vw + ${parseFloat(16) * 0.8}px,
    ${16}px
  );
  margin-bottom: 16px;
  /* color: #fafafa; */
  text-align: center;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
`;
export const BtnWrapper = styled.div`
  align-items: center;
  margin: 0 10px;
  /* margin: 32px 10px 10px; */
`;
