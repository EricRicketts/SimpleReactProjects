import logo from './logo.svg';
import './App.css';
import React from 'react';

class NumberGuessingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.OnGuessSubmit(event.target.elements.guess.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <input type="text" id="guess" name="guess" maxLength={3} ref={this.input} />
          <input type="submit" value="Guess" />
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
    this.handleOnGuessSubmit = this.handleOnGuessSubmit.bind(this);
  }

  guessResultMessage() {
    const [guess, number] = [Number.parseInt(this.state.guess, 10), this.randomNumber];

    if (guess < number) {
      return `My number is greater than ${guess}`
    } else if (guess > number) {
      return `My number is less than ${guess}`
    } else if (guess === number) {
      return `You guessed it!!  It took ${this.state.count} guesses`
    } else {
      return 'Guess an integer from 1 to 100'
    }
  }

  handleOnGuessSubmit(guess) {
    this.setState({count: this.state.count + 1, guess: guess });
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <main>
        <h1>Number Guessing Game</h1>
        <GuessingStatusParagraph
          GuessResultMessage={this.guessResultMessage()}
        />
        <NumberGuessingForm
          OnGuessSubmit={this.handleOnGuessSubmit}
        />
        <a href="#">New Game</a>
      </main>
    );
  }
}

export default App;
