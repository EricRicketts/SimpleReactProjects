import React from "react"
import { screen, render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import PassportApplicationForm from "../components/passport_application_form";

describe('Test Suite for entire Form', () => {
  let expected, results;

  describe('Test Form defaults', () => {
    test('should have passport book as default', () => {
      render(<PassportApplicationForm/>);
      expect(screen.getByLabelText(/Passport Book/i)).toBeChecked();
    });

    test('should have regular size as default', () => {
      render(<PassportApplicationForm/>);
      expect(screen.getByLabelText(/Regular Book/i)).toBeChecked();
    });
  });
});
