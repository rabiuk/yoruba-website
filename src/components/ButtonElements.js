import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { colors } from "@/components/colors";

export const ButtonScroll = styled(LinkScroll)`
  border-radius: 50px;
  /* background: ${({ isPrimary }) => (isPrimary ? "#ff7043" : "#010606")}; */
  background: #ff7043;
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
    /* background: ${({ isPrimary }) => (isPrimary ? "#424242" : "#01BF71")}; */
    background: #424242;
  }
`;

export const ButtonLink = styled(Link)`
  border-radius: 50px;
  /* background: ${({ isPrimary }) => (isPrimary ? "#ff7043" : "#010606")}; */
  background: #ff7043;
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
    /* background: ${({ isPrimary }) => (isPrimary ? "#424242" : "#01BF71")}; */
    background: #424242;
  }
`;
export const Button = styled.button`
  border-radius: 50px;
  /* background: ${({ isPrimary }) => (isPrimary ? "#ff7043" : "#010606")}; */
  background: #ff7043;
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
    /* background: ${({ isPrimary }) => (isPrimary ? "#424242" : "#01BF71")}; */
    background: #424242;
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
  background: rgba(255, 255, 255, 0);
  white-space: nowrap;
  padding: 12px 30px;
  text-decoration: none;
  outline: none;
  /* border: 2px solid rgba(255, 255, 255, 0.5); */
  border: ${({ isHome, dark }) =>
    isHome
      ? dark
        ? "1px solid #e0e3e7"
        : "1px solid rgba(255, 255, 255, 0.5)"
      : "1px solid #e0e3e7"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease—in—out;
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    /* background: ${({ isPrimary }) => (isPrimary ? "#ff7043" : "#ff7043")}; */
    border-color: #ff7043;
    color: #ff7043;
  }
`;
