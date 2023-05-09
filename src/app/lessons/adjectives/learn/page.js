"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import Adjectives from "@/components/Lessons/Adjectives/Adjectives";

const AdjectivesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Adjectives />
    </>
  );
};

export default AdjectivesPage;
