import {
  LayoutWrapper,
  InnerWrapper,
  ImageWrapper,
  RightWrapper,
  ChildrenWrapper,
} from "./LayoutElements";
import YorubaManLogin from "@/components/svg/YorubaManLoginSVG.svg";

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <InnerWrapper>
        <ImageWrapper>
          <YorubaManLogin />
        </ImageWrapper>
        <RightWrapper>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </RightWrapper>
      </InnerWrapper>
    </LayoutWrapper>
  );
}
