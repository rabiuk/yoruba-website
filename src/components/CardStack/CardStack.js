import React from "react";
import { Stack } from "./Stack";
import { Card } from "./Card";
import { useState, useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import TalkingDrumSVG from "@/components/svg/TalkingDrumSVG.svg";
import Image from "next/legacy/image";
import LandscapeArtPNG from "@/components/svg/LandscapeArtPNG.png";
import TwinsPNG from "@/components/svg/TwinsPNG.png";
import PlayingDrumPNG from "@/components/svg/PlayingDrumPNG.png";

const Wrapper = styled(Stack)`
  /* background: #1f2937; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Item = styled.div`
  background: #f9fafb;
  /* width: 240px;
  height: 300px; */
  width: 350px;
  height: 350px;
  display: flex;
  border-radius: 7.5%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  text-shadow: 0 10px 10px #d1d5db;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* border-radius: 8px; */
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  overflow: hidden;
`;

export default function CardStack() {
  // Create an array of 3 random rotations
  const rotations = useMemo(
    () => [
      Math.random() * (5 - -5) + -5,
      Math.random() * (5 - -5) + -5,
      Math.random() * (5 - -5) + -5,
    ],
    []
  );

  return (
    <Wrapper
      className="Wrapper"
      onVote={(item, vote) => console.log(item.props, vote)}
    >
      <Card className="Card">
        <Item
          data-value="waffles"
          whileTap={{ scale: 1.15 }}
          rotation={rotations[0]} // Use rotation from the array
        >
          <Image
            src={PlayingDrumPNG}
            alt="Yoruba Drum being played"
            layout="fill"
          />
        </Item>
      </Card>
      <Card className="Card">
        <Item
          data-value="pancakes"
          whileTap={{ scale: 1.15 }}
          rotation={rotations[1]} // Use rotation from the array
        >
          <Image src={TwinsPNG} alt="Yoruba Twin Sculpture" layout="fill" />
        </Item>
      </Card>
      <Card className="Card">
        <Item
          data-value="donuts"
          whileTap={{ scale: 1.15 }}
          rotation={rotations[2]} // Use rotation from the array
        >
          <Image
            src={LandscapeArtPNG}
            alt="Yoruba Landscape Art"
            layout="fill"
          />
        </Item>
      </Card>
    </Wrapper>
  );
}
