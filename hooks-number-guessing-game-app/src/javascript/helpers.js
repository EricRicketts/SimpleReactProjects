import {fireEvent} from "@testing-library/react";

export const playFullGame = (form, inputGuessElement, resultsParagraph, guessCount) => {
  let [guess, maxGuess, minGuess] = [50, 100, 1];
  let gameOverFlag = false;
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
  return guessCount;
}