"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import NumbersQuiz from "@/components/Lessons/Numbers/NumbersQuiz";

const NumbersAndCountingQuizPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <NumbersQuiz />
    </>
  );
};
export default NumbersAndCountingQuizPage;
