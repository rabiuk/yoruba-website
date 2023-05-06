import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const Container = styled.div`
  max-width: 50vw;
  height: fit-content;
  width: 100%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  box-sizing: border-box;
  display: flex;
  font-size: 20px;
  border-radius: 10px;
  background: #fafafa;
  overflow: hidden;
  /* background-image: linear-gradient(#f5f5f0 1.2rem, #ccc 1.3rem); */
  background-size: 100% 1.3rem;
  /* line-height: 1.5rem; */
  /* padding: 3rem 0.5rem 3rem 4.5rem; */
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
`;

export const ImgWrap = styled.div`
  width: 60%;
  height: 25vw;
  position: relative;
  top: 0;
  right: 0;
  background-color: ${({ bg_color }) => (bg_color ? bg_color : "#ff7043")};
  padding: 1rem 1rem 1rem 1rem;


  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
  }
`;

export const ModalRight = styled.div`
  width: 100%;
  padding-left: 2rem;
  /* padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;  */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
`;

export const MarginLine = styled.div`
  position: absolute;
  border-left: 1px solid #d88;
  height: 100%;
  left: 3.3rem;
  top: 0;
`;

export const CloseIcon = styled(FaTimes)`
  color: #010606;
  position: fixed;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-size: 30px;
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
  justify-content: space-evenly;
  /* align-items: center; */
  margin-top: 20px;
`;

export const UL = styled.ul`
  color: #424242;
  margin-left: 2.5rem;
`;
export const LI = styled.li`
  /* margin: 0; */
  text-indent: 1rem;
  padding-bottom: 1.3rem;
  color: black;
  line-height: 1.5rem;
  font-weight: 600;
`;

export const P = styled.p`
  font-size: 18px;
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
`;

export const PLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: #424242;
  text-align: left;
  margin: 6px 0px;
  justify-content: space-evenly;
  /* text-decoration: none; */
  &:hover {
    color: #424242;
    /* text-decoration: none; */
  }
`;

export const PLine = styled.div`
  display: flex;
`;
