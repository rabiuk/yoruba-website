import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  /* background: #15171c; */
  /* height: 80px; */
  /* padding: 30px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* z-index: 999; */
`;

const NavIcon = styled.div`
  padding: 30px;
  /* margin-left: 2rem; */
  font-size: 2.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
  background: #0c0c0c;
  width: 245px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 150ms;
  z-index: 1;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon onClick={showSidebar}>
            <AiIcons.AiOutlineMenu />
          </NavIcon>
        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
