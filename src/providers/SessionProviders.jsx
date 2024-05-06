"use client";

import { SessionProvider } from "next-auth/react";

const SessionProviders = ({ children }) => {
  return <SessionProvider basePath="/api/auth">{children}</SessionProvider>;
};

export default SessionProviders;
