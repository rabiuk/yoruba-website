import styled, { keyframes } from "styled-components";

// define keyframes
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// define styled component
const Loader = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-left-color: transparent;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  animation: ${spin} 1s linear infinite;
`;

const Spinner = () => {
  return <Loader />;
};

export default Spinner;
