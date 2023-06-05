import React, { useState } from "react";
import {
  GridContainer,
  GridItem,
  GridColumn,
  GridData,
  GridItemHeader,
  GridDataHeader,
  GridDataTranslation,
} from "./TableElements";

const alphabetData = [
  { letter: "a", pronunciation: "ah", example: "aso", translation: "cloth" },
  { letter: "b", pronunciation: "bi", example: "bọ̀ọ́lù", translation: "ball" },
  {
    letter: "d",
    pronunciation: "di",
    example: "daduro",
    translation: "stop/detain",
  },
  { letter: "e", pronunciation: "hay", example: "etí", translation: "ear" },
  { letter: "ẹ", pronunciation: "hen", example: "ẹja", translation: "fish" },
  {
    letter: "f",
    pronunciation: "fi",
    example: "fàmóra",
    translation: "adhere",
  },
  { letter: "g", pronunciation: "gi", example: "ga", translation: "tall" },
  {
    letter: "gb",
    pronunciation: "gbi",
    example: "gbàdurà",
    translation: "pray",
  },
  { letter: "h", pronunciation: "in", example: "hó", translation: "boil" },
  { letter: "i", pronunciation: "hei", example: "ibí", translation: "birth" },
  { letter: "j", pronunciation: "ji", example: "jẹun", translation: "eat" },
  { letter: "k", pronunciation: "ki", example: "kà", translation: "read" },
  { letter: "l", pronunciation: "li", example: "lò", translation: "use" },
  { letter: "m", pronunciation: "mi", example: "Mo", translation: "I" },
  {
    letter: "n",
    pronunciation: "ni",
    example: "nla",
    translation: "great/big",
  },
  { letter: "o", pronunciation: "oh", example: "ohùn", translation: "sound" },
  { letter: "ọ", pronunciation: "or", example: "ọba", translation: "king" },
  { letter: "kp", pronunciation: "pi", example: "padé", translation: "close" },
  { letter: "r", pronunciation: "ri", example: "rí", translation: "see/find" },
  {
    letter: "s",
    pronunciation: "si",
    example: "sálo",
    translation: "run away",
  },
  {
    letter: "ṣ",
    pronunciation: "shi",
    example: "ṣòkòtò",
    translation: "pants",
  },
  { letter: "t", pronunciation: "ti", example: "tán", translation: "finish" },
  { letter: "u", pronunciation: "oou", example: "tú", translation: "loose" },
  { letter: "w", pronunciation: "wee", example: "wá", translation: "come" },
  { letter: "y", pronunciation: "yi", example: "yá", translation: "tear" },
];

const AlphabetTable = () => {
  // const [activeColumn, setActiveColumn] = useState(null);

  return (
    <GridContainer>
      <GridItemHeader>
        {["Letter", "Pronunciation", "Example"].map((header, index) => (
          <GridColumn key={index}>
            <GridDataHeader>{header}</GridDataHeader>
          </GridColumn>
        ))}
      </GridItemHeader>
      {alphabetData.map((data, index) => (
        <GridItem key={index}>
          <GridColumn>
            <GridData>{data.letter}</GridData>
          </GridColumn>
          <GridColumn>
            <GridData>{data.pronunciation}</GridData>
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
