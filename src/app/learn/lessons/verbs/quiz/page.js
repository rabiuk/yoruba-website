"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ClipboardCheckmarkSVG from "@/components/svg/ClipboardCheckmarkSVG.svg";
import yorubaVerbsData from "./data";
import InteractiveQuiz from "@/components/InteractiveQuiz/InteractiveQuiz";
import ModalComplete from "@/components/Modals/ModalComplete/ModalComplete";

const VerbsQuizPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ScrollToTop />
      <InteractiveQuiz
        data={yorubaVerbsData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <ModalComplete
        open={openModal}
        onClose={() => setOpenModal(false)}
        svg={<ClipboardCheckmarkSVG />}
        bg_color={"#FF7043"}
        title={"Fantastic job! "}
        body={
          "You have completed the Verbs section! Your Yoruba language skills are coming along nicely."
        }
        continue_text={
          "Continue to the next section to learn simple everyday nouns in Yoruba!"
        }
        continue_link={"learn/lessons/nouns/learn"}
        continue_link_text={"Nouns"}
      />
    </>
  );
};

export default VerbsQuizPage;
