"use client";
import React, { useState } from "react";
// import Sidebar from "@/components/MobileSidebar/MobileSidebar";
import LearnSection from "@/components/LearnSection/Learn";
import ScrollToTop from "@/components/ScrollToTop";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const LearnPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin?callbackUrl=/learn");
    },
  });

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <LearnSection />
    </>
  );
};

export default LearnPage;
