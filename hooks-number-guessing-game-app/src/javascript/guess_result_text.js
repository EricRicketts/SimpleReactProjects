export function guessResultText(guess, number, count) {
  let guessResultText;
  switch (true) {
    case guess < number: {
      guessResultText = 'Your guess is less than the number.';
      break;
    }
    case guess > number: {
      guessResultText = 'Your guess is more than the number.';
      break;
    }
    default: {
      guessResultText = `You guessed it!!  It took ${count} guesses.`;
    }
  }
  return guessResultText;
}