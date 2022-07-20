import {
  Container
} from '@chakra-ui/react';
import PassportTypesAndSizes from './passport_types_and_sizes';

const PassportForm = () => {
  return (
    <Container maxW='container.xl'>
      <PassportTypesAndSizes/>
    </Container>
  );
}

export default PassportForm;
