import styled from "styled-components";
import { MdArrowDownward, MdArrowDropDown } from "react-icons/md";

export const HeroContainer = styled.div`
  /* background: #0c0c0c; */
  /* background: #fafafa; */
  background: #f5f5dc;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
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
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #ff7043;
  font-size: 48px;
  text-align: center;
  font-weight: 900;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroH2 = styled.h2`
  margin-top: 12px;
  color: #00695c;
  font-size: 28px;
  font-weight: 900;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroH22 = styled.p`
  margin-top: 0px;
  color: #00695c;
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;

export const HeroP = styled.p`
  /* margin-top: 24px; */
  color: #424242;
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 13.5px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowDownward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowDropDown = styled(MdArrowDropDown)`
  margin-left: 8px;
  font-size: 20px;
`;
