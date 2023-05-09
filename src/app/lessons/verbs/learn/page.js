"use client";
import React from "react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import Verbs from "@/components/Lessons/Verbs/Verbs";

const VerbsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Verbs />
    </>
  );
};

export default VerbsPage;
