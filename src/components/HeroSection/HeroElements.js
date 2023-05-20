import styled from "styled-components";
import { MdArrowDownward, MdArrowDropDown } from "react-icons/md";

const lightTextColour = "#FAFAFA";
const darkTextColour = "#424242";
export const HeroContainer = styled.div`
  background: #f5f5dc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1;
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

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    /* width: 120vw; */
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 100%;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    padding-top: 80px;
  }
`;

export const HeroH1 = styled.h1`
  color: #ff7043;
  font-size: 48px;
  text-align: center;
  font-weight: 900;
  filter: drop-shadow(10px 10px 10px rgba(255, 112, 67, 0.5));

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    font-size: 32px;
  }
`;

export const HeroH2 = styled.h2`
  margin-top: 12px;
  color: #00695c;
  font-size: 28px;
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
`;
export const HeroH22 = styled.p`
  margin-top: 0px;
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
`;

export const HeroP = styled.p`
  /* margin-top: 24px; */
  color: ${lightTextColour};
  font-size: 22px;
  font-weight: 400;
  filter: drop-shadow(10px 10px 10px rgba(255, 255, 255, 0.5));
  text-align: center;
  max-width: 700px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 13.5px;
  }
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    font-size: 18px;
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
`;

export const ArrowDownward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowDropDown = styled(MdArrowDropDown)`
  margin-left: 8px;
  font-size: 20px;
`;
