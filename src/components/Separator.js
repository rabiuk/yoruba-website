"use client";
import styled from "styled-components";
import { colors } from "@/components/colors";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  &:before,
  &:after {
    content: "";
    flex-grow: 1;
    background: #9ca3af;
    height: 0.1rem;
    font-size: 0.1em;
    line-height: 1;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const Span = styled.span`
  /* background-color: transparent; */
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: #9ca3af; /* Replace with your foreground color */
`;

export const Separator = ({ text }) => (
  <Container>
    <Span>{text}</Span>
  </Container>
);

// export default Separator;
