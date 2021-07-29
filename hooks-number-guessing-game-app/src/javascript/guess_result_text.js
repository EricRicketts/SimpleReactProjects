export function guessResultText(guess, number, count) {
  let guessResultText;
  switch (true) {
    case guess === '' && count === 0: {
      guessResultText = 'Guess an integer number from 1 to 100 inclusive.'
      break;
    }
    case guess < number: {
      guessResultText = `${guess} is less than the number.`;
      break;
    }
    case guess > number: {
      guessResultText = `${guess} is greater than the number.`;
      break;
    }
    default: {
      guessResultText = `You guessed it!!  It took ${count} guesses.`;
    }
  }
  return guessResultText;
}