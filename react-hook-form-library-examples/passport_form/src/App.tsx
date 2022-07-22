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
import PassportApplicationForm from "./components/passport_application_form";

export const App = () => (
  <ChakraProvider theme={theme}>
    <PassportApplicationForm/>
  </ChakraProvider>
)
