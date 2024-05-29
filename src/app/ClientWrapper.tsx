"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbartw").then((mod) => mod.default), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.default), { ssr: false });

interface ClientWrapperProps {
  children: ReactNode;
  session: any;
}

const ClientWrapper = ({ children, session }: ClientWrapperProps) => {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <SessionProvider session={session}>
      {pathname !== "/auth/signin" && pathname !== "/log-in" && pathname !== "/auth/register" && pathname !== "/api/auth/verify-request" && (
        <Navbar toggle={toggleSidebar} />
      )}
      <div className="container mx-auto h-full max-w-7xl px-4 pt-12 md:px-8">{children}</div>
      <Toaster />
      {pathname !== "/auth/signin" && pathname !== "/log-in" && pathname !== "/auth/register" && pathname !== "/api/auth/verify-request" && <Footer />}
    </SessionProvider>
  );
};

export default ClientWrapper;
