"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import NounsQuiz from "@/components/Lessons/Nouns/NounsQuiz";

const NounsQuizPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <NounsQuiz />
    </>
  );
};
export default NounsQuizPage;
