import { metadata } from "src/app/layout";
import SignIn from "./SignIn";

const SignInPage = () => {
  metadata.title = "Sign In";
  return (
    <>
      <SignIn/>
    </>
  );
};

export default SignInPage;
