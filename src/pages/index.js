import React from "react";
import { useState } from "react";
import MobileSidebar from "../components/MobileSidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import FunFacts from "../components/FunFacts";
import Footer from "../components/Footer";
import Sidebar from "../components/MobileSidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MobileSidebar isOpen={isOpen} toggle={toggle} />
      {/* <Sidebar /> */}
      <Navbar home={true} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <FunFacts />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
