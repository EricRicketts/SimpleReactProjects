import './App.css';
import React from 'react';

class NumberGuessingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guessInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.OnGuessSubmit(event.target.elements.guess.value);
  }

  render() {
    const inputClassName = this.props.OnGameOver ? "inactive" : "active";
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <input type="text" id="guess" name="guess" maxLength={3} ref={this.guessInput} />
          <input type="submit" className={inputClassName}
                 value="Guess" disabled={this.props.OnGameOver}
          />
        </fieldset>
      </form>
    )
  }
}

class GuessingStatusParagraph extends React.Component {
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
    this.newGame = this.newGame.bind(this);
    this.formRef = React.createRef();
  }

  compareGuessToNumber(guess, number) {
    if (guess < number) {
      return `My number is greater than ${guess}`
    } else if (guess > number) {
      return `My number is less than ${guess}`
    } else {
      return `You guessed it!!  It took ${this.state.count} guesses`
    }
  }

  guessResultMessage() {
    const guess = Number.parseInt(this.state.guess, 10);
    const number = this.randomNumber;
    if (Number.isNaN(guess)) {
      if (this.formRef.current) { this.formRef.current.guessInput.current.value = ''; }
      return 'Guess an integer from 1 to 100'
    } else {
      return this.compareGuessToNumber(guess, number);
    }
  }

  handleOnGuessSubmit(guess) {
    // consider doing the user guess conditioning here
    this.setState({
      count: this.state.count + 1,
      guess: Number.parseInt(guess, 10)
      }
    );
  }

  newGame() {
    this.formRef.current.guessInput.current.value = '';
    this.randomNumber = this.randomIntFromInterval(1, 100);
    this.setState({ count: 0, guess: '' });
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const gameOver = this.state.guess === this.randomNumber;
    return (
      <main>
        <h1>Number Guessing Game</h1>
        <GuessingStatusParagraph
          GuessResultMessage={this.guessResultMessage()}
        />
        <NumberGuessingForm
          ref={this.formRef}
          OnGuessSubmit={this.handleOnGuessSubmit}
          OnGameOver={gameOver}
        />
        <button onClick={this.newGame}>New Game</button>
      </main>
    );
  }
}

export default App;
