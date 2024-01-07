import { useToast } from "@chakra-ui/react";

export const useUnexpectedToast = () => {
  return useToast({
    title: "Unexpected Error",
    description:
      "We encountered an unexpected error. Please make sure your internet is functioning properly and reload the page. OR Contact the support.",
    duration: null,
  });
};
