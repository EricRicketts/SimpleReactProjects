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
  Input,
  Radio,
  RadioGroup,
  Button
} from '@chakra-ui/react';

const PassportApplicationForm = () => {
  const nameRegex = /^[A-Za-z]+$/;
  const patternErrorMessage: string = 'Must be at least one letter';
  const [passportType, setPassportType] = React.useState('book');
  const [passportSize, setPassportSize] = React.useState('regular');
  const {
    handleSubmit,
    register,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful }
  } = useForm({ mode: 'onTouched', defaultValues: {
      'lastName': '',
      'firstName': '',
      'middleName': '',
      'passportType': 'book',
      'passportSize': 'regular',
    }});
  const onSubmit = (values: any): void => {
    console.log(values);
  }

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      console.log("successful submit");
      reset({
        passportType: 'book',
        passportSize: 'regular',
        firstName: '',
        lastName: '',
        middleName: '',
      });
      setPassportType('book');
      setPassportSize('regular')
      console.log(passportType)
      console.log(passportSize)
      console.log(errors);
    }
  }, [errors, isSubmitSuccessful, reset]);
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
        <FormControl>
          <VStack marginLeft='5px' align='left' spacing={5}>
            <VStack align='left'>
              <FormLabel><strong>1. Name</strong> Last</FormLabel>
              <Input {...register('lastName', {
                required: {
                  value: true,
                  message: 'last name is required'
                },
                pattern: {
                  value: nameRegex,
                  message: patternErrorMessage
                }
              })}/>
              {errors.lastName && <FormErrorMessage>errors.lastName.message</FormErrorMessage>}
            </VStack>
            <HStack spacing={5}>
              <VStack>
                <FormLabel>First</FormLabel>
                <Input {...register('firstName', {
                  required: {
                    value: true,
                    message: 'first name is required'
                  },
                  pattern: {
                    value: nameRegex,
                    message: patternErrorMessage
                  }
                })}/>
              </VStack>
              <VStack>
                <FormLabel>Middle</FormLabel>
                <Input {...register('middleName', {
                  required: {
                    value: true,
                    message: 'middle name is required'
                  },
                  pattern: {
                    value: nameRegex,
                    message: patternErrorMessage
                  }
                })}/>
              </VStack>
            </HStack>
          </VStack>
        </FormControl>
        <Button width='100px' type='submit' colorScheme='blue'>Submit</Button>
      </VStack>
    </form>
  );
}

export default PassportApplicationForm;
