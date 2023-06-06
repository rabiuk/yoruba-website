"use client";
// import { useState } from "react";
// import LearnSection from "@/components/LearnSection/Learn";
import ScrollToTop from "@/components/ScrollToTop";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

const LearnSection = dynamic(() => import("@/components/LearnSection/Learn"), {
  ssr: false,
});
const LearnPage = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession({
    // required: true,
    // onUnauthenticated() {
    //   redirect("/auth/signin?callbackUrl=/learn");
    // },
  });

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      <ScrollToTop />
      <LearnSection />
    </>
  );
};

export default LearnPage;
