"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { HiAtSymbol, HiEyeOff, HiEye } from "react-icons/hi";
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
  ButtonCustom,
  BottomText,
  LinkText,
} from "./SignInElements";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [focusedInput, setFocusedInput] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const handlePasswordVisibility = () => {
    setPasswordInputType(
      passwordInputType === "password" ? "text" : "password"
    );
    setShowPassword(!showPassword);
  };
  return (
    <>
      <SignInWrapper>
        <div className="title">
          <Title>Sign In</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </Description>
        </div>

        <Form>
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

          <InputButton>
            <Button type="submit">Login</Button>
          </InputButton>

          <InputButton>
            <ButtonCustom
              type="button"
              onClick={() => {
                signIn("google", { callbackUrl });
              }}
            >
              Sign In with Google <FcGoogle />
            </ButtonCustom>
          </InputButton>
          <InputButton>
            <ButtonCustom type="button">
              Sign In with Github <FaGithub />
            </ButtonCustom>
          </InputButton>
        </Form>

        <BottomText>
          don't have an account yet?{" "}
          <LinkText href={"/auth/register"}>Sign Up</LinkText>
        </BottomText>
      </SignInWrapper>
    </>
  );
};

export default SignIn;
