// app/log-in/page.jsx

import Link from "next/link";
import LogIn from "@/components/LogIn";
const page = () => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link href="/" className="self-start -mt-20">
          Home
        </Link>

        <LogIn />
      </div>
    </div>
  );
};

export default page;
