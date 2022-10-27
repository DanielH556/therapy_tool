import React from "react";
import { Box, StatusBar, HStack, Text, IconButton, Icon, Center } from "native-base";
import MenuButton from "./MenuButton";

export default function AppBar() {
   return(
   <Box w="100%">
      <HStack bg="violet.800" px="1" py="3" justifyContent="center" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MenuButton} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">Home</Text>
        </HStack>
      </HStack>
   </Box>
   )
}