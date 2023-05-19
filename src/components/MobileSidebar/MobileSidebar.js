import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./MobileSidebarElements";
const MobileSidebar = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {/* <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink> */}
          <SidebarLink href="#about" onClick={toggle}>
            About
          </SidebarLink>

          {/* <SidebarLink to="learn" onClick={toggle}>
            Learn
          </SidebarLink> */}
          <SidebarLink href="#learn" onClick={toggle}>
            Learn
          </SidebarLink>
          {/* <SidebarLink to="proverbs-and-wisdom" onClick={toggle}>
            Proverbs & Wisdom
          </SidebarLink> */}
          <SidebarLink href="#proverbs-and-wisdom" onClick={toggle}>
            Proverbs & Wisdom
          </SidebarLink>
          {/* <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink> */}
        </SidebarMenu>
        <SideBtnWrap>
          {/* <SidebarRoute to="/signin">Sign In</SidebarRoute> */}
          <SidebarRoute href="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default MobileSidebar;
