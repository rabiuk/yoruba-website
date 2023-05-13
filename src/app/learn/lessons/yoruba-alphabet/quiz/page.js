"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ElderRaisingHandsSVG from "@/components/svg/ElderRaisingHandsSVG.svg";
import { alphabetsData } from "./data";
// import InteractiveQuiz from "@/components/InteractiveQuiz/InteractiveQuiz";
import Flashcard from "@/components/Flashcard/Flashcard";
import ModalComplete from "@/components/Modals/ModalComplete/ModalComplete";

const LearnTheYorubaAlphabetQuizPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Flashcard
        data={alphabetsData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <ModalComplete
        open={openModal}
        onClose={() => setOpenModal(false)}
        svg={<ElderRaisingHandsSVG />}
        bg_color={"#FF7043"}
        title={"Good Work!"}
        body={
          "You have completed the Yoruba Alphabet Flashcards section! You're now one step closer to mastering the beautiful Yoruba language."
        }
        continue_text={
          "Continue to the next section to learn how to count in Yoruba!"
        }
        continue_link={"learn/lessons/numbers-and-counting/learn"}
        continue_link_text={"Continue to Numbers & Counting"}
      />
    </>
  );
};
export default LearnTheYorubaAlphabetQuizPage;
