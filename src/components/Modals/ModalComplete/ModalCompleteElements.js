import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

export const Overlay = styled.div`
  /* width: 100vw;
  height: 100vh; */
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const Container = styled.div`
  max-width: 1200px;
  height: fit-content;
  width: 80%;
  position: relative;
  /* position: fixed; */
  /* top: 40%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  box-sizing: border-box;
  display: flex;
  font-size: 20px;
  border-radius: 10px;
  background: #fafafa;
  /* overflow: hidden; */
  /* background-image: linear-gradient(#f5f5f0 1.2rem, #ccc 1.3rem); */
  /* background-size: 100% 1.3rem; */
  /* line-height: 1.5rem; */
  /* padding: 3rem 0.5rem 3rem 4.5rem; */
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    /* width: fit-content; */
  }
`;

export const ImgWrap = styled.div`
  width: 75%;
  background-color: ${({ bg_color }) => (bg_color ? bg_color : "#ff7043")};
  padding: 5rem 2rem 5rem 2rem;
  display: flex;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  svg {
    max-width: 100%;
    height: auto;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    svg {
      max-width: 60%;
    }
  }
`;

export const ModalRight = styled.div`
  padding: 5rem 5rem 5rem 5rem;

  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */

  @media screen and (max-width: 968px) {
    padding: 3rem 3rem 3rem 3rem;
  }
  @media screen and (max-width: 768px) {
    /* align-items: center; */
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #424242;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-size: 30px;
  @media screen and (max-width: 768px) {
    color: #fafafa;
  }
`;
export const H2 = styled.h2`
  color: #424242;
  font-size: 40px;

  &.title {
    /* margin-top: 3%; */
  }
`;
export const PContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  /* margin-top: 20px; */
  height: 100%;
  padding-top: 3rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1460px) {
    max-height: 250px;
  }
`;

export const P = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #424242;
  text-align: left;
  margin: 5px 0px;
  justify-content: space-evenly;
  &.bold {
    font-weight: 900;
  }
  &.continue-to-text {
    margin-right: 5px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 2.25rem;
  }
  @media screen and (max-width: 1080px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 790px) {
    font-size: 1.5rem;
  }
  /* @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  } */
`;

export const PLink = styled(Link)`
  font-size: 2rem;
  font-weight: 900;
  color: #424242;
  text-align: left;
  margin-top: 5px;
  justify-content: space-evenly;
  text-decoration: none;
  &:hover {
    color: #424242;
    text-decoration: underline;
  }
  @media screen and (min-width: 1440px) {
    font-size: 2.25rem;
  }
  @media screen and (max-width: 1080px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 790px) {
    font-size: 1.45rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.45rem;
  }
`;

export const PLine = styled.div`
  display: flex;
`;
