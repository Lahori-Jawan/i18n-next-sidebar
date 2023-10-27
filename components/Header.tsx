import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <Flex className="topbar" bg="white" p="5">
      <Image src="/logoipsum.svg" w="5rem" h="auto" />
    </Flex>
  );
};

export default Header;
