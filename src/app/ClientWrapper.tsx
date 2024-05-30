// src/app/ClientWrapper.tsx
"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbartw";

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
      <div className="h-full">
        {children}
        </div>
      <Toaster />
      {pathname !== "/auth/signin" && pathname !== "/log-in" && pathname !== "/auth/register" && pathname !== "/api/auth/verify-request" && <Footer />}
    </SessionProvider>
  );
};

export default ClientWrapper;
