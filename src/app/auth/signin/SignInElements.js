"use client";
import styled from "styled-components";
import Link from "next/link";
import { colors } from "@/components/colors";

const burntOrange = "#FF7043";
export const SignInWrapper = styled.section`
  width: 350px;
  height: 340px;
  /* width: 100%; */
  /* width: 75%; */
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* gap: 2.5rem; */
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

  /* box-shadow: 0 0 0 2px #fafafa, 0 0 0 5px ${colors.primaryColor}; */
  /* color: rgba(0, 0, 0, 0.25); */
  box-shadow: ${(props) =>
    props.focused
      ? `0 0 0 2px #fafafa, 0 0 0 4px ${colors.primaryColor}`
      : "none"};
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  /* border-radius: 0.375rem; */
  /* background-color: #f1f5f9; */
  outline: none;
`;
export const Icon = styled.span`
  display: flex;
  align-items: center;
  /* background-color: #f1f5f9; */
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;
  color: ${(props) => (props.focused ? burntOrange : "rgba(0, 0, 0, 0.25)")};
`;

export const InputButton = styled.div``;

export const Button = styled.button`
  width: 100%;
  height: 4rem;
  background: linear-gradient(to right, ${burntOrange}, #e64a19);
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.8rem 1.6rem;
  color: #f8fafc;
  font-size: 1.4rem;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background: ${colors.hoverPrimaryColor};
    /* border: 1px solid #3b82f6; */
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
