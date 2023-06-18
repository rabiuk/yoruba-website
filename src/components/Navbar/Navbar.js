"use client";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { useRouter, usePathname } from "next/navigation";
import ScrollToTop from "../ScrollToTop";
import { SignInButton } from "@/components/ButtonElements";
// import { MdArrowDropDown } from "react-icons/md";
// import { RiArrowDropDownLine } from "react-icons/ri";

import {
  Nav,
  NavbarContainer,
  NavLogoLink,
  NavLogo,
  NavLogoLinkContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinksS,
  UserContainer,
  NavBtn,
  NavLinksR,
  NavGreeting,
  RiArrowDropDownLineStyled,
} from "./NavbarElements";
import Dropdown from "./NavbarDropDown/Dropdown";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [showDropDown, setShowDropDown] = useState(true);
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
    setShowDropDown(false);
  }, [currentPage]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
      <ScrollToTop />
      <Nav home={isHome} scrollNav={scrollNav} isTransparent={false}>
        <NavbarContainer home={isHome} isTransparent={false}>
          <NavLogoLinkContainer>
            <NavLogoLink href="/">
              <NavLogo
                isTransparent={isTransparent}
                onClick={() => scrollToTop()}
              >
                Yoruba
              </NavLogo>
            </NavLogoLink>

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
                      offset={0}
                      className="home"
                      onClick={scrollToTop}
                      isTransparent={isTransparent}
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
                      offset={100}
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
                      Learn{" "}
                      <RiArrowDropDownLineStyled
                        showDropDown={showDropDown}
                        color="red"
                      />
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
          </NavLogoLinkContainer>
          <MobileIcon onClick={toggle}>
            <FaBars fontSize={25}></FaBars>
          </MobileIcon>
          {session ? (
            <UserContainer>
              <NavGreeting>Hello, {session.user.name}!</NavGreeting>
              <NavBtn>
                <SignInButton
                  onClick={() => signOut()}
                  dark={!isTransparent}
                  isHome={isHome}
                >
                  Sign Out
                </SignInButton>
              </NavBtn>
            </UserContainer>
          ) : (
            <UserContainer>
              <NavBtn>
                <SignInButton
                  onClick={() => signIn()}
                  dark={!isTransparent}
                  isHome={isHome}
                >
                  Sign In
                </SignInButton>
              </NavBtn>
            </UserContainer>
          )}
        </NavbarContainer>
      </Nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
