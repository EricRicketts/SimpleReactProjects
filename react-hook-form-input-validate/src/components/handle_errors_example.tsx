import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

interface IFormInput {
  name: string;
}

const HandleErrorsExample = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IFormInput>({
    // mode: "onSubmit",
    mode: "onTouched",
    defaultValues: {
      name: "",
    },
  });

  const nameRegex = /^[A-Za-z]+$/;
  useEffect(() => {
    console.log("error object: ", errors);
  }, [errors]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const dataOutput: string = JSON.stringify(data, null, 4);
    console.log("All form input: " + dataOutput);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          placeholder="Name"
          {...register("name", {
            required: {
              value: true,
              message: "name is required",
            },
            pattern: {
              value: nameRegex,
              message: "name must be one or more letters",
            },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} color="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default HandleErrorsExample;
