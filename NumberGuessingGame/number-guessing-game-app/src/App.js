import './App.css';

function Form (props) {
  return (
    <form>
      <fieldset>
        <input type="text" id="guess"/>
        <input type="submit" value="Guess"/>
      </fieldset>
    </form>
  );
}
function App() {
  return (
    <main>
      <h1>Number Guessing Game</h1>
      <p>Guess an integer number from 1 to 100</p>
      <Form className="form-guess"/>
      <a href="#">New Game</a>
    </main>
  );
}

export default App;
