import React from "react";
import { ControlledTextInput, FormValues } from "./controlled_text_input";
import { useForm, handleSubmit } from "react-hook-form";
import {
  VStack,
  HStack,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

const PassportApplicaton = () => {
  const nameRegex: RegExp = /^[A-Za-z]+$/;
  const nameErrorMessage: string =
    "Name can only be letters and must be at least one letter";
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      lastName: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextInput
        control={control}
        name="lastName"
        rules={{
          required: {
            value: true,
            message: "Last Name is required",
          },
          pattern: {
            value: nameRegex,
            message: nameErrorMessage,
          },
        }}
      />
      <Button mt={4} color="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export { PassportApplicaton };
