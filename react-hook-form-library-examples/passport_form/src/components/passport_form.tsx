import {
  Container,
  Button,
  VStack,
} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import PassportTypesAndSizes from './passport_types_and_sizes';
import PassportName from "./passport_name";

const PassportForm = () => {
  const {handleSubmit} = useForm();
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxW='container.xl'>
        <VStack>
          <PassportTypesAndSizes/>
          <PassportName/>
          <Button colorScheme='blue' size='md' type='submit'>Submit</Button>
        </VStack>
      </Container>
    </form>
  );
}

export default PassportForm;
