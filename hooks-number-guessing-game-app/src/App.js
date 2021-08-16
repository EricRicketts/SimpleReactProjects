import React from 'react';
import { GuessResultParagraph } from "./javascript/guess_result_paragraph";
import { GuessNumberForm } from "./javascript/guess_number_form";
import './App.css';

function App() {
  const [guess, setGuess] = React.useState('');


  React.useEffect(() => {
    initializeCount();
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
    initializeCount();
    initializeRandomNumber();
    event.target.previousElementSibling.reset();
    setGuess('');
  }

  return (
    <main>
      <h1>Number Guess Game</h1>
      <GuessResultParagraph
        guessResultMessage={guessResultText(guess, getRandomNumber(), getCount())}
      />
      <GuessNumberForm
        onGuessSubmit={handleGuessSubmit}
        onGameOver={guess === getRandomNumber()}
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
