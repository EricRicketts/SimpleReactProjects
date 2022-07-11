import React from 'react';
import { useForm } from 'react-hook-form';
import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react';

const TwoSimpleInputs = () => {
  const [values, setValues] = React.useState(
    {
      firstName: '',
      lastName: ''
    });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors } } = useForm();

  const minLengthErrorMessage = "Must be at least 2 characters";
  const maxLengthErrorMessage = "Must be at most 20 characters";
  const requiredErrorMessage = "Field is required";
  const registerHandler = (data) => {
    console.log(data);
    console.log("First Name: ", data.firstName);
    console.log("Last Name: ", data.lastName);
    reset();
  }

  return (
    <form data-testid="form" onSubmit={handleSubmit(registerHandler)} >
      <VStack spacing="24px" align="left">
        <FormControl isInvalid={errors.firstName}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            type="text"
            {...register("firstName",
              {
                required: requiredErrorMessage,
                minLength: {
                  value: 2,
                  message: minLengthErrorMessage
                },
                maxLength: {
                  value: 20,
                  message: maxLengthErrorMessage
                }
              }
            )}
          />
          <FormHelperText>
            Must be at least 2 characters in length, but not more than 20.
          </FormHelperText>
          <FormErrorMessage>
            { errors.firstName && errors.firstName.message }
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.lastName}>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input
            id="lastName"
            type="text"
            {...register("lastName",
              {
                required: requiredErrorMessage,
                minLength: {
                  value: 2,
                  message: minLengthErrorMessage
                },
                maxLength: {
                  value: 20,
                  message: maxLengthErrorMessage
                }
              }
            )}
          />
          <FormHelperText>
            Must be at least 2 characters in length, but not more than 20.
          </FormHelperText>
          <FormErrorMessage>
            { errors.lastName && errors.lastName.message }
          </FormErrorMessage>
        </FormControl>
        <Button type="submit">Submit</Button>
      </VStack>
    </form>
  );
};

export { TwoSimpleInputs };