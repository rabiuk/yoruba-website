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
          <SidebarLink href="#about" onClick={toggle}>
            About
          </SidebarLink>

          <SidebarLink href="#learn" onClick={toggle}>
            Learn
          </SidebarLink>

          <SidebarLink href="#proverbs-and-wisdom" onClick={toggle}>
            Proverbs & Wisdom
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="/auth/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default MobileSidebar;
