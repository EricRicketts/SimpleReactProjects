import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import { RegisterFields } from './components/register_fields';

function App() {
  return (
    <ChakraProvider>
      <Box width="50%" margin="auto">
        <RegisterFields/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
