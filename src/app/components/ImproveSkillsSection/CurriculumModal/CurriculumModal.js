import React from "react";
import {
  CloseIcon,
  Container,
  H2,
  LI,
  Overlay,
  PContainer,
  UL,
  MarginLine,
} from "./CurriculumModalElements";

const CurriculumModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Overlay className="overlay">
      <Container>
        <MarginLine />
        <CloseIcon onClick={onClose} />
        <H2 className="title">Curriculum</H2>
        <PContainer>
          <UL>
            <LI>Lesson I: Learn The Yoruba Alphabet</LI>
            <LI>Lesson II: Numbers & Counting</LI>
            <LI>Lesson III: Basic Phrases I (Verbs)</LI>
            <LI>Lesson IV: Basic Phrases II (Nouns)</LI>
            <LI>Lesson V: Advanced Phrases I</LI>
          </UL>
        </PContainer>
      </Container>
    </Overlay>
  );
};

export default CurriculumModal;
