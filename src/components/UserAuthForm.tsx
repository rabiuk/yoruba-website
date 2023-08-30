"use client";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

type UserAuthFormProps = {
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const UserAuthForm = ({ setShowLoginModal }: UserAuthFormProps) => {
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
      setShowLoginModal(false);
    }
  };
  return (
    <div className="flex justify-center">
      <Button
        className="flex h-auto w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-primary-500 px-8 py-2 text-white shadow-lg duration-300 ease-in-out hover:bg-primary-600"
        onClick={loginWithGoogle}
        isLoading={isLoading}
      >
        {isLoading ? null : <FcGoogle className="mr-2 h-4 w-4" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
