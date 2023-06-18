"use client";
import styled from "styled-components";
import { colors } from "@/components/colors";
import { H1, H2, P } from "@/components/Typography/Typography";
import YorubaCultureCelebrationPNG from "@/components/svg/YorubaCultureCelebration.png";
import Image from "next/image";
const BannerContainer = styled.div`
  justify-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #15616d;
  width: 100vw;
  /* height: 500px; */
`;
const BannerContent = styled.div`
  max-width: 1200px;
  padding: 7.5rem 2vw;
  width: 100%;
  min-height: 500px;
  display: flex;
  gap: 20rem;
  justify-content: center;
  /* align-items: center; */
  color: ${colors.lightTextColor};
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* line-height: 1.5; */
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
`;
const ImgWrap = styled.div`
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50px;
  background: linear-gradient(145deg, #135762, #166875);
  box-shadow: 20px 20px 60px #12525d, -20px -20px 60px #18707d;
`;

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerContent>
          <ContentLeft>
            <H1 lightText={true} fontSize="42" fontWeight={700}>
              UNRAVEL THE WONDERS
            </H1>
            <P lightText={true}>
              Embark on a captivating journey to explore the richness and
              vibrance of the Yorùbá language and culture. With bold and
              engaging content, discover the heart and soul of a fascinating
              people.
            </P>
          </ContentLeft>
          <ContentRight>
            <ImgWrap>
              <Image
                src={YorubaCultureCelebrationPNG}
                alt="Yoruba Culture Celebration"
                width={400}
                height={400}
              />
            </ImgWrap>
          </ContentRight>
        </BannerContent>
      </BannerContainer>
    </>
  );
};

export default Banner;
