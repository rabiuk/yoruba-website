import React, { useState } from "react";
import { ButtonLink } from "../ButtonElements";
import { ButtonScroll } from "../ButtonElements";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
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
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap className={className}>
              {/* <Img /> */}
              {/* <Img alt={alt} /> */}
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </ImproveSkillsRow>
      </ImproveSkillsWrapper>
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
        <ImgWrap className="welcome-hands">
          <Img src={require("../../images/welcome-hands.png")} alt={"alt"} />
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
        <ImproveSkillsSection {...homeObjTwo}></ImproveSkillsSection>
        <ImproveSkillsSection {...homeObjThree}></ImproveSkillsSection>
      </ImproveSkillsContainer>
    </>
  );
};

export default ImproveSkillsWelcome;
