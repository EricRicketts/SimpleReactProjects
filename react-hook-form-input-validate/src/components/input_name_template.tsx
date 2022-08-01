import React from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { FormControl, FormLabel, FormErrorMessage, Input, VStack } from "@chakra-ui/react";

interface IFormValues {
  "firstName": string,
  "middleName": string,
  "lastName": string,
  "First Name": string,
  "Middle Name": string,
  "Last Name": string
}

type NameInputProps = {
  id: Path<IFormValues>,
  label: Path<IFormValues>,
  register: UseFormRegister<IFormValues>,
  errors: FieldErrors<IFormValues>
}
const InputNameTemplate = ({ id, label, register, errors }: NameInputProps )=> {

  return (
    <FormControl isInvalid={!!errors[id]}>
      <VStack align="left">
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <Input id={id} {...register(id, {
            required: {
              value: true,
              message: `${label} is required`
            },
            pattern: {
              value: /^[A-Za-z]{2,}$/,
              message: `${label} must be only letters and at least two letters`
            }
          })}
        />
        {errors[id] && <FormErrorMessage>{errors[id]?.message}</FormErrorMessage>}
      </VStack>
    </FormControl>
  );
};

export { InputNameTemplate };
export type { IFormValues };
