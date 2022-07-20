import React from "react"
import { screen, render, fireEvent } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import PassportTypesAndSizes from "./components/passport_types_and_sizes";

describe('Test Suite for entire Form', () => {
  let bookButton, cardButton, bothButton, regularButton, largeButton;
  let expected, results;
  
  const setup = (jsx: JSX.Element) => {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    }
  }
  
  describe('Test Passport Types And Sizes', () => {
  
    describe('Test Default Values', () => {
  
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
      
      test('should have the instructional text present', () => {
        render(<PassportTypesAndSizes/>);
        const instructionalTextContent: string = 'Select document(s) for which you are submitting fees:';
        expect(screen.getByText(instructionalTextContent)).toBeInTheDocument();
      });
      
      test('should have invalidation text present', () => {
        render(<PassportTypesAndSizes/>);
        expect(screen.getByText(/not valid for international travel/)).toBeInTheDocument();
      });
      
      test('should have large book comment present', () => {
        render(<PassportTypesAndSizes/>);
        expect(screen.getByText(/for frequent international travelers/)).toBeInTheDocument();
      });
    });
    
    describe('Test Selection of Passport Types', () => {
      
      test('should select passport card', async () => {
        const {user} = setup(<PassportTypesAndSizes/>);
        await user.click(screen.getByLabelText(/Passport Card/));
        bookButton = screen.getByLabelText(/Passport Book/) as HTMLInputElement;
        cardButton = screen.getByLabelText(/Passport Card/) as HTMLInputElement;
        bothButton = screen.getByLabelText(/Both/) as HTMLInputElement;
        
        expected = [false, true, false] as boolean[];
        results = [bookButton.checked, cardButton.checked, bothButton.checked] as boolean[];
        
        expect(bookButton).not.toBeChecked();
        expect(cardButton).toBeChecked();
        expect(bothButton).not.toBeChecked();
        expect(results).toEqual(expected);
      });
  
      test('should select both types', async () => {
        const {user} = setup(<PassportTypesAndSizes/>);
        await user.click(screen.getByLabelText(/Both/));
        bookButton = screen.getByLabelText(/Passport Book/) as HTMLInputElement;
        cardButton = screen.getByLabelText(/Passport Card/) as HTMLInputElement;
        bothButton = screen.getByLabelText(/Both/) as HTMLInputElement;
    
        expected = [false, false, true] as boolean[];
        results = [bookButton.checked, cardButton.checked, bothButton.checked] as boolean[];
    
        expect(bookButton).not.toBeChecked();
        expect(cardButton).not.toBeChecked();
        expect(bothButton).toBeChecked();
        expect(results).toEqual(expected);
      });
  
      test('should select passport book', async () => {
        const {user} = setup(<PassportTypesAndSizes/>);
        await user.click(screen.getByLabelText(/Both/));
        await user.click(screen.getByLabelText(/Passport Book/));
        bookButton = screen.getByLabelText(/Passport Book/) as HTMLInputElement;
        cardButton = screen.getByLabelText(/Passport Card/) as HTMLInputElement;
        bothButton = screen.getByLabelText(/Both/) as HTMLInputElement;
  
        results = [bookButton.checked, cardButton.checked, bothButton.checked] as boolean[];
        expected = [true, false, false] as boolean[];
    
        expect(bookButton).toBeChecked();
        expect(cardButton).not.toBeChecked();
        expect(bothButton).not.toBeChecked();
        expect(results).toEqual(expected);
      });
    });
    
    describe('Test selection of passport book sizes', () => {
     
      test('should select the large book', async () => {
        const {user} = setup(<PassportTypesAndSizes/>);
        [regularButton, largeButton] = [
          screen.getByLabelText(/Regular Book/) as HTMLInputElement,
          screen.getByLabelText(/Large Book/) as HTMLInputElement
        ];
        await user.click(largeButton);
        
        expected = [false,true] as boolean[];
        results = [regularButton.checked, largeButton.checked] as boolean[];
        
        expect(regularButton).not.toBeChecked();
        expect(largeButton).toBeChecked();
        expect(results).toEqual(expected);
      });
  
  
      test('should select the regular book', async () => {
        const {user} = setup(<PassportTypesAndSizes/>);
        [regularButton, largeButton] = [
          screen.getByLabelText(/Regular Book/) as HTMLInputElement,
          screen.getByLabelText(/Large Book/) as HTMLInputElement
        ];
        await user.click(largeButton);
        await user.click(regularButton);
    
        results = [regularButton.checked, largeButton.checked] as boolean[];
        expected = [true, false] as boolean[];
    
        expect(regularButton).toBeChecked();
        expect(largeButton).not.toBeChecked();
        expect(results).toEqual(expected);
      });
    });
  });
});
