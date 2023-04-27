import styled from "styled-components";
import { MdArrowForward, MdArrowRight } from "react-icons/md";

export const BasicPhrasesIContainer = styled.div`
  background: #f5f5dc;
  /* background-color: red; */
  margin-top: 80px;
  display: flex;
  height: 1000px;
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

export const BasicPhrasesIBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const BasicPhrasesIntroContainer = styled.div`
  background: #010606;
  /* background-color: red; */
  height: 430px;
  width: 100%;
  z-index: 3;
  /* max-width: 100vw; */
  /* margin-right: auto;
  margin-left: auto; */
  /* padding: 0 24px; */
  justify-content: center;
  /* text-align: left; */
`;

export const BasicPhrasesIIntroContent = styled.div`
  /* background: red; */
  z-index: 3;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative; */
  /* max-width: 100vw; */
  margin: 0 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  /* left: 0;
  right: 0; */
`;

export const BasicPhrasesIIntroWelcome = styled.div`
  margin-bottom: 0px;
`;
export const BasicPhrasesIIntroWelcomeTitle = styled.div`
  margin-bottom: 0px;
`;

export const BasicPhrasesIIntroH1 = styled.h1`
  color: #ff7043;
  font-size: 48px;
  /* text-align: left; */
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const BasicPhrasesIIntroH2 = styled.h2`
  margin-top: 12px;
  color: #00695c;
  font-size: 28px;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const BasicPhrasesIIntroH22 = styled.p`
  margin-top: 0px;
  color: #00695c;
  font-size: 18px;
  text-align: left;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;

export const BasicPhrasesIIntroP = styled.p`
  margin-top: 10px;
  color: #fafafa;
  font-size: 18px;
  /* text-align: left; */
  max-width: 600px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 13.5px;
  }
`;

export const BasicPhrasesIUl = styled.ul`
  list-style-type: disc;
  margin-left: 30px;
  /* margin-bottom: 10px; */
`;
export const BasicPhrasesILi = styled.li`
  margin: 5px;
`;
export const BasicPhrasesIBtnContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  /* justify-content: space-evenly; */
`;
export const BasicPhrasesIBtnWrapper = styled.div`
  margin-top: 32px;
  align-items: center;
  margin: 20px 10px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
