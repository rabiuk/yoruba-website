import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const UnorderedList = styled.ul`
  width: 10rem;
  position: absolute;
  list-style: none;
  text-align: start;
  top: 80px;
`;
export const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const List = styled.li`
  background: #424242;
  cursor: pointer;
`;
export const ListItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover {
    background: #353535;
  }
`;

export const Link = styled(LinkR)`
  text-decoration: none;
  color: #fafafa;
  padding: 16px;
`;
