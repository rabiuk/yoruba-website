import { metadata } from "src/app/layout";
import Register from "./Register";
const RegisterPage = () => {
  metadata.title = "Register";

  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
