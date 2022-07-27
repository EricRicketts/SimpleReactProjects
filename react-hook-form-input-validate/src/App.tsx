import * as React from "react";
import { Text, VStack, ChakraProvider } from "@chakra-ui/react";
// import InputName from "./components/input_name";
import HandleErrorsExample from "./components/handle_errors_example";

export const App = () => {
  return (
    <ChakraProvider>
      <VStack marginLeft={5} align="left">
        <HandleErrorsExample />
      </VStack>
    </ChakraProvider>
  );
};
