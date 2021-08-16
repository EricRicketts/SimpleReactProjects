import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GuessResultParagraph } from './javascript/guess_result_paragraph';
import { GuessNumberForm } from "./javascript/guess_number_form";
// import App from './App';

describe('App Tests', function() {
  let results, expected;
  describe('Guess Result Paragraph', function () {
    let dataArray, answer, guess, count;
    beforeEach(() => {
      answer = 50
      dataArray = [['', 0], [25, 7], [75, 7], [50, 7]]
      expected = [
        'Guess an integer number from 1 to 100 inclusive.', '25 is less than the number.',
        '75 is greater than the number.', 'You guessed it!!  It took 7 guesses.'
      ];
    });

    test('initialization', function() {
      [guess, count] = dataArray[0];
      render(<GuessResultParagraph guess={guess} answer={answer} count={count} />);
      results = screen.getByTestId('results').textContent;
      expect(results).toEqual(expected[0]);
    });

    test('guess less than answer', function() {
      [guess, count] = dataArray[1];
      render(<GuessResultParagraph guess={guess} answer={answer} count={count} />);
      results = screen.getByTestId('results').textContent;
      expect(results).toEqual(expected[1]);
    });

    test('guess greater than answer', function() {
      [guess, count] = dataArray[2];
      render(<GuessResultParagraph guess={guess} answer={answer} count={count} />);
      results = screen.getByTestId('results').textContent;
      expect(results).toEqual(expected[2]);
    });

    test('guess equal to answer', function() {
      [guess, count] = dataArray[3];
      render(<GuessResultParagraph guess={guess} answer={answer} count={count} />);
      results = screen.getByTestId('results').textContent;
      expect(results).toEqual(expected[3]);
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

  describe.skip('Game Initialization', function() {
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

  describe.skip('Game Play Edge Conditions And Full Game', function() {
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