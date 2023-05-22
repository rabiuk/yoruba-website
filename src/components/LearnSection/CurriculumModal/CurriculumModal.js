import {
  CloseIcon,
  Container,
  H1,
  LI,
  Overlay,
  PContainer,
  UL,
  MarginLine,
  P,
} from "./CurriculumModalElements";

const CurriculumModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Overlay className="overlay">
      <Container>
        <MarginLine />
        <CloseIcon onClick={onClose} />
        <H1>Curriculum</H1>
        <PContainer>
          <UL>
            <LI>
              <P>
                <span>Lesson I:</span> Learn The Yoruba Alphabet
              </P>
            </LI>
            <LI>
              <P>
                <span>Lesson II:</span> Numbers & Counting
              </P>
            </LI>
            <LI>
              <P>
                <span>Lesson III:</span> Basic Phrases I (Verbs)
              </P>
            </LI>
            <LI>
              <P>
                <span>Lesson IV:</span> Basic Phrases II (Nouns)
              </P>
            </LI>
            <LI>
              <P>
                <span>Lesson V: </span>Advanced Phrases I
              </P>
            </LI>
          </UL>
        </PContainer>
      </Container>
    </Overlay>
  );
};

export default CurriculumModal;
