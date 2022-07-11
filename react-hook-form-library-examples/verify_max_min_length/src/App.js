import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { TwoSimpleInputs } from './components/two_simple_inputs';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box width="50%" margin="auto">
        <TwoSimpleInputs />
      </Box>
    </ChakraProvider>
  );
}

export default App;
