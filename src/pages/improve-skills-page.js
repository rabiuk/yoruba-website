import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/MobileSidebar";
import ImproveSkillsWelcome from "../components/ImproveSkillsSection";
import ScrollToTop from "../components/ScrollToTop";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/ImproveSkillsSection/Data";

const ImproveSkillsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar home={false} toggle={toggle} />
      {/* <ImproveSkillsSection {...homeObjOne} />
      <ImproveSkillsSection {...homeObjTwo} />
      <ImproveSkillsSection {...homeObjThree} /> */}
      <ImproveSkillsWelcome></ImproveSkillsWelcome>
      <Footer />
    </>
  );
};

export default ImproveSkillsPage;
