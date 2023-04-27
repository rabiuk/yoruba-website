import styled from "styled-components";

export const FunFactsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5dc;

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
  grid-gap: 20px;
  padding: 0 50px;

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
  max-height: 340px;
  min-height: 340px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease—in-out;
    cursor: pointer;
  }
`;

export const FunFactsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const FunFactsH1 = styled.h1`
  font-size: 2.5rem;
  color: #ff7043;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const FunFactsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #424242;
`;
export const FunFactsP = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: #424242;
`;
