"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import YorubaAlphabet from "@/components/Lessons/YorubaAlphabet/YorubaAlphabet";
const LearnTheYorubaAlphabetPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <YorubaAlphabet />
    </>
  );
};

export default LearnTheYorubaAlphabetPage;
