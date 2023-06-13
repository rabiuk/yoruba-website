import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Card,
  CardBack,
  CardFront,
  CardInner,
  CardText,
  BtnContainer,
  EmphasizedText,
  BottomContainer,
  IconWrap,
} from "./FlashcardElements";
import { BtnWrappper } from "@/components/ButtonElements";
import { P } from "../Typography/Typography";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { playSound } from "@/lib/utils/audioControl";

const FlashcardComp = ({ data, openModal, setOpenModal }) => {
  const audioRef = useRef();
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
  const [direction, setDirection] = useState(0);

  const cardVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 1,
    }),
    visible: {
      x: 0,
      opacity: 1,
      // transition: { delay: 0.2 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 1,
    }),
  };
  const iconVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: -100, opacity: 0, transition: { duration: 0.3 } },
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    setIsWord(!isWord);
  };

  const loadNextCard = () => {
    setDirection(1); // set direction to 1 when loading next card
    setIsNextClicked(true);
    if (currentCardIndex < data.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
      setIsFlipped(false);
    }
    setIsNextClicked(false);
  };

  const loadPreviousCard = () => {
    setDirection(-1); // set direction to -1 when loading previous card
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
      setIsFlipped(false);
    }
  };
  useEffect(() => {
    if (data && data.length > 0) {
      setCard(data[currentCardIndex].letter);
      setWord(data[currentCardIndex].example);
      setEmphasized(data[currentCardIndex].letter);
      setPronounciation(data[currentCardIndex].pronunciation);
      setTranslation(data[currentCardIndex].translation);
      playSound(audioRef, data[currentCardIndex].audio);
    }

    if (currentCardIndex === data.length - 1) {
      setIsFinish(true);
    } else {
      setIsFinish(false);
    }
  }, [data, currentCardIndex, audioRef]);

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
        <audio ref={audioRef} preload="auto" />
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={direction}
          key={currentCardIndex}
          isWord={isWord}
          isFlipped={isFlipped}
          isNextClicked={isNextClicked}
        >
          <Card onClick={() => handleCardClick()}>
            <CardInner
              isWord={isWord}
              isFlipped={isFlipped}
              isNextClicked={isNextClicked}
            >
              <CardFront>
                <div>
                  <EmphasizedText isFront={true}>{card}</EmphasizedText>
                  <CardText>&nbsp;&nbsp;({pronounciation})</CardText>
                </div>
                {currentCardIndex === 0 && (
                  <BottomContainer>
                    <P fontSize="14" lightText={true}>
                      Click the card to flip
                    </P>
                  </BottomContainer>
                )}
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
                <CardText>&nbsp;&nbsp;({translation})</CardText>
              </CardBack>
            </CardInner>
          </Card>
        </motion.div>
        <BtnContainer>
          <BtnWrappper onClick={() => loadPreviousCard()}>
            {currentCardIndex === 0 ? (
              <IconWrap greyOut={true}>
                <CiCircleChevLeft size={40} />
              </IconWrap>
            ) : (
              <IconWrap>
                <CiCircleChevLeft size={40} />
              </IconWrap>
            )}
          </BtnWrappper>
          {!isFinish && (
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <BtnWrappper onClick={() => loadNextCard()}>
                <IconWrap>
                  <CiCircleChevRight size={40} />
                </IconWrap>
              </BtnWrappper>
            </motion.div>
          )}
          {isFinish && (
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <BtnWrappper onClick={() => setOpenModal(!openModal)}>
                <IconWrap isDone={true}>
                  <CiCircleCheck size={40} />
                </IconWrap>
              </BtnWrappper>
            </motion.div>
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
