import React from 'react';
import { guessResultText } from './javascript/guess_result_text'
import { randomNumberFromInterval } from "./javascript/random_number_from_interval";
import { GuessResultParagraph } from "./javascript/guess_result_paragraph";
import { GuessNumberForm } from "./javascript/guess_number_form";
import './App.css';

let randomNumber = randomNumberFromInterval(1, 100);
let count = 0;

function App() {
  const [guess, setGuess] = React.useState('');

  function handleGuessSubmit(event) {
    const guessElement = event.target.elements.guess
    const guess = guessElement.value;
    const integerRegex = /^[1-9]\d?[0]?$/;

    if (integerRegex.test(guess)) {
      setGuess(Number.parseInt(guess, 10));
    } else {
      guessElement.value = '';
      setGuess('');
    }
    count += 1;
  }

  function newGame(event) {
    event.preventDefault();
    randomNumber = randomNumberFromInterval(1, 100)
    count = 0;
    event.target.previousElementSibling.reset();
    setGuess('');
  }

  return (
    <main>
      <h1>Number Guess Game</h1>
      <GuessResultParagraph
        guessResultMessage={guessResultText(guess, randomNumber, count)}
      />
      <GuessNumberForm
        onGuessSubmit={handleGuessSubmit}
        onGameOver={guess === randomNumber}
      />
      <button onClick={newGame}>New Game</button>
    </main>
  );
}

export default App;
