"use client";
import { Container } from "./layoutElements.js";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/learn" ? (
        <Container>{children}</Container>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
