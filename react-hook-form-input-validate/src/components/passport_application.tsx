import React from "react";
import { InputNameTemplate, IFormValues } from "./input_name_template";
import { useForm } from "react-hook-form";
import {
  VStack,
  Button,
} from "@chakra-ui/react";

const PassportApplication = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>({ mode: "onTouched",
    defaultValues: {
      "firstName": ''
    }
  });

  const onSubmit = (data: IFormValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack marginLeft="10px" align="left">
        <InputNameTemplate id={"lastName"} label={"Last Name"} register={register} errors={errors} />
        <Button mt={4} color="teal" type="submit">
          Submit
        </Button>
      </VStack>
    </form>
  );
}
export default PassportApplication;
