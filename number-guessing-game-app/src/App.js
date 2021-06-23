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
          <input type="text" id="guess" maxLength={3} value={this.props.guess}/>
          <input type="submit" value="Guess"/>
        </fieldset>
      </form>
    )
  }
}

class GuessingStatusParagraph extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>{this.props.GuessResultMessage}</p>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, guess: '' }
    this.randomNumber = this.randomIntFromInterval(1, 100);
    this.guessResultMessage = this.guessResultMessage.bind(this);
  }

  guessResultMessage() {
    const [count, guess, number] = [this.state.count, this.state.guess, this.randomNumber];
    if (count === 0) {
      return 'Guess an integer from 1 to 100';
    } else if (guess < number) {
      return `My number is greater than ${guess}`
    } else if (guess > number) {
      return `My number is less than ${guess}`
    } else {
      return `You guessed it!!  It took ${count} guesses`
    }
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <main>
        <h1>Number Guessing Game</h1>
        <GuessingStatusParagraph GuessResultMessage={this.guessResultMessage()} />
        <NumberGuessingForm
          guess={this.state.guess}
        />
        <a href="#">New Game</a>
      </main>
    );
  }
}

export default App;
