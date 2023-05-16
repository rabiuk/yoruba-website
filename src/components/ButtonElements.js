import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
// import { Link as LinkR } from "react-router-dom";
import Link from "next/link";

export const ButtonScroll = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#ff7043" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#FAFAFA" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  /* text-decoration: none; */
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
export const ButtonScrollLink = ({ children, href, ...rest }) => (
  <Link href={href} passHref>
    <ButtonScroll {...rest}>{children}</ButtonScroll>
  </Link>
);

export const ButtonLink = styled(Link)`
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
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.5);

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

export const BtnWrappper = styled.div`
  align-items: center;
  z-index: 3;
  transform: scale(1.15);
  margin: 0 20px;
`;

export const SignInButton = styled.button`
  border-radius: 5px;
  background: ${({ primary }) =>
    primary ? "#ff7043" : "rgba(255, 255, 255, 0)"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  /* color: ${({ dark }) => (dark ? "#FAFAFA" : "#FAFAFA")}; */
  color: rgba(255, 255, 255, 0.75);
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  text-decoration: none;
  outline: none;
  border: none;
  border: 2px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease—in—out;
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.5);

  &:hover {
    transition: all 0.2s ease—in—out;
    /* background: ${({ primary }) => (primary ? "#ff7043" : "#ff7043")}; */
    border-color: #ff7043;
    color: #ff7043;
  }
`;
