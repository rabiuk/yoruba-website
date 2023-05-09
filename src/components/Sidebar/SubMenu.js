import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  margin: 10px 0px 20px 0px;
  /* top right bottom left */
  text-decoration: none;
  font-size: 16px;

  &:hover {
    background: #252831;
    border-left: 4px solid #ff7043;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropDownLink = styled(Link)`
  background: #252831;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 12px;

  &:hover {
    background: #ff7043;
    cursor: pointer;
  }
`;
const SubMenu = ({ item }) => {
  const [subnav, setSubNav] = useState(false);
  const showSubnav = () => setSubNav(!subnav);
  return (
    <>
      <SidebarLink href={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropDownLink href={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropDownLink>
          );
        })}
    </>
  );
};

export default SubMenu;