import React from 'react';
import {
  screen,
  fireEvent,
  render
  } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TwoSimpleInputs } from './components/two_simple_inputs';

describe("Test Two Simple Inputs Form", () => {

  describe("Test Initialization", () => {

    test("Should be no value for first name", () => {
      render(<TwoSimpleInputs/>);
      expect(screen.getByLabelText("First Name")).toBeEmptyDOMElement();
    });

    test("Should be no value for last name", () => {
      render(<TwoSimpleInputs/>);
      expect(screen.getByLabelText("Last Name")).toBeEmptyDOMElement();
    });
  });

  describe("Test Required Inputs", () => {
    test("Should require first and last names", async () => {
      render(<TwoSimpleInputs/>);
      fireEvent.submit(screen.getByTestId("form"));
      const requiredErrors = await screen.findAllByText(/Field is required/i);
      expect(Array.from(requiredErrors).length).toBe(2);
    });
  });
});