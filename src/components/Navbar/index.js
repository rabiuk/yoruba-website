import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinksR,
  NavLinksDiv,
} from "./NavbarElements";
import Sidebar from "../Sidebar/Sidebar";
const Navbar = ({ home, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const navigate = useNavigate();
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const handleNavItemClick = (section) => {
    if (section === "#learn") {
      navigate("/improve-skills/");
      scroll.scrollToTop();
    } else {
      navigate("/");
      setTimeout(() => {
        const sectionElement = document.querySelector(section);
        const topOffset = sectionElement.offsetTop - 80;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <ScrollToTop />
        <Nav scrollNav={scrollNav}>
          <NavbarContainer home={home}>
            <Sidebar />
            <NavLogo to="/" onClick={toggleHome}>
              Yoruba
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars></FaBars>
            </MobileIcon>
            <NavMenu>
              {home ? (
                <>
                  <NavItem>
                    <NavLinks
                      to={"about"}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      About
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      to="learn"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      Learn
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      to="proverbs-and-wisdom"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      Proverbs & Wisdom
                    </NavLinks>
                  </NavItem>
                </>
              ) : (
                // When home = {false}
                <>
                  <NavItem>
                    <NavLinksDiv
                      onClick={() => handleNavItemClick("#about")}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      About
                    </NavLinksDiv>
                  </NavItem>
                  <NavItem>
                    <NavLinksDiv
                      onClick={() => handleNavItemClick("#learn")}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      Learn
                    </NavLinksDiv>
                  </NavItem>
                  <NavItem>
                    <NavLinksDiv
                      onClick={() => handleNavItemClick("#proverbs-and-wisdom")}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      Proverbs & Wisdom
                    </NavLinksDiv>
                  </NavItem>
                </>
              )}
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="/signin"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                // activeClass="active"
              >
                Sign In
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
