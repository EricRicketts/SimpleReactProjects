import * as React from "react";
import { Text, VStack, ChakraProvider } from "@chakra-ui/react";
import PassportApplication from "./components/passport_application";

export const App = () => {
  return (
    <ChakraProvider>
      <VStack align="left">
        <PassportApplication />
      </VStack>
    </ChakraProvider>
  );
};
