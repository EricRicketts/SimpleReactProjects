import React from 'react';
import { randomNumberFromInterval } from "./javascript/random_number_from_interval";
import { GuessResultParagraph } from "./javascript/guess_result_paragraph";
import { GuessNumberForm } from "./javascript/guess_number_form";
import './App.css';

function App() {
  const [guess, setGuess] = React.useState('');
  const [count, setCount] = React.useState(0);
  const [answer, setAnswer] = React.useState(randomNumberFromInterval(1, 100));

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
    setCount(count + 1)
  }

  function newGame(event) {
    event.preventDefault();
    setGuess('');
    setCount(0);
    setAnswer(randomNumberFromInterval(1, 100));
    event.target.previousElementSibling.reset();
  }

  return (
    <main>
      <h1>Number Guess Game</h1>
      <GuessResultParagraph
        guess={guess}
        answer={answer}
        count={count}
      />
      <GuessNumberForm
        onGuessSubmit={handleGuessSubmit}
        isGameOver={guess === answer}
      />
      <button onClick={newGame}>New Game</button>
    </main>
  );
}

export default App;
/*
  1.  Add to the state count and answer
  2.  remove the global objects
  3.  change props to 3 for guessResultParagraph instead of one prop
  4.  isGameOver vice onGameOver => means function
  5.  For the game play test move the complex logic into a helper function
*/
