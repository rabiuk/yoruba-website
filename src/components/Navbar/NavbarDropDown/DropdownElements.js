import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
import Link from "next/link";
import { colors } from "@/components/colors";

export const UnorderedList = styled.ul`
  width: 15rem;
  position: absolute;
  list-style: none;
  text-align: start;
  top: 50px;
  /* opacity: ${(showDropDown) => (showDropDown ? "1" : "0")}; */
  transition: opacity 0.3s ease-in-out;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${colors.backgroundColor};
  border: 1px solid #e0e3e7;
  box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.1);
  border-radius: 7.5px;
  & > *:last-child {
    border-bottom: none;
  }
`;

export const List = styled.li`
  cursor: pointer;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e0e3e7;
`;

export const ItemLink = styled(Link)`
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  /* color: #fafafa; */
  width: 100%;
  padding: 16px;
  &:hover {
    /* background-color: rgba(255, 255, 255, 0.1); */
    color: #ff7043;
  }
`;
