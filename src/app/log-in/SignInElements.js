"use client";
import styled from "styled-components";
import Link from "next/link";
import { colors } from "@/components/colors";

const burntOrange = "#FF7043";
export const SignInWrapper = styled.section`
  width: 350px;
  height: 340px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  color: #1f2937;
  font-size: 2.4rem;
  font-weight: 900;
  padding: 1rem 0;
`;

export const Description = styled.p`
  width: 75%;
  font-size: 1.4rem;
  margin: auto;
  color: #9ca3af;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const InputGroup = styled.div`
  display: flex;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  background-color: #fafafa;
  position: relative;
  height: 4rem;
  padding: 0.8rem 1.2rem;
  border: ${({ focused }) =>
    focused ? `2px solid ${colors.primaryColor}` : "1px solid #cbd5e0"};
  transition: all 0.3s ease-in-out;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
`;
export const Icon = styled.span`
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;
  color: ${(props) => (props.focused ? burntOrange : "rgba(0, 0, 0, 0.25)")};
  transition: all 0.3s ease-in-out;
`;

export const InputButton = styled.div``;

export const Button = styled.button`
  width: 100%;
  height: 4rem;
  font-weight: 700;
  background: linear-gradient(to right, ${burntOrange}, #e64a19);
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.8rem 1.6rem;
  color: #f8fafc;
  font-size: 1.4rem;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background: ${colors.primaryColor};
  }
`;

export const ButtonCustom = styled(Button)`
  border: 1px solid #e5e7eb;
  font-size: 1.4rem;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.textColor};
  font-weight: 700;
  &:hover {
    background: #f1f5f9;
  }
`;

export const BottomText = styled.p`
  text-align: center;
  color: #9ca3af;
`;

export const LinkText = styled(Link)`
  color: #1d4ed8;
  text-decoration: none;
`;

export const DisabledButton = styled(Button)`
  background: rgba(0, 0, 0, 0.5);
  cursor: default;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const WarningText = styled.p`
  color: red;
  font-size: ${({ fontSize }) =>
    fontSize
      ? `clamp(${parseFloat(fontSize) * 0.8}px, ${
          parseFloat(fontSize) / 100
        }vw + ${parseFloat(fontSize) * 0.8}px, ${fontSize}px)`
      : "14px"};
`;
