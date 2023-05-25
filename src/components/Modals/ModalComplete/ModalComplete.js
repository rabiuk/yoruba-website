import React from "react";
import Image from "next/legacy/image";
import {
  CloseIcon,
  Container,
  H2,
  Overlay,
  ImgWrap,
  PContainer,
  P,
  PLine,
  PLink,
  ModalRight,
} from "./ModalCompleteElements";

const ModalComplete = ({
  open,
  onClose,
  imgSrc,
  alt,
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
        <ImgWrap bg_color={bg_color}>
          <div >
            <Image src={imgSrc} alt={alt} />
          </div>
        </ImgWrap>
        <ModalRight>
          <CloseIcon onClick={onClose} />
          <H2 className="title">{title}</H2>
          <P>{body}</P>
          <PContainer>
            <P className="bold">Ready for the next step? </P>
            <P>{continue_text}</P>
            <PLine>
              <P className="continue-to-text">Continue to </P>
              <PLink href={continue_link}>{continue_link_text}</PLink>
            </PLine>
          </PContainer>
        </ModalRight>
      </Container>
    </Overlay>
  );
};

export default ModalComplete;
