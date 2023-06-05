import styled from "styled-components";

export const Container = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  height: fit-content;
  position: relative;
  overflow: auto;
`;

export const ContentContainer = styled.div`
  padding: 7rem 0 7rem 10vw;
  width: 70%;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 7rem 10vw 7rem 10vw;
  }
`;
