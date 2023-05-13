"use client";
import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import IntroLabel from "@/components/IntroLabel/IntroLabel";
import TallShortSVG from "@/components/svg/TallShortSVG.svg";

const AdjectivesPage = () => {
  return (
    <>
      <ScrollToTop />
      <IntroLabel
        title="Adjectives"
        description="Moving on from Nouns, this lesson will focus on essential Yoruba
                adjectives for daily communication. You'll learn the adjectives
                and their meanings, further strengthening your foundation in the
                Yoruba language. Click 'Learn' to delve into the content, and
                'Start Quiz' to assess your understanding of these important
                adjectives."
        scrollToID="#"
        quizPath="learn/lessons/adjectives/quiz"
        svg={<TallShortSVG className="adjectives-svg" />}
      />
    </>
  );
};

export default AdjectivesPage;
