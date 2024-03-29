import styled from "styled-components";

const burntOrange = "#FF7043";
const darkTeal = "#00695C";
const warmYellow = "#FFCA28";
const beige = "#f5f5dc";
const textColor = "#424242";
const offWhite = "#FAFAFA";
const offBlack = "#010606";

export const FunFactsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5dc;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const FunFactsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  /* padding: 0 50px; */
  margin-bottom: 100px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FunFactsCard = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 300px;
  height: 375px;
  /* max-height: 340px;
  min-height: 340px; */
  padding: 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease—in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    &:hover {
      transform: scale(1);
    }
  }
`;

// export const FunFactsIcon = styled.img`
//   height: 160px;
//   width: 160px;
//   margin-bottom: 10px;
// `;
export const FunFactsSVGIcon = styled.div`
  width: 160px; // Or any desired width
  height: 160px; // Or any desired height
  display: inline-block;
  margin-bottom: 10px;
  svg {
    width: 100%; // Make the SVG fill the container's width
    height: 100%; // Make the SVG fill the container's height
  }
`;

export const FunFactsH1 = styled.h1`
  font-size: 42px;
  color: #ff7043;
  /* color: #fafafa; */
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const FunFactsH2 = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #424242;
`;
export const FunFactsP = styled.p`
  font-size: 14px;
  text-align: center;
  color: #424242;
`;
