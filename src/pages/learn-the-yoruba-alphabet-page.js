import React from "react";
import { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import MobileSidebar from "../components/MobileSidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import YorubaAlphabet from "../components/Lessons/YorubaAlphabet";
import Sidebar from "../components/Sidebar/Sidebar";
const LearnTheYorubaAlphabetPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      {/* <Sidebar /> */}
      <MobileSidebar isOpen={isOpen} toggle={toggle} />
      {/* <Navbar home={false} toggle={toggle} /> */}
      {/* <YorubaAlphabet /> */}
      <Footer />
    </>
  );
};

export default LearnTheYorubaAlphabetPage;
