import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ home, scrollNav }) =>
    home ? (scrollNav ? "#0c0c0c" : "transparent") : "#0c0c0c"};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 1rem;
  position: ${({ home, scrollNav }) =>
    home ? (scrollNav ? "sticky" : "relative") : "sticky"};
  /* position: sticky; */
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100px;
  z-index: 1;
  width: 100%;

  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;


  & * {
    color: ${({ home, isTransparent }) =>
      home ? (isTransparent ? "#00695C" : "#FAFAFA") : "#FAFAFA"};
    font-weight: 600;
  }
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 30px;
  /* grid-column: 17; */
  /* justify-content: space-evenly; */
  width: 30%;
  /* gap: 5px; */
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const NavLinksS = styled(LinkScroll)`
  /* color: ${({ isTransparent }) =>
    isTransparent ? "#00695C" : "#FAFAFA"}; */
  display: flex;
  align-items: center;
  text-decoration: none;
  /* padding: 1rem; */
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #ff7043;
  }

  &.active {
    border-bottom: 3px solid #ff7043;
    color: #ff7043;
  }

  &.home {
    font-weight: bold;
    color: #ff7043;
  }
`;

export const NavLinksR = styled(LinkR)`
  color: #fafafa;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* padding: 1rem; */
  height: 100%;
  width: fit-content;
  cursor: pointer;
  &:hover {
    color: #ff7043;
  }
  &.active {
    color: #ff7043;
  }
`;

export const NavLinksDiv = styled.div`
  color: #fafafa;
  display: flex;
  align-items: center;
  /* text-decoration: none; */
  /* padding: 1rem; */
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #ff7043;
  }
`;

export const NavBtn = styled.nav`
  grid-column: 20;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #ff7043;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fafafa;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
