import { useState } from "react";
import { ButtonLink, ButtonScroll, Button } from "../ButtonElements";

import { homeObjOne, homeObjTwo } from "./Data";
import {
  ImproveSkillsContainer,
  ImproveSkillsWrapper,
  ImproveSkillsRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  IntroContainer,
} from "./LearnElements";

import dynamic from "next/dynamic";
// import Modal from "@/components/Modal";
import { H1, P, Span } from "@/components/Typography/Typography";
import Books from "@/components/svg/bookstack.png";
// import CurriculumModal from "./CurriculumModal/CurriculumModal";

const Modal = dynamic(() => import("@/components/Modal"), {
  ssr: false,
});
const ImproveSkillsSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  pageLink,
  img,
  alt,
  dark,
  dark2,
  className,
}) => {
  // const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      {/* <ImproveSkillsContainer lightBg={lightBg} id={id}> */}
      <ImproveSkillsWrapper id={id}>
        <ImproveSkillsRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
            </TextWrapper>
            {id === "curriculum" ? (
              <>
                <BtnWrap>
                  <Button
                    onClick={openModal}
                    // primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </>
            ) : (
              <>
                <BtnWrap>
                  <ButtonLink
                    href={pageLink}
                    // primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </ButtonLink>
                </BtnWrap>
              </>
            )}
          </Column1>
          <Column2>
            <ImgWrap className={className}>{img}</ImgWrap>
          </Column2>
        </ImproveSkillsRow>
      </ImproveSkillsWrapper>
      {id === "curriculum" && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          imgSrc={Books}
          alt={"books"}
          width={300}
          height={300}
        >
          <H1 textColor fontSize="40">
            Curriculum
          </H1>
          <ul>
            <li>
              <P fontSize="20" fontWeight={400}>
                The Yoruba Alphabet
              </P>
            </li>
            <li>
              <P fontSize="20" fontWeight={400}>
                Numbers & Counting
              </P>
            </li>
            <li>
              <P fontSize="20" fontWeight={400}>
                Basic Phrases I (Verbs)
              </P>
            </li>
            <li>
              <P fontSize="20" fontWeight={400}>
                Basic Phrases II (Nouns)
              </P>
            </li>
            <li>
              <P fontSize="20" fontWeight={400}>
                Advanced Phrases I
              </P>
            </li>
            <li>
              <P fontSize="20" fontWeight={400}>
                Sentences
              </P>
            </li>
          </ul>
        </Modal>
      )}
      {/* </ImproveSkillsContainer> */}
    </>
  );
};

const ImproveSkillsWelcome = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <ImproveSkillsContainer lightBg={true}>
        <ImproveSkillsSection {...homeObjOne}></ImproveSkillsSection>
        <ImproveSkillsSection {...homeObjTwo}></ImproveSkillsSection>
      </ImproveSkillsContainer>
    </>
  );
};

export default ImproveSkillsWelcome;
