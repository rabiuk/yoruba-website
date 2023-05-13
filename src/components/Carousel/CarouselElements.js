"use client";
import styled from "styled-components";

const breakPoint = "991px";
const white = "#fff";
const textColor = "#111";
const primaryColor = "#ff7043";
const borderColor = "#555";
const textColorAlt = "#333";

export const CarouselContainer = styled.div``;

export const SlideWrap = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding: 80px;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media screen and (max-width: 768px) and (orientation: landscape) {
    min-height: 110vh;
    padding: 70px 20px;
  }
  @media screen and (max-width: 768px) and (orientation: portrait) {
    min-height: 80vh;
    padding: 70px 20px;
  }
`;

export const TextWrap = styled.div`
  max-width: 900px;
  text-align: center;

  h2 {
    font-size: 3.5rem;
    line-height: 1.1;
    color: ${white}; // use variable
    margin-bottom: 10px;
    text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: ${breakPoint}) {
      // use variable
      font-size: 2.5rem;
    }
  }
  p {
    font-size: 1rem;
    color: ${white}; // use variable
  }
  /* .btn {
    font-size: 1em;
    color: ${white}; // use variable
    background-color: ${primaryColor}; // use variable
    display: inline-block;
    padding: 10px 30px;
    margin-top: 20px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.5s;
    &:hover {
      letter-spacing: 4px;
    }
  } */
  /* > * {
    opacity: 0;
    transform: translateY(-45px);
    transition: all 1s;
  } */
`;
