import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/MobileSidebar";
import ImproveSkillsWelcome from "../components/ImproveSkillsSection";
import ScrollToTop from "../components/ScrollToTop";

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
      <ImproveSkillsWelcome></ImproveSkillsWelcome>
      <Footer />
    </>
  );
};

export default ImproveSkillsPage;
