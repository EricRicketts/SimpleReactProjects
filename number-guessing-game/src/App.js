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

export default App;
