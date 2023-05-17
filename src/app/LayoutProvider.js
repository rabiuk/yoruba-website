// Use the client directive for using usePathname hook.
"use client";

// Use usePathname for catching route name.
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SessionProvider } from "next-auth/react";

export const LayoutProvider = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <SessionProvider>
        {pathname !== "/auth/signin" &&
          pathname !== "/auth/register" &&
          pathname !== "/api/auth/verify-request" && <Navbar />}
        {children}
        {pathname !== "/auth/signin" &&
          pathname !== "/auth/register" &&
          pathname !== "/api/auth/verify-request" && <Footer />}
      </SessionProvider>
    </>
  );
};
