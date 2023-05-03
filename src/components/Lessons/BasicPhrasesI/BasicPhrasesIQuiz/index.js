import React, { useState, useEffect } from "react";
import generateVerbsData from "./verbs_data";
import { Button } from "../../../ButtonElements";
import {
  QuizContainer,
  QuizBg,
  QuestionContainer,
  QuestionH1,
  ChoicesContainer,
  ChoiceWrapper,
  Choice,
  SubmitBtnContainer,
  NextBtnContainer,
  ButtonContainer,
  BtnWrappper,
  SelectAChoiceWrap,
  SelectAChoicePromptH2,
  FinalResultWrap,
  FinalResultH2,
} from "./BasicPhrasesIQuizElements";

const BasicPhrasesIQuizComp = (props) => {
  const { verbsData } = props;
  // print the verbsData to the console
  console.log(verbsData);

  const [showFinalResult, setFinalResult] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(
    verbsData[currentQuestionIndex].question
  );
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(
    verbsData[currentQuestionIndex].answer
  );
  //   const [selectedOption, setSelectedOption] = useState(null);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);
  // State to store submit button clicked status
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [isCorrect, setIsCorrect] = useState(null);
  const [showPlsSelectAChoice, setPlsSelectAChoice] = useState(false);
  const [score, setScore] = useState(0);

  const [isQuizOver, setIsQuizOver] = useState(false);

  useEffect(() => {
    setQuestion(verbsData[currentQuestionIndex].question);
    setSelectedChoiceIndex(null);
    setIsCorrect(null);
    setChoices(shuffleChoices(verbsData[currentQuestionIndex].choices));
    setCorrectAnswer(verbsData[currentQuestionIndex].answer);
  }, [currentQuestionIndex]);

  const loadNextQuestion = () => {
    if (currentQuestionIndex < verbsData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      //Quiz is over
      setIsQuizOver(true);
      setFinalResult(true);
    }
    setIsButtonClicked(false);
  };

  const shuffleChoices = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleChoiceClicked = (choiceIndex) => {
    // Update the selected choice index
    setSelectedChoiceIndex(choiceIndex);
    // 3. Reset the button click status when a choice is clicked
    setIsButtonClicked(false);
  };

  // Add a function `handleSubmit` to handle the submit button click
  const handleSubmit = () => {
    if (selectedChoiceIndex === null) {
      setPlsSelectAChoice(true);
      return;
    }

    setPlsSelectAChoice(false);
    setIsButtonClicked(true);

    if (choices[selectedChoiceIndex] === correctAnswer) {
      setIsCorrect(true);
      setScore((prevScore) => prevScore + 1);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <QuizContainer>
      <QuizBg></QuizBg>
      {!isQuizOver && (
        <>
          <QuestionContainer>
            <QuestionH1>{question}</QuestionH1>
          </QuestionContainer>
          <ChoicesContainer>
            <ChoiceWrapper
              selected={selectedChoiceIndex === 0}
              isButtonClicked={isButtonClicked}
              isCorrect={isCorrect && selectedChoiceIndex === 0}
              isCurrentChoiceCorrect={choices[0] === correctAnswer}
              onClick={() => !isButtonClicked && handleChoiceClicked(0)}
            >
              <Choice>{choices[0]}</Choice>
              {/*Choice 1*/}
            </ChoiceWrapper>
            <ChoiceWrapper
              selected={selectedChoiceIndex === 1}
              isButtonClicked={isButtonClicked}
              isCorrect={isCorrect && selectedChoiceIndex === 1}
              isCurrentChoiceCorrect={choices[1] === correctAnswer}
              onClick={() => !isButtonClicked && handleChoiceClicked(1)}
            >
              <Choice>{choices[1]}</Choice>
              {/*Choice 2*/}
            </ChoiceWrapper>
            <ChoiceWrapper
              selected={selectedChoiceIndex === 2}
              isButtonClicked={isButtonClicked}
              isCorrect={isCorrect && selectedChoiceIndex === 2}
              isCurrentChoiceCorrect={choices[2] === correctAnswer}
              onClick={() => !isButtonClicked && handleChoiceClicked(2)}
            >
              <Choice>{choices[2]}</Choice>
              {/*Choice 3*/}
            </ChoiceWrapper>
            <ChoiceWrapper
              selected={selectedChoiceIndex === 3}
              isButtonClicked={isButtonClicked}
              isCorrect={isCorrect && selectedChoiceIndex === 3}
              isCurrentChoiceCorrect={choices[3] === correctAnswer}
              onClick={() => !isButtonClicked && handleChoiceClicked(3)}
            >
              <Choice>{choices[3]}</Choice>
              {/*Choice 4*/}
            </ChoiceWrapper>
          </ChoicesContainer>
          <ButtonContainer>
            {!isButtonClicked && (
              <SubmitBtnContainer>
                <BtnWrappper onClick={handleSubmit}>
                  <Button
                    primary={true ? 1 : 0}
                    dark={true ? 1 : 0}
                    dark2={true ? 1 : 0}
                  >
                    Submit
                  </Button>
                </BtnWrappper>
              </SubmitBtnContainer>
            )}
            {/* Add conditional rendering for the NextBtnContainer */}
            {isButtonClicked && (
              <NextBtnContainer>
                <BtnWrappper onClick={() => loadNextQuestion()}>
                  <Button
                    primary={true ? 1 : 0}
                    dark={true ? 1 : 0}
                    dark2={true ? 1 : 0}
                  >
                    Next
                  </Button>
                </BtnWrappper>
              </NextBtnContainer>
            )}
          </ButtonContainer>
          {showPlsSelectAChoice && (
            <SelectAChoiceWrap>
              <SelectAChoicePromptH2>
                Please Select A Choice
              </SelectAChoicePromptH2>
            </SelectAChoiceWrap>
          )}
        </>
      )}

      {isQuizOver && (
        <FinalResultWrap>
          <FinalResultH2>
            Your final score is {score} out of {verbsData.length} (
            {((score * 100) / verbsData.length).toFixed(0)}%)
          </FinalResultH2>
        </FinalResultWrap>
      )}
    </QuizContainer>
  );
};
const Quiz = () => {
  const verbsData = generateVerbsData();
  return <BasicPhrasesIQuizComp verbsData={verbsData} />;
};

export default Quiz;
