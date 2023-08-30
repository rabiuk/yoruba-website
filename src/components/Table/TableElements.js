import styled from "styled-components";
import { colors } from "@/components/colors";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: rgb(63 63 70); //zinc-700
  border-radius: 5px;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  font-size: clamp(
    ${parseFloat(16) * 0.8}px,
    ${parseFloat(16) / 100}vw + ${parseFloat(16) * 0.8}px,
    ${16}px
  );
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 5px;
  transition: all 0.5s;
`;

export const GridColumn = styled.div`
  flex: ${(props) => (props.active ? 4 : 1)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; // add this
  transition: all 0.2s;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  min-width: 100px;

  // add the following block
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:last-child::after {
    display: none;
  }
`;

export const GridData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px 10px;
  height: fit-content;
  cursor: ${({ noAudio }) => (noAudio ? "default" : "pointer")};
  font-weight: bold;

  &:hover {
    color: ${({ noAudio }) => (noAudio ? "inherit" : colors.primaryColor)};
  }
  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;

export const GridItemHeader = styled(GridItem)``;

export const GridDataHeader = styled(GridData)`
  font-weight: 900;
  width: fit-content;
  cursor: default;
  padding: 15px 15px;

  &:hover {
    color: ${colors.textColor};
  }
`;

export const GridDataTranslation = styled.span`
  font-weight: normal;
`;

export const AudioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1.5rem;
`;
