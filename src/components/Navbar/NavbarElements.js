import styled from "styled-components";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { RiArrowDropDownLine } from "react-icons/ri";
import { colors } from "@/components/colors";

export const Nav = styled.nav`
  background: ${({ home, scrollNav }) =>
    home
      ? scrollNav
        ? `rgba(245, 245, 220, 0.90)`
        : "transparent"
      : "rgba(245, 245, 220, 0.90)"};
  transition: background 0.5s, box-shadow 0.5s;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  backdrop-filter: ${({ home, scrollNav }) =>
    home ? (scrollNav ? `blur(5px)` : "none") : "blur(5px)"};
  position: ${({ home, scrollNav }) =>
    home ? (scrollNav ? "sticky" : "absolute") : "sticky"};
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  min-width: 300px;
  border-bottom: ${({ home, isTransparent }) =>
    home && isTransparent
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid #E0E3E7"};
  & * {
    color: ${({ home, isTransparent }) =>
      home
        ? isTransparent
          ? "rgba(255, 255, 255, 0.5)"
          : `rgba(0, 0, 0, 0.75)`
        : `rgba(0, 0, 0, 0.75)`};
    font-weight: 400;
  }
`;

export const NavLogo = styled.div`
  font-weight: 900;
  font-size: 2.5rem;
`;

export const NavLogoLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

export const NavLogoLinkContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
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
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 30px;
  height: 100%;
  width: fit-content;

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
  white-space: nowrap;
  padding: 1rem 0;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${colors.primaryColor};
    transition: all 0.2s ease-in-out;
  }

  &.active {
    color: ${colors.primaryColor};
  }

  &.home {
    &:hover {
      ${colors.primaryColor};
    }
  }
`;

export const NavLinksR = styled(Link)`
  color: ${({ isInLearn }) => (isInLearn ? "#ff7043" : "none")};
  display: flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  height: 100%;
  /* width: fit-content; */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${colors.primaryColor};
  }
  &.active {
    color: ${colors.primaryColor};
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
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${colors.primaryColor};
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

export const RiArrowDropDownLineStyled = styled(RiArrowDropDownLine)`
  font-size: 2.5rem;
  color: ${({ showDropDown }) => (showDropDown ? colors.primaryColor : "#fff")};
  transition: all 0.3s ease-in-out;
  transform: rotate(${({ showDropDown }) => (showDropDown ? "180deg" : "0")});
  position: ${({ showDropDown }) => (showDropDown ? "relative" : "static")};
  top: ${({ showDropDown }) => (showDropDown ? "-5px" : "0")};
`;
