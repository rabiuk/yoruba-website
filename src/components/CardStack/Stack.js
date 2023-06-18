import React, { useState, Children } from "react";
import styled from "@emotion/styled";
import { Card } from "./Card";

const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Stack = ({ onVote, children, ...props }) => {
  const [stack, setStack] = useState(Children.toArray(children));
  const [count, setCount] = useState(0);

  const rotate = (array) => {
    const newArray = [...array];
    const firstElement = newArray.shift();
    newArray.push(firstElement);
    return newArray;
  };

  const handleVote = (item, vote) => {
    setCount(count + 1);
    let newStack = rotate(stack);
    setStack(newStack);
    onVote(item, vote);
  };

  return (
    <>
      <Frame className="Frame" {...props}>
        {stack
          .map((item, index) => {
            let isTop = index === 0; // Check if the card is the first in the reversed array
            return (
              <Card
                drag={isTop}
                key={isTop ? "top" + count : index}
                onVote={() => handleVote(item)}
                isTop={isTop} // New prop
              >
                {item}
              </Card>
            );
          })
          .reverse()}
      </Frame>
    </>
  );
};
