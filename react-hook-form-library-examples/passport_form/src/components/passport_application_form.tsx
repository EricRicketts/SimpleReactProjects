import React from 'react';
import {useForm} from 'react-hook-form';
import {
  HStack,
  VStack,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Radio,
  RadioGroup,
  Button
} from '@chakra-ui/react';

const PassportApplicationForm = () => {
  const [value, setValue] = React.useState('one');
  const {
    handleSubmit,
    register,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful }
  } = useForm({
    mode: 'onTouched',
  });
  const onSubmit = (values: any): void => {
    console.log(values);
  }
  
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <VStack justify='center' spacing={5}>
        <FormControl>
          <RadioGroup onChange={setValue} value={value}>
            <HStack>
              <Radio {...register('number')} value='one'>First</Radio>
              <Radio {...register('number')} value='two'>Second</Radio>
              <Radio {...register('number')} value='three'>Third</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <Button width='100px' type='submit' colorScheme='blue'>Submit</Button>
      </VStack>
    </form>
  );
}

export default PassportApplicationForm;
