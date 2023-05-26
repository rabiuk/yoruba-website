"use client";
import ScrollToTop from "@/components/ScrollToTop";
import IntroLabel from "@/components/IntroLabel/IntroLabel";
import TallShortPNG from "@/components/svg/TallShortPNG.png";

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
        imgSrc={TallShortPNG}
        alt="tall-short"
        className="tall-short-img"
      />
    </>
  );
};

export default AdjectivesPage;
