"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import AdjectivesQuiz from "@/components/Lessons/Adjectives/AdjectivesQuiz";

const AdjectivesQuizPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <AdjectivesQuiz />
    </>
  );
};
export default AdjectivesQuizPage;
