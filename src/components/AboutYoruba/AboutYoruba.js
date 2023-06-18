"use client";
import styled from "styled-components";
import { H1, H2, P, LineBreak } from "@/components/Typography/Typography";
import TraditionalClothPNG from "@/components/svg/TraditionalClothPNG.png";
import CulinaryDelightsPNG from "@/components/svg/CulinaryDelightsPNG.png";
import YorubaArtifactsPNG from "@/components/svg/YorubaArtifactsPNG.png";
import Image from "next/legacy/image";

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const CardContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-rows: 1fr 1fr; */
  gap: 60px;
  place-items: center;
  /* width: fit-content; */
`;

const Card = styled.div`
  /* background: #15616d; */
  /* padding: 20px; */
  width: 400px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
`;

const ImgWrap = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 7.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: grey;
  position: relative;
  /* background: linear-gradient(145deg, #135762, #166875); */
  /* box-shadow: 20px 20px 60px #12525d, -20px -20px 60px #18707d; */

  //add overlay
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const AboutYoruba = () => {
  return (
    <>
      <Container>
        <H1 fontSize="42" fontWeight={900}>
          A little about Yorùbá...
        </H1>
        {/* <LineBreak />
        <LineBreak /> */}
        <CardContainer>
          <Card>
            <ImgWrap>
              <Image
                src={YorubaArtifactsPNG}
                alt="Yoruba Artifacts"
                quality={100}
              />
            </ImgWrap>
            <H2>Yoruba Culture</H2>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quae voluptates voluptatibus
            </P>
          </Card>
          <Card>
            <ImgWrap>
              <Image
                src={TraditionalClothPNG}
                alt="An Traditional Adire Cloth"
                quality={100}
              />
            </ImgWrap>
            <H2>Vibrant Attire</H2>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quae voluptates voluptatibus
            </P>
          </Card>
          <Card>
            <ImgWrap>
              <Image
                src={CulinaryDelightsPNG}
                alt="Typical Delicacies of the Yoruba People"
                quality={100}
              />
            </ImgWrap>
            <H2>Culinary Delights</H2>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quae voluptates voluptatibus
            </P>
          </Card>
        </CardContainer>
      </Container>
    </>
  );
};

export default AboutYoruba;
