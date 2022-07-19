import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import PassportForm from "./components/passport_form";

export const App = () => (
  <ChakraProvider theme={theme}>
    <PassportForm/>
  </ChakraProvider>
)
