import './App.css';

function App() {
  return (
    <main>
      <h1>Number Guessing Game</h1>
      <p>Guess an integer number from 1 to 100</p>
      <form>
        <fieldset>
          <input type="text" id="guess"/>
          <input type="submit" value="Guess"/>
        </fieldset>
      </form>
      <a href="#">New Game</a>
    </main>
  );
}

export default App;
