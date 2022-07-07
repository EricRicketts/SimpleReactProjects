import React from "react";
import { useForm } from "react-hook-form";

function BasicUsageForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form data-testid="basicUsageForm" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="example">Example</label>
      <input
        data-testid="example"
        name="example"
        id="example"
        defaultValue="test"
        {...register("example")}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="exampleRequired">Example Required</label>
      <input
        data-testid="exampleRequired"
        name="exampleRequired"
        id="exampleRequired"
        {...register("exampleRequired", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input data-testid="submitInput" type="submit" />
    </form>
  );
}

export default BasicUsageForm;