import React from "react";
import { Stack } from "./Stack";
import { Card } from "./Card";
import styled from "@emotion/styled";
import TalkingDrumSVG from "@/components/svg/TalkingDrumSVG.svg";

const Appp = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled(Stack)`
  /* background: #1f2937; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  background: #f9fafb;
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  text-shadow: 0 10px 10px #d1d5db;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transform: ${() => {
    let rotation = Math.random() * (5 - -5) + -5;
    return `rotate(${rotation}deg)`;
  }};
`;
const StyledTalkingDrumSVG = ({ color }) => {
  return (
    <svg>
      <path fill={color} d="..." />
    </svg>
  );
};

export default function CardStack() {
  return (
    <Appp className="Appp">
      <Wrapper
        className="Wrapper"
        onVote={(item, vote) => console.log(item.props, vote)}
      >
        <Card className="Card">
          <Item data-value="waffles" whileTap={{ scale: 1.15 }}>
            <span role="img" aria-label="waffles">
              🧇
            </span>
          </Item>
        </Card>
        <Card className="Card">
          <Item data-value="pancakes" whileTap={{ scale: 1.15 }}>
            <span role="img" aria-label="pancakes">
              <TalkingDrumSVG />
            </span>
          </Item>
        </Card>
        <Card className="Card">
          <Item data-value="donuts" whileTap={{ scale: 1.15 }}>
            <span role="img" aria-label="donuts">
              🍩
            </span>
          </Item>
        </Card>
      </Wrapper>
    </Appp>
  );
}
