import React from 'react';
import {
  screen,
  fireEvent,
  render
  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TwoSimpleInputs } from './components/two_simple_inputs';

describe("Test Two Simple Inputs Form", () => {

  describe("Test Initialization", () => {

    test("Should be no value for first name", () => {
      render(<TwoSimpleInputs />);
      expect(screen.getByLabelText("First Name")).toBeEmptyDOMElement();
    });

    test("Should be no value for last name", () => {
      render(<TwoSimpleInputs />);
      expect(screen.getByLabelText("Last Name")).toBeEmptyDOMElement();
    });
  });

  describe("Test Required Inputs", () => {

    test("Submission requires first and last names", async () => {
      render(<TwoSimpleInputs />);
      fireEvent.submit(screen.getByTestId("form"));
      const requiredErrors = await screen.findAllByText(/Field is required/i);
      expect(Array.from(requiredErrors).length).toBe(2);
    });
  });

  describe("minLength and maxLength", () => {

    test("Entry cannot be less than two characters", async () => {
      render(<TwoSimpleInputs />);
      const minLengthErrorRegex = /Must be at least 2 characters/i;
      await userEvent.type(screen.getByLabelText(/First Name/i), 'A');
      await userEvent.type(screen.getByLabelText(/Last Name/i), 'B');
      fireEvent.submit(screen.getByTestId("form"));
      const minLengthErrors = await screen.findAllByText(minLengthErrorRegex);
      expect(Array.from(minLengthErrors).length).toBe(2);
    });

    test("Entry cannot be more than twenty characters", async () => {
      render(<TwoSimpleInputs/>);
      const longEntry = "abcdefghijklmnopqrstu";
      const maxLengthErrorRegex = /Must be at most 20 characters/i;
      await userEvent.type(screen.getByLabelText(/First Name/i), longEntry);
      await userEvent.type(screen.getByLabelText(/Last Name/i), longEntry);
      fireEvent.submit(screen.getByTestId("form"));
      const maxLengthErrors = await screen.findAllByText(maxLengthErrorRegex);
      expect(Array.from(maxLengthErrors).length).toBe(2);
    });
  });
});