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
  NavLinksS,
  NavBtn,
  NavBtnLink,
  NavLinksR,
  NavLinksDiv,
} from "./NavbarElements";
import Sidebar from "../Sidebar/Sidebar";
import Dropdown from "./NavbarDropDown/Dropdown";
const Navbar = ({ home, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [showDropDown, setshowDropDown] = useState(false);

  const navigate = useNavigate();
  const changeNav = () => {
    if (window.scrollY >= 800) {
      setScrollNav(true);
      setIsTransparent(false);
    } else {
      setScrollNav(false);
      setIsTransparent(true);
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
        <Nav home={home} scrollNav={scrollNav}>
          {/* {!home ? (
            <>
              <Sidebar />
            </>
          ) : (
            <></>
          )} */}
          <NavbarContainer home={home} isTransparent={isTransparent}>
            <NavLogo to="/" onClick={toggleHome} isTransparent={isTransparent}>
              Yoruba
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars></FaBars>
            </MobileIcon>
            <NavMenu>
              {home ? (
                <>
                  <NavItem>
                    <NavLinksS to="/" className="home" onClick={toggleHome}>
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
                // When home = {false}
                <>
                  <NavItem>
                    <NavLinksR to="/" onClick={toggleHome}>
                      Home
                    </NavLinksR>
                  </NavItem>
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
                  <NavItem
                    onMouseEnter={() => setshowDropDown(true)}
                    onMouseLeave={() => setshowDropDown(false)}
                  >
                    <NavLinksR
                      className={showDropDown ? "active" : "non-active"}
                      to="/improve-skills/learn-the-yoruba-alphabet"
                      // onClick={() => handleNavItemClick("#learn")}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      Learn
                    </NavLinksR>
                    {showDropDown && <Dropdown title="Learn" />}
                  </NavItem>
                  <NavItem>
                    <NavLinksR
                      to="/proverbs&wisdom"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      Proverbs & Wisdom
                    </NavLinksR>
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
