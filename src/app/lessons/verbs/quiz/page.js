"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import VerbsQuiz from "@/components/Lessons/Verbs/VerbsQuiz";

const VerbsQuizPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <VerbsQuiz />
    </>
  );
};

export default VerbsQuizPage;
