"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
// import { useNavigate } from "react-router-dom";
import { useRouter, usePathname } from "next/navigation";
import ScrollToTop from "../ScrollToTop";
// import dynamic from "next/dynamic";

import {
  Nav,
  NavbarContainer,
  NavLogoLink,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinksS,
  NavBtn,
  NavBtnLink,
  NavLinksR,
  NavLinksDiv,
} from "./NavbarElements";
// import Sidebar from "../Sidebar/Sidebar";
import Dropdown from "./NavbarDropDown/Dropdown";
const Navbar = ({ home, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [showDropDown, setshowDropDown] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const router = useRouter();
  const currentPage = usePathname();

  const changeNav = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 800) {
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

    // Set isHome based on the current route
    setIsHome(currentPage === "/");
  }, [currentPage]); // Add router.pathname to the dependency array

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const handleNavItemClick = (e, section) => {
    e.preventDefault();
    if (section === "#learn") {
      // navigate("/improve-skills/");
      router.push("/improve-skills/");
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
              <NavLogo isTransparent={isTransparent}>Yoruba</NavLogo>
            </NavLogoLink>
            <MobileIcon onClick={toggle}>
              <FaBars></FaBars>
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
                      offset={0}
                      className="home"
                      onClick={toggleHome}
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
                    {/* <NavLinksR to="/" onClick={toggleHome}>
                      Home
                    </NavLinksR> */}
                    <NavLinksR href="/">Home</NavLinksR>
                  </NavItem>
                  <NavItem>
                    <NavLinksR
                      href="/about"
                      // onClick={() => handleNavItemClick("#about")}
                    >
                      About
                    </NavLinksR>
                  </NavItem>
                  <NavItem
                    onMouseEnter={() => setshowDropDown(true)}
                    onMouseLeave={() => setshowDropDown(false)}
                  >
                    <NavLinksR
                      href="/improve-skills"
                      className={showDropDown ? "active" : "non-active"}
                    >
                      Learn
                    </NavLinksR>
                    {showDropDown && <Dropdown title="Learn" />}
                  </NavItem>
                  <NavItem>
                    {/* <NavLinksR
                      to="/proverbs&wisdom"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      Proverbs & Wisdom
                    </NavLinksR> */}
                    <NavLinksR href="/proverbs-and-wisdom">
                      Proverbs & Wisdom
                    </NavLinksR>
                  </NavItem>
                </>
              )}
            </NavMenu>
            <NavBtn>
              {/* <NavBtnLink
                to="/signin"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                // activeClass="active"
              >
                Sign In
              </NavBtnLink> */}
              <NavBtnLink href="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
// export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
