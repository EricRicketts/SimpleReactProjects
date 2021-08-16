export function GuessResultParagraph( { guess, answer, count } ) {
  let guessResultText;
  switch (true) {
    case guess === '': {
      guessResultText = 'Guess an integer number from 1 to 100 inclusive.'
      break;
    }
    case guess < answer: {
      guessResultText = `${guess} is less than the number.`;
      break;
    }
    case guess > answer: {
      guessResultText = `${guess} is greater than the number.`;
      break;
    }
    default: {
      guessResultText = `You guessed it!!  It took ${count} guesses.`;
    }
  }
  return (<p data-testid="results">{guessResultText}</p>);
}