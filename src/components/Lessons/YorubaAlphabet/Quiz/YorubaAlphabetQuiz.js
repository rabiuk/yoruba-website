import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardBack,
  CardFront,
  CardInner,
  CardText,
  BtnContainer,
  EmphasizedText,
} from "./YorubaAlphabetQuizElements";
import { alphabetsData } from "./alphabet_data";
import { Button, BtnWrappper } from "../../../ButtonElements";
import ModalComplete from "../../../Modals/ModalComplete/ModalComplete";

const YorubaAlphabetQuiz = (props) => {
  const { alphabetData } = props;

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [card, setCard] = useState(alphabetData[currentCardIndex].card);
  const [word, setWord] = useState(alphabetData[currentCardIndex].word);
  const [emphasized, setEmphasized] = useState(
    alphabetData[currentCardIndex].emphasis
  );
  const [pronounciation, setPronounciation] = useState(
    alphabetData[currentCardIndex].pronounciation
  );
  const [translation, setTranslation] = useState(
    alphabetData[currentCardIndex].translation
  );

  const [isFlipped, setIsFlipped] = useState(false);
  const [isWord, setIsWord] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    setIsWord(!isWord);
  };

  const loadNextCard = () => {
    setIsNextClicked(true);
    if (currentCardIndex < alphabetData.length - 1) {
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
    setCard(alphabetData[currentCardIndex].card);
    setWord(alphabetData[currentCardIndex].word);
    setPronounciation(alphabetData[currentCardIndex].pronounciation);
    setEmphasized(alphabetData[currentCardIndex].emphasis);
    setTranslation(alphabetData[currentCardIndex].translation);

    if (currentCardIndex === alphabetData.length - 1) {
      setIsFinish(true);
    } else {
      setIsFinish(false);
    }
  }, [currentCardIndex]);

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
                <CardText>({translation})</CardText>
              </CardText>
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
            <BtnWrappper onClick={() => setOpenModal(true)}>
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
      <ModalComplete
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={"Good Work!"}
        body={
          "You have completed the Yoruba Alphabet Flashcards section! You're now one step closer to mastering the beautiful Yoruba language."
        }
        continue_text={
          "Continue to the next section to learn how to count in Yoruba!"
        }
        continue_link={"/improve-skills/numbers-and-counting"}
        continue_link_text={"Continue to Numbers & Counting"}
      />
    </>
  );
};

// export default YorubaAlphabetQuiz;
const Quiz = () => {
  //   const verbsData = generateVerbsData();
  return <YorubaAlphabetQuiz alphabetData={alphabetsData} />;
};

export default Quiz;
