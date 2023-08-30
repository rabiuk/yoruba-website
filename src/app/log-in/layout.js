import {
  LayoutWrapper,
  LoginText,
  InnerWrapper,
  ImageWrapper,
  CredWrapper,
  ChildrenWrapper,
} from "./LayoutElements";
import Image from "next/legacy/image";
import YorubaWomanSideProfile from "@/components/svg/YorubaWomanSideProfile.jpg";

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <InnerWrapper>
        <ImageWrapper>
          <Image src={YorubaWomanSideProfile} alt="" fill={true} />
        </ImageWrapper>
        <CredWrapper>
          {/* <LoginText>Sign In</LoginText> */}
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </CredWrapper>
      </InnerWrapper>
    </LayoutWrapper>
  );
}
