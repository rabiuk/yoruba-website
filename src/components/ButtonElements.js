import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const ButtonScroll = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#ff7043" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#FAFAFA" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease—in—out;
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.5);

  &:hover {
    transition: all 0.2s ease—in—out;
    background: ${({ primary }) => (primary ? "#424242" : "#01BF71")};
  }
`;

export const ButtonLink = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#ff7043" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#FAFAFA" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#424242" : "#01BF71")};
  }
`;
export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#ff7043" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#FAFAFA" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#424242" : "#01BF71")};
  }
`;
