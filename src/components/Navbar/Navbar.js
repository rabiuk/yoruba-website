"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { useRouter, usePathname } from "next/navigation";
import ScrollToTop from "../ScrollToTop";
import { SignInButton } from "@/components/ButtonElements";
import MobileSidebar from "../MobileSidebar/MobileSidebar";

import {
  Nav,
  NavbarContainer,
  NavLogoLink,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinksS,
  UserContainer,
  NavBtn,
  NavLinksR,
  NavGreeting,
} from "./NavbarElements";
import Dropdown from "./NavbarDropDown/Dropdown";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isInLearn, setIsInLearn] = useState(false);
  const [isInAbout, setIsInAbout] = useState(false);
  const [isInProverbs, setIsInProverbs] = useState(false);
  const router = useRouter();
  const currentPage = usePathname();

  const { data: session } = useSession();

  const changeNav = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= window.innerHeight) {
        setScrollNav(true);
        setIsTransparent(false);
      } else {
        setScrollNav(false);
        setIsTransparent(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    setIsHome(currentPage === "/");
    setIsInLearn(
      currentPage.includes("learn") || currentPage.includes("lessons")
    );
    setIsInAbout(currentPage.includes("about"));
    setIsInProverbs(currentPage.includes("proverbs-and-wisdom"));
  }, [currentPage]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const handleNavItemClick = (e, section) => {
    e.preventDefault();
    if (section === "#learn") {
      router.push("/learn/");
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    } else {
      // navigate("/");
      router.push("/");
      setTimeout(() => {
        if (typeof window !== "undefined") {
          const sectionElement = document.querySelector(section);
          const topOffset = sectionElement.offsetTop - 80;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <ScrollToTop />
        <Nav home={isHome} scrollNav={scrollNav}>
          <NavbarContainer home={isHome} isTransparent={isTransparent}>
            <NavLogoLink href="/">
              <NavLogo
                isTransparent={isTransparent}
                onClick={() => scrollToTop()}
              >
                Yoruba
              </NavLogo>
            </NavLogoLink>
            <MobileIcon onClick={toggle}>
              <FaBars fontSize={25}></FaBars>
            </MobileIcon>
            <NavMenu>
              {isHome ? (
                <>
                  <NavItem>
                    <NavLinksS
                      to={"/"}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      className="home"
                      onClick={scrollToTop}
                    >
                      Home
                    </NavLinksS>
                  </NavItem>
                  <NavItem>
                    <NavLinksS
                      to={"about"}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={0}
                    >
                      About
                    </NavLinksS>
                  </NavItem>
                  <NavItem>
                    <NavLinksS
                      to="learn"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={0}
                    >
                      Learn
                    </NavLinksS>
                  </NavItem>
                  <NavItem>
                    <NavLinksS
                      to="proverbs-and-wisdom"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={0}
                    >
                      Proverbs & Wisdom
                    </NavLinksS>
                  </NavItem>
                </>
              ) : (
                // When isHome = {false}
                <>
                  <NavItem>
                    <NavLinksR href="/">Home</NavLinksR>
                  </NavItem>
                  <NavItem>
                    <NavLinksR
                      href="/about"
                      className={isInAbout ? "active bold" : "non-active"}
                    >
                      About
                    </NavLinksR>
                  </NavItem>
                  <NavItem
                    onMouseEnter={() => setShowDropDown(true)}
                    onMouseLeave={() => setShowDropDown(false)}
                  >
                    <NavLinksR
                      href="/learn"
                      className={
                        showDropDown && isInLearn
                          ? "active bold"
                          : showDropDown && !isInLearn
                          ? "active"
                          : isInLearn
                          ? "active bold"
                          : "non-active"
                      }
                    >
                      Learn
                    </NavLinksR>
                    {showDropDown && <Dropdown title="Learn" />}
                  </NavItem>
                  <NavItem>
                    <NavLinksR
                      href="/proverbs-and-wisdom"
                      className={isInProverbs ? "active bold" : "non-active"}
                    >
                      Proverbs & Wisdom
                    </NavLinksR>
                  </NavItem>
                </>
              )}
            </NavMenu>
            {session ? (
              <UserContainer>
                <NavGreeting>Hello, {session.user.name}!</NavGreeting>
                <NavBtn>
                  <SignInButton onClick={() => signOut()}>
                    Sign Out
                  </SignInButton>
                </NavBtn>
              </UserContainer>
            ) : (
              <UserContainer>
                <NavBtn>
                  <SignInButton onClick={() => signIn()}>Sign In</SignInButton>
                </NavBtn>
              </UserContainer>
            )}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
