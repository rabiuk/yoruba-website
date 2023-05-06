import React from "react";

import {
  CloseIcon,
  Container,
  H2,
  Overlay,
  ImgWrap,
  P,
  PLine,
  PLink,
  ModalRight,
} from "./ModalCompleteElements";

const ModalComplete = ({
  open,
  onClose,
  svg,
  bg_color,
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
        <ImgWrap bg_color={bg_color}>{svg}</ImgWrap>
        {/* <MarginLine /> */}
        <ModalRight>
          <CloseIcon onClick={onClose} />
          <H2 className="title">{title}</H2>
          <P>{body}</P>
          <P className="bold">Ready for the next step? </P>
          <P>{continue_text}</P>
          <PLine>
            <P className="continue-to-text">Continue to </P>
            <PLink to={continue_link}>{continue_link_text}</PLink>
          </PLine>
        </ModalRight>
      </Container>
    </Overlay>
  );
};

export default ModalComplete;
