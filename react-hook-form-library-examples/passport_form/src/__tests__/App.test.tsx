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

  describe('Test Passport Types and Sizes', () => {

    test('should be able to select passport card', async () => {
      render(<PassportApplicationForm/>);
      const user = userEvent.setup();
      const passportCard = screen.getByLabelText(/Passport Card/i);
      await user.click(passportCard);
      expect(passportCard).toBeChecked();
    });

    test('should be able to select both passport book and card', async () => {
      render(<PassportApplicationForm/>);
      const user = userEvent.setup();
      const bothBookAndCard = screen.getByLabelText(/Both/i);
      await user.click(bothBookAndCard);
      expect(bothBookAndCard).toBeChecked();
    });

    test('should be able to toggle to select passport book', async () => {
      render(<PassportApplicationForm/>);
      const user = userEvent.setup();
      await user.click(screen.getByLabelText(/Passport Card/i));
      await user.click(screen.getByLabelText(/Passport Book/i));
      const passportBook = screen.getByLabelText(/Passport Book/i)
      expect(passportBook).toBeChecked();
    });

    test('should be able to select large size book', async () => {
      render(<PassportApplicationForm/>);
      const user = userEvent.setup();
      await user.click(screen.getByLabelText(/Large Book/i));
      const largeSizeBook = screen.getByLabelText(/Large Book/i)
      expect(largeSizeBook).toBeChecked();
    });

    test('should be able to toggle to regular size book', async () => {
      render(<PassportApplicationForm/>);
      const user = userEvent.setup();
      await user.click(screen.getByLabelText(/Large Book/i));
      await user.click(screen.getByLabelText(/Regular Book/i));
      const regularSizeBook = screen.getByLabelText(/Regular Book/i)
      expect(regularSizeBook).toBeChecked();
    });
  });
});
