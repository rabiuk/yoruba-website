"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ManHandsOnHipsSVG from "@/components/svg/ManHandsOnHipsSVG.svg";
import yorubaNumbersData from "./data";
import InteractiveQuiz from "@/components/InteractiveQuiz/InteractiveQuiz";
import ModalComplete from "@/components/Modals/ModalComplete/ModalComplete";

const NumbersAndCountingQuizPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ScrollToTop />
      <InteractiveQuiz
        data={yorubaNumbersData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <ModalComplete
        open={openModal}
        onClose={() => setOpenModal(false)}
        svg={<ManHandsOnHipsSVG />}
        bg_color={"#00695C"}
        title={"Good Work!"}
        body={
          "You have completed the Numbers & Counting section in Yoruba! You're making great progress!"
        }
        continue_text={
          "Continue to the next section to learn simple everyday phrases in Yoruba!"
        }
        continue_link={"/lessons/verbs/learn"}
        continue_link_text={"Verbs"}
      />
    </>
  );
};
export default NumbersAndCountingQuizPage;
