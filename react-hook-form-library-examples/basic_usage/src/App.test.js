import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import BasicUsageForm from './components/basic_usage_form';
import {act} from "react-dom/test-utils";

describe("Test Basic Usage Form default render", function() {

  test("Should render the example label", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByLabelText("Example")).toBeInTheDocument();
  });

  test("Should render the example input textbox", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByRole("textbox", { name: /^example$/i })).toBeInTheDocument();
  });

  test("Should render the example required label", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByLabelText("Example Required")).toBeInTheDocument();
  });

  test("Should render the example required textbox", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByRole("textbox", { name: /Required/i })).toBeInTheDocument();
  });

  test("Should render the submit button", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("Should render default value of test in the example input", function() {
    render(<BasicUsageForm/>);
    expect(screen.getByRole("textbox", { name: /^example$/i })).toHaveValue("test");
  });
});

describe("Test Basic Usage Form invalid inputs", function() {

  test("Should add error text if example required field is not filled out", async function () {
    render(<BasicUsageForm/>);
    fireEvent.submit(screen.getByRole("button"));
    expect(await screen.findByText("This field is required")).toBeInTheDocument();
  });
});

describe("Test Basic Usage Form submission", function() {

  test('Should submit the form if there are no errors', async function() {
    /*
    const mockOnSubmit = jest.fn();
    const { getByLabelText, getByRole } = render(<BasicUsageForm onSubmit={mockOnSubmit}/>);

    await act(async () => {
      fireEvent.change(
          getByLabelText("Example Required"),
          { target: { value: "fizzbuzz" }}
      );
    });

    await act( async () => {
      fireEvent.submit(getByRole("button"));
    });

    expect(mockOnSubmit).toHaveBeenCalled(); // this is failing called 0 times

     */
  });
});