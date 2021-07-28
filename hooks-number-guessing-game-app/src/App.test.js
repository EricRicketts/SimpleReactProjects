import { render, screen } from '@testing-library/react';
import { guessResultText } from './javascript/guess_result_text';
import { GuessResultParagraph } from './javascript/guess_result_paragraph';
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
});