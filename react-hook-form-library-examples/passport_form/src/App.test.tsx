import React from "react"
import { screen, render, fireEvent } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import PassportTypesAndSizes from "./components/passport_types_and_sizes";

describe('Test Suite for entire Form', () => {
  const setup = (jsx: JSX.Element) => {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    }
  }
  
  describe('Passport Types And Sizes tests', () => {
    let bookButton, cardButton, bothButton, regularButton, largeButton;
    let expected, results;
    
    test('should have U.S. Passport Book as the default', () => {
      render(<PassportTypesAndSizes/>);
      bookButton = screen.getByLabelText('U.S. Passport Book') as HTMLInputElement;
      cardButton = screen.getByLabelText('U.S. Passport Card') as HTMLInputElement;
      bothButton = screen.getByLabelText('Both') as HTMLInputElement;
      
      expected = [true, false, false] as boolean[];
      results = [bookButton.checked, cardButton.checked, bothButton.checked] as boolean[];
      
      expect(bookButton).toBeChecked();
      expect(cardButton).not.toBeChecked();
      expect(bothButton).not.toBeChecked();
      expect(results).toEqual(expected);
    });
    
    test('should have regular book size as the default', () => {
      render(<PassportTypesAndSizes/>);
      regularButton = screen.getByLabelText(/Regular Book/) as HTMLInputElement;
      largeButton = screen.getByLabelText(/Large Book/) as HTMLInputElement;
      
      expected = [true, false] as boolean[];
      results = [regularButton.checked, largeButton.checked] as boolean[];
      
      expect(regularButton).toBeChecked();
      expect(largeButton).not.toBeChecked();
      expect(results).toEqual(expected);
    });
  });
});
