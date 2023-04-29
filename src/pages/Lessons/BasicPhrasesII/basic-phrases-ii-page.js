import React from "react";
import { useState } from "react";
import ScrollToTop from "../../../components/ScrollToTop";
import Sidebar from "../../../components/MobileSidebar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BasicPhrasesII from "../../../components/Lessons/BasicPrasesII";

const BasicPhrasesIIPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <BasicPhrasesII />
      <Footer />
    </>
  );
};

export default BasicPhrasesIIPage;
