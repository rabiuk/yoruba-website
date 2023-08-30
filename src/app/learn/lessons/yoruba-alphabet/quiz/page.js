"use client";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ElderRaisingHandsPNG from "@/components/svg/ElderRaisingHandsPNG.png";
import { alphabetData } from "@/lib/utils/alphabetData";
import Flashcard from "@/components/Flashcard/Flashcard";
import dynamic from "next/dynamic";
// import ModalComplete from "@/components/Modals/ModalComplete/ModalComplete";

const ModalComplete = dynamic(
  () => import("@/components/Modals/ModalComplete/ModalComplete"),
  { ssr: false },
);

const LearnTheYorubaAlphabetQuizPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Flashcard
        data={alphabetData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <ModalComplete
        open={openModal}
        onClose={() => setOpenModal(false)}
        // svg={<ElderRaisingHandsSVG />}
        imgSrc={ElderRaisingHandsPNG}
        alt=""
        bg_color={"#FF7043"}
        title={"Good Work!"}
        body={
          "You have completed the Yoruba Alphabet Flashcards section! You're now one step closer to mastering the beautiful Yoruba language."
        }
        continue_text={
          "Continue to the next section to learn how to count in Yoruba!"
        }
        continue_link={"/learn/lessons/numbers-and-counting/learn"}
        continue_link_text={"Numbers & Counting"}
      />
    </>
  );
};
export default LearnTheYorubaAlphabetQuizPage;
