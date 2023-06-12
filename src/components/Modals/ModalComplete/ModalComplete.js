import Image from "next/legacy/image";
import {
  CloseIcon,
  Container,
  // H2,
  Overlay,
  ImgWrap,
  PContainer,
  // P,
  PLine,
  PLink,
  ModalRight,
} from "./ModalCompleteElements";

import { H2, P } from "@/components/Typography/Typography";
import { useSpring, animated } from "react-spring";

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
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: open ? 1 : 0,
    transform: open ? `translateY(0%)` : `translateY(-100%)`,
  });
  if (!open) return null;

  return (
    <Overlay className="overlay">
      <animated.div style={animation}>
        <Container>
          <ImgWrap bg_color={bg_color}>
            <div>
              <Image src={imgSrc} alt={alt} />
            </div>
          </ImgWrap>
          <ModalRight>
            <CloseIcon onClick={onClose} />
            <H2 className="title" fontSize={40}>
              {title}
            </H2>
            <P>{body}</P>
            <PContainer>
              <P className="bold">Ready for the next step? </P>
              <P>{continue_text}</P>
              <PLine>
                <P className="continue-to-text">Continue to&nbsp;</P>
                <PLink href={continue_link}>
                  <P primary>{continue_link_text}</P>
                </PLink>
              </PLine>
            </PContainer>
          </ModalRight>
        </Container>
      </animated.div>
    </Overlay>
  );
};

export default ModalComplete;
