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
  const [isFocused, setIsFocused] = useState(false);
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
      await signIn("email", { email, callbackUrl: "/" });
    }
  };
  const loginWithGoogle = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInWrapper>
      <div className="title">
        <h1 className="title text-2xl font-bold">Sign In</h1>
        <p className="description mx-auto text-zinc-700">
          Enter your email below to get a magic link sent to your inbox.
        </p>
      </div>

      <form className="form flex flex-col gap-5" onSubmit={handleSignIn}>
        {!emailValid && emailTouched && (
          <p className="warning text-sm text-red-500">
            Please enter a valid email address.
          </p>
        )}
        <div
          className={`flex ${
            focusedInput === "email"
              ? "border-2 py-1.5 pl-1.5"
              : "border py-2 pl-2"
          } relative h-10 rounded-md bg-white transition-all duration-300 ease-in-out`}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="h-full w-full bg-transparent px-2 py-2 text-base font-normal text-zinc-700 outline-none transition-all duration-0 ease-in-out"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!emailTouched) {
                setEmailTouched(true);
              }
            }}
            onFocus={() => {
              setFocusedInput("email");
              setIsFocused(true);
            }}
            onBlur={() => {
              setFocusedInput("");
              setIsFocused(false);
            }}
          />

          <Icon
            focused={focusedInput === "email"}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput("")}
          >
            <HiAtSymbol size={20} />
          </Icon>
        </div>

        {emailValid ? (
          <button
            type="submit"
            className="h-10 w-full cursor-pointer overflow-hidden rounded-md border border-gray-300 bg-primary-500 px-6 py-2 font-normal text-white hover:bg-primary-400"
          >
            Sign in with email
          </button>
        ) : (
          <button
            type="button"
            className="disabled h-10 w-full cursor-not-allowed overflow-hidden rounded-md border border-gray-300 bg-gray-600 px-6 py-2 font-normal text-white"
          >
            Sign in with email
          </button>
        )}
        <Separator text={"Or continue with"} />
        <button
          type="button"
          className="custom-button flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-2 font-medium text-zinc-700 hover:bg-gray-100"
          onClick={loginWithGoogle}
        >
          Sign in with Google <FcGoogle />
        </button>
      </form>
    </SignInWrapper>
  );
};

export default SignIn;
