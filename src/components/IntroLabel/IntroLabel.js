import {
  IntroWrapper,
  ContentWrapper,
  Content1,
  Content2,
  ImgWrap,
  IntroH1,
  IntroP,
  BtnWrapper,
  BtnContainer,
} from "./IntroLabelElements";
import { ButtonLink, ButtonScroll } from "@/components/ButtonElements";
import Image from "next/legacy/image";

const IntroLabel = ({
  title,
  description,
  scrollToID,
  quizPath,
  imgSrc,
  alt,
  className,
  btnName,
}) => {
  scrollToID = scrollToID || "content";
  return (
    <>
      {/* <IntroBackground> */}
      <IntroWrapper>
        <ContentWrapper>
          <Content1>
            <IntroH1>{title}</IntroH1>
            <IntroP>{description}</IntroP>
            <BtnContainer>
              <BtnWrapper>
                <ButtonScroll
                  to={scrollToID}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={true ? 1 : 0}
                  dark={true ? 1 : 0}
                  dark2={true ? 1 : 0}
                >
                  Learn
                </ButtonScroll>
              </BtnWrapper>
              <BtnWrapper>
                <ButtonLink
                  href={quizPath}
                  primary={true ? 1 : 0}
                  dark={true ? 1 : 0}
                  dark2={true ? 1 : 0}
                >
                  {btnName}
                </ButtonLink>
              </BtnWrapper>
            </BtnContainer>
          </Content1>
          <Content2>
            <ImgWrap className={className}>
              <Image src={imgSrc} alt={alt} />
            </ImgWrap>
          </Content2>
        </ContentWrapper>
      </IntroWrapper>
      {/* </IntroBackground> */}
    </>
  );
};

export default IntroLabel;
