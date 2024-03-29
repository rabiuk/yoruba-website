"use client";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ManClappingPNGcompressed from "@/components/svg/ManClappingPNGcompressed.png";
import yorubaAdjectivesData from "./data";
import InteractiveQuiz from "@/components/InteractiveQuiz/InteractiveQuiz";
import dynamic from "next/dynamic";
// import ModalComplete from "@/components/Modals/ModalComplete/ModalComplete";

const ModalComplete = dynamic(
  () => import("@/components/Modals/ModalComplete/ModalComplete"),
  { ssr: false }
);

const AdjectivesQuizPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ScrollToTop />
      <InteractiveQuiz
        data={yorubaAdjectivesData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <ModalComplete
        open={openModal}
        onClose={() => setOpenModal(false)}
        imgSrc={ManClappingPNGcompressed}
        alt=""
        title={"Excellent progress! "}
        body={
          "You have completed the Adjectives section! Your command of the Yoruba language is getting better with each new skill you learn."
        }
        continue_text={
          "Continue to the next section where you'll learn the fundamentals of forming sentences in the Yoruba language."
        }
        continue_link={"learn/lessons/sentence/learn"}
        continue_link_text={"Sentences"}
      />
    </>
  );
};

export default AdjectivesQuizPage;
