"use client";

import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
// import Navbar from "@/components/Navbar/Navbar";
// import MobileSidebar from "@/components/MobileSidebar/MobileSidebar";
// import Footer from "@/components/Footer/Footer";

import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), {
  ssr: false,
});
const MobileSidebar = dynamic(
  () => import("@/components/MobileSidebar/MobileSidebar"),
  {
    ssr: false,
  }
);

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
});
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
