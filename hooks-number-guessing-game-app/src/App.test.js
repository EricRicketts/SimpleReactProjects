import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { guessResultText } from './javascript/guess_result_text';
import { GuessResultParagraph } from './javascript/guess_result_paragraph';
import { GuessNumberForm } from "./javascript/guess_number_form";
import App from './App';

describe('App Tests', function() {
  let results, expected;
  describe('Guess Result Text', function () {
    test('yields appropriate text on comparisons', function() {
      let number = 50
      let dataArray = [['', 0], [25, 7], [75, 7], [50, 7]]
      results = [];
      expected = [
        'Guess an integer number from 1 to 100 inclusive.', '25 is less than the number.',
        '75 is greater than the number.', 'You guessed it!!  It took 7 guesses.'
      ];
      dataArray.forEach(([guess, count]) => {
        results.push(guessResultText(guess, number, count));
      });
      expect(results).toEqual(expected);
    });
  });

  describe('Guess Result Paragraph', function() {
    test('renders a paragraph with text', function() {
      render(<GuessResultParagraph guessResultMessage={guessResultText(25, 50, 7)}/>);
      let resultParagraph = screen.getByText('25 is less than the number.', {selector: 'p'});
      expect(resultParagraph).toBeInTheDocument();
    });
  });

  describe('Guess Number Form', function() {
    let handleOnGuessSubmit, form, inputSubmit;
    beforeEach(() => {
      handleOnGuessSubmit = jest.fn();
      render(<GuessNumberForm
        onGuessSubmit={handleOnGuessSubmit}
        onGameOver={false}
      />);
      form = screen.getByTestId('form');
      inputSubmit = screen.getByTestId('input-submit');
    });

    test('the submit handler should be called', function() {
      fireEvent.submit(form);
      expect(handleOnGuessSubmit).toHaveBeenCalledTimes(1);
    });

    test('submit button enabled when game not over', function() {
      expected = ['active', false]
      results = [inputSubmit.className, inputSubmit.disabled];
      expect(results).toEqual(expected);
    });

    test('submit button disabled when game over', function() {
      const { container } = render(<GuessNumberForm
        onGuessSubmit={handleOnGuessSubmit}
        onGameOver={true}
      />);
      inputSubmit = container.querySelector('input[type=submit]')
      expected = ['inactive', true];
      results = [inputSubmit.className, inputSubmit.disabled];
      expect(results).toEqual(expected);
    });
  });

  describe('Game Initialization', function() {
    let inputGuess, inputSubmit, resultsParagraph;
    beforeEach(() => {
      render(<App/>);
      inputGuess = screen.getByTestId('guess');
      inputSubmit = screen.getByTestId('input-submit');
      resultsParagraph = screen.getByTestId('results');
    });

    test('there should be no entry in the guess field', function() {
      expect(inputGuess).toHaveValue('');
    });

    test('the guess button should be enabled', function() {
      expected = ['active', false];
      results = [inputSubmit.className, inputSubmit.disabled];
      expect(results).toEqual(expected);
    });

    test('initial prompt should be present', function() {
      expect(resultsParagraph).toHaveTextContent('Guess an integer number from 1 to 100 inclusive.');
    });
  });

  describe('Game Play Edge Conditions And Full Game', function() {
    let form, inputGuessElement, resultsParagraph, newGameButton;
    beforeEach(() => {
      render(<App />);
      form = screen.getByTestId('form');
      inputGuessElement = screen.getByTestId('guess');
      resultsParagraph = screen.getByTestId('results');
      newGameButton = screen.getByText('New Game');
    });

    afterEach(() => {
      userEvent.click(newGameButton);
    });

    test('start a new game', function() {
      inputGuessElement.value = '50';
      fireEvent.submit(form);
      userEvent.click(newGameButton);
      expected = ['Guess an integer number from 1 to 100 inclusive.', ''];
      results = [resultsParagraph.textContent, inputGuessElement.value];
      expect(results).toEqual(expected);
    });

    test('make an invalid guess', function() {
      inputGuessElement.value = 'ab';
      fireEvent.submit(form);
      expected = ['Guess an integer number from 1 to 100 inclusive.', ''];
      results = [resultsParagraph.textContent, inputGuessElement.value];
      expect(results).toEqual(expected);
    });

    test('play a full game', function () {
      let guess = 50;
      let [maxGuess, minGuess] = [100, 1];
      let gameOverFlag = false;
      let guessCount = 1;
      inputGuessElement.value = guess.toString();
      fireEvent.submit(form);
      while (!gameOverFlag) {
        if (resultsParagraph.textContent.includes('guessed')) {
          gameOverFlag = true;
        } else {
          if (resultsParagraph.textContent.includes('is greater')) {
            maxGuess = guess;
            guess = Math.floor((guess + minGuess) / 2)
          } else {
            minGuess = guess
            guess = Math.floor((guess + maxGuess) / 2);
          }
          guessCount += 1;
          inputGuessElement.value = guess.toString();
          fireEvent.submit(form);
        }
      }
      expect(resultsParagraph.textContent).toBe(`You guessed it!!  It took ${guessCount} guesses.`);
    });
  });
});