"use client";
import ScrollToTop from "@/components/ScrollToTop";
import IntroLabel from "@/components/IntroLabel/IntroLabel";
import AlphabetBlocksPNG from "@/components/svg/AlphabetBlocksPNG.png";
import { ContentContainer } from "../../../layoutElements";
import { useRef } from "react";
import { alphabetData } from "@/lib/utils/alphabetData";
import Table from "@/components/Table/Table";
import { playSound } from "@/lib/utils/audioControl";

const AlphabetTable = () => {
  const audioRef = useRef(null);
  const headers = ["Letter", "Example"];
  const data = alphabetData.map((item) => [item.letter, item.example]);

  return (
    <Table
      headers={headers}
      data={data}
      onRowClick={(audioRef, audioUrl) => playSound(audioRef, audioUrl)}
      audioRef={audioRef}
    />
  );
};

const LearnTheYorubaAlphabetPage = () => {
  return (
    <>
      <ScrollToTop />
      <IntroLabel
        title="The Yoruba Alphabet"
        description="Explore Yoruba's alphabet with engaging flashcards in an interactive quiz. Learn letter sounds and example words, flip cards to reveal pronunciation and meaning, and use next/previous buttons to learn at your pace."
        scrollToID={""}
        quizPath="/learn/lessons/yoruba-alphabet/quiz"
        // svg={<AlphabetBlocksSVG />}
        imgSrc={AlphabetBlocksPNG}
        alt="Alphabet Blocks"
        className="alphabet-blocks"
        btnName="Flashcards"
      />
      <ContentContainer id="content">
        <section className="space-y-8 text-base text-zinc-700">
          <p>
            In Yoruba culture, the language is regarded as a crucial aspect of
            the society's identity. An essential component of learning Yoruba is
            understanding the alphabet (also known as{" "}
            <span className="text-zinc font-bold">Álífábẹ́ẹ̀tì</span>), the Yoruba
            alphabet consists of 25 letters, each having its own distinct
            pronunciation.
          </p>

          <p>
            While it might take some time to get familiar with the Yoruba
            letters, it's an incredibly enriching journey as you open a gateway
            to a beautiful culture and language.
          </p>

          <p>
            In Yoruba, each letter is pronounced as it appears. However, there
            are certain letters with diacritical marks, which change the
            pronunciation. The main ones are the letters with a dot beneath them
            (ẹ, ọ), and the letters with an accent above them (é, ó, ú).
          </p>

          <p className="font-bold text-zinc-700">
            Here are the 25 letters in the Yoruba alphabet:
          </p>

          <AlphabetTable />

          <p>
            <span className="font-bold text-zinc-700">Fun Fact: </span>
            There does not exist a word in Yoruba that begins with the letter{" "}
            <span className="font-bold">u</span>.
          </p>

          <p>
            Remember, practice makes perfect. Keep revising and applying the
            sounds in different words. You can feel free to use the flashcards.
          </p>

          <p>Next lesson, we'll delve into numbers & counting.</p>
        </section>
      </ContentContainer>
    </>
  );
};

export default LearnTheYorubaAlphabetPage;
