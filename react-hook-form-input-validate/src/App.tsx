import * as React from "react";
import { Text, VStack } from "@chakra-ui/react";
// import InputName from "./components/input_name";
import HandleErrorsExample from "./components/handle_errors_example";

export const App = () => {
  return (
    <VStack align="left">
      <HandleErrorsExample />
    </VStack>
  );
};
