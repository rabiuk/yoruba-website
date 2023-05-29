import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f5f5dc" : "#6f3f2c")};
  padding: 100px 0;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  min-width: 80%;
  /* max-width: 1100px; */

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
  /* border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  border-top: 2px solid rgba(0, 0, 0, 0.5); */
`;

export const InfoWrapper = styled.div`
  height: 100%;
  z-index: 1;
  width: 100%;

  /* margin-right: auto;
  margin-left: auto; */
  padding: 0 24px;
`;
export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  display: flex;
  /* justify-content: ${({ imgStart }) =>
    imgStart ? "center" : "flex-end"}; */
  justify-content: center;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  display: flex;
  /* justify-content: ${({ imgStart }) =>
    imgStart ? "flex-start" : "center"}; */
  justify-content: center;
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
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 900;
  color: ${({ lightText }) => (lightText ? "#FAFAFA" : "#424242")};

  @media screen and (max-width: 1080px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 3.5rem;
  color: ${({ darkText }) => (darkText ? "#707070" : "#fff")};
  @media screen and (max-width: 1080px) {
    font-size: 16px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  /* min-width: 350px; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  background: linear-gradient(145deg, #ffffeb, #ddddc6);
  box-shadow: 20px 20px 41px #dadac4, -20px -20px 41px #fffff4;

  &.learn-section {
    /* max-width: 400px; */
    box-shadow: none;
    background: none;
  }
  svg {
    max-width: 100%;
    max-height: 100%;
    filter: drop-shadow(2px 1px 10px #000);
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
  }

  @media screen and (max-width: 400px) {
    /* width: 50vw; */
  }
`;
