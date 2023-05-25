import React, { useState, useEffect } from "react";
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
  SelectAChoiceContainer,
  SelectAChoicePromptH2,
  FinalResultContainer,
  FinalResultH2,
  H1,
} from "./InteractiveQuizElements";
import { BtnWrappper, Button } from "@/components/ButtonElements";

const convertObj = (obj) => {
  // We need to shuffle the object first
  // Convert object to array
  let objArray = Object.entries(obj);

  // Shuffle the array
  for (let i = objArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [objArray[i], objArray[j]] = [objArray[j], objArray[i]];
  }

  // update the object with the shuffled array
  obj = Object.fromEntries(objArray);

  // Now we can convert the object to an array of questions
  const questions = [];
  const objKeys = Object.keys(obj);

  for (let i = 0; i < objKeys.length; i++) {
    const key = objKeys[i];
    const answer = obj[key];
    const otherAnswers = objKeys.filter((v) => v !== key);
    const choices = [answer];

    while (choices.length < 4) {
      const randomVerb =
        otherAnswers[Math.floor(Math.random() * otherAnswers.length)];
      const randomAnswer = obj[randomVerb];

      if (!choices.includes(randomAnswer)) {
        choices.push(randomAnswer);
      }
    }

    // We push each question object to the questions array
    questions.push({
      id: i,
      question: key,
      choices: shuffle(choices),
      answer: answer,
    });
  }

  return questions;
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const Quiz = ({ data, openModal, setOpenModal }) => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);
  // State to store submit button clicked status
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [isCorrect, setIsCorrect] = useState(null);
  const [showPlsSelectAChoice, setPlsSelectAChoice] = useState(false);
  const [score, setScore] = useState(0);

  const [isQuizOver, setIsQuizOver] = useState(false);
  const [showFinalResult, setFinalResult] = useState(false);

  // Load quizData on component mount
  useEffect(() => {
    setQuizData(convertObj(data));
  }, []);

  // Update dependent states when quizData changes
  useEffect(() => {
    if (quizData.length > 0) {
      setQuestion(quizData[currentQuestionIndex].question);
      setChoices(quizData[currentQuestionIndex].choices);
      setCorrectAnswer(quizData[currentQuestionIndex].answer);
      setSelectedChoiceIndex(null);
      setIsCorrect(null);
    }
  }, [quizData, currentQuestionIndex]);

  const loadNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      //Quiz is over
      setIsQuizOver(true);
      setFinalResult(true);
    }
    setIsButtonClicked(false);
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
    <>
      <QuizContainer>
        {/* <QuizBg /> */}
        {!isQuizOver && (
          <>
            <QuestionContainer>
              <QuestionH1>{question}</QuestionH1>
            </QuestionContainer>
            <ChoicesContainer>
              {/* Choice 1 */}
              <ChoiceWrapper
                selected={selectedChoiceIndex === 0}
                isButtonClicked={isButtonClicked}
                isCorrect={isCorrect && selectedChoiceIndex === 0}
                isCurrentChoiceCorrect={choices[0] === correctAnswer}
                onClick={() => !isButtonClicked && handleChoiceClicked(0)}
              >
                <Choice>{choices[0]}</Choice>
              </ChoiceWrapper>
              {/* Choice 2 */}
              <ChoiceWrapper
                selected={selectedChoiceIndex === 1}
                isButtonClicked={isButtonClicked}
                isCorrect={isCorrect && selectedChoiceIndex === 1}
                isCurrentChoiceCorrect={choices[1] === correctAnswer}
                onClick={() => !isButtonClicked && handleChoiceClicked(1)}
              >
                <Choice>{choices[1]}</Choice>
              </ChoiceWrapper>
              {/* Choice 3 */}
              <ChoiceWrapper
                selected={selectedChoiceIndex === 2}
                isButtonClicked={isButtonClicked}
                isCorrect={isCorrect && selectedChoiceIndex === 2}
                isCurrentChoiceCorrect={choices[2] === correctAnswer}
                onClick={() => !isButtonClicked && handleChoiceClicked(2)}
              >
                <Choice>{choices[2]}</Choice>
              </ChoiceWrapper>
              {/* Choice 4 */}
              <ChoiceWrapper
                selected={selectedChoiceIndex === 3}
                isButtonClicked={isButtonClicked}
                isCorrect={isCorrect && selectedChoiceIndex === 3}
                isCurrentChoiceCorrect={choices[3] === correctAnswer}
                onClick={() => !isButtonClicked && handleChoiceClicked(3)}
              >
                <Choice>{choices[3]}</Choice>
              </ChoiceWrapper>
            </ChoicesContainer>
            <ButtonContainer>
              {!isButtonClicked && (
                <SubmitBtnContainer>
                  <BtnWrappper onClick={handleSubmit}>
                    <Button primary dark dark2>
                      Submit
                    </Button>
                  </BtnWrappper>
                </SubmitBtnContainer>
              )}
              {isButtonClicked && (
                <NextBtnContainer>
                  <BtnWrappper onClick={() => loadNextQuestion()}>
                    <Button primary dark dark2>
                      Next
                    </Button>
                  </BtnWrappper>
                </NextBtnContainer>
              )}
            </ButtonContainer>
            {showPlsSelectAChoice && (
              <SelectAChoiceContainer>
                <SelectAChoicePromptH2>
                  Please Select A Choice
                </SelectAChoicePromptH2>
              </SelectAChoiceContainer>
            )}
          </>
        )}

        {isQuizOver && (
          <FinalResultContainer>
            <FinalResultH2>
              Your final score is {score} out of {quizData.length} (
              {((score * 100) / quizData.length).toFixed(0)}%)
            </FinalResultH2>
            <BtnWrappper onClick={() => setOpenModal(!openModal)}>
              <Button primary dark dark2>
                Done
              </Button>
            </BtnWrappper>
          </FinalResultContainer>
        )}
      </QuizContainer>
    </>
  );
};

export default Quiz;
