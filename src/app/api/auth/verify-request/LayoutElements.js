"use client";
import styled from "styled-components";

const burntOrange = "#FF7043";
const warmYellow = "#FFCA28";
const beige = "#f5f5dc";
const darkTeal = "#00695C";

export const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${beige};
`;

export const InnerWrapper = styled.div`
  /* margin: auto; */
  background-color: #ffffff;
  border-radius: 0.5rem;
  width: 90%;
  height: 90%;
  height: fit-content;
  display: flex;
  //add some box shadow
  box-shadow: 2px 5px 5px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 860px) {
    // switch to two columns on larger screens
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
`;

export const LeftWrapper = styled.div`
  /* background-color: ${beige}; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  /* border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem; */
`;
export const ImageWrapper = styled.div`
  position: relative; // Add this to establish a stacking context
  background-color: ${burntOrange};
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  // Add this block to create the overlay
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5); // Black overlay with 50% opacity
    z-index: 1;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

export const ChildrenWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  /* padding: 2.5rem 0; */
  /* padding: 5rem; */
`;
