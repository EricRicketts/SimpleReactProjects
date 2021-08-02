import React from 'react';
import { guessResultText } from './javascript/guess_result_text'
import { GuessResultParagraph } from "./javascript/guess_result_paragraph";
import { GuessNumberForm } from "./javascript/guess_number_form";
import { randomNumber, count, incrementCount, resetCount, initializeRandomNumber }
  from "./javascript/count_and_random_number";
import './App.css';

function App() {
  const [guess, setGuess] = React.useState('');
  React.useEffect(() => {
    resetCount();
    initializeRandomNumber();
  }, []);

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
    incrementCount();
  }

  function newGame(event) {
    event.preventDefault();
    resetCount();
    initializeRandomNumber();
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
