import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { FormControl, FormLabel, FormErrorMessage, Input, VStack } from "@chakra-ui/react";

type FormValues = {
  lastName: string;
  firstName: string;
  middleName: string;
};

const ControlledNameInput = (props: UseControllerProps<FormValues>) => {
  const { field } = useController(props);

  return (
    <FormControl isInvalid={}>
      <VStack>
        <FormLabel><strong>1. Name</strong> Last Name</FormLabel>
        <Input {...field} placeholder={props.name} />
        <
      </VStack>
    </FormControl>
  );
};

export { ControlledNameInput };
export type { FormValues };
