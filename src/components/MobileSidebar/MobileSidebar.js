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
  UserContainer,
  Greeting,
} from "./MobileSidebarElements";
import { SignInButton } from "@/components/ButtonElements";
import { useSession, signIn, signOut } from "next-auth/react";

const MobileSidebar = ({ isOpen, toggle }) => {
  const { data: session } = useSession();
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      {session ? (
        <Greeting>
          Hello,&nbsp;<span>{session.user.name}!</span>
        </Greeting>
      ) : (
        <></>
      )}
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
        <UserContainer>
          {session ? (
            <>
              <SideBtnWrap onClick={() => signOut()}>
                <SignInButton>Sign Out</SignInButton>
              </SideBtnWrap>
            </>
          ) : (
            <>
              <SideBtnWrap onClick={() => signIn()}>
                <SignInButton>Sign In</SignInButton>
              </SideBtnWrap>
            </>
          )}
        </UserContainer>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default MobileSidebar;
