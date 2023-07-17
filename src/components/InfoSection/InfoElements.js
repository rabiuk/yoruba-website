import styled from "styled-components";
import { colors } from "@/components/colors";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f5f5dc" : "#6f3f2c")};
  padding: 15rem 0;
  display: flex;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  gap: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;

  display: flex;
  width: 100%;
`;

export const Column2 = styled.div`
  display: flex;

  justify-content: center;
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #ff7043;
  font-size: 1.4rem;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 42px;
  line-height: 1.1;
  font-weight: 700;

  color: ${colors.textColor};

  @media screen and (max-width: 1080px) {
    font-size: 38px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 1rem;

  line-height: 2rem;

  font-size: 16px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  width: 400px;
  height: 400px;

  display: flex;

  align-items: center;

  background: linear-gradient(145deg, #ffffeb, #ddddc6);
  box-shadow:
    20px 20px 41px #dadac4,
    -20px -20px 41px #fffff4;
  border-radius: 7.5%;
  overflow: hidden;
  &.learn-section {
    box-shadow: none;
    background: none;
    overflow: visible;
  }
  svg {
    max-width: 100%;
    max-height: 100%;
    background: linear-gradient(145deg, #ffffeb, #ddddc6);
    border-radius: 7.5%;
    filter: drop-shadow(20px 20px 41px #dadac4);
  }
`;
