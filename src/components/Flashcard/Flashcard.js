import React, { useState, useEffect } from "react";
import ElderRaisingHandsSVG from "@/components/svg/ElderRaisingHandsSVG.svg";
import {
  Container,
  Card,
  CardBack,
  CardFront,
  CardInner,
  CardText,
  BtnContainer,
  EmphasizedText,
} from "./FlashcardElements";
// import { alphabetsData } from "./alphabet_data";
import { Button, BtnWrappper } from "@/components/ButtonElements";

const FlashcardComp = ({ data, openModal, setOpenModal }) => {
  //   const alphabetData = data;

  const [card, setCard] = useState("");
  const [word, setWord] = useState("");
  const [emphasized, setEmphasized] = useState("");
  const [pronounciation, setPronounciation] = useState("");
  const [translation, setTranslation] = useState("");

  const [isFlipped, setIsFlipped] = useState(false);
  const [isWord, setIsWord] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    setIsWord(!isWord);
  };

  const loadNextCard = () => {
    setIsNextClicked(true);
    if (currentCardIndex < data.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
      setIsFlipped(false);
    }
    //At the end..
    setIsNextClicked(false);
  };
  const loadPreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
      setIsFlipped(false);
    }
  };
  useEffect(() => {
    if (data && data.length > 0) {
      setCard(data[currentCardIndex].card);
      setWord(data[currentCardIndex].word);
      setEmphasized(data[currentCardIndex].emphasis);
      setPronounciation(data[currentCardIndex].pronounciation);
      setTranslation(data[currentCardIndex].translation);
    }

    if (currentCardIndex === data.length - 1) {
      setIsFinish(true);
    } else {
      setIsFinish(false);
    }
  }, [data, currentCardIndex]);

  const getEmphasizedIndices = (word, emphasized) => {
    let indices = [];
    for (let i = 0; i < word.length; i++) {
      if (emphasized.includes(word[i])) {
        // if each index of the word in in the emphasis string
        indices.push(i); // mark the index
      }
    }
    return indices;
  };

  const emphasizedIndices = getEmphasizedIndices(word, emphasized);

  return (
    <>
      <Container>
        <Card onClick={() => handleCardClick()}>
          <CardInner
            isWord={isWord}
            isFlipped={isFlipped}
            isNextClicked={isNextClicked}
          >
            <CardFront>
              <EmphasizedText>{card}</EmphasizedText>{" "}
              <CardText>({pronounciation})</CardText>
            </CardFront>
            <CardBack>
              <CardText>
                {word.split("").map((letter, index) => {
                  return emphasizedIndices.includes(index) ? (
                    <EmphasizedText key={index}>{letter}</EmphasizedText>
                  ) : (
                    letter
                  );
                })}
              </CardText>
              <CardText>({translation})</CardText>
            </CardBack>
          </CardInner>
        </Card>
        <BtnContainer>
          <BtnWrappper onClick={() => loadPreviousCard()}>
            <Button
              primary={true ? 1 : 0}
              dark={true ? 1 : 0}
              dark2={true ? 1 : 0}
            >
              Previous
            </Button>
          </BtnWrappper>
          {!isFinish && (
            <BtnWrappper onClick={() => loadNextCard()}>
              <Button
                primary={true ? 1 : 0}
                dark={true ? 1 : 0}
                dark2={true ? 1 : 0}
              >
                Next
              </Button>
            </BtnWrappper>
          )}
          {isFinish && (
            <BtnWrappper onClick={() => setOpenModal(!openModal)}>
              <Button
                primary={true ? 1 : 0}
                dark={true ? 1 : 0}
                dark2={true ? 1 : 0}
              >
                Done
              </Button>
            </BtnWrappper>
          )}
        </BtnContainer>
      </Container>
    </>
  );
};

// const Quiz = ({ data }) => {
//   //   const verbsData = generateVerbsData();
//   const [openModal, setOpenModal] = useState(false);

//   return (
//     <FlashcardComp
//       data={data}
//       openModal={openModal}
//       setOpenModal={setOpenModal}
//     />
//   );
// };

// export default Quiz;
export default FlashcardComp;
