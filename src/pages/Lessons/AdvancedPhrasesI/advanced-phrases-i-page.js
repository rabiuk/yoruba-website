import React from "react";
import { useState } from "react";
import ScrollToTop from "../../../components/ScrollToTop";
import Sidebar from "../../../components/MobileSidebar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import AdvancedPhrasesI from "../../../components/Lessons/AdvancedPhrasesI";

const AdvancedPhrasesIPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <AdvancedPhrasesI />
      <Footer />
    </>
  );
};

export default AdvancedPhrasesIPage;
