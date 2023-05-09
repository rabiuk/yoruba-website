import styled from "styled-components";

export const Container = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const IntroBackground = styled.div`
  background-color: rgba(0, 105, 92, 1);
  /* background-image: linear-gradient(to right, #424242, #424242); */
  height: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroWrapper = styled.div`
  margin: 80px 7.5vw;
  width: fit-content;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* creates 2 columns of equal width */
  grid-gap: 10px; /* adds a gap of 10px between columns */
  justify-content: center; /* centers items horizontally */
  align-items: center; /* centers items vertically */
`;

export const Content1 = styled.div`
  /* display: flex; */
`;
export const Content2 = styled.div`
  /* display: flex; */
`;
export const ImgWrap = styled.div`
  /* margin-top: 40px; */
  /* margin-left: 5vw; */
  /* max-width: 555px; */
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const IntroH1 = styled.h1`
  margin-top: 20px;
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
