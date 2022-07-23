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
  const [passportType, setPassportType] = React.useState('book');
  const [passportSize, setPassportSize] = React.useState('regular');
  const {
    handleSubmit,
    register,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful }
  } = useForm({ mode: 'onTouched' });
  const onSubmit = (values: any): void => {
    console.log(values);
  }
 
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      console.log("successful submit");
      reset({
        passportType: 'book',
        passportSize: 'regular'
      });
      setPassportType('book');
      setPassportSize('regular')
      console.log(passportType)
      console.log(passportSize)
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <VStack marginLeft='5px' align='left' spacing={5}>
        <FormControl>
          <RadioGroup onChange={setPassportType} value={passportType}>
            <HStack spacing={5}>
              <Radio {...register('passportType')} value='book'>U.S. Passport Book</Radio>
              <Radio {...register('passportType')} value='card'>U.S. Passport Card</Radio>
              <Radio {...register('passportType')} value='both'>Both</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <RadioGroup onChange={setPassportSize} value={passportSize}>
            <HStack spacing={5}>
              <Radio {...register('passportSize')} value='regular'>Regular Book (Standard)</Radio>
              <Radio {...register('passportSize')} value='large'>Large Book (Non-Standard)</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <Button width='100px' type='submit' colorScheme='blue'>Submit</Button>
      </VStack>
    </form>
  );
}

export default PassportApplicationForm;
