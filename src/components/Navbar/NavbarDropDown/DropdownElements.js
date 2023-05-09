import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
import Link from "next/link";

export const UnorderedList = styled.ul`
  width: 10rem;
  position: absolute;
  list-style: none;
  text-align: start;
  top: 80px;
  /* opacity: ${(showDropDown) => (showDropDown ? "1" : "0")}; */
  transition: opacity 0.3s ease-in-out;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #0c0c0c;
  /* border-top-left-radius: 10px; */
  /* border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px; */
  overflow: hidden;
`;

export const List = styled.li`
  cursor: pointer;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 10px;
  padding-bottom: 10px; */

  /* &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  } */
`;

export const ItemLink = styled(Link)`
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  color: #fafafa;
  width: 100%;
  padding: 16px;
  &:hover {
    /* background-color: rgba(255, 255, 255, 0.1); */
    color: #ff7043;
  }
`;
