import LayoutProvider from "./layoutProvider";
export default function Layout({ children }) {
  return (
    <>
      <LayoutProvider>{children}</LayoutProvider>
    </>
  );
}
