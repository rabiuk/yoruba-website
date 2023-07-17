"use client";

import Link from "next/link";
import UserAuthForm from "./UserAuthForm";
const LogIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] text-zinc-700">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up an account with Yoruba and agree to
          our{" "}
          <a href="#" className="text-primary-500">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary-500">
            Privacy Policy
          </a>
          .
        </p>

        {/* log-in Form*/}
        <UserAuthForm />
        <div className="px-8 text-center text-sm text-zinc-700">
          Or
          <Link
            href="/log-in"
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            {" "}
            continue with your email address
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
