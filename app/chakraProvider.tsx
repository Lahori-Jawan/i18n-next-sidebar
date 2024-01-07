"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider
        toastOptions={{
          defaultOptions: {
            position: "top-right",
            isClosable: true,
            duration: 7000,
            status: "error",
            variant: "left-accent",
            containerStyle: {
              width: "500px",
              fontSize: "1.25rem",
              top: "5rem",
            },
          },
          motionVariants: {
            initial: {
              x: "100%",
            },
            animate: {
              x: 0,
              top: 80,
            },
            exit: {
              x: "100%",
            },
          },
        }}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
