"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import NumbersAndCounting from "@/components/Lessons/Numbers/Numbers";

const NumbersAndCountingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <NumbersAndCounting />
    </>
  );
};

export default NumbersAndCountingPage;
