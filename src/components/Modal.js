import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/components/colors";
import CloseModal from "@/components/CloseModal";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #3f3f46;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  @media screen and (max-width: 860px) {
    width: 760px;
  }
  @media screen and (max-width: 768px) {
    max-width: 90vw;
    grid-template-columns: 1fr;
  }
`;

const ModalImgWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.primaryColor};
  @media screen and (max-width: 768px) {
    /* height: 100%; */
    display: none;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Modal = ({
  showModal,
  setShowModal,
  imgSrc,
  alt,
  width,
  height,
  children,
}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImgWrap>
                <Image
                  src={imgSrc}
                  alt={alt}
                  width={width}
                  height={height}
                ></Image>
              </ModalImgWrap>
              <ModalContent>{children}</ModalContent>
              <div
                className="absolute right-4 top-4 h-fit w-fit"
                onClick={() => setShowModal((prev) => !prev)}
              >
                <CloseModal height={6} width={6} />
              </div>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
