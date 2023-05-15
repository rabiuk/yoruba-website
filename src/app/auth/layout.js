import {
  LayoutWrapper,
  InnerWrapper,
  ImageWrapper,
  RightWrapper,
  ChildrenWrapper,
} from "./LayoutElements";

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <InnerWrapper>
        <ImageWrapper>Images</ImageWrapper>
        <RightWrapper>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </RightWrapper>
      </InnerWrapper>
    </LayoutWrapper>
  );
}
