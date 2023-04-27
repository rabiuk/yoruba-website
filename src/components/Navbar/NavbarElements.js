import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#0c0c0c" : "#0c0c0c")};
  /* background: #000; */
  height: 80px;
  margin-top: -80px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  /* display: flex; */
  /* justify-content: space-around; */
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 0px;
  max-width: 100vw;
  display: grid;
  grid-template-columns: 120px 120px 120px 120px;
  grid-template-rows: 100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 500px;

  grid-column: 3/4;
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
  margin-right: -22px;
  grid-column: 17;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fafafa;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ff7043;
  }
`;

export const NavLinksR = styled(LinkR)`
  color: #fafafa;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavLinksDiv = styled.div`
  color: #fafafa;
  display: flex;
  align-items: center;
  /* text-decoration: none; */
  padding: 1rem;
  height: 100%;
  cursor: pointer;
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
