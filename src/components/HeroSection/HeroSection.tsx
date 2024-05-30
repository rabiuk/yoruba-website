// src/components/HeroSection/HeroSection.tsx
"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Carousel from "../Carousel/Carousel";



const HeroSection = () => {
  const taglines = ["A Culture.", "A Language.", "A Lifestyle."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="hero-section relative h-screen w-full -mt-[75px]">
      {/* Background Carousel */}
      <div className="hero-background absolute inset-0 h-full w-full">
        <Carousel />
      </div>
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 z-10">
        {/* Content */}
        <div className="hero-content z-10 text-white text-center w-[1205px]">
          <h2 className="hero-title mb-6 text-5xl font-extrabold leading-tight tracking-wider md:min-w-[53vw] md:text-left lg:text-6xl xl:text-7xl">
            Experience Yoruba,{" "}
            <div className="hero-tagline inline-block max-w-[500px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  className="text-primary-500"
                  key={taglines[index]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {taglines[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h2>
          <p className="hero-subtitle mb-6 text-sm leading-normal md:text-base lg:text-lg xl:text-xl">
            Experience the beauty, dive into the vibrancy, and enrich your understanding of Yoruba today.
          </p>
          <div className="hero-button-wrap button__wrap mx-auto mt-5 w-fit max-w-xs text-base">
            <Button isScroll={true} to="about" isTransparent={true}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
