"use client";
import { use, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { useRouter } from "next/navigation";

export default function ScrollToTop() {
  // const { pathname } = useLocation();
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
