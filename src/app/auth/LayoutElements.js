"use client";
import styled from "styled-components";

const burntOrange = "#FF7043";
const warmYellow = "#FFCA28";
const beige = "#f5f5dc";
const darkTeal = "#00695C";

export const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${beige};
`;

export const InnerWrapper = styled.div`
  margin: auto;
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 80%; // increase initial width for smaller screens
  height: 75%;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    // switch to two columns on larger screens
    width: 60%;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImageWrapper = styled.div`
  background-color: ${burntOrange};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;

  svg {
    width: 100%; // make the SVG responsive by setting width to 100%
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ChildrenWrapper = styled.div`
  text-align: center;
  padding: 2.5rem 0;
`;
