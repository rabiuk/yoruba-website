import styled from "styled-components";
import { colors } from "@/components/colors.js";
import { MdArrowDownward, MdArrowDropDown } from "react-icons/md";

export const HeroContainer = styled.div`
  margin-top: 60px;
  background: ${colors.backgroundColor};
  display: flex;
  justify-content: center;
  /* align-items: center; */
  max-width: 1200px;
  height: 100vh;
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
  margin-top: 20vh;
  display: flex;
  gap: 5rem;
  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    padding-top: 80px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
`;

export const Card = styled.div`
  background: #1f2937;
  width: 400px;
  height: 400px;
  border-radius: 7.5%;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  /* position: relative; */
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

export const ArrowDownward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowDropDown = styled(MdArrowDropDown)`
  margin-left: 8px;
  font-size: 20px;
`;
