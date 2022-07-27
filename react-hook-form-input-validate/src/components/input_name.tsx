import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const InputName = () => {
  const nameRegex = /^[A-Za-z]+$/;
  const {
    getValues,
    register,
    formState,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      lastName: "",
    },
  });

  const onChangeUpdate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const values = getValues("lastName");
    console.log("getValues in onChange: " + values);
  };

  const onBlurUpdate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const values = getValues("lastName");
    console.log(errors);
    console.log("getValues in onBlur: " + values);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    console.log(formState.errors);
  };

  return (
    <VStack align="left">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <VStack marginLeft="5px" align="left">
            <FormLabel>Last Name</FormLabel>
            <Input
              {...register("lastName", {
                onChange: onChangeUpdate,
                onBlur: onBlurUpdate,
                required: {
                  value: true,
                  message: "Last name is required",
                },
                pattern: {
                  value: nameRegex,
                  message: "Last name must be at least one letter",
                },
              })}
            />
            {errors.lastName?.type === "required" && (
              <FormErrorMessage>{errors.lastName.message}</FormErrorMessage>
            )}
            <Button type="submit">Submit</Button>
          </VStack>
        </FormControl>
      </form>
    </VStack>
  );
};

export default InputName;
