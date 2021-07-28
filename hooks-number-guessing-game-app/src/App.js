import { guessResultText } from './javascript/guess_result_text'
import { GuessResultParagraph } from "./javascript/guess_result_paragraph";
import { GuessNumberForm } from "./javascript/guess_number_form";
import './App.css';

function App() {
  let [count, randomNumber] = [1, 2];
  function handleGuessSubmit(event) {
    event.preventDefault();
  }
  function newGame(event) {
    event.preventDefault();
  }
  return (
    <main>
      <h1>Number Guess Game</h1>
      <GuessResultParagraph
        guessResultMessage={guessResultText(2, 50, 7)}
      />
      <GuessNumberForm
        onGuessSubmit={handleGuessSubmit}
        onGameOver={count === randomNumber}
      />
      <button onClick={newGame}>New Game</button>
    </main>
  );
}

export default App;
