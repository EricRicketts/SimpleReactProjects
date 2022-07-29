import * as React from "react";
import { Text, VStack, ChakraProvider } from "@chakra-ui/react";
import InputName from "./components/input_name";

export const App = () => {
  return (
    <ChakraProvider>
      <VStack marginLeft={5} align="left">
        <InputName />
      </VStack>
    </ChakraProvider>
  );
};
