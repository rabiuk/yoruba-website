import React, { useState } from "react";
import { ButtonLink, ButtonScroll, Button } from "../ButtonElements";
import WelcomeElderSVG from "../../components/svg/WelcomeElderSVG.svg";

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
  IntroContainer,
  H1,
  P,
  ArrowDownward,
  ArrowDropDown,
} from "./LearnElements";
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
            </TextWrapper>
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
                    href={pageLink}
                    // target="_blank"
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
        {/* <ImgWrap>
          <WelcomeElderSVG
            style={{ fontSize: 600 }}
            className="welcome-hands"
          />
        </ImgWrap> */}
        <IntroContainer>
          <H1>Improve Your Skills</H1>
          <P>
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
              {/* Next {hover ? <ArrowDownward /> : <ArrowDropDown />} */}
              Next <ArrowDownward />
            </ButtonScroll>
          </BtnWrap>
        </IntroContainer>

        {/* <ImproveSkillsSection {...homeObjOne}></ImproveSkillsSection> */}
        <ImproveSkillsSection {...homeObjOne}></ImproveSkillsSection>
        <ImproveSkillsSection {...homeObjTwo}></ImproveSkillsSection>
      </ImproveSkillsContainer>
    </>
  );
};

export default ImproveSkillsWelcome;
