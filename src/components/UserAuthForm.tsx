"use client";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const UserAuthForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.log(error);
      // maybe toast notification
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center">
      <Button
        className="bg-primary-500 text-white hover:bg-primary-600 px-8 py-2 w-full h-auto flex justify-center items-center rounded-md shadow-lg whitespace-nowrap cursor-pointer ease-in-out duration-300"
        onClick={loginWithGoogle}
        isLoading={isLoading}
      >
        {isLoading ? null : <FcGoogle className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
