"use client";

import Link from "next/link";
import UserAuthForm from "./UserAuthForm";
import { useToast } from "@/components/ui/use-toast";

type LogInProps = {
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const LogIn = ({ setShowLoginModal }: LogInProps) => {
  const { toast } = useToast();

  const toastComingSoon = () => {
    toast({
      description: "Commig soon!",
    });
    setShowLoginModal(false);
  };
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 text-zinc-700 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mx-auto max-w-xs text-sm">
          By continuing, you are setting up an account with Yoruba and agree to
          our{" "}
          <a href="#" className="text-primary-500" onClick={toastComingSoon}>
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary-500" onClick={toastComingSoon}>
            Privacy Policy
          </a>
          .
        </p>

        {/* log-in Form*/}
        <UserAuthForm setShowLoginModal={setShowLoginModal} />
        <div className="px-8 text-center text-sm text-zinc-700">
          Or
          <Link
            href="/api/auth/signin"
            className="text-sm underline underline-offset-4 hover:text-primary-500 hover:no-underline"
            onClick={() => setShowLoginModal(false)}
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
