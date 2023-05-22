import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  height: 80%;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  font-size: 20px;
  border-radius: 10px;
  background: #f5f5dc;
  background-image: linear-gradient(#f5f5f0 1.2rem, #ccc 1.3rem);
  background-size: 100% 1.3rem;
  line-height: 1.5rem;
  /* padding: 1.8rem 0.5rem 0.3rem 4.5rem; */
  padding: 5rem 5vw;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const MarginLine = styled.div`
  position: absolute;
  border-left: 1px solid #d88;
  height: 100%;
  left: 3.3rem;
  top: 0;
`;

export const CloseIcon = styled(FaTimes)`
  color: #424242;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-size: 30px;
  //add a filter shadow to the icon
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.25));
`;
export const H1 = styled.h1`
  color: #424242;
  font-size: 4rem;

  @media screen and (max-width: 540px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 428px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 300px) {
    font-size: 2rem;
  }
  `;
export const PContainer = styled.div`
  height: 100%;
  padding: 5rem 0;
  /* width: 70%; */
  @media screen and (max-width: 470px) {
    padding-left: 5rem;
    padding-right: 0;
  }
  /* @media screen and (max-width: 360px) {
    padding-left: 5rem;
    padding-right: 0;
  } */
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  color: #424242;
  height: 100%;
  @media screen and (max-width: 428px) {
    width: 100%;
  }
`;
export const LI = styled.li`
  /* margin: 0; */
  text-indent: 0.5rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin-bottom: 5vh;
`;

export const P = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #424242;
  span {
    font-weight: 900;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.75rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 428px) {
    font-size: 1.5rem;
  }
  /* @media screen and (max-width: 360px) {
    font-size: 0.75rem;
  } */
`;
