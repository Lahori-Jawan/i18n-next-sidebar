"use client";
import { TOKEN } from "@/constants/auth";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { MoonLoader } from "react-spinners";

const Signin = () => {
  const [isLoading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem(TOKEN) ?? "");
  const [username, setUsername] = useState("mturleyd");
  const [password, setPassword] = useState("GyLnCB8gNIp");
  const router = useRouter();

  const LOGIN_ENDPOINT = process.env.NEXT_PUBLIC_LOGIN as string;

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(LOGIN_ENDPOINT, {
        username,
        password,
      })
      .then((response) => {
        const { token: jwt } = response.data;
        localStorage.setItem(TOKEN, jwt);
        setToken(jwt);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      bg="url(/login-bg.jpg)"
      bgSize="cover"
      h="100vh"
      alignItems="center"
    >
      {/* Signin Card */}
      <Box
        as="form"
        w="43rem"
        bg="rgba(255,255,255,.8)"
        boxShadow="0 0 30px #00000040"
        p={12}
        borderRadius="20px"
        position="relative"
        onSubmit={handleSubmit}
        _before={{
          content: '""',
          w: "123px",
          h: "304px",
          position: "absolute",
          left: "-8rem",
          opacity: 0.8,
          bottom: "20px",
          bg: "url(/digital-heading.png)",
        }}
        _after={{
          content: '""',
          w: "37px",
          h: "333px",
          position: "absolute",
          right: "-3.25rem",
          opacity: 0.8,
          top: "20px",
          bg: "url(/modgadishu-heading.png) center center",
        }}
      >
        <Stack spacing={4}>
          <Image src="/logo.svg" w="12rem" h="auto" m="0 auto" />
          <Text
            as="h2"
            fontSize="1.25rem"
            fontWeight="bold"
            textAlign="center"
            mb="2rem"
          >
            Mogadishu Digital Archiving System
          </Text>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              background="white"
              borderRadius="5rem"
              height="3.75rem"
              p="1rem 2rem"
              mt="0.25rem"
              fontSize="1.125rem"
              lineHeight="1.5rem"
              focusBorderColor="var(--secondary-color)"
              placeholder="Type Here"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              background="white"
              borderRadius="5rem"
              height="3.75rem"
              p="1rem 2rem"
              mt="0.25rem"
              fontSize="1.125rem"
              lineHeight="1.5rem"
              focusBorderColor="var(--secondary-color)"
              placeholder="Type Here"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={10}>
            <Button
              mt="2.5rem"
              bg="var(--primary-color)"
              height="4rem"
              color="white"
              fontWeight={400}
              isLoading={isLoading || !!token}
              borderRadius="5rem"
              _hover={{
                bg: "var(--secondary-color)",
              }}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Text as="p" textAlign="center" color="#818181" mt="0.5rem">
        @ {new Date().getFullYear()}. All rights are reserved.
      </Text>
    </Box>
  );
};

export default Signin;
