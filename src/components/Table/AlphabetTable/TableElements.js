import styled from "styled-components";
import { colors } from "@/components/colors";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1.5rem; */
  width: 100%;
  border: 2px solid ${colors.textColor};
  color: ${colors.textColor};
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  font-size: 1.8rem;
  border-radius: 5px;
  transition: all 0.5s;

  @media screen and (max-width: 768px){
    font-size: 1.4rem;
  }
`;

export const GridColumn = styled.div`
  flex: ${(props) => (props.active ? 4 : 1)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; // add this
  transition: all 0.2s;
  border-bottom: 1px solid ${colors.textColor};
  min-width: 100px;

  // add the following block
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: ${colors.textColor};
  }

  &:last-child::after {
    display: none;
  }
`;

export const GridData = styled.div`
  text-align: center;
  padding: 5px 10px;
  font-size: 1.8rem;
  height: fit-content;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: ${colors.primaryColor};
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const GridItemHeader = styled(GridItem)``;

export const GridDataHeader = styled(GridData)`
  font-weight: 900;
  color: ${colors.secondaryColor};
  cursor: default;
  padding: 15px 15px;
  border-bottom: 2px solid ${colors.textColor};

  &:hover {
    color: ${colors.secondaryColor};
  }
`;

export const GridDataTranslation = styled.span`
  font-weight: normal;
`;
