"use client";

import Header from "@/components/Header";
import SidebarWithHeader from "@/components/Sidebar";
import { TOKEN } from "@/constants/auth";
import { Box, Flex } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const { locale } = params;
  const token = localStorage.getItem(TOKEN);
  const SIGNIN_PATH = `/${locale}/auth/signin`;

  const [isAuth, setAuth] = useState(Boolean(token));

  const handleSignout = () => {
    localStorage.clear();
    setAuth(false);
  };

  useEffect(() => {
    if (!isAuth) {
      redirect(SIGNIN_PATH);
    }
  }, [isAuth]);

  if (!isAuth) return <div>Loading...</div>;

  return (
    <Flex as="main" className="protected">
      {/* <button onClick={handleSignout}>Signout</button> */}
      <SidebarWithHeader onClick={handleSignout} />
      <Box width="calc(100% - 5rem)" ml="auto" bg="#f3f6f9">
        <Header />
        {children}
      </Box>
    </Flex>
  );
}
