"use client";
import ScrollToTop from "@/components/ScrollToTop";
import IntroLabel from "@/components/IntroLabel/IntroLabel";
import AlphabetBlocksPNG from "@/components/svg/AlphabetBlocksPNG.png";
import { Container, ContentContainer } from "./pageElements";
import {
  H1,
  H2,
  H3,
  P,
  Span,
  LineBreak,
} from "@/components/Typography/Typography";
const LearnTheYorubaAlphabetPage = () => {
  return (
    <>
      <Container>
        <ScrollToTop />
        <IntroLabel
          title="The Yoruba Alphabet"
          description="Explore Yoruba's alphabet with engaging flashcards in an interactive quiz. Learn letter sounds and example words, flip cards to reveal pronunciation and meaning, and use next/previous buttons to learn at your pace."
          scrollToID="#"
          quizPath="learn/lessons/yoruba-alphabet/quiz"
          // svg={<AlphabetBlocksSVG />}
          imgSrc={AlphabetBlocksPNG}
          alt="Alphabet Blocks"
          className="alphabet-blocks"
        />
        <ContentContainer>
          <section>
            <P>
              In Yoruba culture, the language is regarded as a crucial aspect of
              the society{"'"}s identity. An essential component of learning
              Yoruba is understanding the alphabet, known as{" "}
              <Span secondary fontWeight={900}>
                Álífábẹ́ẹ̀tì
              </Span>
              . The Yoruba alphabet consists of 25 letters, each having its own
              distinct pronunciation.
            </P>
            <LineBreak />
            <P>
              While it might take some time to get familiar with the Yoruba
              letters, it's an incredibly enriching journey as you open a
              gateway to a beautiful culture and language.
            </P>
            <LineBreak />
            <P>
              In Yoruba, each letter is pronounced as it appears. However, there
              are certain letters with diacritical marks, which change the
              pronunciation. The main ones are the letters with a dot beneath
              them (ẹ,ọ), and the letters with an accent above them (é, ó, ú).
            </P>
            <LineBreak />
            <P secondary fontWeight={900}>
              Here are the 25 letters in the Yoruba alphabet:
            </P>
          </section>
        </ContentContainer>
      </Container>
    </>
  );
};

export default LearnTheYorubaAlphabetPage;
