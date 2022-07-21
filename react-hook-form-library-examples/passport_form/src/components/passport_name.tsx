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

const PassportName = () => {
  const namePattern: RegExp = /^[A-Za-z]+$/i;
  const { register } = useForm();
  return (
    <FormControl as='fieldset'>
      <VStack align='left' spacing={5}>
        <VStack align='left' spacing={1}>
          <FormLabel htmlFor='lastName'><strong>1. Name</strong> Last</FormLabel>
          <Input
            {...register('lastName', { required: true, pattern: namePattern })}
          />
        </VStack>
        <HStack>
          <VStack align='left' spacing={1}>
            <FormLabel htmlFor='firstName'>First</FormLabel>
            <Input
              {...register('firstName', { required: true, pattern: namePattern })}
            />
          </VStack>
          <VStack align='left' spacing={1}>
            <FormLabel htmlFor='middleName'>Middle</FormLabel>
            <Input
              {...register('middleName', { required: true, pattern: namePattern })}
            />
          </VStack>
        </HStack>
      </VStack>
    </FormControl>
  );
}

export default PassportName;
