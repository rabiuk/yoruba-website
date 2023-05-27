import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
import Link from "next/link";

const OFFBLACK = "#010606";
export const UnorderedList = styled.ul`
  width: 15rem;
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
  background: ${OFFBLACK};
  margin-top: 7.5px;
  background: linear-gradient(145deg, #010606, #010505);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 7.5px;
`;

export const List = styled.li`
  cursor: pointer;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.3); */

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
