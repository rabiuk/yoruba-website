import styled from "styled-components";
import { MdArrowDownward, MdArrowDropDown } from "react-icons/md";

export const ImproveSkillsContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f5f5dc" : "#0c0c0c")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ImproveSkillsWrapper = styled.div`
  display: grid;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  z-index: 0;
`;

export const ImproveSkillsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #ff7043;
  font-size: 16px;
  font-weight: 900;
  line-height: 16px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#FAFAFA" : "#424242")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  &.next-btn {
    margin-top: 20px;
    margin-bottom: 400px;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;

  &.learn-section {
    max-width: 400px;
  }
  svg.welcome-hands {
    max-width: 300px;
    max-height: 300px;
  }
  svg {
    width: 100%;
    margin: 0px 0px 10px 0px;
    padding-right: 0;
  }
  &.curriculum-section {
    max-height: 500px;
    max-width: 300px;
    margin-top: -40px;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0px 0px 10px 0px;
  padding-right: 0;
`;
export const ArrowDownward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowDropDown = styled(MdArrowDropDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const H1 = styled.h1`
  font-size: 48px;
  font-weight: 900;
  color: #424242;
`;
export const P = styled.p`
  text-align: center;
  font-size: 20px;
  color: #424242;
  width: 45vw;
`;
