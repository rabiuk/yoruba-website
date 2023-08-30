import {
  GridContainer,
  GridItem,
  GridColumn,
  GridData,
  GridItemHeader,
  GridDataHeader,
  GridDataTranslation,
  AudioContainer,
} from "./TableElements";
import { useRef } from "react";
import { BsPlayCircleFill } from "react-icons/bs";

const Table = ({ headers, data, onRowClick }) => {
  const audioRef = useRef(null);

  const renderCellWithAudio = (cell) => {
    if (typeof cell === "object" && cell.audio) {
      return (
        <GridData onClick={() => onRowClick(audioRef, cell.audio)}>
          {cell.value}{" "}
          {cell.pronunciation && (
            <GridDataTranslation> ({cell.pronunciation})</GridDataTranslation>
          )}
          {cell.translation && (
            <GridDataTranslation>({cell.translation})</GridDataTranslation>
          )}
          <AudioContainer>
            <BsPlayCircleFill />
          </AudioContainer>
        </GridData>
      );
    }
    return (
      <GridData noAudio={true}>
        {" "}
        {cell.value && <div>{cell.value}</div>}
        {/* {cell.number} */}
        {cell.pronunciation && (
          <GridDataTranslation> ({cell.pronunciation})</GridDataTranslation>
        )}
        {cell.translation && (
          <GridDataTranslation>({cell.translation})</GridDataTranslation>
        )}
      </GridData>
    );
  };

  return (
    <GridContainer classname="shadow-md">
      <audio ref={audioRef} preload="auto"></audio>
      <GridItemHeader>
        {headers.map((header, index) => (
          <GridColumn key={index}>
            <GridDataHeader>{header}</GridDataHeader>
          </GridColumn>
        ))}
      </GridItemHeader>
      {data.map((row, index) => (
        <GridItem key={index}>
          {row.map((cell, cellIndex) => (
            <GridColumn key={cellIndex}>{renderCellWithAudio(cell)}</GridColumn>
          ))}
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default Table;
