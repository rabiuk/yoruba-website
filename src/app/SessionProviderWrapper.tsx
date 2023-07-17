// app/SessionProviderWrapper.js
"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SessionProviderWrapper = ({ children }: Props) => {
  // const { session, ...otherProps } = pageProps;
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
