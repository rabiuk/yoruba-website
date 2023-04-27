import styled from "styled-components";

export const Container = styled.div`
  /* background: red; */
  display: flex;
  /* grid-template-columns: repeat(12, 75px);
  grid-gap: 20px; */
  justify-content: center;
  height: 1000px;
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

// export const Bg = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   background: white;
// `;

export const IntroBackground = styled.div`
  background-color: #010606;
  height: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroWrapper = styled.div`
  /* height: 430px; */
  width: 50%;
  z-index: 1;
`;

export const IntroH1 = styled.h1`
  margin-top: 20px;
  /* grid-column: 1 / 9; */
  color: #ff7043;
  font-size: 48px;
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
  /* grid-column: 1 / 9; */
  font-size: 22px;
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
  grid-row: 3;
  grid-column: 1;
  display: flex;
  justify-content: center;
  /* justify-content: space-evenly; */
`;
export const BtnWrapper = styled.div`
  margin-top: 32px;
  align-items: center;
  margin: 20px 10px;
`;
