import './App.css';

function App() {
  return (
    <main>
      <h1>Number Guessing Game</h1>
      <form>
        <fieldset>
          <label htmlFor="guess">Guess an integer number from 1 to 100</label>
          <input type="text" id="guess"/>
          <input type="submit" value="Guess"/>
        </fieldset>
      </form>
      <a href="#">New Game</a>
    </main>
  );
}

export default App;
