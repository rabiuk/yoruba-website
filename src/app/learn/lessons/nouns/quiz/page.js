"use client";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import GrowingSaplingPNG from "@/components/svg/GrowingSaplingPNG.png";
import yorubaNounsData from "./data";
import InteractiveQuiz from "@/components/InteractiveQuiz/InteractiveQuiz";
import ModalComplete from "@/components/Modals/ModalComplete/ModalComplete";

const NounsQuizPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ScrollToTop />
      <InteractiveQuiz
        data={yorubaNounsData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <ModalComplete
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={"Impressive! "}
        imgSrc={GrowingSaplingPNG}
        alt=""
        bg_color={"#00695C"}
        body={
          "You have completed the Nouns section in Yoruba! Your understanding of the Yoruba language is growing stronger with each step."
        }
        continue_text={
          "Continue to the next section to learn simple everyday nouns in Yoruba!"
        }
        continue_link={"learn/lessons/adjectives/learn"}
        continue_link_text={"Adjectives"}
      />
    </>
  );
};
export default NounsQuizPage;
