import React, { useState } from "react";
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
  Img,
  H1,
  P,
  ArrowDownward,
  ArrowDropDown,
} from "./ImproveSkillsElements";
import { ReactComponent as WelcomeElder } from "../../images/elder2.svg";
import CurriculumModal from "./CurriculumModal/CurriculumModal";

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
  primary,
  dark,
  dark2,
  className,
}) => {
  const [openModal, setOpenModal] = useState(false);
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
              {id === "curriculum" ? (
                <>
                  <BtnWrap>
                    <Button
                      onClick={() => setOpenModal(true)}
                      primary={primary ? 1 : 0}
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
                      to={pageLink}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </ButtonLink>
                  </BtnWrap>
                </>
              )}
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap className={className}>{img}</ImgWrap>
          </Column2>
        </ImproveSkillsRow>
      </ImproveSkillsWrapper>
      {id === "curriculum" && (
        <CurriculumModal open={openModal} onClose={() => setOpenModal(false)} />
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
        <ImgWrap>
          <WelcomeElder className="welcome-hands" />
        </ImgWrap>
        <H1>Improve Your Skills</H1>
        <P>
          Welcome to the Improve Your Skills section, offering a structured
          curriculum for Yoruba language proficiency and cultural understanding.
          Explore Yoruba through our progressive lessons and quizzes, designed
          for all skill levels.
        </P>
        <BtnWrap className="next-btn">
          <ButtonScroll
            to="curriculum"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
          >
            Next {hover ? <ArrowDownward /> : <ArrowDropDown />}
          </ButtonScroll>
        </BtnWrap>

        {/* <ImproveSkillsSection {...homeObjOne}></ImproveSkillsSection> */}
        <ImproveSkillsSection {...homeObjOne}></ImproveSkillsSection>
        <ImproveSkillsSection {...homeObjTwo}></ImproveSkillsSection>
      </ImproveSkillsContainer>
    </>
  );
};

export default ImproveSkillsWelcome;
