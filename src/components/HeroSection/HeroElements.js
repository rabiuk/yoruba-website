import styled from "styled-components";
import { colors } from "@/components/colors.js";
import { MdArrowDownward, MdArrowDropDown } from "react-icons/md";

const lightTextColour = "#FAFAFA";
const darkTextColour = "#424242";
export const HeroContainer = styled.div`
  background: ${colors.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97vh;
  z-index: 1;
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* width: 100%;
    height: 100vh; */
  overflow: hidden;
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    /* width: 120vw; */
  }
`;
export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 75%;
  /* min-height: 100%; */
  /* position: absolute; */
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    padding-top: 80px;
  }
`;

export const HeroH1 = styled.h1`
  color: ${colors.primaryColor};
  /* font-size: 48px; */
  font-size: ${({ fontSize }) =>
    fontSize
      ? `clamp(${parseFloat(fontSize) * 0.8}px, ${
          parseFloat(fontSize) / 100
        }vw + ${parseFloat(fontSize) * 0.8}px, ${fontSize}px)`
      : "32px"};
  text-align: center;
  font-weight: 900;
  text-shadow: 2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000,
    -2px 2px 0px #000;
  /* filter: drop-shadow(10px 10px 10px rgba(255, 112, 67, 0.5)); */

  /* @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    font-size: 32px;
  }
  @media screen and (max-height: 380px) {
    font-size: 28px;
  } */
`;

export const HeroH2 = styled.h2`
  margin-top: 12px;
  color: #00695c;
  /* font-size: 28px; */
  font-size: max(25px, min(3vw, 36px));
  font-weight: 900;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));

  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    font-size: 18px;
  }
  @media screen and (max-height: 380px) {
    font-size: 16px;
  }
`;
export const HeroH22 = styled.p`
  color: #00695c;
  font-size: 18px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
  text-align: center;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    font-size: 18px;
  }
  @media screen and (max-height: 380px) {
    font-size: 16px;
  }
`;

export const HeroP = styled.p`
  /* margin-top: 24px; */
  color: ${lightTextColour};
  /* font-size: 20px; */
  font-size: max(15px, min(2vw, 20px));
  font-weight: 400;
  filter: drop-shadow(10px 10px 10px rgba(255, 255, 255, 0.5));
  text-align: center;
  /* max-width: 700px; */
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 13.5px;
  }
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    font-size: 18px;
  }
  @media screen and (max-height: 380px) {
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    transform: scale(0.8);
  }
  @media screen and (max-height: 380px) {
    margin-top: 16px;
  }
`;

export const ArrowDownward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowDropDown = styled(MdArrowDropDown)`
  margin-left: 8px;
  font-size: 20px;
`;
