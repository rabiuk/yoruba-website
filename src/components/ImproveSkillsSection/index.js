import React from "react";
import { ButtonLink } from "../ButtonElements";
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
      <ImproveSkillsContainer lightBg={lightBg} id={id}>
        <ImproveSkillsWrapper>
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
      </ImproveSkillsContainer>
    </>
  );
};

export default ImproveSkillsSection;
