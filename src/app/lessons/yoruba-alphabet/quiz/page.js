"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import YorubaAlphabetQuiz from "@/components/Lessons/YorubaAlphabet/YorubaAlphabetQuiz";

const LearnTheYorubaAlphabetQuizPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <YorubaAlphabetQuiz />
    </>
  );
};
export default LearnTheYorubaAlphabetQuizPage;
