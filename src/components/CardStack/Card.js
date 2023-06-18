import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import styled from "@emotion/styled";

const StyledCard = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = ({ children, style, onVote, id, ...props }) => {
  const cardElem = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [constrained, setConstrained] = useState(true);
  const [velocity, setVelocity] = useState();

  const getDirection = () => {
    return velocity >= 1 ? "right" : velocity <= -1 ? "left" : undefined;
  };

  const getTrajectory = () => {
    setVelocity(x.getVelocity());
    const direction = getDirection();
    return direction;
  };

  useEffect(() => {
    if (props.isTop) {
      // Only auto-swipe the top card
      const timer = setTimeout(() => {
        flyAway(500, "left"); // Change 'right' to 'left'
      }, 2000); // Adjust delay as needed

      return () => clearTimeout(timer); // Cleanup on component unmount
    }
  }, [props.isTop]); // Add dependency to re-run effect when isTop changes

  const flyAway = (min, direction) => {
    const flyAwayDistance = (direction) => {
      const parentWidth =
        cardElem.current.parentNode.getBoundingClientRect().width;
      const childWidth = cardElem.current.getBoundingClientRect().width;
      return direction === "left"
        ? -parentWidth / 2 - childWidth / 2
        : parentWidth / 2 + childWidth / 2;
    };

    if (direction && Math.abs(min) > 0) {
      setConstrained(false);
      controls.start({
        x: flyAwayDistance(direction),
        transition: { duration: 1, onComplete: onVote },
      });
    }
  };
  return (
    <>
      <StyledCard
        className="StyledCard"
        animate={controls}
        dragConstraints={
          constrained && { left: 0, right: 0, top: 0, bottom: 0 }
        }
        dragElastic={1}
        ref={cardElem}
        style={{ x, ...style }}
        onDrag={getTrajectory}
        onDragEnd={() => flyAway(500)}
        whileTap={{ scale: 1.1 }}
        {...props}
      >
        {children}
      </StyledCard>
    </>
  );
};
