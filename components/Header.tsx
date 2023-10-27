import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <Flex className="topbar" bg="white" p="5">
      <Image src="/logoipsum.svg" w="5rem" h="auto" />
      <VStack ml="1.5rem" justify="center" align="start" spacing={1}>
        <Text as="p" fontSize="1.25rem" fontWeight="bold">
          The Big Title
        </Text>
        <Text>Subtitle</Text>
      </VStack>
      <Stack direction="row" ml="auto" align="center" spacing={4}>
        {/* Language Switcher */}
        <Avatar src="/logoipsum.svg" size="2.5rem" borderRadius="0.5rem" />
        <Divider orientation="vertical" />
        <VStack justify="center" align="start" spacing={1}>
          <Text as="p" fontSize="1.25rem" fontWeight="bold">
            Nasir Khan
          </Text>
          <Text>Sr. Consultant</Text>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default Header;
