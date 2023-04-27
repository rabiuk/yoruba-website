import React from "react";
import { useState } from "react";
import ScrollToTop from "../../../components/ScrollToTop";
import Sidebar from "../../../components/MobileSidebar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BasicPhrasesI from "../../../components/Lessons/BasicPhrasesI/BasicPhraseIPre";

const BasicPhrasesIPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <BasicPhrasesI />
      <Footer />
    </>
  );
};

export default BasicPhrasesIPage;
