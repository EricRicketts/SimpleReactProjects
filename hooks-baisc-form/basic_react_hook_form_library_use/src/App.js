import BasicUsageForm from "./components/basic_usage_form";
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  return (
      <ChakraProvider>
        <BasicUsageForm />
      </ChakraProvider>
  );
}

export default App;
