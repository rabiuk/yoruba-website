"use client";
import ScrollToTop from "@/components/ScrollToTop";
import IntroLabel from "@/components/IntroLabel/IntroLabel";
import ManFacingCameraPNG from "@/components/svg/ManFacingCameraPNG.png";

const VerbsPage = () => {
  return (
    <>
      <ScrollToTop />
      <IntroLabel
        title="Verbs"
        description="In this lesson, you'll master essential verbs for everyday
                communication. Here, you'll learn the words and what they mean,
                building your foundation for speaking Yoruba. Click 'Learn' to
                explore the content and 'Start Quiz' to test your skills."
        scrollToID="#"
        quizPath="learn/lessons/verbs/quiz"
        imgSrc={ManFacingCameraPNG}
        alt=""
        className="verbs-img"
        btnName="Flashcards"
      />
    </>
  );
};

export default VerbsPage;
