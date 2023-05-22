"use client";
import styled from "styled-components";
import Link from "next/link";

const burntOrange = "#FF7043";
export const SignInWrapper = styled.section`
  max-width: 70%;
  min-width: 70%;
  /* width: 100%; */
  /* width: 75%; */
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Title = styled.h1`
  color: #1f2937;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 0;
`;

export const Description = styled.p`
  width: 75%;
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
  border-radius: 0.375rem;
  background-color: #f1f5f9;
  position: relative;
  color: rgba(0, 0, 0, 0.25);
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
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
  background: linear-gradient(to right, ${burntOrange}, #e64a19);
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.75rem;
  color: #f8fafc;
  font-size: 1.125rem;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #f8fafc, #f8fafc);
    border: 1px solid #3b82f6;
    color: #1f2937;
  }
`;

export const ButtonCustom = styled(Button)`
  border: 1px solid #e5e7eb;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  color: #0c0c0c;
  &:hover {
    background: #e5e7eb;
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
