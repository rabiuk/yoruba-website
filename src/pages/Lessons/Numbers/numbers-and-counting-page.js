import React from "react";
import { useState } from "react";
import ScrollToTop from "../../../components/ScrollToTop";
import Sidebar from "../../../components/MobileSidebar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NumbersAndCounting from "../../../components/Lessons/Numbers";

const NumbersAndCountingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <NumbersAndCounting />
      <Footer />
    </>
  );
};

export default NumbersAndCountingPage;
