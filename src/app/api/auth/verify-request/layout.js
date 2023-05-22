import {
  LayoutWrapper,
  InnerWrapper,
  ImageWrapper,
  LeftWrapper,
  ChildrenWrapper,
} from "./LayoutElements";
import YorubaManLogin from "@/components/svg/YorubaManLoginSVG.svg";
import Image from "next/legacy/image";
import YorubaWomanSideProfile from "@/components/svg/YorubaWomanSideProfile.jpg";

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <InnerWrapper>
        <LeftWrapper>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </LeftWrapper>
        <ImageWrapper>
          <Image src={YorubaWomanSideProfile} alt="" fill={true} />
        </ImageWrapper>
      </InnerWrapper>
    </LayoutWrapper>
  );
}
