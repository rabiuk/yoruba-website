"use client";
import ScrollToTop from "@/components/ScrollToTop";
import IntroLabel from "@/components/IntroLabel/IntroLabel";
// import NounsSVG from "@/components/svg/NounsSVG.svg";
import NounsPNG from "@/components/svg/NounsPNG.png";

const NounsPage = () => {
  return (
    <>
      <ScrollToTop />
      <IntroLabel
        title="Nouns"
        description="Following up on the essential verbs learned in Verbs, this
                lesson will help you master essential nouns for everyday
                communication. Here, you'll learn the words and what they mean,
                continuing to build your foundation for speaking Yoruba. Click
                'Learn' to explore the content and 'Start Quiz' to test your
                skills."
        scrollToID="#"
        quizPath="learn/lessons/nouns/quiz"
        imgSrc={NounsPNG}
        alt="Nouns"
        className="nouns-img"
        btnName="Flashcards"
      />
    </>
  );
};

export default NounsPage;
