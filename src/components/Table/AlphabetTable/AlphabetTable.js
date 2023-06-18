import {
  GridContainer,
  GridItem,
  GridColumn,
  GridData,
  GridItemHeader,
  GridDataHeader,
  GridDataTranslation,
} from "./TableElements";
import { useRef } from "react";
import { playSound } from "@/lib/utils/audioControl";
import { alphabetData } from "@/lib/utils/alphabetData";

const AlphabetTable = () => {
  // const [activeColumn, setActiveColumn] = useState(null);
  const audioRef = useRef(null);

  return (
    <GridContainer>
      <audio ref={audioRef} preload="auto"></audio>
      <GridItemHeader>
        {["Letter", "Example"].map((header, index) => (
          <GridColumn key={index}>
            <GridDataHeader>{header}</GridDataHeader>
          </GridColumn>
        ))}
      </GridItemHeader>
      {alphabetData.map((data, index) => (
        <GridItem key={index}>
          <GridColumn>
            <GridData onClick={() => playSound(audioRef, data.audio)}>
              {data.letter}
            </GridData>
          </GridColumn>
          <GridColumn>
            <GridData>
              <GridData>
                {data.example}{" "}
                <GridDataTranslation>({data.translation})</GridDataTranslation>
              </GridData>
            </GridData>
          </GridColumn>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default AlphabetTable;
