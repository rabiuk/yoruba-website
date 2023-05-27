"use client";
import ScrollToTop from "@/components/ScrollToTop";
import IntroLabel from "@/components/IntroLabel/IntroLabel";
// import BlackBoardWithNumbersSVG from "@/components/svg/BlackBoardWithNumbersSVG.svg";
import BlackBoardWithNumbersPNG from "@/components/svg/BlackBoardWithNumbersPNG.png";

const NumbersAndCountingPage = () => {
  return (
    <>
      <ScrollToTop />
      <IntroLabel
        title="Numbers & Counting"
        description="In this lesson, you'll master essential numbers and counting
                techniques for everyday communication. Here, you'll learn the
                numbers and what they mean, building your foundation for
                speaking Yoruba. Click 'Learn' to explore the content and 'Start
                Quiz' to test your skills."
        scrollToID="#"
        quizPath="learn/lessons/numbers-and-counting/quiz"
        imgSrc={BlackBoardWithNumbersPNG}
        alt="Black Board With Numbers"
        className="numbers-img"
      />
    </>
  );
};

export default NumbersAndCountingPage;
