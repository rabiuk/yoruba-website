"use client";
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiAtSymbol } from "react-icons/hi";
import { Separator } from "@/components/Separator";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import {
  SignInWrapper,
  Title,
  Description,
  Form,
  InputGroup,
  Input,
  Icon,
  Button,
  ButtonCustom,
  DisabledButton,
  WarningText,
} from "./SignInElements";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const searchParams = useSearchParams();
  const [focusedInput, setFocusedInput] = useState("");
  const callbackUrl = searchParams.get("callbackUrl");

  // Email validation function
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  useEffect(() => {
    setEmailValid(validateEmail(email));
  }, [email]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (emailValid) {
      await signIn("email", { email, callbackUrl });
    }
  };

  return (
    <SignInWrapper>
      <div className="title">
        <Title>Sign In</Title>
        <Description>
          Enter your email below to get a magic link sent to your inbox.
        </Description>
      </div>

      <Form onSubmit={handleSignIn}>
        {!emailValid && emailTouched && (
          <WarningText fontSize="12">
            Please enter a valid email address.
          </WarningText>
        )}
        <InputGroup focused={focusedInput === "email"}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!emailTouched) {
                setEmailTouched(true);
              }
            }}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput("")}
          />
          <Icon
            focused={focusedInput === "email"}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput("")}
          >
            <HiAtSymbol size={20} />
          </Icon>
        </InputGroup>

        {emailValid ? (
          <Button type="submit">Sign In With Email</Button>
        ) : (
          <DisabledButton type="button">Sign In With Email</DisabledButton>
        )}
        <Separator text={"Or continue with"} />
        <ButtonCustom
          type="button"
          onClick={() => {
            signIn("google", { callbackUrl });
          }}
        >
          Sign In with Google <FcGoogle />
        </ButtonCustom>
      </Form>
    </SignInWrapper>
  );
};

export default SignIn;
