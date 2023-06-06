"use client";
import styled from "styled-components";
import { colors } from "@/components/colors";
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
  background-color: ${colors.backgroundColor};
`;

export const InnerWrapper = styled.div`
  /* margin: auto; */
  background-color: #ffffff;
  border-radius: 0.5rem;
  /* width: 90%;
  height: 90%; */
  width: 95%;
  height: 95%;
  /* height: 800px; */

  /* height: fit-content; */
  display: flex;
  //add some box shadow
  border: 1px solid #e5e7eb;
  overflow: hidden;

  box-shadow: 2px 5px 5px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 860px) {
    // switch to two columns on larger screens
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
`;

export const CredWrapper = styled.div`
  /* background-color: ${beige}; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  background-color: #fafafa;
  /* border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem; */
  @media screen and (max-width: 860px) {
    position: absolute;
    top: 0;
    left: 0;  
    width: 100vw;
    height: 100vh;
  }
`;
export const LoginText = styled.h1`
  position: absolute;
  top: 5rem;
  right: 5rem;
  color: ${colors.textColor};
  font-size: 1.4rem;
  font-weight: 600;
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
  padding: 3rem;
  /* padding: 2.5rem 0; */
  /* padding: 5rem; */
`;
