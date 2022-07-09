import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  VStack,
  FormControl,
  Input,
  FormLabel,
  Select,
  Button
} from '@chakra-ui/react';

const storeData = { submitArray: [] };
const RegisterFields = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => storeData.submitArray.push(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing="24px" align="left">
        <FormControl>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            {...register("firstName")}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="gender">Gender</FormLabel>
          <Select
            id="gender"
            name="gender"
            placeholder="Select Gender"
            {...register("gender")}>
            <option value='female'>female</option>
            <option value='male'>male</option>
          </Select>
        </FormControl>
        <Button colorScheme="teal" type="submit">Submit</Button>
      </VStack>
    </form>
  );
};

export { storeData, RegisterFields };