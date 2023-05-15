"use client";
import { HiOutlineUser, HiAtSymbol, HiEyeOff, HiEye } from "react-icons/hi";
import { useState } from "react";
import {
  SignInWrapper,
  Title,
  Description,
  Form,
  InputGroup,
  Input,
  Icon,
  InputButton,
  Button,
  BottomText,
  LinkText,
} from "../signin/SignInElements";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState("password");
  const [focusedInput, setFocusedInput] = useState("");

  const handlePasswordVisibility = () => {
    setPasswordInputType(
      passwordInputType === "password" ? "text" : "password"
    );
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordInputType(
      confirmPasswordInputType === "password" ? "text" : "password"
    );
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <SignInWrapper>
        <div className="title">
          <Title>Register</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </Description>
        </div>

        <Form>
          <InputGroup>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              onFocus={() => setFocusedInput("username")}
              onBlur={() => setFocusedInput("")}
            />
            <Icon focused={focusedInput === "username"}>
              <HiOutlineUser size={20} />
            </Icon>
          </InputGroup>
          <InputGroup>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput("")}
            />
            <Icon focused={focusedInput === "email"}>
              <HiAtSymbol size={20} />
            </Icon>
          </InputGroup>
          <InputGroup>
            <Input
              type={passwordInputType}
              name="password"
              placeholder="Password"
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput("")}
            />
            <Icon
              onClick={handlePasswordVisibility}
              focused={focusedInput === "password"}
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </Icon>
          </InputGroup>
          <InputGroup>
            <Input
              type={confirmPasswordInputType}
              name="cpassword"
              placeholder="Confirm Password"
              onFocus={() => setFocusedInput("cpassword")}
              onBlur={() => setFocusedInput("")}
            />
            <Icon
              onClick={handleConfirmPasswordVisibility}
              focused={focusedInput === "cpassword"}
            >
              {showConfirmPassword ? (
                <HiEyeOff size={20} />
              ) : (
                <HiEye size={20} />
              )}
            </Icon>
          </InputGroup>

          <InputButton>
            <Button type="submit">Login</Button>
          </InputButton>
        </Form>

        <BottomText>
          Have an account? <LinkText href={"/auth/signin"}>Sign In</LinkText>
        </BottomText>
      </SignInWrapper>
    </>
  );
};

export default RegisterPage;
