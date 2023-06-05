import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f5f5dc" : "#6f3f2c")};
  padding: 15rem 0;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  min-width: 80%;
  margin-bottom: 15rem;
  /* max-width: 1100px; */

  /* border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  border-top: 2px solid rgba(0, 0, 0, 0.5); */
`;

export const InfoWrapper = styled.div`
  height: 100%;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 24px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  max-width: 555px;
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Column2 = styled.div`
  max-width: 555px;
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  display: flex;
  /* justify-content: ${({ imgStart }) =>
    imgStart ? "flex-start" : "center"}; */
  justify-content: center;
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #ff7043;
  font-size: 1.4rem;
  font-weight: 900;
  line-height: 16px;
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 42px;
  line-height: 1.1;
  font-weight: 900;
  color: ${({ lightText }) => (lightText ? "#FAFAFA" : "#424242")};

  @media screen and (max-width: 1080px) {
    font-size: 38px;
    /* white-space: nowrap; */
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.6rem;
  line-height: 3.5rem;
  color: ${({ darkText }) => (darkText ? "#0D1821" : "#fff")};
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
