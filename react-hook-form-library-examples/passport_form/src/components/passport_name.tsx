import {
  useForm,
} from "react-hook-form";
import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  VStack,
  HStack
} from "@chakra-ui/react";

type FormNameValues = {
  firstName: string,
  lastName: string,
  middleName: string,
}
const PassportName = () => {
  const namePattern: RegExp = /^[A-Za-z]+$/i;
  const { register } = useForm<FormNameValues>({
      defaultValues: {
        firstName: '',
        lastName: '',
        middleName: ''
      }
    }
  );
  return (
    <VStack align='left' spacing={5}>
      <VStack>
        <FormControl isRequired >
          <FormLabel><strong>1. Name</strong> Last</FormLabel>
          <Input {...register('lastName')}/>
        </FormControl>
      </VStack>
      <HStack>
        <VStack>
          <FormControl>
            <FormLabel>First</FormLabel>
            <Input {...register('firstName')}/>
          </FormControl>
        </VStack>
        <VStack>
          <FormControl>
            <FormLabel>Middle</FormLabel>
            <Input {...register('middleName')}/>
          </FormControl>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default PassportName;
