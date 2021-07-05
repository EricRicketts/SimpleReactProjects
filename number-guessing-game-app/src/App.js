import './App.css';
import React from 'react';

class NumberGuessingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formRef = React.createRef();
  }

  clearInput() {
    this.formRef.current.elements.guess.value = '';
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.OnGuessSubmit(event.target.elements.guess.value);
  }

  render() {
    const inputClassName = this.props.OnGameOver ? "inactive" : "active";
    return (
      <form onSubmit={this.handleSubmit} data-testid="form" ref={this.formRef} >
        <fieldset>
          <input type="text" id="guess" name="guess" maxLength={3}
                 data-testid="guess"
          />
          <input type="submit" className={inputClassName} data-testid="input-submit"
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
      <p data-testid="results">{this.props.GuessResultMessage}</p>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guess: '' }
    this.guessCount = 0;
    this.randomNumber = this.randomIntFromInterval(1, 100);
    this.handleOnGuessSubmit = this.handleOnGuessSubmit.bind(this);
    this.newGame = this.newGame.bind(this);
    this.formComponentRef = React.createRef();
  }

  compareGuessToNumber(guess, number) {
    if (guess < number) {
      return `My number is greater than ${guess}`
    } else if (guess > number) {
      return `My number is less than ${guess}`
    } else {
      return `You guessed it!!  It took ${this.guessCount} guesses`
    }
  }

  guessResultMessage() {
    const [guess, number] = [this.state.guess, this.randomNumber];
    const defaultMessage = 'Guess an integer number starting from 1 going to 100';

    return Number.isInteger(guess) ? this.compareGuessToNumber(guess, number) : defaultMessage;
  }

  handleOnGuessSubmit(guess) {
    const integerRegex = /^[1-9]\d?[0]?$/;
    if (integerRegex.test(guess)) {
      this.setState({ guess: Number.parseInt(guess, 10) });
    } else {
      this.formComponentRef.current.clearInput();
      this.setState({ guess: '' });
    }
    this.guessCount += 1;
  }

  newGame() {
    this.formComponentRef.current.clearInput();
    this.guessCount = 0;
    this.randomNumber = this.randomIntFromInterval(1, 100);
    this.setState({ guess: '' });
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
          ref={this.formComponentRef}
          OnGuessSubmit={this.handleOnGuessSubmit}
          OnGameOver={this.state.guess === this.randomNumber}
        />
        <button onClick={this.newGame}>New Game</button>
      </main>
    );
  }
}

export default App;
export { GuessingStatusParagraph, NumberGuessingForm }