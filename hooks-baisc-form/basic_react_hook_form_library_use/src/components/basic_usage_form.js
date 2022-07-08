import React from "react";
import {useForm} from "react-hook-form";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Box
} from '@chakra-ui/react';

function BasicUsageForm() {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack align="left" width="50%" spacing="24px">
        {/* register your input into the hook by invoking the "register" function */}
        <FormControl>
          <FormLabel htmlFor="example">Example</FormLabel>
          <Input
            name="example"
            id="example"
            type="text"
            size="md"
            defaultValue="test"
            {...register("example")}
          />
        </FormControl>

        {/* include validation with required or other standard HTML validation rules */}
        <FormControl>
          <FormLabel htmlFor="exampleRequired">Example Required</FormLabel>
          <Input
            name="exampleRequired"
            id="exampleRequired"
            type="text"
            {...register("exampleRequired", {required: true})}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
        </FormControl>

        <Button colorScheme="blue" size="md" type="submit">Submit</Button>
      </VStack>
    </form>
  );
}

export default BasicUsageForm;