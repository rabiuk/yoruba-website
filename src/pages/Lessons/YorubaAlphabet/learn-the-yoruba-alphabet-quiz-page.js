import React from "react";
import { useState } from "react";
import ScrollToTop from "../../../components/ScrollToTop";
import MobileSidebar from "../../../components/MobileSidebar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import YorubaAlphabetQuiz from "../../../components/Lessons/YorubaAlphabet/Quiz/YorubaAlphabetQuiz";

const LearnTheYorubaAlphabetQuizPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <MobileSidebar isOpen={isOpen} toggle={toggle} />
      <Navbar home={false} toggle={toggle} />
      <YorubaAlphabetQuiz />
      <Footer />
    </>
  );
};
export default LearnTheYorubaAlphabetQuizPage;
