"use client";
import styled from "styled-components";

export const ContentContainer = styled.div`
  padding: 10vw 0;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    width: calc(100vw - 50px);
  }
`;
