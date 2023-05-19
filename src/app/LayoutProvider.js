// Use the client directive for using usePathname hook.
"use client";

// Use usePathname for catching route name.
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SessionProvider } from "next-auth/react";
import MobileSidebar from "@/components/MobileSidebar/MobileSidebar";
import { useState } from "react";

export const LayoutProvider = ({ children, pageProps = {} }) => {
  const pathname = usePathname();
  const { session, ...otherProps } = pageProps;
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    // <>
    <SessionProvider session={session}>
      {pathname !== "/auth/signin" &&
        pathname !== "/auth/register" &&
        pathname !== "/api/auth/verify-request" && (
          <MobileSidebar isOpen={showSidebar} toggle={toggleSidebar} />
        )}
      {pathname !== "/auth/signin" &&
        pathname !== "/auth/register" &&
        pathname !== "/api/auth/verify-request" && (
          <Navbar toggle={toggleSidebar} />
        )}
      {children}
      {pathname !== "/auth/signin" &&
        pathname !== "/auth/register" &&
        pathname !== "/api/auth/verify-request" && <Footer />}
    </SessionProvider>
    // </>
  );
};
