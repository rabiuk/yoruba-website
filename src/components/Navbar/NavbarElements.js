import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { RiArrowDropDownLine } from "react-icons/ri";
import { colors } from "@/components/colors";

const beige = "#f5f5dc";
export const Nav = styled.nav`
  background: ${({ home, scrollNav }) =>
    home ? (scrollNav ? "#101522" : "transparent") : "#101522"};
  /* transition: 0.5s; */
  /* height: 80px; */
  transition: background 0.5s, box-shadow 0.5s;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  font-size: 1.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-shadow: ${({ home, scrollNav }) =>
    home
      ? scrollNav
        ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        : "none"
      : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"};
  position: ${({ home, scrollNav }) =>
    home ? (scrollNav ? "sticky" : "absolute") : "sticky"};
  top: 0;
  /* width: 100vw; */
  width: 100%;

  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100px;
  min-height: 80px;
  /* z-index: 1; */
  /* width: 65%; */
  width: ${({ isTransparent }) => (isTransparent ? "65%" : "65%")};
  border-bottom: ${({ home, isTransparent }) =>
    home && isTransparent ? "2px solid rgba(255, 255, 255, 0.1)" : "none"};

  & * {
    color: ${({ home, isTransparent }) =>
      home
        ? isTransparent
          ? "rgba(255, 255, 255, 0.5)"
          : "#FAFAFA"
        : "#FAFAFA"};
    font-weight: 600;
  }
  @media screen and (min-width: 1600px) {
    width: ${({ isTransparent }) => (isTransparent ? "70%" : "70%")};
  }

  @media screen and (max-width: 1440px) {
    width: ${({ isTransparent }) => (isTransparent ? "70%" : "70%")};
  }
  @media screen and (max-width: 1280px) {
    width: ${({ isTransparent }) => (isTransparent ? "80%" : "80%")};
  }
`;

export const NavLogo = styled.div`
  font-weight: 900;
  font-size: 2.5rem;
`;

export const NavLogoLink = styled(Link)`
  /* justify-self: flex-start; */
  cursor: pointer;
  font-size: 1.5rem;
  /* display: flex;
  align-items: center; */
  font-weight: bold;
  text-decoration: none;
  /* flex: 1; */
`;
export const MobileIcon = styled.div`
  display: none;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  /* align-items: center; */
  list-style: none;
  text-align: center;
  margin-left: 30px;
  height: 100%;
  /* grid-column: 17; */
  /* justify-content: space-evenly; */
  width: fit-content;
  /* gap: 5px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
`;

export const NavLinksS = styled(LinkScroll)`
  display: flex;
  align-items: center;
  text-decoration: none;
  //Wrap the text to no wrap
  white-space: nowrap;
  /* padding: 1rem; */
  padding: 1rem 0;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #ff7043;
    transition: all 0.2s ease-in-out;
  }

  &.active {
    border-bottom: 3px solid #ff7043;
    color: #ff7043;
  }

  &.home {
    font-weight: 900;
    color: ${({ home, isTransparent }) =>
      home && isTransparent ? "rgba(255, 255, 255, 1)" : "#fafafa"};

    &:hover {
      color: #ff7043;
    }
  }
`;

export const NavLinksR = styled(Link)`
  /* color: #fafafa; */
  color: ${({ isInLearn }) => (isInLearn ? "#ff7043" : "#fafafa")};
  display: flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  /* padding: 1rem; */
  height: 100%;
  width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ff7043;
  }
  &.active {
    color: #ff7043;
  }
  &.bold {
    font-weight: 900;
  }
  svg {
    transition: color 0.2s ease-in-out;
  }
  &:hover svg {
    color: #ff7043;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const NavGreeting = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 1300px) {
    margin-right: 10px;
  }
  @media (max-width: 1080px) {
    display: none;
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
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #ff7043;
    transition: all 0.2s ease-in-out;
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

export const NavBtnLink = styled(Link)`
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

export const RiArrowDropDownLineStyled = styled(RiArrowDropDownLine)`
  font-size: 2.5rem;
  color: ${({ showDropDown }) => (showDropDown ? colors.primaryColor : "#fff")};
  transition: all 0.3s ease-in-out;
  transform: rotate(${({ showDropDown }) => (showDropDown ? "180deg" : "0")});
  position: ${({ showDropDown }) => (showDropDown ? "relative" : "static")};
  top: ${({ showDropDown }) => (showDropDown ? "-5px" : "0")};
`;
