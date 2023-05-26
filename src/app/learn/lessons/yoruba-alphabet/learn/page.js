"use client";
import ScrollToTop from "@/components/ScrollToTop";
import IntroLabel from "@/components/IntroLabel/IntroLabel";
import AlphabetBlocksPNG from "@/components/svg/AlphabetBlocksPNG.png";
const LearnTheYorubaAlphabetPage = () => {
  return (
    <>
      <ScrollToTop />
      <IntroLabel
        title="Learn The Yoruba Alphabet"
        description="Explore Yoruba's alphabet with engaging flashcards in an interactive quiz. Learn letter sounds and example words, flip cards to reveal pronunciation and meaning, and use next/previous buttons to learn at your pace."
        scrollToID="#"
        quizPath="learn/lessons/yoruba-alphabet/quiz"
        // svg={<AlphabetBlocksSVG />}
        imgSrc={AlphabetBlocksPNG}
        alt="Alphabet Blocks"
        className="alphabet-blocks"
      />
    </>
  );
};

export default LearnTheYorubaAlphabetPage;
