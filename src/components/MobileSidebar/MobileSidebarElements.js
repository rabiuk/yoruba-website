import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
// import { Link as LinkR } from "react-router-dom";
import Link from "next/link";

// import { Link as LinkScroll } from "react-scroll";
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) =>
    isOpen ? "100%" : "0"}; //display side bar when isOpen is true
  top: ${({ isOpen }) =>
    isOpen ? "0" : "-100%"}; //display top bar when isOpen is true

  @media only screen and (max-device-width: 926px) and (orientation: landscape) {
    display: none;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 760px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  text-decoration: none;
  list-style: none;
  transition: 0 2s ease-in-out;
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #ff7043;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  border-radius: 50px;
  background: #ff7043;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

export const Greeting = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;
  span {
    color: #ff7043;
  }
`;
