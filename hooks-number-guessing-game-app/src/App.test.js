import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { guessResultText } from './javascript/guess_result_text';
import { GuessResultParagraph } from './javascript/guess_result_paragraph';
import { GuessNumberForm } from "./javascript/guess_number_form";
import App from './App';

describe('App Tests', function() {
  let results, expected;
  describe('Guess Result Text', function () {
    let number, guesses;
      beforeEach(() => {
        number = 50;
        guesses = [25, 75, 50];
      });
    test('yields appropriate text on comparisons', function() {
      results = [];
      expected = [
        'Your guess is less than the number.', 'Your guess is more than the number.',
        'You guessed it!!  It took 7 guesses.'
      ];
      guesses.forEach(guess => {
        results.push(guessResultText(guess, number, 7));
      });
      expect(results).toEqual(expected);
    });
  });

  describe('Guess Result Paragraph', function () {
    test('renders a paragraph with text', function() {
      render(<GuessResultParagraph guessResultMessage={guessResultText(25, 50, 7)}/>);
      let resultParagraph = screen.getByText('Your guess is less than the number.', {selector: 'p'});
      expect(resultParagraph).toBeInTheDocument();
    });
  });

  describe('Guess Number Form', function () {
    let handleOnGuessSubmit, form, inputSubmit;
    beforeEach(() => {
      handleOnGuessSubmit = jest.fn();
      render(<GuessNumberForm
        onGuessSubmit={handleOnGuessSubmit}
        onGameOver={true}
      />);
      form = screen.getByTestId('form');
      inputSubmit = screen.getByTestId('input-submit');
    });
    test('the submit handler should be called', function() {
      fireEvent.submit(form);
      expect(handleOnGuessSubmit).toHaveBeenCalledTimes(1);
    });
  });
});