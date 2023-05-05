import React from "react";
import {
  CloseIcon,
  Container,
  H2,
  Overlay,
  P,
  PLink,
} from "./ModalCompleteElements";

const ModalComplete = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Overlay className="overlay">
      <Container>
        {/* <MarginLine /> */}
        <CloseIcon onClick={onClose} />
        <H2 className="title">Nice Work!</H2>
        <P>
          You have successfully completed the Yoruba Alphabet Flashcards
          section! You're now one step closer to mastering the beautiful Yoruba
          language.
        </P>
        {/* <P>
          We hope you enjoyed this interactive learning experience. As you
          continue your Yoruba journey, remember to practice the alphabet
          consistently to build a strong foundation for your language skills.
        </P> */}
        <P className="bold">Ready for the next step? </P>
        <P>Continue to the next section to learn how to count in Yoruba!</P>
        <PLink to="/improve-skills/numbers-and-counting">
          Continue to Numbers & Counting
        </PLink>
      </Container>
    </Overlay>
  );
};

export default ModalComplete;
