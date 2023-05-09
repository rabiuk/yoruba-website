"use client";
import React, { useState } from "react";
// import Sidebar from "@/components/MobileSidebar/MobileSidebar";
import ImproveSkillsWelcome from "@/components/ImproveSkillsSection/ImproveSkills";
import ScrollToTop from "@/components/ScrollToTop";

const ImproveSkillsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <ImproveSkillsWelcome />
    </>
  );
};

export default ImproveSkillsPage;
