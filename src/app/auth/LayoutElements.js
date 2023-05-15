"use client";
import styled from "styled-components";

const burntOrange = "#FF7043";
const darkTeal = "#00695C";
export const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  /* background-color: #3b82f6; */
  background-color: ${burntOrange};
`;

export const InnerWrapper = styled.div`
  margin: auto;
  /* background-color: #f9fafb; */
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 60%;
  height: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ImageWrapper = styled.div``;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* background-color: #9ca3af; */
`;

export const ChildrenWrapper = styled.div`
  text-align: center;
  padding: 2.5rem 0;
`;
