import { metadata } from "src/app/layout";
// import SignIn from "./SignIn";
import dynamic from "next/dynamic";

const SignIn = dynamic(() => import("./SignIn"), { ssr: false });
const SignInPage = () => {
  metadata.title = "Sign In";
  return (
    <>
      <SignIn />
    </>
  );
};

export default SignInPage;
