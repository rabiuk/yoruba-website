import React from "react";
import {
  CloseIcon,
  Container,
  H2,
  Overlay,
  P,
  PLine,
  PLink,
} from "./ModalCompleteElements";

const ModalComplete = ({
  open,
  onClose,
  title,
  body,
  continue_text,
  continue_link,
  continue_link_text,
}) => {
  if (!open) return null;
  return (
    <Overlay className="overlay">
      <Container>
        {/* <MarginLine /> */}
        <CloseIcon onClick={onClose} />
        <H2 className="title">{title}</H2>
        <P>{body}</P>
        <P className="bold">Ready for the next step? </P>
        <P>{continue_text}</P>
        <PLine>
          <P className="continue-to-text">Continue to </P>
          <PLink to={continue_link}>{continue_link_text}</PLink>
        </PLine>
      </Container>
    </Overlay>
  );
};

export default ModalComplete;
