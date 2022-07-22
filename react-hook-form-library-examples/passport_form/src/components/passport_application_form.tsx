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
  const [type, setType] = React.useState('book');
  const {
    handleSubmit,
    register,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful }
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      passportType: 'book'
    }
  });
  const onSubmit = (values: any): void => {
    console.log(values);
  }
  
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <VStack marginLeft='5px' align='left' spacing={5}>
        <FormControl>
          <RadioGroup onChange={setType} value={type}>
            <HStack spacing={5}>
              <Radio {...register('passportType')} value='book'>U.S. Passport Book</Radio>
              <Radio {...register('passportType')} value='card'>U.S. Passport Card</Radio>
              <Radio {...register('passportType')} value='both'>Both</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <Button width='100px' type='submit' colorScheme='blue'>Submit</Button>
      </VStack>
    </form>
  );
}

export default PassportApplicationForm;
