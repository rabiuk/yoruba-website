// src/components/HeroSection/Herotw.tsx
"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("../Carousel/Carousel"), {
  ssr: false,
});

const Herotw = () => {
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
    <>
      <div className="hero-container flex h-screen items-center justify-center bg-cover bg-fixed">
        {/* Background Image */}
        <div className="hero__bg absolute bottom-0 left-0 right-0 top-0">
        <Carousel />
        </div>
        {/* Content */}
        <div className="z-10 text-white">
          <h2 className=" mb-6 text-center text-5xl font-extrabold leading-tight -tracking-wider md:min-w-[53vw] md:text-left lg:text-6xl xl:text-7xl">
            Experience Yoruba,{" "}
            <div className="inline-block max-w-[26.375rem] text-left">
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
          <p className="mb-6 text-center text-sm leading-normal md:text-base lg:text-lg xl:text-xl">
            Experience the beauty, dive into the vibrancy, and enrich your
            understanding of Yoruba today.
          </p>
          <div className="button__wrap mx-auto mt-5 w-fit max-w-xs text-base">
            <Button isScroll={true} to="about" isTransparent={true}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herotw;
