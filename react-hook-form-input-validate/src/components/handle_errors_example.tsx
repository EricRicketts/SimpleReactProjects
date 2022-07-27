import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormControl, FormLabel } from "@chakra-ui/react";

interface IFormInput {
  name: string;
}

const HandleErrorsExample = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IFormInput>({
    mode: "onSubmit",
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
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <input
          type="text"
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
        {errors.name?.type === "required" && <p>{errors.name.message}</p>}
        {errors.name?.type === "pattern" && <p>{errors.name.message}</p>}
      </FormControl>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HandleErrorsExample;
