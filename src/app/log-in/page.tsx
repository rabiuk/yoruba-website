// app/log-in/page.jsx

import Link from "next/link";
import LogIn from "@/components/LogIn";
import { metadata } from "@/app/layout";
import SignIn from "./SignIn";
const page = () => {
  // metadata.title = "Log In";
  return (
    // <div className="absolute inset-0">
    //   <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
    //     <Link href="/" className="self-start -mt-20">
    //       Home
    //     </Link>

    //     <LogIn />
    //   </div>
    // </div>
    <>
      <SignIn />
    </>
  );
};

export default page;
