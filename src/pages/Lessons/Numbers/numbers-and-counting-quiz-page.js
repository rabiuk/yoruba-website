import React from "react";
import { useState } from "react";
import ScrollToTop from "../../../components/ScrollToTop";
import MobileSidebar from "../../../components/MobileSidebar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
// import YorubaAlphabetQuiz from "../../../components/Lessons/YorubaAlphabet/Quiz/YorubaAlphabetQuiz";
import NumbersQuiz from "../../../components/Lessons/Numbers/Quiz/NumbersQuiz";

const NumbersAndCountingQuizPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <MobileSidebar isOpen={isOpen} toggle={toggle} />
      <Navbar home={false} toggle={toggle} />
      <NumbersQuiz />
      <Footer />
    </>
  );
};
export default NumbersAndCountingQuizPage;
