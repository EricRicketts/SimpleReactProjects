import {render, screen, fireEvent, getByTestId} from '@testing-library/react';
import * as React from 'react';
import App, {
  GuessingStatusParagraph,
  NumberGuessingForm
} from './App';

describe('App Tests', function () {
  describe('GuessingStatusParagraph Tests', function () {
    let paragraphText;
    beforeEach(() => {
      paragraphText = 'Text for paragraph element';
      render(<GuessingStatusParagraph GuessResultMessage={paragraphText} />);
    });

    test('paragraph should render its text', () => {
      expect(screen.getByText(paragraphText)).toBeInTheDocument();
    });

    test('should be a paragraph element', () => {
      const paragraphElement = screen.getByText(paragraphText);
      expect(Object.getPrototypeOf(paragraphElement).constructor.name).toBe('HTMLParagraphElement');
    });
  });

  describe('NumberGuessingForm Tests', function () {
    let handleOnGuessSubmit, form, inputSubmit;
    beforeEach(() => {
      handleOnGuessSubmit = jest.fn();
      const { getByTestId } = render(
        <NumberGuessingForm
          ref={React.createRef()}
          OnGuessSubmit={handleOnGuessSubmit}
          OnGameOver={false}
        />);
      form = getByTestId('form');
      inputSubmit = getByTestId('input-submit');
    });

    test('the guess handler should be called', () => {
      fireEvent.submit(form);
      expect(handleOnGuessSubmit).toHaveBeenCalledTimes(1);
    });

    test('the button should be active until the game is over', () => {
      expect(inputSubmit).toHaveClass('active');
      expect(inputSubmit).toBeEnabled();
    });

    test('the button should be inactive when the game is over', () => {
      const { container } = render(
        <NumberGuessingForm
          ref={React.createRef()}
          OnGuessSubmit={handleOnGuessSubmit}
          OnGameOver={true}
        />);
      let inputSubmit = container.querySelectorAll('input')[1];
      expect(inputSubmit.className).toBe('inactive');
      expect(inputSubmit).toBeDisabled();
    });
  });

  describe('Number Guessing Game Tests (Top Level Tests)', function () {
    let form, inputGuess, resultsParagraph, button, resultText;
    describe('Game Initialization', function () {
      beforeEach(() => {
        render(<App />);
      });

      test('There should be no entry in the guess field', () => {
        expect(screen.getByTestId('input-text')).toHaveValue('');
      });

      test('The guess button should be enabled', () => {
        expect(screen.getByTestId('input-submit')).toBeEnabled();
      });

      test('initial prompt should be present', () => {
        const p = screen.getByTestId('results');
        expect(p).toHaveTextContent('Guess an integer number starting from 1 going to 100');
      });
    });

    describe('Game Play', function () {
      beforeEach(() => {
        const { getByTestId, getByText } = render(<App />);
        form = getByTestId('form');
        inputGuess = getByTestId('input-text');
        resultsParagraph = getByTestId('results');
        button = getByText('New Game');
      });

      test('Make a single guess', () => {
        const allowedResultTexts = [
          'My number is greater than 50',
          'My number is less than 50',
          'You guessed it!!  It took 1 guesses'
        ];
        inputGuess.value = '50';
        fireEvent.submit(form);
        resultText = resultsParagraph.textContent;
        expect(allowedResultTexts).toContain(resultText);
      });

      test('Start a new game', () => {
        inputGuess.value = '50';
        fireEvent.submit(form);
        fireEvent.click(button);
        resultText = resultsParagraph.textContent;
        expect(resultText).toBe('Guess an integer number starting from 1 going to 100');
      });

      test('Play a full game', () => {
        let guess = 50;
        let [maxGuess, minGuess] = [100, 1];
        let gameOver = false;
        let guessCount = 1;
        inputGuess.value = guess.toString();
        fireEvent.submit(form);
        while (!gameOver) {
          if (resultsParagraph.textContent.includes('You guessed it')) {
            gameOver = true;
          } else {
            if (resultsParagraph.textContent.includes('My number is greater than')) {
              minGuess = guess;
              guess = Math.floor((guess + maxGuess) / 2)
            } else {
              maxGuess = guess
              guess = Math.floor((guess + minGuess) / 2);
            }
            guessCount += 1;
            inputGuess.value = guess.toString();
            fireEvent.submit(form);
          }
        }
        expect(resultsParagraph.textContent).toBe(`You guessed it!!  It took ${guessCount} guesses`);
      });
    });
  });
}); // describe App Tests