import logo from './logo.svg';
import './App.css';
import React from 'react';

class NumberGuessingForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form action="">
        <fieldset>
          <input type="text" id="guess" maxLength={3}/>
          <input type="submit"/>
        </fieldset>
      </form>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <h1>Number Guessing Game</h1>
        <p>Loading...</p>
        <NumberGuessingForm />
        <a href="#">New Game</a>
      </main>
    );
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
