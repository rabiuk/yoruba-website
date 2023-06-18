"use client";
import { ButtonLink } from "../ButtonElements";
import Image from "next/legacy/image";
import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
import { P } from "../Typography/Typography";

const InfoSection = ({
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
  isSVG,
  imgSrc,
  alt,
  width,
  height,
  primary,
  dark,
  dark2,
  className,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        {/* <InfoWrapper> */}
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle>
                <P>
                  {description.split("\n").map((text, index) => (
                    <React.Fragment key={`${text}-${index}`}>
                      {text}
                      <br />
                    </React.Fragment>
                  ))}
                </P>
              </Subtitle>

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
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap className={className}>
              {isSVG ? (
                imgSrc
              ) : (
                <Image
                  src={imgSrc}
                  alt={alt}
                  width={width}
                  height={height}
                  // fill={true}
                  // style={{ objectFit: "cover" }}
                  // priority={true}
                />
              )}
            </ImgWrap>
          </Column2>
        </InfoRow>
        {/* </InfoWrapper> */}
      </InfoContainer>
    </>
  );
};

export default InfoSection;
