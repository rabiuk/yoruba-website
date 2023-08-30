"use client";
import { useRef } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import IntroLabel from "@/components/IntroLabel/IntroLabel";
import BlackBoardWithNumbersPNG from "@/components/svg/BlackBoardWithNumbersPNG.png";
import { ContentContainer } from "@/app/learn/layoutElements";
import PropTypes from "prop-types";
import {
  H1,
  H2,
  H3,
  P,
  Span,
  LineBreak,
} from "@/components/Typography/Typography";
import Table from "@/components/Table/Table";
import { numberData } from "@/lib/utils/numberData";
import { playSound } from "@/lib/utils/audioControl";

const NumberTable = ({ minRows, maxRows }) => {
  const audioRef = useRef(null);
  const headers = ["Number", "Yoruba Word"];
  const data = numberData
    .slice(minRows, maxRows)
    .map((item) => [item.number, item.yoruba]);

  return (
    <Table
      headers={headers}
      data={data}
      onRowClick={(audioRef, audioUrl) => playSound(audioRef, audioUrl)}
      audioRef={audioRef}
    />
  );
};

NumberTable.propTypes = {
  minRows: PropTypes.number.isRequired,
  maxRows: PropTypes.number,
};

NumberTable.defaultProps = {
  maxRows: undefined,
};

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
        scrollToID={""}
        quizPath="/learn/lessons/numbers-and-counting/quiz"
        imgSrc={BlackBoardWithNumbersPNG}
        alt="Black Board With Numbers"
        className="numbers-img"
        btnName="Quiz"
      />
      <ContentContainer id="content">
        <section>
          <P>
            Numbers in Yoruba are an integral part of the language, as they are
            in every culture and language. As you might find, Yoruba numbers
            have a unique pattern, allowing you to quickly grasp the basics and
            build up from there.
          </P>
          <LineBreak />
          <LineBreak />
          <P>
            Let's start with the basics. Here are the numbers 1-10 in Yoruba:
          </P>
          <LineBreak />
          <NumberTable minRows={0} maxRows={10} />
          <LineBreak />
          <LineBreak />
          <P>
            To express numbers beyond ten, Yoruba language uses a combination of
            the basic numbers:
          </P>
          <LineBreak />
          <NumberTable minRows={10} maxRows={30} />
          <LineBreak />
          <LineBreak />
          <P>Numbers beyond 30 are as follows:</P>
          <LineBreak />
          <NumberTable minRows={30} />
          <LineBreak />
          <LineBreak />
          <P>
            <Span secondary fontWeight={900}>
              Fun Fact:{" "}
            </Span>
            Yoruba uses a vigesimal <Span fontWeight={700}> (base 20)</Span>{" "}
            number system, unlike the decimal
            <Span fontWeight={700}> (base 10)</Span> system commonly used in
            many cultures.
          </P>
          <LineBreak />
        </section>
      </ContentContainer>
    </>
  );
};

export default NumbersAndCountingPage;
